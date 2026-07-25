import { useState, useEffect, useMemo } from "react";
import { X, Repeat2 } from "lucide-react";
import { useProfile } from "../../hooks/useProfile.js";
import { useLang } from "../../hooks/useLang.js";
import { useAudio } from "../../hooks/useAudio.js";
import { BLUE } from "../../data/constants.js";
import { shuffle } from "../../utils/helpers.js";
import { US_STATES, WORLD_COUNTRIES } from "../../data/gamesData.js";

export function FlagGame({ mode, onBack }) {
  const { state, dispatch } = useProfile();
  const { S } = useLang();
  const { speakPhrase, speakCorrect, speakTryAgain, muted } = useAudio();
  const items = mode === "us" ? US_STATES : WORLD_COUNTRIES;
  const gameId = mode === "us" ? "flagsUs" : "flagsWorld";
  const progress = state.gamesProgress[gameId] || {};
  const totalDone = Object.keys(progress).length;

  const [current, setCurrent] = useState(() => items[Math.floor(Math.random() * items.length)]);
  const choices = useMemo(() => {
    const others = shuffle(items.filter(i => i.id !== current.id)).slice(0, 2);
    return shuffle([current, ...others]);
  }, [current.id]);
  const [phase, setPhase] = useState("flag"); // flag | name | spell
  const [wrongId, setWrongId] = useState(null);
  const [revealIdx, setRevealIdx] = useState(-1);
  const spellWord = mode === "us" ? current.abbr : current.name.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 8);
  const letters = spellWord.split("");

  useEffect(() => {
    if (phase === "flag") speakPhrase(`Which country has this flag? ${mode === "us" ? "Which state is this?" : ""}`, { pitch: 1.1 });
  }, [current.id, phase]);

  const handleChoice = (choice) => {
    if (phase !== "flag") return;
    if (choice.id === current.id) {
      speakCorrect(`Yes! ${current.name}! ${current.es}!`);
      dispatch({ type: "GAME_CORRECT", gameId, itemId: current.id });
      setPhase("name");
    } else {
      setWrongId(choice.id);
      speakTryAgain();
      setTimeout(() => setWrongId(null), 800);
    }
  };

  const handleNext = () => {
    const remaining = items.filter(i => !progress[i.id] || Math.random() > 0.5);
    const next = remaining[Math.floor(Math.random() * remaining.length)] || items[Math.floor(Math.random() * items.length)];
    setCurrent(next);
    setPhase("flag");
    setRevealIdx(-1);
    setWrongId(null);
  };

  const startSpell = () => {
    setPhase("spell");
    let idx = 0;
    const iv = setInterval(() => { setRevealIdx(i => i + 1); idx++; if (idx >= letters.length) clearInterval(iv); }, 350);
  };

  const continentColor = { "North America": BLUE.dark, "South America": "#2A6B4A", "Europe": "#7B3FA0", "Africa": "#E67E22", "Asia": "#C0392B", "Oceania": "#1A6E8F", "Caribbean": "#2ABBE8" };
  const cColor = mode === "us" ? BLUE.dark : (continentColor[current.continent] || BLUE.dark);

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(160deg,${BLUE.deepest},${BLUE.dark} 60%,${BLUE.mid})`, display: "flex", flexDirection: "column", paddingBottom: 110 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 12px" }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color="white" /></button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 16, letterSpacing: 2 }}>{mode === "us" ? `🇺🇸 ${S.usStates.toUpperCase()}` : `🌍 ${S.worldFlags.toUpperCase()}`}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 12 }}>{totalDone} {S.ofLearned.replace("{n}", items.length)}</div>
        </div>
        <button onClick={() => speakPhrase(mode === "us" ? `${current.name}. In Spanish: ${current.es}` : `${current.name}. En español: ${current.es}`, { pitch: 1.1 })} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Repeat2 size={18} color="white" /></button>
      </div>

      {/* Progress bar */}
      <div style={{ margin: "0 20px 16px", background: "rgba(255,255,255,0.1)", borderRadius: 20, height: 8, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.bright})`, width: `${(totalDone / items.length) * 100}%`, transition: "width 0.5s ease" }} />
      </div>

      {/* FLAG display */}
      <div style={{ textAlign: "center", padding: "0 20px 20px" }}>
        {phase === "flag" && (
          <>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 22, marginBottom: 16 }}>{S.whichFlagIs}</div>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 96, lineHeight: 1, background: "rgba(255,255,255,0.1)", borderRadius: 24, padding: "20px 32px", border: "3px solid rgba(255,255,255,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
              {current.flag}
            </div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 15, marginTop: 12 }}>{S.tapRightName}</div>
          </>
        )}

        {phase === "name" && (
          <div style={{ animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}>
            <div style={{ fontSize: 72, marginBottom: 8 }}>{current.flag}</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 28, letterSpacing: 1 }}>{current.name}</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, marginTop: 4 }}>{current.es}</div>
            {mode === "world" && <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 14, marginTop: 8 }}>{S.capital} {current.capital} · {current.capitalEs}</div>}
            {mode === "us" && <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 14, marginTop: 8 }}>{S.abbreviation} {current.abbr}</div>}
          </div>
        )}

        {phase === "spell" && (
          <div>
            <div style={{ fontSize: 64, marginBottom: 8 }}>{current.flag}</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#7AE8A0", fontSize: 22, marginBottom: 12 }}>Now spell it!</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
              {letters.map((l, i) => <div key={i} style={{ width: 40, height: 46, borderRadius: 10, background: i <= revealIdx ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "rgba(255,255,255,0.1)", border: i <= revealIdx ? `2px solid ${BLUE.gold}` : "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: i <= revealIdx ? BLUE.deepest : "transparent", transform: i === revealIdx ? "scale(1.2)" : "scale(1)", transition: "all 0.25s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{l}</div>)}
            </div>
          </div>
        )}
      </div>

      {/* Choice buttons — flag phase */}
      {phase === "flag" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 20px" }}>
          {choices.map(choice => {
            const isWrong = wrongId === choice.id;
            return (
              <button key={choice.id} onClick={() => handleChoice(choice)}
                style={{ background: isWrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "rgba(255,255,255,0.12)", border: isWrong ? "3px solid #FF9999" : "3px solid rgba(255,255,255,0.25)", borderRadius: 18, padding: "16px 20px", cursor: "pointer", transition: "all 0.15s", animation: isWrong ? "shake 0.4s ease" : "none", display: "flex", alignItems: "center", gap: 14 }}
                onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
                onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 18, flex: 1, textAlign: "left" }}>{choice.name}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{choice.es}</div>
              </button>
            );
          })}
        </div>
      )}

      {/* After correct: spell it or next */}
      {phase === "name" && (
        <div style={{ padding: "0 20px", display: "flex", gap: 10 }}>
          <button onClick={startSpell} style={{ flex: 2, padding: "16px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 18, fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: BLUE.deepest, cursor: "pointer", boxShadow: `0 5px 0 ${BLUE.goldDark}` }}>{S.spellItBtn}</button>
          <button onClick={handleNext} style={{ flex: 1, padding: "16px", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 18, fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: "white", cursor: "pointer" }}>{S.nextArrow}</button>
        </div>
      )}

      {phase === "spell" && revealIdx >= letters.length - 1 && (
        <div style={{ padding: "16px 20px" }}>
          <button onClick={handleNext} style={{ width: "100%", padding: "18px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 18, fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: BLUE.deepest, cursor: "pointer", boxShadow: `0 5px 0 ${BLUE.goldDark}`, animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}>
            {S.nextFlag}
          </button>
        </div>
      )}
    </div>
  );
}

