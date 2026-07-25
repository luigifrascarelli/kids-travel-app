import { useApp } from "../context/AppContext.jsx";

// Drop-in replacement for the old flat useApp(): returns { state, dispatch }
// where `state` is the active profile's data merged with the app-wide
// (shared-across-profiles) fields, using the exact same field names
// components already rely on (state.discovered, state.userName, etc.).
// This means existing tab components never needed to change when we moved
// to the family -> profiles storage shape in 10a.5.
export function useProfile() {
  const { state, dispatch } = useApp();
  const profile = state.profiles[state.activeProfileId];
  return {
    state: {
      ...profile,
      userName: profile.name,
      lang: state.lang,
      muted: state.muted,
      activeTab: state.activeTab,
      onboardingDone: state.onboardingDone,
      parentUnlocked: state.parentUnlocked,
      activeProfileId: state.activeProfileId,
      profiles: state.profiles,
    },
    dispatch,
  };
}
