import { BLUE } from "../../data/constants.js";

export function FlagCard({ item, size = 90, isState = false, selected = false, correct = false, wrong = false }) {
  const borderColor = correct ? "#2ECC71" : wrong ? "#E74C3C" : selected ? BLUE.bright : BLUE.light;
  const bg = correct ? "linear-gradient(135deg,#2ECC71,#27AE60)" : wrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "white";
  return (
    <div style={{ width: size, height: size * 0.72, borderRadius: 14, background: bg, border: `3px solid ${borderColor}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: correct ? `0 0 20px #2ECC7160` : wrong ? `0 0 12px #FF6B6B60` : `0 3px 10px rgba(13,45,79,0.10)`, transition: "all 0.2s", overflow: "hidden", position: "relative" }}>
      <div style={{ fontSize: size * 0.38, lineHeight: 1 }}>{item.flag}</div>
      {isState && <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: size * 0.14, color: correct || wrong ? "white" : BLUE.mid, marginTop: 3, letterSpacing: 1 }}>{item.abbr}</div>}
    </div>
  );
}

