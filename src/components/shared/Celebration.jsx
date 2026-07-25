import { useLang } from "../../hooks/useLang.js";
import { BLUE } from "../../data/constants.js";

export function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({ id: i, x: Math.random() * 100, delay: Math.random() * 0.8, dur: 1.8 + Math.random() * 1.2, size: 6 + Math.random() * 10, color: [BLUE.gold, BLUE.bright, "#FF6B9D", "#7AE8A0", "white", BLUE.light, "#FFB347"][i % 7], rotate: Math.random() * 360, drift: (Math.random() - 0.5) * 120 }));
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 299, pointerEvents: "none", overflow: "hidden" }}>
      {pieces.map(p => <div key={p.id} style={{ position: "absolute", left: `${p.x}%`, top: -20, width: p.size, height: p.size, background: p.color, borderRadius: p.id % 3 === 0 ? "50%" : p.id % 3 === 1 ? "2px" : "0", animation: `confettiFall ${p.dur}s ${p.delay}s ease-in forwards`, transform: `rotate(${p.rotate}deg)`, "--drift": `${p.drift}px` }} />)}
      <style>{`@keyframes confettiFall{0%{transform:translateY(0) translateX(0) rotate(0deg);opacity:1}100%{transform:translateY(110vh) translateX(var(--drift)) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}

export function BadgeCelebration({ badge, onDone }) {
  const { S } = useLang();
  return (
    <>{<Confetti />}
      <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,45,79,0.75)", backdropFilter: "blur(8px)", animation: "fadeIn 0.3s ease" }}>
        <div style={{ background: "white", borderRadius: 32, padding: "44px 36px 36px", textAlign: "center", maxWidth: 340, width: "88%", boxShadow: `0 40px 100px rgba(0,0,0,0.4),0 0 0 6px ${badge.accent}60`, animation: "badgeSlam 0.5s cubic-bezier(0.175,0.885,0.32,1.275)", position: "relative" }}>
          <div style={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`, borderRadius: 30, padding: "6px 24px", fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: "white", letterSpacing: 2, border: "3px solid white", whiteSpace: "nowrap" }}>{S.badgeUnlocked}</div>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg,${badge.accent},${badge.color})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 56, boxShadow: `0 0 0 8px ${badge.accent}30,0 12px 40px ${badge.color}60`, animation: "badgePulse 1.5s ease-in-out infinite" }}>{badge.emoji}</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 28, color: badge.color, letterSpacing: 1, marginBottom: 8 }}>{badge.name}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 16, color: BLUE.dark, lineHeight: 1.5, marginBottom: 24, background: BLUE.sky, borderRadius: 14, padding: "12px 16px" }}>{badge.desc}</div>
          <button onClick={onDone} style={{ width: "100%", background: `linear-gradient(135deg,${badge.accent},${badge.color})`, color: "white", border: "none", borderRadius: 20, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 22, letterSpacing: 1, cursor: "pointer", boxShadow: `0 6px 0 ${badge.color}` }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(5px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.woohoo}</button>
        </div>
      </div>
      <style>{`@keyframes badgeSlam{from{transform:scale(0.1) rotate(-15deg);opacity:0}70%{transform:scale(1.08) rotate(2deg)}to{transform:scale(1) rotate(0deg);opacity:1}}@keyframes badgePulse{0%,100%{box-shadow:0 0 0 8px ${badge.accent}30,0 12px 40px ${badge.color}60}50%{box-shadow:0 0 0 16px ${badge.accent}18,0 12px 40px ${badge.color}80}}`}</style>
    </>
  );
}

