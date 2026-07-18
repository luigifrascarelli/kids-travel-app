import { Volume2, VolumeX, Home, Search, Trophy, BookOpen, Calculator, Gamepad2, BookMarked } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
import { useLang } from "../../hooks/useLang.js";
import { BLUE } from "../../data/constants.js";

export function LangToggle() {
  const { state, dispatch } = useApp();
  const lang = state.lang || "en";
  return (
    <button
      onClick={() => dispatch({ type: "SET_LANG", lang: lang === "en" ? "es" : "en" })}
      style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 20, padding: "4px 10px", cursor: "pointer", gap: 4, height: 36 }}
    >
      <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: lang === "en" ? "white" : "rgba(255,255,255,0.45)", letterSpacing: 0.5, transition: "color 0.2s" }}>EN</span>
      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>|</span>
      <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: lang === "es" ? "white" : "rgba(255,255,255,0.45)", letterSpacing: 0.5, transition: "color 0.2s" }}>ES</span>
    </button>
  );
}

export function MuteButton() {
  const { state, dispatch } = useApp();
  return (
    <button onClick={() => dispatch({ type: "SET_MUTED", muted: !state.muted })} title={state.muted ? "Unmute" : "Mute"}
      style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
    >{state.muted ? <VolumeX size={16} color="white" /> : <Volume2 size={16} color="white" />}</button>
  );
}

export function BottomNav() {
  const { state, dispatch } = useApp();
  const { activeTab, newBadgeCount } = state;
  const { S } = useLang();
  const tabs = [
    { id: "home",     label: S.home,     Icon: Home },
    { id: "guide",    label: S.guide,    Icon: Search },
    { id: "missions", label: S.missions, Icon: Trophy },
    { id: "spelling", label: S.spelling, Icon: BookOpen },
    { id: "math",     label: S.math,     Icon: Calculator },
    { id: "games",    label: S.games,    Icon: Gamepad2 },
    { id: "journal",  label: S.journal,  Icon: BookMarked },
  ];
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90, background: "white", borderTop: `2px solid ${BLUE.pale}`, display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch", boxShadow: "0 -4px 24px rgba(13,45,79,0.12)", maxWidth: 600, margin: "0 auto", paddingBottom: "env(safe-area-inset-bottom)", scrollbarWidth: "none" }}>
      {tabs.map(tab => {
        const active = activeTab === tab.id;
        const showBadge = tab.id === "missions" && newBadgeCount > 0;
        return (
          <button key={tab.id} onClick={() => dispatch({ type: "SET_TAB", tab: tab.id })} style={{ flex: 1, padding: "10px 2px 8px", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, position: "relative" }}>
            {active && <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 3, background: `linear-gradient(90deg,${BLUE.mid},${BLUE.bright})`, borderRadius: "0 0 4px 4px" }} />}
            <div style={{ position: "relative" }}>
              <tab.Icon size={22} color={active ? BLUE.mid : "#8BA0B8"} strokeWidth={active ? 2.5 : 1.8} />
              {showBadge && <div style={{ position: "absolute", top: -5, right: -8, background: "#FF4757", color: "white", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, border: "2px solid white" }}>{newBadgeCount}</div>}
            </div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 9, letterSpacing: 0.3, color: active ? BLUE.mid : "#8BA0B8" }}>{tab.label}</div>
          </button>
        );
      })}
    </div>
  );
}

