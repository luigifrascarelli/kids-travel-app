export const SCHEMA_VERSION = 6;
export const STORAGE_KEY    = "gabi_app_v6";

export const BLUE = {
  deepest: "#0D2D4F", dark: "#1A4A7A", mid: "#2272B6",
  bright: "#3B9EE8", light: "#A8D4F5", pale: "#DDF0FC",
  sky: "#EAF6FF", gold: "#F4B942", goldDark: "#C8860A",
};

export const RANKS = [
  { min: 0,  label: "Seedling",       emoji: "🌱", color: "#4A8A4A" },
  { min: 1,  label: "Cub Ranger",     emoji: "🐾", color: BLUE.mid  },
  { min: 5,  label: "Trail Ranger",   emoji: "🌲", color: BLUE.dark },
  { min: 12, label: "Junior Ranger",  emoji: "⭐", color: "#7B3FA0" },
  { min: 25, label: "Montana Ranger", emoji: "🏅", color: BLUE.goldDark },
];
export const getRank = (n) => [...RANKS].reverse().find(r => n >= r.min) || RANKS[0];

// Daily challenge helpers
export function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
export function getDailyGoal(totalFound) {
  if (totalFound >= 20) return 3;
  if (totalFound >= 10) return 2;
  return 1;
}

