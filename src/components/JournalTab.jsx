import { useState, useMemo } from "react";
import { Star, MapPin, BookMarked, Search, Trophy, Calculator, BookOpen, Share2, Award } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { BLUE, RANKS, getRank } from "../data/constants.js";
import { t } from "../data/strings.js";
import { PACKS } from "../data/packs/index.js";
import { li } from "../utils/helpers.js";
import { ProgressExportSheet } from "./ProgressExportSheet.jsx";

export function MontanaMap() {
  const { state } = useProfile();
  const { S } = useLang();
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const foundItems = allItems.filter(i => state.discovered[i.id]);
  const pct = foundItems.length / allItems.length;
  const tier = pct === 0 ? 0 : pct < 0.2 ? 1 : pct < 0.5 ? 2 : pct < 0.8 ? 3 : 4;
  const fills = ["rgba(168,212,245,0.15)", "rgba(59,158,232,0.25)", "rgba(59,158,232,0.45)", "rgba(244,185,66,0.55)", "rgba(244,185,66,0.85)"];
  const glowColor = tier >= 3 ? BLUE.gold : BLUE.bright;
  const pinPos = [{ x: 38, y: 28 }, { x: 62, y: 22 }, { x: 82, y: 35 }, { x: 24, y: 55 }, { x: 50, y: 48 }, { x: 74, y: 60 }, { x: 34, y: 72 }, { x: 60, y: 75 }, { x: 85, y: 68 }, { x: 18, y: 38 }, { x: 44, y: 68 }, { x: 70, y: 42 }];
  return (
    <div style={{ margin: "0 16px", background: `linear-gradient(145deg,${BLUE.deepest},${BLUE.dark})`, borderRadius: 24, padding: "16px", boxShadow: `0 8px 32px ${BLUE.deepest}60`, position: "relative", overflow: "hidden" }}>
      {[...Array(20)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.3 + (i % 3) * 0.2 }} />)}
      <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 13, letterSpacing: 2, textAlign: "center", marginBottom: 10 }}>MONTANA — BIG SKY COUNTRY</div>
      <svg viewBox="0 0 400 240" style={{ width: "100%", display: "block" }}>
        <defs><filter id="mapglow"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <path d="M 20,20 L 360,20 L 380,30 L 390,60 L 385,120 L 370,140 L 340,145 L 320,160 L 290,165 L 260,175 L 230,178 L 200,180 L 170,178 L 130,175 L 100,170 L 70,165 L 45,158 L 20,150 L 15,100 L 18,60 Z"
          fill={fills[tier]} stroke={glowColor} strokeWidth={tier > 0 ? 2.5 : 1.5} filter={tier > 0 ? "url(#mapglow)" : "none"} style={{ transition: "all 1s ease" }} />
        {[{ x: 68, y: 55, l: "Glacier" }, { x: 180, y: 45, l: "Great Falls" }, { x: 310, y: 55, l: "Billings" }, { x: 90, y: 120, l: "Missoula" }, { x: 240, y: 130, l: "Big Sky" }].map((r, i) =>
          <text key={i} x={r.x} y={r.y} fontFamily="Patrick Hand,cursive" fontSize="11" fill="rgba(255,255,255,0.5)" textAnchor="middle">{r.l}</text>)}
        {foundItems.slice(0, 12).map((item, i) => { const p = pinPos[i]; const px = (p.x / 100) * 380 + 10; const py = (p.y / 100) * 200 + 10; return (<g key={item.id} style={{ animation: `pinDrop 0.5s ${i * 0.08}s both` }}><circle cx={px} cy={py} r="14" fill={BLUE.dark} stroke={BLUE.gold} strokeWidth="2" filter="url(#mapglow)" opacity="0.92" /><text x={px} y={py + 6} textAnchor="middle" fontSize="14">{item.emoji}</text></g>); })}
        {foundItems.length > 12 && <text x="370" y="160" fontFamily="Luckiest Guy,cursive" fontSize="11" fill={BLUE.gold} textAnchor="middle">+{foundItems.length - 12}</text>}
      </svg>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 13 }}>{t(S.foundOnMap, {found: foundItems.length, total: allItems.length})}</div>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 14 }}>{Math.round(pct * 100)}%</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, height: 8, marginTop: 8, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.bright},${BLUE.gold})`, width: `${Math.max(pct * 100, foundItems.length > 0 ? 3 : 0)}%`, transition: "width 0.8s ease" }} />
      </div>
      <style>{`@keyframes pinDrop{0%{transform:translateY(-30px);opacity:0}60%{transform:translateY(4px);opacity:1}100%{transform:translateY(0);opacity:1}}`}</style>
    </div>
  );
}

export function JournalTab() {
  const { state } = useProfile();
  const { S, lang } = useLang();
  const { discovered, discoveryLog, earnedBadges, mathStats, spellingStars } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const [view, setView] = useState("stats");
  const [showExport, setShowExport] = useState(false);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const totalBadges = Object.values(earnedBadges).filter(Boolean).length;
  const totalMath = mathStats.total || 0;
  const totalSpelling = Object.values(spellingStars).filter(v => v > 0).length;
  const rank = getRank(totalFound);
  const name = state.userName || "Ranger";
  const dayGroups = useMemo(() => {
    const groups = {};
    discoveryLog.forEach(entry => { const key = new Date(entry.ts).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }); if (!groups[key]) groups[key] = []; groups[key].push(entry); });
    return Object.entries(groups);
  }, [discoveryLog]);
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : null;
  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ display: "flex", margin: "14px 16px 12px", background: BLUE.pale, borderRadius: 20, padding: 4, gap: 0 }}>
        {[{ id: "stats", label: S.myStats, Icon: Star }, { id: "map", label: S.map, Icon: MapPin }, { id: "timeline", label: S.timeline, Icon: BookMarked }].map(v => (
          <button key={v.id} onClick={() => setView(v.id)} style={{ flex: 1, padding: "10px 4px", background: view === v.id ? `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})` : "transparent", border: "none", borderRadius: 16, cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <v.Icon size={18} color={view === v.id ? "white" : BLUE.mid} strokeWidth={view === v.id ? 2.5 : 1.8} />
            <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 10, letterSpacing: 0.5, color: view === v.id ? "white" : BLUE.mid }}>{v.label}</span>
          </button>
        ))}
      </div>
      {view === "stats" && (
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: `linear-gradient(135deg,${rank.color},${rank.color}CC)`, borderRadius: 24, padding: "22px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${rank.color}50` }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "3px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Award size={38} color="white" /></div>
            <div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: 1 }}>{t(S.isA, {name: name.toUpperCase()})}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 28, letterSpacing: 1, lineHeight: 1.1 }}>{rank.label}!</div>
              {tripDay && <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4 }}>{t(S.dayOfAdventure, {n: tripDay})}</div>}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { Ic: Search, label: S.thingsFound, value: totalFound, max: allItems.length, color: BLUE.mid },
              { Ic: Trophy, label: S.badgesEarned, value: totalBadges, max: pack.badges.length, color: BLUE.goldDark },
              { Ic: Calculator, label: S.mathCorrect, value: totalMath, max: null, color: "#E67E22" },
              { Ic: BookOpen, label: S.wordsPracticed, value: totalSpelling, max: null, color: "#9B59B6" },
            ].map(s => (
              <div key={s.label} style={{ background: "white", borderRadius: 20, padding: "16px 14px", border: `2px solid ${s.color}25`, boxShadow: `0 4px 16px ${s.color}15` }}>
                <div style={{ marginBottom: 6 }}><s.Ic size={26} color={s.color} strokeWidth={1.8} /></div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 28, color: s.color, lineHeight: 1 }}>{s.value}{s.max ? <span style={{ fontSize: 14, color: "#AAB8C8" }}>/{s.max}</span> : ""}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: "#8BA0B8", marginTop: 2 }}>{s.label}</div>
                {s.max && <div style={{ background: `${s.color}18`, borderRadius: 10, height: 6, marginTop: 8, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${s.color},${s.color}99)`, width: `${(s.value / s.max) * 100}%`, transition: "width 0.8s ease" }} /></div>}
              </div>
            ))}
          </div>

          {/* Export button */}
          <button onClick={() => setShowExport(true)} style={{ width: "100%", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, color: "white", border: "none", borderRadius: 18, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: `0 6px 0 ${BLUE.dark}` }}>
            <Share2 size={20} color="white" /> {S.myAdventureReport}
          </button>

          {(() => { const nextRank = RANKS.find(r => r.min > totalFound); if (!nextRank) return null; const needed = nextRank.min - totalFound; return (<div style={{ background: BLUE.pale, borderRadius: 18, padding: "14px 18px", border: `2px dashed ${BLUE.light}`, display: "flex", alignItems: "center", gap: 12 }}><span style={{ fontSize: 30 }}>{nextRank.emoji}</span><div><div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 15 }}>Almost {nextRank.label}!</div><div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.mid, fontSize: 13 }}>Find {needed} more thing{needed > 1 ? "s" : ""} to level up!</div></div></div>); })()}
        </div>
      )}
      {view === "map" && (
        <div>
          <div style={{ padding: "0 16px 14px", fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: BLUE.mid, textAlign: "center" }}>{S.everyTimeYouFind}</div>
          <MontanaMap />
          <div style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
            {pack.zones.map(z => {
              const found = z.items.filter(i => discovered[i.id]).length;
              return (
                <div key={z.id} style={{ background: "white", borderRadius: 16, padding: "12px 16px", border: `2px solid ${z.accent}30`, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{z.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: z.color }}>{z.label}</div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: z.accent, fontWeight: 700 }}>{found}/{z.items.length}</div>
                    </div>
                    <div style={{ background: `${z.accent}18`, borderRadius: 10, height: 8, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${z.accent},${z.color})`, width: `${(found / z.items.length) * 100}%`, transition: "width 0.8s ease", minWidth: found > 0 ? 8 : 0 }} /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {view === "timeline" && (
        <div style={{ padding: "0 16px" }}>
          {dayGroups.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 24px", background: BLUE.pale, borderRadius: 20, border: `2px dashed ${BLUE.light}`, marginTop: 8 }}>
              <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}><BookMarked size={48} color={BLUE.light} /></div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 20, marginBottom: 8 }}>{S.journalEmpty}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.mid, fontSize: 15, lineHeight: 1.5 }}>{S.journalEmptyDesc}</div>
            </div>
          ) : dayGroups.map(([dateStr, entries]) => (
            <div key={dateStr} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0 12px" }}>
                <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg,${BLUE.bright},transparent)`, borderRadius: 2 }} />
                <div style={{ background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 20, padding: "5px 16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: "white", letterSpacing: 1, whiteSpace: "nowrap" }}>{dateStr}</div>
                <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg,transparent,${BLUE.bright})`, borderRadius: 2 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {entries.map((entry, ei) => {
                  const item = allItems.find(i => i.id === entry.itemId); if (!item) return null;
                  const zone = pack.zones.find(z => z.items.some(i => i.id === item.id));
                  const time = new Date(entry.ts).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
                  return (
                    <div key={ei} style={{ background: "white", borderRadius: 18, padding: "14px 16px", border: `2px solid ${zone.accent}30`, display: "flex", alignItems: "center", gap: 14, boxShadow: `0 3px 12px ${zone.accent}18` }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg,${zone.bg},white)`, border: `2px solid ${zone.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{item.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.dark }}>{li(item, "name", lang)}</div>
                        <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: zone.color, background: `${zone.accent}15`, borderRadius: 8, padding: "2px 8px", display: "inline-block", marginTop: 3 }}>{zone.emoji} {zone.label}</div>
                      </div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: "#8BA0B8", textAlign: "right", flexShrink: 0 }}>
                        <div>{time}</div>
                        <div style={{ marginTop: 4, color: BLUE.gold, fontWeight: 700 }}>Found!</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      {showExport && <ProgressExportSheet onClose={() => setShowExport(false)} />}
    </div>
  );
}

