import { createContext, useContext, useReducer, useEffect } from "react";
import { getTodayKey, getDailyGoal } from "../data/constants.js";
import { PACKS } from "../data/packs/index.js";

// ╔══════════════════════════════════════════════════════════════╗
// ║  SCHEMA v6 — family → profiles                                ║
// ╚══════════════════════════════════════════════════════════════╝
export const STORAGE_KEY_V6 = "gabi_app_v6";

export const DEFAULT_PROFILE = {
  id: "p1",
  name: null,
  selectedPack: "montana",
  discovered: {},
  discoveryLog: [],
  earnedBadges: {},
  spellingStars: {},
  mathStats: { total: 0, streak: 0 },
  customItems: [],
  newBadgeCount: 0,
  celebrating: null,
  dailyChallenge: { dateKey: "", foundToday: 0, goal: 1, completed: false },
  gamesProgress: { flagsUs: {}, flagsWorld: {}, foodsSpot: {}, foodsMatch: {} },
};

export const DEFAULT_STATE = {
  schemaVersion: 6,
  lang: "en",
  muted: false,
  onboardingDone: false,
  activeTab: "home",
  parentUnlocked: false,
  activeProfileId: "p1",
  profiles: { p1: { ...DEFAULT_PROFILE } },
};

// Shape used by schema versions 3, 4, and 5 (flat, single implicit profile).
// Kept only so old saves can be migrated — not used anywhere else.
const LEGACY_FLAT_DEFAULT = {
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

function wrapFlatIntoProfile(flat) {
  const id = "p1";
  return {
    schemaVersion: 6,
    lang: flat.lang || "en",
    muted: !!flat.muted,
    onboardingDone: !!flat.onboardingDone,
    activeTab: "home",
    parentUnlocked: false,
    activeProfileId: id,
    profiles: {
      [id]: {
        id,
        name: flat.userName || null,
        selectedPack: flat.selectedPack || "montana",
        discovered: flat.discovered || {},
        discoveryLog: flat.discoveryLog || [],
        earnedBadges: flat.earnedBadges || {},
        spellingStars: flat.spellingStars || {},
        mathStats: flat.mathStats || { total: 0, streak: 0 },
        customItems: flat.customItems || [],
        newBadgeCount: 0,
        celebrating: null,
        dailyChallenge: flat.dailyChallenge || DEFAULT_PROFILE.dailyChallenge,
        gamesProgress: flat.gamesProgress || DEFAULT_PROFILE.gamesProgress,
      },
    },
  };
}

// Lossless migration: v3/v4 -> v5 (unchanged logic) -> v6 (wrap as "Profile 1")
export function migrateSave(saved) {
  if (saved && saved.profiles) return saved; // already v6+, nothing to do
  let flat = saved || {};
  if (flat.schemaVersion === 3) {
    flat = { ...LEGACY_FLAT_DEFAULT, ...flat, schemaVersion: 5, dailyChallenge: LEGACY_FLAT_DEFAULT.dailyChallenge, parentUnlocked: false, gamesProgress: LEGACY_FLAT_DEFAULT.gamesProgress };
  } else if (flat.schemaVersion === 4) {
    flat = { ...LEGACY_FLAT_DEFAULT, ...flat, schemaVersion: 5, gamesProgress: LEGACY_FLAT_DEFAULT.gamesProgress };
  } else {
    flat = { ...LEGACY_FLAT_DEFAULT, ...flat };
  }
  return wrapFlatIntoProfile(flat);
}

export function loadState() {
  try {
    const raw6 = localStorage.getItem("gabi_app_v6");
    if (raw6) return migrateSave(JSON.parse(raw6));
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
    const { parentUnlocked, ...topRest } = state;
    const profiles = {};
    for (const [id, p] of Object.entries(state.profiles)) {
      const { celebrating, newBadgeCount, ...rest } = p;
      profiles[id] = rest;
    }
    localStorage.setItem(STORAGE_KEY_V6, JSON.stringify({ ...topRest, profiles }));
  } catch {}
}

// Applies an updater fn to the currently-active profile only.
function updateActiveProfile(state, updater) {
  const id = state.activeProfileId;
  const profile = state.profiles[id];
  return { ...state, profiles: { ...state.profiles, [id]: updater(profile) } };
}

export function appReducer(state, action) {
  switch (action.type) {
    // ---- global (shared across all profiles) ----
    case "COMPLETE_ONBOARDING": return { ...state, onboardingDone: true, activeTab: "home" };
    case "SET_TAB": return { ...state, activeTab: action.tab, parentUnlocked: false };
    case "SET_MUTED": return { ...state, muted: action.muted };
    case "UNLOCK_PARENT": return { ...state, parentUnlocked: true };
    case "LOCK_PARENT": return { ...state, parentUnlocked: false };
    case "SET_LANG": return { ...state, lang: action.lang };

    // ---- profile management ----
    case "ADD_PROFILE": {
      const id = `profile_${Date.now()}`;
      const newProfile = { ...DEFAULT_PROFILE, id, name: action.name };
      return { ...state, profiles: { ...state.profiles, [id]: newProfile }, activeProfileId: id, activeTab: "home", parentUnlocked: false };
    }
    case "SWITCH_PROFILE": return { ...state, activeProfileId: action.id, activeTab: "home", parentUnlocked: false };
    case "REMOVE_PROFILE": {
      const remaining = Object.keys(state.profiles).filter(pid => pid !== action.id);
      if (remaining.length === 0) return state; // always keep at least one profile
      const profiles = { ...state.profiles };
      delete profiles[action.id];
      const activeProfileId = state.activeProfileId === action.id ? remaining[0] : state.activeProfileId;
      return { ...state, profiles, activeProfileId };
    }

    // ---- profile-scoped (apply to the active profile) ----
    case "SET_USER_NAME": return updateActiveProfile(state, p => ({ ...p, name: action.name }));
    case "SET_PACK": return updateActiveProfile(state, p => ({ ...p, selectedPack: action.packId }));
    case "DISCOVER_ITEM": {
      return updateActiveProfile(state, p => {
        if (p.discovered[action.itemId]) return p;
        const discovered = { ...p.discovered, [action.itemId]: true };
        const discoveryLog = [...p.discoveryLog, { itemId: action.itemId, ts: Date.now() }];
        const pack = PACKS[p.selectedPack];
        const newBadges = pack.badges.filter(b => !p.earnedBadges[b.id] && b.check(discovered, pack.zones));
        const earnedBadges = { ...p.earnedBadges };
        newBadges.forEach(b => { earnedBadges[b.id] = true; });
        const todayKey = getTodayKey();
        const existingChallenge = p.dailyChallenge;
        const isToday = existingChallenge.dateKey === todayKey;
        const foundToday = (isToday ? existingChallenge.foundToday : 0) + 1;
        const totalAfter = Object.values(discovered).filter(Boolean).length;
        const goal = getDailyGoal(totalAfter);
        const dailyChallenge = { dateKey: todayKey, foundToday, goal, completed: foundToday >= goal };
        return { ...p, discovered, discoveryLog, earnedBadges, dailyChallenge, celebrating: newBadges.length > 0 ? newBadges[0] : p.celebrating, newBadgeCount: p.newBadgeCount + newBadges.length };
      });
    }
    case "DISMISS_CELEBRATION": {
      const next = updateActiveProfile(state, p => ({ ...p, celebrating: null, newBadgeCount: 0 }));
      return { ...next, activeTab: "missions" };
    }
    case "COMPLETE_SPELLING": return updateActiveProfile(state, p => ({ ...p, spellingStars: { ...p.spellingStars, [action.itemId]: (p.spellingStars[action.itemId] || 0) + 1 } }));
    case "MATH_CORRECT": return updateActiveProfile(state, p => ({ ...p, mathStats: { total: (p.mathStats.total || 0) + 1, streak: (p.mathStats.streak || 0) + 1 } }));
    case "MATH_WRONG": return updateActiveProfile(state, p => ({ ...p, mathStats: { ...p.mathStats, streak: 0 } }));
    case "ADD_CUSTOM_ITEM": return updateActiveProfile(state, p => ({ ...p, customItems: [...p.customItems, action.item] }));
    case "REMOVE_CUSTOM_ITEM": return updateActiveProfile(state, p => ({ ...p, customItems: p.customItems.filter(i => i.id !== action.itemId) }));
    case "GAME_CORRECT": {
      const { gameId, itemId } = action;
      return updateActiveProfile(state, p => {
        const prev = p.gamesProgress[gameId] || {};
        return { ...p, gamesProgress: { ...p.gamesProgress, [gameId]: { ...prev, [itemId]: (prev[itemId] || 0) + 1 } } };
      });
    }
    case "RESET_PROGRESS": {
      const next = updateActiveProfile(state, p => ({ ...DEFAULT_PROFILE, id: p.id, name: p.name, selectedPack: p.selectedPack }));
      return { ...next, activeTab: "home", parentUnlocked: false };
    }

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
