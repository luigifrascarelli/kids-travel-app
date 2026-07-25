import { useState, useEffect, useMemo } from "react";
import { X, Repeat2, Lightbulb } from "lucide-react";
import { useProfile } from "../../hooks/useProfile.js";
import { useLang } from "../../hooks/useLang.js";
import { useAudio } from "../../hooks/useAudio.js";
import { BLUE } from "../../data/constants.js";
import { t } from "../../data/strings.js";
import { shuffle } from "../../utils/helpers.js";
import { WORLD_COUNTRIES, WORLD_FOODS } from "../../data/gamesData.js";

export function FoodsGame({ mode, onBack }) {
  const { state, dispatch } = useProfile();
  const { S } = useLang();
  const { speakPhrase, speakCorrect, speakTryAgain } = useAudio();
  const gameId = mode === "spot" ? "foodsSpot" : "foodsMatch";
  const progress = state.gamesProgress[gameId] || {};
  const totalDone = Object.keys(progress).length;

  const [current, setCurrent] = useState(() => WORLD_FOODS[Math.floor(Math.random() * WORLD_FOODS.length)]);
  const countryForFood = WORLD_COUNTRIES.find(c => c.id === current.countryId) || WORLD_COUNTRIES[0];

  // Spot mode: show 3 food emojis, tap the correct one
  const foodChoices = useMemo(() => shuffle(WORLD_FOODS.filter(f => f.id !== current.id)).slice(0, 2).concat(current).sort(() => Math.random() - 0.5), [current.id]);

  // Match mode: show food, pick correct country flag from 3
  const countryChoices = useMemo(() => {
    const others = shuffle(WORLD_COUNTRIES.filter(c => c.id !== current.countryId)).slice(0, 2);
    return shuffle([countryForFood, ...others]);
  }, [current.id]);

  const [phase, setPhase] = useState("question"); // question | correct
  const [wrongId, setWrongId] = useState(null);
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    if (phase === "question") {
      if (mode === "spot") speakPhrase(`Which one is the ${current.name}? ${current.es}`, { pitch: 1.1 });
      else speakPhrase(`${current.name} — ${current.es}. Which country is this food from?`, { pitch: 1.1 });
    }
  }, [current.id]);

  const handleSpotChoice = (food) => {
    if (phase !== "question") return;
    if (food.id === current.id) {
      setPhase("correct"); setShowFact(true);
      speakCorrect(`Yes! ${current.name}! ${current.es}!`);
      dispatch({ type: "GAME_CORRECT", gameId, itemId: current.id });
    } else {
      setWrongId(food.id); speakTryAgain();
      setTimeout(() => setWrongId(null), 800);
    }
  };

  const handleMatchChoice = (country) => {
    if (phase !== "question") return;
    if (country.id === current.countryId) {
      setPhase("correct"); setShowFact(true);
      speakCorrect(`Yes! ${current.name} is from ${countryForFood.name}! ${countryForFood.es}!`);
      dispatch({ type: "GAME_CORRECT", gameId, itemId: current.id });
    } else {
      setWrongId(country.id); speakTryAgain();
      setTimeout(() => setWrongId(null), 800);
    }
  };

  const handleNext = () => {
    const next = WORLD_FOODS[Math.floor(Math.random() * WORLD_FOODS.length)];
    setCurrent(next);
    setPhase("question");
    setWrongId(null);
    setShowFact(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#2A1A0A,#5C3010 50%,#8B4513)", display: "flex", flexDirection: "column", paddingBottom: 110 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 12px" }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color="white" /></button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 16, letterSpacing: 2 }}>{mode === "spot" ? `🍽️ ${S.spotFood.toUpperCase()}` : `🗺️ ${S.matchFood.toUpperCase()}`}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,200,100,0.8)", fontSize: 12 }}>{totalDone} {S.ofTasted.replace("{n}", WORLD_FOODS.length)}</div>
        </div>
        <button onClick={() => speakPhrase(`${current.name}. ${current.es}`, { pitch: 1.1 })} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Repeat2 size={18} color="white" /></button>
      </div>

      {/* Progress */}
      <div style={{ margin: "0 20px 16px", background: "rgba(255,255,255,0.1)", borderRadius: 20, height: 8, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},#FF8C42)`, width: `${(totalDone / WORLD_FOODS.length) * 100}%`, transition: "width 0.5s ease" }} />
      </div>

      {/* SPOT MODE */}
      {mode === "spot" && (
        <div style={{ padding: "0 20px", flex: 1 }}>
          {phase === "question" && (
            <>
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 20, marginBottom: 4 }}>{S.whichOneIsFood}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 30, letterSpacing: 1 }}>{current.name}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "rgba(255,200,100,0.9)", fontSize: 20 }}>{current.es}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 4 }}>{S.fromCountry} {countryForFood.flag} {countryForFood.name}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {foodChoices.map(food => {
                  const isWrong = wrongId === food.id;
                  return (
                    <div key={food.id} onClick={() => handleSpotChoice(food)}
                      style={{ background: isWrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "rgba(255,255,255,0.12)", border: isWrong ? "3px solid #FF9999" : "3px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "20px 10px", textAlign: "center", cursor: "pointer", transition: "all 0.15s", animation: isWrong ? "shake 0.4s ease" : "none" }}
                      onPointerDown={e => e.currentTarget.style.transform = "scale(0.95)"}
                      onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                      onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 8 }}>{food.emoji}</div>
                      <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 12, lineHeight: 1.2 }}>{food.name}</div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,200,100,0.8)", fontSize: 11, marginTop: 2 }}>{food.es}</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {phase === "correct" && (
            <div style={{ textAlign: "center", animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}>
              <div style={{ fontSize: 80, marginBottom: 8 }}>{current.emoji}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#7AE8A0", fontSize: 26, marginBottom: 4 }}>{S.youGotItFood}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 22 }}>{current.name}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 18, marginBottom: 12 }}>{current.es}</div>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 18, padding: "14px 16px", marginBottom: 16, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Lightbulb size={22} color={BLUE.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.5 }}>{current.fact}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,200,100,0.85)", fontSize: 13, lineHeight: 1.4, marginTop: 6 }}>{current.factEs}</div>
                </div>
              </div>
              <button onClick={handleNext} style={{ width: "100%", padding: "16px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 18, fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: BLUE.deepest, cursor: "pointer" }}>{S.nextFood}</button>
            </div>
          )}
        </div>
      )}

      {/* MATCH MODE */}
      {mode === "match" && (
        <div style={{ padding: "0 20px", flex: 1 }}>
          {phase === "question" && (
            <>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 80, lineHeight: 1, marginBottom: 8 }}>{current.emoji}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 26 }}>{current.name}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 20, marginBottom: 6 }}>{current.es}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.7)", fontSize: 15 }}>{S.whichCountry}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {countryChoices.map(country => {
                  const isWrong = wrongId === country.id;
                  return (
                    <button key={country.id} onClick={() => handleMatchChoice(country)}
                      style={{ background: isWrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "rgba(255,255,255,0.12)", border: isWrong ? "3px solid #FF9999" : "3px solid rgba(255,255,255,0.2)", borderRadius: 18, padding: "16px 20px", cursor: "pointer", transition: "all 0.15s", animation: isWrong ? "shake 0.4s ease" : "none", display: "flex", alignItems: "center", gap: 14 }}
                      onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
                      onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                      onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <span style={{ fontSize: 36 }}>{country.flag}</span>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 16 }}>{country.name}</div>
                        <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,200,100,0.8)", fontSize: 13 }}>{country.es}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
          {phase === "correct" && (
            <div style={{ textAlign: "center", animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 20, alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 64 }}>{current.emoji}</span>
                <span style={{ fontSize: 40, color: "white", fontFamily: "'Luckiest Guy',cursive" }}>+</span>
                <span style={{ fontSize: 64 }}>{countryForFood.flag}</span>
              </div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#7AE8A0", fontSize: 24, marginBottom: 4 }}>{S.correctBang}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 20 }}>{t(S.isFrom, {food: current.name})}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22 }}>{countryForFood.name} · {countryForFood.es}</div>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 18, padding: "14px 16px", margin: "14px 0", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Lightbulb size={22} color={BLUE.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.5 }}>{current.fact}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,200,100,0.85)", fontSize: 13, lineHeight: 1.4, marginTop: 6 }}>{current.factEs}</div>
                </div>
              </div>
              <button onClick={handleNext} style={{ width: "100%", padding: "16px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 18, fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: BLUE.deepest, cursor: "pointer" }}>{S.nextFood}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

