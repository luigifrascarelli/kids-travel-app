import { X, Share2, Printer } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { BLUE, getRank } from "../data/constants.js";
import { t } from "../data/strings.js";
import { PACKS } from "../data/packs/index.js";

export function ProgressExportSheet({ onClose }) {
  const { state } = useProfile();
  const { S } = useLang();
  const { discovered, earnedBadges, mathStats, spellingStars, discoveryLog, dailyChallenge } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const totalBadges = Object.values(earnedBadges).filter(Boolean).length;
  const rank = getRank(totalFound);
  const name = state.userName || "Ranger";
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : 1;

  const shareText = `🏕️ ${name}'s Montana Adventure Report!\n\n` +
    `📍 Day ${tripDay} of the trip\n` +
    `🏅 Rank: ${rank.label}\n` +
    `🔍 Found: ${totalFound} of ${allItems.length} things\n` +
    `🏆 Badges: ${totalBadges} earned\n` +
    `🔢 Math: ${mathStats.total || 0} correct answers\n` +
    `📖 Spelling: ${Object.values(spellingStars).filter(v => v > 0).length} words practiced\n\n` +
    `Found: ${allItems.filter(i => discovered[i.id]).map(i => i.name).join(", ")}\n\n` +
    `Made with Gabi Aventuras 🌟`;

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: `${name}'s Montana Adventure`, text: shareText }); }
      catch {}
    } else {
      navigator.clipboard?.writeText(shareText);
      alert("Copied to clipboard!");
    }
  };

  const handlePrint = () => window.print();

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 200, background: "rgba(13,45,79,0.6)", WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 201, background: "white", borderRadius: "28px 28px 0 0", padding: "0 0 48px", maxWidth: 600, margin: "0 auto", animation: "slideUp 0.35s cubic-bezier(0.32,0.72,0,1)", maxHeight: "88vh", overflow: "auto" }}>
        {/* Handle + close */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
          <div style={{ width: 40 }} />
          <div style={{ width: 44, height: 5, borderRadius: 3, background: "#D0DDE8" }} />
          <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: BLUE.pale, border: `2px solid ${BLUE.light}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color={BLUE.mid} /></button>
        </div>

        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 22, letterSpacing: 1, marginBottom: 16, textAlign: "center" }}>{S.adventureReport}</div>

          {/* Summary card — screenshot-friendly */}
          <div id="adventure-card" style={{ background: `linear-gradient(135deg,${BLUE.deepest},${BLUE.dark})`, borderRadius: 24, padding: "24px 20px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
            {[...Array(12)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.25 }} />)}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🏕️</div>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 1 }}>{name.toUpperCase()}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 13 }}>{rank.label} · {t(S.dayN, {n: tripDay})}</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "🔍", label: "Things Found", val: `${totalFound}/${allItems.length}` },
                { icon: "🏆", label: "Badges", val: `${totalBadges}` },
                { icon: "🔢", label: "Math Correct", val: `${mathStats.total || 0}` },
                { icon: "📖", label: "Words Practiced", val: `${Object.values(spellingStars).filter(v => v > 0).length}` },
              ].map(s => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px 14px" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22 }}>{s.val}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 11 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {totalFound > 0 && (
              <div style={{ marginTop: 12, background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 14px" }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>{S.discoveries}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {allItems.filter(i => discovered[i.id]).map(i => (
                    <span key={i.id} style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "2px 8px" }}>{i.emoji} {i.name}</span>
                  ))}
                </div>
              </div>
            )}
            <div style={{ marginTop: 12, fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center" }}>{S.madeWith}</div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button onClick={handleShare} style={{ width: "100%", background: `linear-gradient(135deg,${BLUE.mid},${BLUE.dark})`, color: "white", border: "none", borderRadius: 18, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Share2 size={20} color="white" /> {S.shareAdventure}
            </button>
            <button onClick={handlePrint} style={{ width: "100%", background: BLUE.pale, color: BLUE.dark, border: `2px solid ${BLUE.light}`, borderRadius: 18, padding: "14px", fontFamily: "'Luckiest Guy',cursive", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Printer size={18} color={BLUE.dark} /> {S.printKeepsake}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

