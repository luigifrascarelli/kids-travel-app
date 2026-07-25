import { Search, BookOpen, Calculator, Trophy, BookMarked } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { BLUE, getRank } from "../data/constants.js";
import { t } from "../data/strings.js";
import { PACKS } from "../data/packs/index.js";
import { DailyChallengeBanner } from "./DailyChallengeBanner.jsx";

export function HomeScreen() {
  const { state, dispatch } = useProfile();
  const { S } = useLang();
  const { discovered, earnedBadges, discoveryLog } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : null;
  const name = state.userName || "Ranger";
  const quickTabs = [
    { id: "guide",    label: S.guide,    Ic: Search,    color: BLUE.dark,     desc: state.lang === "es" ? "¡Encuentra y descubre!" : "Find & discover!" },
    { id: "spelling", label: S.spelling, Ic: BookOpen,  color: "#7B3FA0",     desc: state.lang === "es" ? "¡Practica palabras!" : "Spell words!" },
    { id: "math",     label: S.math,     Ic: Calculator,color: "#E67E22",     desc: state.lang === "es" ? "¡Cuenta y suma!" : "Count & add!" },
    { id: "missions", label: S.missions, Ic: Trophy,    color: BLUE.goldDark, desc: state.lang === "es" ? "¡Ver insignias!" : "Check badges!" },
    { id: "journal",  label: S.journal,  Ic: BookMarked,color: "#1A6E8F",     desc: state.lang === "es" ? "¡Mi aventura!" : "My adventure!" },
  ];
  return (
    <div style={{ paddingBottom: 110 }}>
      {/* Welcome hero */}
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${rank.color},${rank.color}BB)`, borderRadius: 24, padding: "24px 22px", boxShadow: `0 8px 28px ${rank.color}40` }}>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14, letterSpacing: 1 }}>{tripDay ? t(S.dayOf, {n: tripDay}) : S.welcomeBack}</div>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 32, letterSpacing: 2, lineHeight: 1.1, marginTop: 2 }}>{name.toUpperCase()}!</div>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14, marginTop: 6 }}>{totalFound === 0 ? t(S.tapGuideToStart || "Tap Field Guide to start exploring {pack}!", {pack: pack.name}) : `${totalFound} of ${allItems.length} things found · ${Object.values(earnedBadges).filter(Boolean).length} badges earned`}</div>
        <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 20, height: 10, marginTop: 12, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},white)`, width: `${Math.max((totalFound / allItems.length) * 100, totalFound > 0 ? 3 : 0)}%`, transition: "width 0.7s ease" }} />
        </div>
      </div>

      {/* Daily challenge */}
      <DailyChallengeBanner />

      {/* Adventure picker — switch between packs */}
      <div style={{ padding: "4px 16px 0" }}>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>{S.chooseAdventure || "Choose Your Adventure"}</div>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
          {Object.values(PACKS).map(p => {
            const isActive = p.id === state.selectedPack;
            const pItems = p.zones.flatMap(z => z.items);
            const pFound = pItems.filter(i => discovered[i.id]).length;
            return (
              <div key={p.id}
                onClick={() => p.available && dispatch({ type: "SET_PACK", packId: p.id })}
                style={{ flexShrink: 0, width: 130, background: isActive ? `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})` : "white", borderRadius: 20, padding: "16px 14px", border: isActive ? "none" : `2px solid ${BLUE.light}`, boxShadow: isActive ? `0 6px 20px ${BLUE.dark}40` : "0 3px 12px rgba(13,45,79,0.08)", cursor: p.available ? "pointer" : "default", opacity: p.available ? 1 : 0.55, textAlign: "center", transition: "all 0.15s" }}
                onPointerDown={e => p.available && (e.currentTarget.style.transform = "scale(0.96)")}
                onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ fontSize: 30, marginBottom: 6 }}>{p.emoji}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: isActive ? "white" : BLUE.dark, letterSpacing: 0.5, lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: isActive ? "rgba(255,255,255,0.8)" : "#8BA0B8", marginTop: 3 }}>
                  {p.available ? `${pFound}/${pItems.length} found` : (S.comingSoon || "Coming soon!")}
                </div>
                {isActive && <div style={{ marginTop: 6, background: "rgba(255,255,255,0.2)", borderRadius: 10, padding: "2px 8px", display: "inline-block", fontFamily: "'Patrick Hand',cursive", fontSize: 9, color: "white", letterSpacing: 1 }}>{S.playing || "PLAYING"}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick-launch grid */}
      <div style={{ padding: "4px 16px 0" }}>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>{S.whereNext}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
          {quickTabs.map(t => (
            <div key={t.id} onClick={() => dispatch({ type: "SET_TAB", tab: t.id })}
              style={{ background: "white", borderRadius: 20, padding: "18px 16px", border: `2px solid ${t.color}25`, boxShadow: `0 4px 16px ${t.color}15`, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.15s" }}
              onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
              onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
              onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${t.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><t.Ic size={24} color={t.color} strokeWidth={1.8} /></div>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 14, color: t.color, letterSpacing: 0.5 }}>{t.label}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: "#8BA0B8" }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent finds */}
      {discoveryLog.length > 0 && (
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>{S.recentFinds}</div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
            {[...discoveryLog].reverse().slice(0, 8).map((entry, i) => {
              const item = allItems.find(it => it.id === entry.itemId); if (!item) return null;
              const zone = pack.zones.find(z => z.items.some(it => it.id === item.id));
              return (
                <div key={i} onClick={() => dispatch({ type: "SET_TAB", tab: "guide" })}
                  style={{ flexShrink: 0, width: 80, background: "white", borderRadius: 18, padding: "12px 8px", border: `2px solid ${zone.accent}40`, textAlign: "center", cursor: "pointer", boxShadow: `0 3px 12px ${zone.accent}20` }}>
                  <div style={{ fontSize: 32 }}>{item.emoji}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: zone.color, marginTop: 4, lineHeight: 1.2 }}>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

