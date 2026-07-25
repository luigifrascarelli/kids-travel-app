import { useState } from "react";
import { useLang } from "../hooks/useLang.js";
import { BLUE } from "../data/constants.js";
import { US_STATES_GEO, US_MAP_VIEWBOX } from "../data/usaStatesGeo.js";

// Generic, reusable tappable US states map. Any pack with mapType "usaStates"
// can use this — it only needs geometry (US_STATES_GEO) plus the pack's own
// zones array (one zone per state id) to know what's built vs. coming soon.
export function UsaStatesMap({ pack, discovered, activeStateId, onSelectState }) {
  const { S } = useLang();
  const [hoverId, setHoverId] = useState(null);
  const zoneById = Object.fromEntries(pack.zones.map(z => [z.id, z]));

  const statusFor = (stateId) => {
    const zone = zoneById[stateId];
    if (!zone || !zone.items || zone.items.length === 0) return "comingSoon";
    const found = zone.items.filter(i => discovered[i.id]).length;
    if (found === 0) return "available";
    if (found === zone.items.length) return "complete";
    return "inProgress";
  };

  const fillFor = (stateId, status) => {
    if (stateId === activeStateId) return BLUE.gold;
    if (status === "comingSoon") return "rgba(255,255,255,0.06)";
    if (status === "complete") return BLUE.bright;
    if (status === "inProgress") return "rgba(59,158,232,0.5)";
    return "rgba(255,255,255,0.18)";
  };

  const strokeFor = (stateId, status) => {
    if (stateId === activeStateId) return BLUE.goldDark;
    if (status === "comingSoon") return "rgba(255,255,255,0.15)";
    return "rgba(13,45,79,0.6)";
  };

  return (
    <div style={{ margin: "0 16px", background: `linear-gradient(145deg,${BLUE.deepest},${BLUE.dark})`, borderRadius: 24, padding: "16px 12px", boxShadow: `0 8px 32px ${BLUE.deepest}60`, position: "relative", overflow: "hidden" }}>
      {[...Array(16)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 41 + 9) % 100}%`, top: `${(i * 57 + 5) % 100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.25 + (i % 3) * 0.15 }} />)}
      <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 13, letterSpacing: 2, textAlign: "center", marginBottom: 10, position: "relative" }}>{pack.emoji} {pack.name.toUpperCase()}</div>
      <svg viewBox={US_MAP_VIEWBOX} style={{ width: "100%", display: "block", position: "relative" }}>
        {US_STATES_GEO.map(st => {
          const status = statusFor(st.id);
          const tappable = status !== "comingSoon";
          return (
            <path
              key={st.id}
              d={st.d}
              fill={fillFor(st.id, status)}
              stroke={strokeFor(st.id, status)}
              strokeWidth={st.id === activeStateId ? 2 : 0.75}
              style={{ cursor: tappable ? "pointer" : "default", transition: "fill 0.2s, stroke 0.2s", opacity: hoverId === st.id && tappable ? 0.85 : 1 }}
              onClick={() => tappable && onSelectState(st.id)}
              onPointerEnter={() => setHoverId(st.id)}
              onPointerLeave={() => setHoverId(null)}
            />
          );
        })}
      </svg>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 10, flexWrap: "wrap", position: "relative" }}>
        <LegendDot color={BLUE.bright} label={S.stateComplete || "Complete"} />
        <LegendDot color="rgba(59,158,232,0.5)" label={S.stateInProgress || "In progress"} />
        <LegendDot color="rgba(255,255,255,0.18)" label={S.stateAvailable || "Not started"} />
        <LegendDot color="rgba(255,255,255,0.06)" outline label={S.stateComingSoon || "Coming soon"} />
      </div>
    </div>
  );
}

function LegendDot({ color, label, outline }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <div style={{ width: 10, height: 10, borderRadius: 3, background: color, border: outline ? "1px solid rgba(255,255,255,0.25)" : "none" }} />
      <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.75)", fontSize: 11 }}>{label}</div>
    </div>
  );
}
