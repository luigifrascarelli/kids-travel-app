import { Award, Search } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { BLUE, getRank } from "../data/constants.js";
import { PACKS } from "../data/packs/index.js";

export function MissionsTab() {
  const { state } = useProfile();
  const { S } = useLang();
  const { discovered, earnedBadges } = state;
  const pack = PACKS[state.selectedPack];
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const active = pack.badges.filter(b => !earnedBadges[b.id]);
  const earned = pack.badges.filter(b => earnedBadges[b.id]);
  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ margin: "16px 16px 8px", background: `linear-gradient(135deg,${rank.color},${rank.color}CC)`, borderRadius: 24, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${rank.color}40` }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "3px solid rgba(255,255,255,0.4)" }}><Award size={34} color="white" /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: 1 }}>{S.currentRank}</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 24, letterSpacing: 1, lineHeight: 1.1 }}>{rank.label}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 2 }}>{totalFound} of {pack.zones.flatMap(z => z.items).length} · {earned.length} of {pack.badges.length} badges</div>
        </div>
      </div>
      {active.length > 0 && (
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 18, letterSpacing: 1, marginBottom: 10 }}>{S.activeMissions}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {active.map(badge => {
              const { cur, max } = badge.progress(discovered, pack.zones);
              const hint = badge.hint(discovered, pack.zones);
              return (
                <div key={badge.id} style={{ background: "white", borderRadius: 20, border: `2px solid ${badge.accent}40`, padding: "16px 18px", boxShadow: `0 4px 16px ${badge.accent}18` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${badge.accent}30,${badge.color}20)`, border: `3px solid ${badge.accent}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{badge.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 17, color: badge.color }}>{badge.name}</div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: "#6B8BAA" }}>{badge.desc}</div>
                    </div>
                    <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: badge.color, background: `${badge.accent}15`, borderRadius: 12, padding: "4px 10px" }}>{cur}/{max}</div>
                  </div>
                  <div style={{ background: `${badge.accent}18`, borderRadius: 20, height: 12, overflow: "hidden", marginBottom: 10, border: `1px solid ${badge.accent}30` }}>
                    <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${badge.accent},${badge.color})`, width: `${(cur / max) * 100}%`, transition: "width 0.6s ease", minWidth: cur > 0 ? 12 : 0 }} />
                  </div>
                  {cur < max && hint && <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Search size={13} color={badge.color} /><span style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: badge.color }}>{S.lookFor} <strong>{hint}</strong></span></div>}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {earned.length > 0 && (
        <div style={{ padding: "20px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.goldDark, fontSize: 18, letterSpacing: 1, marginBottom: 10 }}>{S.trophyShelf}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
            {earned.map(badge => (
              <div key={badge.id} style={{ background: `linear-gradient(145deg,${badge.accent}18,white)`, borderRadius: 20, border: `3px solid ${badge.accent}`, padding: "18px 14px", textAlign: "center", boxShadow: `0 6px 20px ${badge.accent}30`, position: "relative" }}>
                <div style={{ position: "absolute", top: -10, right: 12, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`, borderRadius: 20, padding: "2px 10px", fontFamily: "'Luckiest Guy',cursive", fontSize: 9, color: "white", letterSpacing: 1 }}>{S.earned}</div>
                <div style={{ fontSize: 44, marginBottom: 6 }}>{badge.emoji}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 14, color: badge.color, letterSpacing: 0.5, lineHeight: 1.2 }}>{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

