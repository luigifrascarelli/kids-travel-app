import { useState, useEffect, useMemo } from "react";
import { X, Repeat2, BookOpen, Star, Play } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { useAudio } from "../hooks/useAudio.js";
import { BLUE } from "../data/constants.js";
import { t } from "../data/strings.js";
import { PACKS } from "../data/packs/index.js";
import { shuffle, getDecoys, li } from "../utils/helpers.js";
import { ItemCharacter } from "./icons/CharacterArt.jsx";

export function SpellingGame({ item, onClose }) {
  const { state, dispatch } = useProfile();
  const { S, lang } = useLang();
  const { speakWord, speakCorrect, speakTryAgain } = useAudio();
  const pack = PACKS[state.selectedPack];
  const choices = useMemo(() => shuffle([item, ...getDecoys(item, pack)]), [item.id]);
  const [phase, setPhase] = useState("question");
  const [revealIdx, setRevealIdx] = useState(-1);
  const [wrongId, setWrongId] = useState(null);
  const letters = item.letters.split("");
  const displayName = li(item, "name", lang);
  useEffect(() => { speakWord(item.letters); }, []);
  const handleChoice = (choice) => {
    if (phase !== "question") return;
    if (choice.id === item.id) {
      setPhase("correct"); speakCorrect(`Yes! ${displayName}! Let's spell it!`);
      let idx = 0; const iv = setInterval(() => { setRevealIdx(i => i + 1); idx++; if (idx >= letters.length) clearInterval(iv); }, 380);
    } else { setWrongId(choice.id); speakTryAgain(); setTimeout(() => setWrongId(null), 900); }
  };
  const handleDone = () => { dispatch({ type: "COMPLETE_SPELLING", itemId: item.id }); onClose(); };
  return (
    <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 200, background: `linear-gradient(160deg,${BLUE.deepest},${BLUE.dark} 60%,${BLUE.mid})`, display: "flex", flexDirection: "column", animation: "fadeIn 0.25s ease", maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 12px" }}>
        <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color="white" /></button>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 18, letterSpacing: 2 }}>{S.wordSpotter}</div>
        <button onClick={() => speakWord(item.letters)} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Repeat2 size={18} color="white" /></button>
      </div>
      <div style={{ textAlign: "center", padding: "8px 20px 16px" }}>
        {phase === "question" && (<><div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 26, letterSpacing: 1 }}>{S.whichOneIs}</div><div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 36, letterSpacing: 2, textShadow: `0 0 20px ${BLUE.gold}80` }}>{item.letters}?</div><div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 15, marginTop: 4 }}>Tap the right picture!</div></>)}
        {phase === "correct" && <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#7AE8A0", fontSize: 28, animation: "popIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{S.youGotItSpell}</div>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, padding: "0 16px", flex: 1, alignContent: "center" }}>
        {choices.map(choice => {
          const isCorrect = choice.id === item.id; const isWrong = wrongId === choice.id; const done = phase === "correct";
          return (
            <div key={choice.id} onClick={() => !done && handleChoice(choice)} style={{ borderRadius: 20, background: done && isCorrect ? "linear-gradient(135deg,#2ECC71,#27AE60)" : isWrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "rgba(255,255,255,0.12)", border: done && isCorrect ? "3px solid #7AE8A0" : isWrong ? "3px solid #FF6B6B" : "3px solid rgba(255,255,255,0.2)", padding: "20px 10px 16px", textAlign: "center", cursor: done ? "default" : "pointer", opacity: done && !isCorrect ? 0.35 : 1, transition: "all 0.2s", animation: isWrong ? "shake 0.4s ease" : done && isCorrect ? "popIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275)" : "none", boxShadow: done && isCorrect ? "0 0 28px #2ECC7180" : "none" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><ItemCharacter itemId={choice.id} emoji={choice.emoji} size={64} /></div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 13, lineHeight: 1.2 }}>{li(choice, "name", lang)}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "20px 20px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {letters.map((l, i) => <div key={i} style={{ width: 44, height: 52, borderRadius: 12, background: i <= revealIdx ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "rgba(255,255,255,0.1)", border: i <= revealIdx ? `2px solid ${BLUE.gold}` : "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 22, color: i <= revealIdx ? BLUE.deepest : "transparent", transform: i === revealIdx ? "scale(1.2)" : "scale(1)", transition: "all 0.25s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{l}</div>)}
        </div>
        {revealIdx >= letters.length - 1 && (
          <button onClick={handleDone} style={{ background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, color: BLUE.deepest, border: "none", borderRadius: 20, padding: "14px 40px", cursor: "pointer", fontFamily: "'Luckiest Guy',cursive", fontSize: 20, letterSpacing: 1, boxShadow: `0 6px 0 ${BLUE.goldDark}`, animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(5px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.awesome}</button>
        )}
      </div>
    </div>
  );
}

export function SpellingTab() {
  const { state } = useProfile();
  const { S, lang } = useLang();
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const [activeGame, setActiveGame] = useState(null);
  const mainCategory = pack.name;
  const [activeCategory, setActiveCategory] = useState(mainCategory);
  useEffect(() => { setActiveCategory(pack.name); }, [pack.id]);
  const bonusCategories = Object.keys(pack.bonusCategoryMeta || {});
  const allCategories = [mainCategory, ...bonusCategories];
  const diffLabel = (word) => { if (word.length <= 3) return { label: "Easy", color: "#2ECC71", bg: "#E8FAF0" }; if (word.length <= 4) return { label: "Medium", color: BLUE.mid, bg: BLUE.pale }; return { label: "Hard", color: "#9B59B6", bg: "#F5EEF8" }; };
  const activeItems = activeCategory === mainCategory ? allItems : pack.bonusWords.filter(w => w.category === activeCategory);
  const catMeta = activeCategory === mainCategory ? { emoji: pack.emoji, color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky } : pack.bonusCategoryMeta[activeCategory];
  if (activeGame) return <SpellingGame item={activeGame} onClose={() => setActiveGame(null)} />;
  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 24, padding: "18px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${BLUE.dark}40` }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><BookOpen size={30} color={BLUE.gold} /></div>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 20, letterSpacing: 1 }}>{S.wordSpotter}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{t(S.wordsToLearn, {n: allItems.length + pack.bonusWords.length})}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, padding: "0 16px 12px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {allCategories.map(cat => {
          const meta = cat === mainCategory ? { emoji: pack.emoji, color: BLUE.dark, accent: BLUE.bright } : pack.bonusCategoryMeta[cat];
          const isActive = activeCategory === cat;
          const count = cat === mainCategory ? allItems.length : pack.bonusWords.filter(w => w.category === cat).length;
          return (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ flexShrink: 0, background: isActive ? `linear-gradient(135deg,${meta.color},${meta.accent})` : "white", border: `2px solid ${isActive ? "transparent" : meta.accent + "60"}`, borderRadius: 16, padding: "8px 16px", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6, boxShadow: isActive ? `0 4px 14px ${meta.accent}40` : "0 2px 8px rgba(0,0,0,0.06)" }}>
              <span style={{ fontSize: 18 }}>{meta.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: isActive ? "white" : meta.color }}>{cat}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: isActive ? "rgba(255,255,255,0.8)" : "#8BA0B8" }}>{count} words</div>
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "0 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {activeItems.map(item => {
            const diff = diffLabel(item.letters); const stars = state.spellingStars[item.id] || 0; const found = !!state.discovered[item.id];
            return (
              <div key={item.id} onClick={() => setActiveGame(item)}
                style={{ background: "white", borderRadius: 18, padding: "14px 16px", border: `2px solid ${stars > 0 ? catMeta.accent + "60" : BLUE.light}`, boxShadow: stars > 0 ? `0 4px 16px ${catMeta.accent}20` : "0 2px 8px rgba(13,45,79,0.06)", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.15s" }}
                onPointerDown={e => e.currentTarget.style.transform = "scale(0.98)"}
                onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg,${catMeta.bg},white)`, border: `2px solid ${catMeta.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, position: "relative" }}>
                  {item.emoji}
                  {activeCategory === mainCategory && found && <div style={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "#2ECC71", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "white" }}>✓</div>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.dark, marginBottom: 4 }}>{li(item, "name", lang)}</div>
                  <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
                    {item.letters.split("").map((l, i) => <div key={i} style={{ width: 24, height: 26, borderRadius: 6, background: BLUE.pale, border: `1.5px solid ${BLUE.light}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: BLUE.dark }}>{l}</div>)}
                    <div style={{ marginLeft: 2, background: diff.bg, borderRadius: 8, padding: "2px 8px", fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: diff.color, fontWeight: 700 }}>{diff.label}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flexShrink: 0 }}>
                  {stars > 0 ? <Star size={22} color={BLUE.goldDark} fill={BLUE.goldDark} /> : <Play size={22} color={BLUE.mid} />}
                  <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: BLUE.mid }}>{stars > 0 ? `×${stars}` : "Play!"}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  MATH TAB                                                    ║
// ╚══════════════════════════════════════════════════════════════╝
const PRAISE = ["Amazing! 🌟", "You got it! 🎉", "Wow! 🔥", "Super smart! ⭐", "Brilliant! 💫", "Correct! 🏅"];

