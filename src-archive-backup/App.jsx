import { useState, useRef } from "react";
import { Award } from "lucide-react";
import { AppProvider } from "./context/AppContext.jsx";
import { useProfile } from "./hooks/useProfile.js";
import { useLang } from "./hooks/useLang.js";
import { BLUE, getRank } from "./data/constants.js";
import { PACKS } from "./data/packs/index.js";

import { OnboardingScreen } from "./components/onboarding/OnboardingScreen.jsx";
import { LangToggle, MuteButton, BottomNav } from "./components/shared/NavControls.jsx";
import { BadgeCelebration } from "./components/shared/Celebration.jsx";
import { InstallPromptBanner } from "./components/shared/InstallPromptBanner.jsx";
import { SWUpdateBanner } from "./components/shared/SWUpdateBanner.jsx";
import { ParentModeSheet } from "./components/ParentModeSheet.jsx";
import { HomeScreen } from "./components/HomeScreen.jsx";
import { FieldGuideTab } from "./components/FieldGuideTab.jsx";
import { MissionsTab } from "./components/MissionsTab.jsx";
import { SpellingTab } from "./components/SpellingTab.jsx";
import { MathTab } from "./components/MathTab.jsx";
import { GamesTab } from "./components/GamesTab.jsx";
import { JournalTab } from "./components/JournalTab.jsx";

function AppShell() {
  const { state, dispatch } = useProfile();
  const { activeTab, celebrating, onboardingDone } = state;
  const { S } = useLang();   // Phase 7: was missing, caused shellS crash
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(state.discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const name = state.userName || "GABI";
  const [showParent, setShowParent] = useState(false);

  // Long-press header name to unlock parent mode
  const longPressTimer = useRef(null);
  const handleHeaderPressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setShowParent(true);
    }, 2000);
  };
  const handleHeaderPressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  // Show onboarding if not done
  if (!onboardingDone) return <OnboardingScreen />;

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(170deg,${BLUE.sky},#F0F8FF 40%,white)`, fontFamily: "'Patrick Hand',cursive", maxWidth: 600, margin: "0 auto" }}>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Patrick+Hand&display=swap" rel="stylesheet" />
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg,${BLUE.deepest},${BLUE.dark} 60%,${BLUE.mid})`, padding: "20px 20px 16px", position: "sticky", top: 0, zIndex: 50, boxShadow: `0 6px 24px ${BLUE.deepest}50` }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.bright},${BLUE.gold},${BLUE.bright})` }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div
            onClick={() => dispatch({ type: "SET_TAB", tab: "home" })}
            onPointerDown={handleHeaderPressStart}
            onPointerUp={handleHeaderPressEnd}
            onPointerLeave={handleHeaderPressEnd}
            style={{ cursor: "pointer" }}
          >
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 44, lineHeight: 0.95, letterSpacing: 4, background: `linear-gradient(135deg,#FFFFFF 20%,${BLUE.gold} 60%,#FFD97D)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.35))" }}>
              {name.toUpperCase()}
            </div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 14, letterSpacing: 3, textShadow: "1px 2px 0 rgba(0,0,0,0.25)", lineHeight: 1, marginTop: 2 }}>{S.subtitle}</div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 11, letterSpacing: 1, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}><Award size={11} color={BLUE.light} />{rank.label}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LangToggle />
            <MuteButton />
            <div style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 18, padding: "8px 14px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 26, lineHeight: 1 }}>{totalFound}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 10 }}>of {allItems.length}</div>
            </div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 20, height: 12, overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)" }}>
          <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.bright})`, width: `${Math.max((totalFound / allItems.length) * 100, totalFound > 0 ? 2 : 0)}%`, transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)", boxShadow: `0 0 12px ${BLUE.bright}80` }} />
        </div>
      </div>
      {/* Tab content */}
      {activeTab === "home"     && <HomeScreen />}
      {activeTab === "guide"    && <FieldGuideTab />}
      {activeTab === "missions" && <MissionsTab />}
      {activeTab === "spelling" && <SpellingTab />}
      {activeTab === "math"     && <MathTab />}
      {activeTab === "games"    && <GamesTab />}
      {activeTab === "journal"  && <JournalTab />}
      <BottomNav />
      {celebrating && <BadgeCelebration badge={celebrating} onDone={() => dispatch({ type: "DISMISS_CELEBRATION" })} />}
      {showParent && <ParentModeSheet onClose={() => setShowParent(false)} />}
      <InstallPromptBanner />
      <SWUpdateBanner />
      <style>{`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes popIn{from{transform:scale(0.5);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes shake{0%,100%{transform:translateX(0) scale(0.93)}25%{transform:translateX(-8px) scale(0.93)}75%{transform:translateX(8px) scale(0.93)}}
        @media print{.no-print{display:none!important}#adventure-card{border-radius:0!important}}
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
