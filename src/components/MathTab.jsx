import { useState, useEffect, useMemo, useCallback } from "react";
import { Volume2, Calculator, Zap, Target, Lock } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { useLang } from "../hooks/useLang.js";
import { useAudio } from "../hooks/useAudio.js";
import { BLUE } from "../data/constants.js";
import { t } from "../data/strings.js";
import { MONTANA_PACK } from "../data/packs/montana.js";
import { shuffle } from "../utils/helpers.js";

export const PRAISE = ["Amazing! 🌟", "You got it! 🎉", "Wow! 🔥", "Super smart! ⭐", "Brilliant! 💫", "Correct! 🏅"];
export function genProblem(mode, emojiPool, total) {
  const emoji = emojiPool[Math.floor(Math.random() * emojiPool.length)];
  if (mode === "count") { const a = 1 + Math.floor(Math.random() * 6); return { mode, emoji, a, b: 0, answer: a, display: Array(a).fill(emoji) }; }
  if (mode === "add") { const max = total >= 15 ? 10 : total >= 8 ? 8 : 6; const a = 1 + Math.floor(Math.random() * (max - 1)); const b = 1 + Math.floor(Math.random() * (max - a)); return { mode, emoji, a, b, answer: a + b, display: null }; }
  const a = 2 + Math.floor(Math.random() * 6); const b = 1 + Math.floor(Math.random() * (a - 1)); return { mode, emoji, a, b, answer: a - b, display: null };
}
export function makeChoices(answer) {
  const wrong = new Set();
  while (wrong.size < 3) { const n = Math.max(0, Math.min(10, answer + Math.floor(Math.random() * 5) - 2)); if (n !== answer) wrong.add(n); }
  return shuffle([answer, ...wrong]);
}
export function MathTab() {
  const { state, dispatch } = useApp();
  const audio = useAudio();
  const { S } = useLang();
  const { mathStats, discovered } = state;
  const totalCorrect = mathStats.total || 0;
  const streak = mathStats.streak || 0;
  const modesUnlocked = totalCorrect >= 10 ? ["count", "add", "subtract"] : totalCorrect >= 5 ? ["count", "add"] : ["count"];
  const [selMode, setSelMode] = useState("count");
  const mode = modesUnlocked.includes(selMode) ? selMode : "count";
  const emojiPool = useMemo(() => { const found = MONTANA_PACK.zones.flatMap(z => z.items).filter(i => discovered[i.id]).map(i => i.emoji); return found.length >= 3 ? found : ["⭐", "🌟", "💫", "✨", "🌈"]; }, [discovered]);
  const [problem, setProblem] = useState(() => genProblem(mode, emojiPool, totalCorrect));
  const [choices, setChoices] = useState(() => makeChoices(problem.answer));
  const [phase, setPhase] = useState("question");
  const [wrongAns, setWrongAns] = useState(null);
  const [praiseIdx, setPraiseIdx] = useState(0);
  const [bouncing, setBouncing] = useState(false);
  const next = useCallback((m) => { const p = genProblem(m || mode, emojiPool, totalCorrect); setProblem(p); setChoices(makeChoices(p.answer)); setPhase("question"); setWrongAns(null); setBouncing(false); setTimeout(() => audio.speakMathPrompt(p), 300); }, [mode, emojiPool, totalCorrect]);
  useEffect(() => { audio.speakMathPrompt(problem); }, []);
  const handleModeSwitch = (m) => { setSelMode(m); const p = genProblem(m, emojiPool, totalCorrect); setProblem(p); setChoices(makeChoices(p.answer)); setPhase("question"); setWrongAns(null); setBouncing(false); setTimeout(() => audio.speakMathPrompt(p), 300); };
  const handleAnswer = (n) => {
    if (phase !== "question") return;
    if (n === problem.answer) { setPhase("correct"); setBouncing(true); const idx = Math.floor(Math.random() * PRAISE.length); setPraiseIdx(idx); audio.speakCorrect(PRAISE[idx]); dispatch({ type: "MATH_CORRECT" }); setTimeout(() => next(), 2000); }
    else { setWrongAns(n); audio.speakTryAgain(); dispatch({ type: "MATH_WRONG" }); setTimeout(() => { setPhase("question"); setWrongAns(null); }, 900); }
  };
  const mathStars = Math.floor(totalCorrect / 5);
  const nextStarIn = 5 - (totalCorrect % 5);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(170deg,#FEF9EC,#FFF8E1 50%,white)", paddingBottom: 110 }}>
      <div style={{ display: "flex", gap: 10, padding: "14px 16px 10px" }}>
        {[{ label: S.correct, value: totalCorrect, bg: "white", color: BLUE.dark, border: BLUE.light }, { label: streak >= 3 ? `${streak} ${S.streak}!` : S.streak, value: streak >= 3 ? "🔥" : streak, bg: streak >= 3 ? "linear-gradient(135deg,#FF6B35,#E84A1E)" : "white", color: streak >= 3 ? "white" : BLUE.dark, border: streak >= 3 ? "transparent" : BLUE.light }, { label: mathStars > 0 ? S.mathStars : t(S.toStar, {n: nextStarIn}), value: mathStars > 0 ? `⭐×${mathStars}` : "0", bg: mathStars > 0 ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "white", color: mathStars > 0 ? "white" : BLUE.dark, border: mathStars > 0 ? "transparent" : BLUE.light }].map((s, i) => (
          <div key={i} style={{ flex: 1, background: s.bg, borderRadius: 16, padding: "10px 14px", textAlign: "center", border: `2px solid ${s.border}`, boxShadow: "0 2px 10px rgba(13,45,79,0.07)" }}>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 22, lineHeight: 1, color: s.color }}>{s.value}</div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: typeof s.bg === "string" && s.bg !== "white" ? "rgba(255,255,255,0.85)" : BLUE.mid }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, padding: "0 16px 16px" }}>
        {[{ id: "count", label: S.countIt, at: 0 }, { id: "add", label: S.addItUp, at: 5 }, { id: "subtract", label: S.takeAway, at: 10 }].map(m => {
          const unlocked = modesUnlocked.includes(m.id); const active = mode === m.id;
          return (
            <button key={m.id} onClick={() => unlocked && handleModeSwitch(m.id)} style={{ flex: 1, padding: "10px 6px", background: active ? `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})` : unlocked ? "white" : "#F0F5FA", border: active ? "none" : `2px solid ${unlocked ? BLUE.light : "#E0EAF2"}`, borderRadius: 16, cursor: unlocked ? "pointer" : "default", transition: "all 0.2s", boxShadow: active ? `0 4px 14px ${BLUE.dark}40` : "none", opacity: unlocked ? 1 : 0.55 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>{unlocked ? (m.id === "count" ? <Calculator size={20} color={active ? "white" : BLUE.dark} /> : m.id === "add" ? <Zap size={20} color={active ? "white" : BLUE.dark} /> : <Target size={20} color={active ? "white" : BLUE.dark} />) : <Lock size={20} color="#A0B0C0" />}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 10, color: active ? "white" : unlocked ? BLUE.dark : "#A0B0C0", marginTop: 3 }}>{m.label}</div>
              {!unlocked && <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 9, color: "#A0B0C0" }}>{m.at - totalCorrect} more</div>}
            </button>
          );
        })}
      </div>
      <div style={{ margin: "0 16px", background: "white", borderRadius: 28, padding: "24px 20px", boxShadow: "0 8px 32px rgba(13,45,79,0.1)", border: `2px solid ${BLUE.pale}`, minHeight: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ textAlign: "center", minHeight: 44, position: "relative", width: "100%" }}>
          <button onClick={() => audio.speakMathPrompt(problem)} style={{ position: "absolute", top: 0, right: 0, width: 38, height: 38, borderRadius: "50%", background: BLUE.pale, border: `2px solid ${BLUE.light}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Volume2 size={18} color={BLUE.mid} /></button>
          {phase === "correct" && <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 26, color: "#2ECC71", animation: "popIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{PRAISE[praiseIdx]}</div>}
          {phase === "question" && <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: BLUE.dark, paddingRight: 44 }}>{mode === "count" ? S.howManyDoYouSee : mode === "add" ? S.addThem : S.howManyLeft}</div>}
        </div>
        {mode === "count" && <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", padding: "8px 0" }}>{problem.display.map((e, i) => <div key={i} style={{ fontSize: 48, lineHeight: 1, animation: bouncing ? `emojiPop 0.4s ${i * 0.06}s both` : "none" }}>{e}</div>)}</div>}
        {mode === "add" && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ background: BLUE.pale, borderRadius: 16, padding: "12px 14px", display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 140, border: `2px solid ${BLUE.light}` }}>{Array(problem.a).fill(problem.emoji).map((e, i) => <div key={i} style={{ fontSize: 36, lineHeight: 1, animation: bouncing ? `emojiPop 0.4s ${i * 0.05}s both` : "none" }}>{e}</div>)}</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 40, color: BLUE.mid }}>+</div>
            <div style={{ background: "#FEF9EC", borderRadius: 16, padding: "12px 14px", display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 140, border: `2px solid ${BLUE.gold}40` }}>{Array(problem.b).fill(problem.emoji).map((e, i) => <div key={i} style={{ fontSize: 36, lineHeight: 1, animation: bouncing ? `emojiPop 0.4s ${(problem.a + i) * 0.05}s both` : "none" }}>{e}</div>)}</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 40, color: BLUE.dark }}>=</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 48, color: phase === "correct" ? "#2ECC71" : BLUE.pale, transition: "color 0.3s", minWidth: 48, textAlign: "center" }}>{phase === "correct" ? problem.answer : "?"}</div>
          </div>
        )}
        {mode === "subtract" && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ background: BLUE.pale, borderRadius: 16, padding: "12px 14px", display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 200, border: `2px solid ${BLUE.light}` }}>
              {Array(problem.a).fill(problem.emoji).map((e, i) => { const crossed = i >= problem.answer; return <div key={i} style={{ fontSize: 36, lineHeight: 1, position: "relative", opacity: crossed ? 0.35 : 1, animation: bouncing && !crossed ? `emojiPop 0.4s ${i * 0.06}s both` : "none" }}>{e}{crossed && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: "#E74C3C", fontWeight: 900, pointerEvents: "none" }}>✕</div>}</div>; })}
            </div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 40, color: BLUE.dark }}>=</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 48, color: phase === "correct" ? "#2ECC71" : BLUE.pale, transition: "color 0.3s", minWidth: 48, textAlign: "center" }}>{phase === "correct" ? problem.answer : "?"}</div>
          </div>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, width: "100%" }}>
          {choices.map(n => { const isC = phase === "correct" && n === problem.answer; const isW = wrongAns === n; return (<div key={n} onClick={() => handleAnswer(n)} style={{ borderRadius: 18, padding: "18px 0", textAlign: "center", cursor: phase === "question" ? "pointer" : "default", background: isC ? "linear-gradient(135deg,#2ECC71,#27AE60)" : isW ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : `linear-gradient(135deg,${BLUE.pale},white)`, border: isC ? "3px solid #7AE8A0" : isW ? "3px solid #FF6B6B" : `3px solid ${BLUE.light}`, boxShadow: isC ? "0 0 20px #2ECC7160" : isW ? "0 0 12px #FF6B6B60" : `0 4px 0 ${BLUE.light}`, transform: isW ? "scale(0.93)" : "scale(1)", transition: "all 0.15s", animation: isW ? "shake 0.4s ease" : isC ? "popIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)" : "none" }}><div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 32, lineHeight: 1, color: isC || isW ? "white" : BLUE.dark }}>{n}</div></div>); })}
        </div>
      </div>
      <style>{`@keyframes emojiPop{0%{transform:scale(0.5) translateY(10px);opacity:0}60%{transform:scale(1.2) translateY(-4px);opacity:1}100%{transform:scale(1) translateY(0);opacity:1}}`}</style>
    </div>
  );
}

