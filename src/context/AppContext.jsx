import { createContext, useContext, useReducer, useEffect } from "react";
import { SCHEMA_VERSION, STORAGE_KEY, getTodayKey, getDailyGoal } from "../data/constants.js";
import { PACKS } from "../data/packs/index.js";

export const DEFAULT_STATE = {
  schemaVersion: 4,
  userName: null,
  selectedPack: "montana",
  onboardingDone: false,
  muted: false,
  activeTab: "home",
  discovered: {},
  discoveryLog: [],
  earnedBadges: {},
  spellingStars: {},
  mathStats: { total: 0, streak: 0 },
  customItems: [],
  newBadgeCount: 0,
  celebrating: null,
  dailyChallenge: { dateKey: "", foundToday: 0, goal: 1, completed: false },
  parentUnlocked: false,
  gamesProgress: { flagsUs: {}, flagsWorld: {}, foodsSpot: {}, foodsMatch: {} },
  lang: "en",
};

export function migrateSave(saved) {
  if (saved.schemaVersion === 3) {
    return { ...DEFAULT_STATE, ...saved, schemaVersion: 5, dailyChallenge: DEFAULT_STATE.dailyChallenge, parentUnlocked: false, gamesProgress: DEFAULT_STATE.gamesProgress };
  }
  if (saved.schemaVersion === 4) {
    return { ...DEFAULT_STATE, ...saved, schemaVersion: 5, gamesProgress: DEFAULT_STATE.gamesProgress };
  }
  return { ...DEFAULT_STATE, ...saved };
}

export function loadState() {
  try {
    const raw5 = localStorage.getItem("gabi_app_v5");
    if (raw5) return migrateSave(JSON.parse(raw5));
    const raw4 = localStorage.getItem("gabi_app_v4");
    if (raw4) return migrateSave({ ...JSON.parse(raw4), schemaVersion: 4 });
    const raw3 = localStorage.getItem("gabi_app_v3");
    if (raw3) return migrateSave({ ...JSON.parse(raw3), schemaVersion: 3 });
    return DEFAULT_STATE;
  } catch { return DEFAULT_STATE; }
}

export function saveState(state) {
  try {
    const { celebrating, newBadgeCount, parentUnlocked, ...p } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER_NAME": return { ...state, userName: action.name };
    case "SET_PACK": return { ...state, selectedPack: action.packId };
    case "COMPLETE_ONBOARDING": return { ...state, onboardingDone: true, activeTab: "home" };
    case "SET_TAB": return { ...state, activeTab: action.tab, parentUnlocked: false };
    case "SET_MUTED": return { ...state, muted: action.muted };
    case "UNLOCK_PARENT": return { ...state, parentUnlocked: true };
    case "LOCK_PARENT": return { ...state, parentUnlocked: false };
    case "DISCOVER_ITEM": {
      if (state.discovered[action.itemId]) return state;
      const discovered = { ...state.discovered, [action.itemId]: true };
      const discoveryLog = [...state.discoveryLog, { itemId: action.itemId, ts: Date.now() }];
      const pack = PACKS[state.selectedPack];
      const newBadges = pack.badges.filter(b => !state.earnedBadges[b.id] && b.check(discovered, pack.zones));
      const earnedBadges = { ...state.earnedBadges };
      newBadges.forEach(b => { earnedBadges[b.id] = true; });
      // Update daily challenge
      const todayKey = getTodayKey();
      const existingChallenge = state.dailyChallenge;
      const isToday = existingChallenge.dateKey === todayKey;
      const foundToday = (isToday ? existingChallenge.foundToday : 0) + 1;
      const totalAfter = Object.values(discovered).filter(Boolean).length;
      const goal = getDailyGoal(totalAfter);
      const dailyChallenge = {
        dateKey: todayKey,
        foundToday,
        goal,
        completed: foundToday >= goal,
      };
      return { ...state, discovered, discoveryLog, earnedBadges, dailyChallenge, celebrating: newBadges.length > 0 ? newBadges[0] : state.celebrating, newBadgeCount: state.newBadgeCount + newBadges.length };
    }
    case "DISMISS_CELEBRATION": return { ...state, celebrating: null, newBadgeCount: 0, activeTab: "missions" };
    case "COMPLETE_SPELLING": return { ...state, spellingStars: { ...state.spellingStars, [action.itemId]: (state.spellingStars[action.itemId] || 0) + 1 } };
    case "MATH_CORRECT": return { ...state, mathStats: { total: (state.mathStats.total || 0) + 1, streak: (state.mathStats.streak || 0) + 1 } };
    case "MATH_WRONG": return { ...state, mathStats: { ...state.mathStats, streak: 0 } };
    case "ADD_CUSTOM_ITEM": return { ...state, customItems: [...state.customItems, action.item] };
    case "REMOVE_CUSTOM_ITEM": return { ...state, customItems: state.customItems.filter(i => i.id !== action.itemId) };
    case "GAME_CORRECT": {
      const { gameId, itemId } = action;
      const prev = state.gamesProgress[gameId] || {};
      return { ...state, gamesProgress: { ...state.gamesProgress, [gameId]: { ...prev, [itemId]: (prev[itemId] || 0) + 1 } } };
    }
    case "SET_LANG": return { ...state, lang: action.lang };
    case "RESET_PROGRESS": return { ...DEFAULT_STATE, schemaVersion: SCHEMA_VERSION, userName: state.userName, selectedPack: state.selectedPack, onboardingDone: state.onboardingDone, muted: state.muted, lang: state.lang, activeTab: "home" };
    default: return state;
  }
}

export const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, null, loadState);
  useEffect(() => { saveState(state); }, [state]);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
