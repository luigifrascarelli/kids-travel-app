import { useProfile } from "./useProfile.js";
import { STRINGS, t } from "../data/strings.js";

export function useLang() {
  const { state } = useProfile();
  const lang = state.lang || "en";
  const S = STRINGS[lang];
  return { lang, S, t };
}

