import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { BLUE } from "../data/constants.js";
import { WORLD_FOODS } from "../data/gamesData.js";
import { FlagGame } from "./games/FlagGame.jsx";
import { FoodsGame } from "./games/FoodsGame.jsx";

export function GamesTab() {
  const { state } = useProfile();
  const { S } = useLang();
  const [activeGame, setActiveGame] = useState(null); // { type, mode }
  const gp = state.gamesProgress || {};

  if (activeGame?.type === "flags") return <FlagGame mode={activeGame.mode} onBack={() => setActiveGame(null)} />;
  if (activeGame?.type === "foods") return <FoodsGame mode={activeGame.mode} onBack={() => setActiveGame(null)} />;

  const flagsUsDone = Object.keys(gp.flagsUs || {}).length;
  const flagsWorldDone = Object.keys(gp.flagsWorld || {}).length;
  const foodsSpotDone = Object.keys(gp.foodsSpot || {}).length;
  const foodsMatchDone = Object.keys(gp.foodsMatch || {}).length;

  const gameCards = [
    {
      type: "flags", mode: "us",
      title: S.usStates,   titleEs: S.usStatesEs,
      icon: "🇺🇸",
      desc: S.learnAllStates,
      descEs: S.learnAllStatesEs,
      done: flagsUsDone, total: 50,
      color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky,
    },
    {
      type: "flags", mode: "world",
      title: S.worldFlags, titleEs: S.worldFlagsEs,
      icon: "🌍",
      desc: S.flagsAllContinents,
      descEs: S.flagsAllContinentsEs,
      done: flagsWorldDone, total: 30,
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
    },
    {
      type: "foods", mode: "spot",
      title: S.spotFood, titleEs: S.spotFoodEs,
      icon: "🍽️",
      desc: S.spotFoodDesc,
      descEs: S.spotFoodDescEs,
      done: foodsSpotDone, total: WORLD_FOODS.length,
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
    },
    {
      type: "foods", mode: "match",
      title: S.matchFood, titleEs: S.matchFoodEs,
      icon: "🗺️",
      desc: S.matchFoodDesc,
      descEs: S.matchFoodDescEs,
      done: foodsMatchDone, total: WORLD_FOODS.length,
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
    },
  ];

  return (
    <div style={{ paddingBottom: 110 }}>
      {/* Header */}
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 24, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${BLUE.dark}40` }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Gamepad2 size={30} color={BLUE.gold} />
        </div>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 1 }}>{S.worldGames}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{S.juegosDelMundo}</div>
        </div>
      </div>

      {/* Game cards */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {gameCards.map(g => (
          <div key={`${g.type}-${g.mode}`} onClick={() => setActiveGame({ type: g.type, mode: g.mode })}
            style={{ background: "white", borderRadius: 22, padding: "20px 18px", border: `2px solid ${g.accent}30`, boxShadow: `0 6px 20px ${g.accent}18`, cursor: "pointer", transition: "all 0.15s" }}
            onPointerDown={e => e.currentTarget.style.transform = "scale(0.98)"}
            onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
            onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg,${g.bg},white)`, border: `2px solid ${g.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>{g.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: g.color, letterSpacing: 0.5 }}>{g.title}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: g.accent, letterSpacing: 0.3 }}>{g.titleEs}</div>
              </div>
              <div style={{ background: `${g.accent}18`, borderRadius: 12, padding: "6px 12px", textAlign: "center", flexShrink: 0 }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: g.color, lineHeight: 1 }}>{g.done}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: g.accent }}>of {g.total}</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: "#6B8BAA", marginBottom: 10 }}>
              {g.desc} <span style={{ color: g.accent }}>· {g.descEs}</span>
            </div>
            <div style={{ background: `${g.accent}18`, borderRadius: 20, height: 10, overflow: "hidden", border: `1px solid ${g.accent}30` }}>
              <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${g.accent},${g.color})`, width: `${Math.max((g.done / g.total) * 100, g.done > 0 ? 3 : 0)}%`, transition: "width 0.6s ease" }} />
            </div>
            {g.done > 0 && <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: g.color, marginTop: 6, textAlign: "right" }}>{Math.round((g.done / g.total) * 100)}% complete ⭐</div>}
          </div>
        ))}
      </div>

      {/* Fun fact banner */}
      <div style={{ margin: "16px 16px 0", background: `linear-gradient(135deg,${BLUE.gold}15,${BLUE.gold}30)`, borderRadius: 18, padding: "14px 18px", border: `2px solid ${BLUE.gold}40`, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 28, flexShrink: 0 }}>🌎</span>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.goldDark, fontSize: 13, letterSpacing: 1, marginBottom: 4 }}>{S.didYouKnow}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.dark, fontSize: 14, lineHeight: 1.5 }}>{S.worldFact}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "#8B4513", fontSize: 13, lineHeight: 1.4, marginTop: 4 }}>{S.worldFactEs}</div>
        </div>
      </div>
    </div>
  );
}

