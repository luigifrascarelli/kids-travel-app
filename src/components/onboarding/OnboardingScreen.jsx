import { useState, useEffect } from "react";
import { useProfile } from "../../hooks/useProfile.js";
import { useLang } from "../../hooks/useLang.js";
import { BLUE } from "../../data/constants.js";
import { t } from "../../data/strings.js";

const KEYBOARD_ROWS = [
  ["A","B","C","D","E","F","G"],
  ["H","I","J","K","L","M","N"],
  ["O","P","Q","R","S","T","U"],
  ["V","W","X","Y","Z","⌫"],
];

export function OnboardingScreen() {
  const { dispatch } = useProfile();
  const { S } = useLang();
  const [screen, setScreen] = useState(0); // 0=name, 1=location, 2=badge
  const [name, setName] = useState("");
  const [badgeVisible, setBadgeVisible] = useState(false);

  const handleKey = (k) => {
    if (k === "⌫") setName(n => n.slice(0, -1));
    else if (name.length < 12) setName(n => n + k);
  };

  const handleNameDone = () => {
    if (name.trim().length === 0) return;
    dispatch({ type: "SET_USER_NAME", name: name.trim() });
    setScreen(1);
  };

  const handleLocationPick = () => setScreen(2);

  const handleFinish = () => {
    setTimeout(() => dispatch({ type: "COMPLETE_ONBOARDING" }), 600);
  };

  useEffect(() => {
    if (screen === 2) setTimeout(() => setBadgeVisible(true), 300);
  }, [screen]);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: `linear-gradient(160deg,${BLUE.deepest},${BLUE.dark} 50%,${BLUE.mid})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", maxWidth: 600, margin: "0 auto", overflow: "hidden" }}>
      {/* Stars bg */}
      {[...Array(24)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2 + (i % 3), height: 2 + (i % 3), borderRadius: "50%", background: "white", opacity: 0.2 + (i % 4) * 0.1, pointerEvents: "none" }} />)}

      {/* Screen 0: Name input */}
      {screen === 0 && (
        <div style={{ width: "100%", padding: "60px 24px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 16, animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275)" }}>👋</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 32, letterSpacing: 2, textAlign: "center", marginBottom: 6 }}>{S.hiThere}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 18, textAlign: "center", marginBottom: 28 }}>{S.whatsYourName}</div>

          {/* Name display */}
          <div style={{ minHeight: 64, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
            {name.length === 0 ? (
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "rgba(255,255,255,0.3)", fontSize: 28, letterSpacing: 4 }}>_ _ _ _</div>
            ) : (
              name.split("").map((l, i) => (
                <div key={i} style={{ width: 44, height: 52, borderRadius: 12, background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 24, color: BLUE.deepest, boxShadow: `0 4px 0 ${BLUE.goldDark}`, animation: "popIn 0.25s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{l}</div>
              ))
            )}
          </div>

          {/* Keyboard */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {KEYBOARD_ROWS.map((row, ri) => (
              <div key={ri} style={{ display: "flex", gap: 6, justifyContent: "center" }}>
                {row.map(k => (
                  <button key={k} onClick={() => handleKey(k)}
                    style={{ flex: k === "⌫" ? 1.4 : 1, maxWidth: k === "⌫" ? 60 : 48, height: 44, borderRadius: 12, background: k === "⌫" ? "rgba(255,100,100,0.3)" : "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.2)", color: "white", fontFamily: "'Luckiest Guy',cursive", fontSize: k === "⌫" ? 18 : 16, cursor: "pointer", transition: "all 0.1s" }}
                    onPointerDown={e => e.currentTarget.style.transform = "scale(0.92)"}
                    onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                    onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >{k}</button>
                ))}
              </div>
            ))}
          </div>

          <button onClick={handleNameDone} disabled={name.trim().length === 0}
            style={{ width: "100%", maxWidth: 320, padding: "18px", background: name.trim().length > 0 ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "rgba(255,255,255,0.15)", border: "none", borderRadius: 20, fontFamily: "'Luckiest Guy',cursive", fontSize: 22, color: name.trim().length > 0 ? BLUE.deepest : "rgba(255,255,255,0.4)", cursor: name.trim().length > 0 ? "pointer" : "default", boxShadow: name.trim().length > 0 ? `0 6px 0 ${BLUE.goldDark}` : "none", transition: "all 0.2s" }}
            onPointerDown={e => name.trim().length > 0 && (e.currentTarget.style.transform = "translateY(4px)")}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.thatsMe}</button>
        </div>
      )}

      {/* Screen 1: Location picker */}
      {screen === 1 && (
        <div style={{ width: "100%", padding: "60px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 2, marginBottom: 8, animation: "fadeIn 0.4s ease" }}>Hi, {name}!</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 28, letterSpacing: 1, textAlign: "center", marginBottom: 8 }}>{S.whereGoing}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 16, marginBottom: 32, textAlign: "center" }}>{S.pickAdventure}</div>

          {/* Montana card */}
          <div onClick={handleLocationPick}
            style={{ width: "100%", maxWidth: 340, background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 28, padding: "28px 24px", border: `3px solid ${BLUE.gold}`, boxShadow: `0 0 40px ${BLUE.gold}40,0 12px 40px rgba(0,0,0,0.3)`, cursor: "pointer", textAlign: "center", animation: "slideUp 0.4s cubic-bezier(0.32,0.72,0,1)", transition: "all 0.15s" }}
            onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
            onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ fontSize: 72, marginBottom: 12 }}>🏔️</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 30, letterSpacing: 2 }}>MONTANA</div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 16, marginTop: 4 }}>Big Sky Country</div>
            <div style={{ marginTop: 16, background: BLUE.gold, borderRadius: 14, padding: "10px 20px", display: "inline-block", fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.deepest }}>{S.letsGo}</div>
          </div>

          {/* Coming soon */}
          <div style={{ marginTop: 16, width: "100%", maxWidth: 340, background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "18px 20px", border: "2px dashed rgba(255,255,255,0.2)", textAlign: "center", opacity: 0.6 }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>✈️ 🏖️ 🌴</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 14 }}>{S.moreAdventures}</div>
          </div>
        </div>
      )}

      {/* Screen 2: Ranger badge */}
      {screen === 2 && (
        <div style={{ width: "100%", padding: "60px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 16, letterSpacing: 3, marginBottom: 16, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s" }}>{S.youAreNowA}</div>
          <div style={{ width: 160, height: 160, borderRadius: "50%", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, boxShadow: `0 0 0 12px ${BLUE.gold}30,0 20px 60px ${BLUE.goldDark}60`, transform: badgeVisible ? "scale(1)" : "scale(0)", transition: "transform 0.6s cubic-bezier(0.175,0.885,0.32,1.275)", marginBottom: 20 }}>🏕️</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 36, letterSpacing: 2, textAlign: "center", opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.3s", marginBottom: 8 }}>{t(S.rangerName, {name: name.toUpperCase()})}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 17, textAlign: "center", lineHeight: 1.6, maxWidth: 280, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.5s", marginBottom: 36 }}>{S.adventureBegins}</div>
          <button onClick={handleFinish}
            style={{ width: "100%", maxWidth: 320, padding: "20px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 20, fontFamily: "'Luckiest Guy',cursive", fontSize: 24, color: BLUE.deepest, cursor: "pointer", boxShadow: `0 8px 0 ${BLUE.goldDark}`, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.7s", letterSpacing: 1 }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(6px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.startExploringBtn}</button>
        </div>
      )}
    </div>
  );
}

