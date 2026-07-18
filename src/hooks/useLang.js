import { useApp } from "../context/AppContext.jsx";
import { STRINGS, t } from "../data/strings.js";

export function useLang() {
  const { state } = useApp();
  const lang = state.lang || "en";
  const S = STRINGS[lang];
  return { lang, S, t };
}

