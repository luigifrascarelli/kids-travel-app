import { useCallback } from "react";
import { useProfile } from "./useProfile.js";

export function useAudio() {
  const { state } = useProfile();
  const { muted } = state;
  const lang = state.lang || "en";
  const name = state.userName || (lang === "es" ? "Explorador" : "Ranger");
  const speak = useCallback((text, opts = {}) => {
    if (muted || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = opts.rate || 0.85; u.pitch = opts.pitch || 1.15; u.volume = opts.volume || 1;
    if (lang === "es") u.lang = "es-MX";
    window.speechSynthesis.speak(u);
  }, [muted, lang]);

  const tryAgainPhrases = {
    en: ["Oops! Try again!", "Not quite!", "Almost!"],
    es: ["¡Ups! ¡Intenta de nuevo!", "¡Casi!", "¡Inténtalo otra vez!"],
  };
  const mathPrompts = {
    en: { count: "How many can you count? Tap the right number!", add: "Add them together! How many altogether?", subtract: "How many are left? Count the ones not crossed out!" },
    es: { count: "¿Cuántos puedes contar? ¡Toca el número correcto!", add: "¡Súmalos! ¿Cuántos hay en total?", subtract: "¿Cuántos quedan? ¡Cuenta los que no están tachados!" },
  };

  return {
    speakWord: (word) => speak(lang === "es" ? `¿Puedes encontrar… el ${word}?` : `Can you find… the ${word}?`),
    speakCorrect: (praise) => speak(praise.replace(/[🌟🎉🔥⭐💫🏅]/g, ""), { pitch: 1.3, rate: 0.9 }),
    speakTryAgain: () => speak(tryAgainPhrases[lang][Math.floor(Math.random() * 3)], { pitch: 1.2 }),
    speakMathPrompt: (p) => { speak(mathPrompts[lang][p.mode] || ""); },
    speakFound: (n) => speak(lang === "es" ? `¡Increíble! ¡Encontraste un ${n}!` : `Amazing! You found a ${n}!`, { pitch: 1.2 }),
    speakWelcome: () => speak(lang === "es" ? `¡Bienvenida, ${name}! ¿Lista para tu aventura en Montana?` : `Welcome, ${name}! Ready for a Montana adventure?`, { pitch: 1.1 }),
    speakPhrase: speak, muted,
  };
}
