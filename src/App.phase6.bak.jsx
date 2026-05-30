import { useState, useEffect, useCallback, useMemo, useReducer, createContext, useContext, useRef } from "react";
import { Home, Search, Trophy, BookOpen, Calculator, Volume2, VolumeX, X, Check, Lightbulb, Star, Flame, ChevronRight, Lock, MapPin, Compass, Play, Repeat2, Award, Target, Medal, Zap, CheckCircle2, BookMarked, Share2, Printer, Settings, Trash2, Plus, Gamepad2 } from "lucide-react";

// ╔══════════════════════════════════════════════════════════════╗
// ║  ZONE SVG ICONS                                              ║
// ╚══════════════════════════════════════════════════════════════╝
const ZoneIconWildlife = ({ size=28, active=false }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="22" rx="8" ry="6" fill={active?"rgba(255,255,255,0.95)":"#1A4A7A"}/>
    <ellipse cx="10" cy="18" rx="4" ry="3" fill={active?"rgba(255,255,255,0.95)":"#1A4A7A"}/>
    <ellipse cx="22" cy="18" rx="4" ry="3" fill={active?"rgba(255,255,255,0.95)":"#1A4A7A"}/>
    <ellipse cx="16" cy="12" rx="4" ry="3" fill={active?"rgba(255,255,255,0.95)":"#1A4A7A"}/>
  </svg>
);
const ZoneIconBirds = ({ size=28, active=false }) => {
  const c = active ? "rgba(255,255,255,0.95)" : "#1A6E8F";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 20 Q10 8 16 12 Q22 8 28 20" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M16 12 L16 22" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="16" cy="24" rx="3" ry="1.5" fill={c} opacity="0.5"/>
      <circle cx="16" cy="9" r="2.5" fill={c}/>
    </svg>
  );
};
const ZoneIconPlants = ({ size=28, active=false }) => {
  const c = active ? "rgba(255,255,255,0.95)" : "#2A6B4A";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 28 L16 16" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="10" r="4" fill={c}/>
      <circle cx="9"  cy="16" r="3" fill={c}/>
      <circle cx="23" cy="16" r="3" fill={c}/>
      <circle cx="12" cy="8"  r="2.5" fill={c} opacity="0.7"/>
      <circle cx="20" cy="8"  r="2.5" fill={c} opacity="0.7"/>
    </svg>
  );
};
const ZoneIconLandscape = ({ size=28, active=false }) => {
  const c = active ? "rgba(255,255,255,0.95)" : "#0D2D4F";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M2 26 L11 12 L17 19 L23 8 L30 26 Z" fill={c} opacity="0.9"/>
      <circle cx="6" cy="8" r="3" fill={active?"rgba(255,215,0,0.95)":"#F4B942"} opacity="0.85"/>
    </svg>
  );
};
const ZONE_ICONS = { wildlife: ZoneIconWildlife, birds: ZoneIconBirds, plants: ZoneIconPlants, landscape: ZoneIconLandscape };
function ZoneIcon({ zoneId, size=28, active=false }) { const Z = ZONE_ICONS[zoneId]; return Z ? <Z size={size} active={active}/> : null; }

// ╔══════════════════════════════════════════════════════════════╗
// ║  CHARACTER SVGs                                              ║
// ╚══════════════════════════════════════════════════════════════╝
const Shadow = ({cx=60,rx=32}) => <ellipse cx={cx} cy={112} rx={rx} ry={7} fill="rgba(0,0,0,0.12)"/>;
const CharGrizzly = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow/><ellipse cx="60" cy="78" rx="32" ry="28" fill="#8B5E3C"/>
    <circle cx="60" cy="50" r="26" fill="#8B5E3C"/>
    <circle cx="40" cy="28" r="10" fill="#8B5E3C"/><circle cx="80" cy="28" r="10" fill="#8B5E3C"/>
    <circle cx="40" cy="28" r="6"  fill="#C4825A"/><circle cx="80" cy="28" r="6"  fill="#C4825A"/>
    <ellipse cx="60" cy="58" rx="14" ry="11" fill="#C4825A"/>
    <circle cx="52" cy="46" r="5" fill="white"/><circle cx="68" cy="46" r="5" fill="white"/>
    <circle cx="53" cy="47" r="3" fill="#2C1A0E"/><circle cx="69" cy="47" r="3" fill="#2C1A0E"/>
    <circle cx="54" cy="46" r="1" fill="white"/><circle cx="70" cy="46" r="1" fill="white"/>
    <ellipse cx="60" cy="55" rx="5" ry="3.5" fill="#2C1A0E"/>
    <path d="M55 60 Q60 65 65 60" stroke="#2C1A0E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M32 95 Q28 105 26 108" stroke="#6B4226" strokeWidth="3" strokeLinecap="round"/>
    <path d="M36 97 Q33 107 32 110" stroke="#6B4226" strokeWidth="3" strokeLinecap="round"/>
    <path d="M88 95 Q92 105 94 108" stroke="#6B4226" strokeWidth="3" strokeLinecap="round"/>
    <path d="M84 97 Q87 107 88 110" stroke="#6B4226" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const CharBison = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={38}/>
    <ellipse cx="58" cy="80" rx="40" ry="26" fill="#5C4033"/>
    <ellipse cx="46" cy="62" rx="22" ry="18" fill="#5C4033"/>
    <ellipse cx="30" cy="68" rx="18" ry="15" fill="#3E2A1E"/>
    <path d="M22 56 Q14 46 18 40" stroke="#2C1A0E" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M36 55 Q42 44 40 38" stroke="#2C1A0E" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="24" cy="66" r="4" fill="white"/><circle cx="25" cy="67" r="2.5" fill="#2C1A0E"/>
    <circle cx="25.5" cy="66.5" r="0.8" fill="white"/>
    <ellipse cx="16" cy="72" rx="6" ry="4" fill="#3E2A1E"/>
    <circle cx="14" cy="71" r="1.5" fill="#2C1A0E"/><circle cx="18" cy="71" r="1.5" fill="#2C1A0E"/>
    <ellipse cx="28" cy="78" rx="8" ry="5" fill="#3E2A1E"/>
    <rect x="40" y="98" width="10" height="16" rx="5" fill="#3E2A1E"/>
    <rect x="56" y="98" width="10" height="16" rx="5" fill="#3E2A1E"/>
    <rect x="70" y="98" width="10" height="16" rx="5" fill="#3E2A1E"/>
    <path d="M96 80 Q104 78 102 88" stroke="#5C4033" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);
const CharElk = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={28}/>
    <ellipse cx="60" cy="80" rx="30" ry="24" fill="#8B6340"/>
    <rect x="50" y="52" width="18" height="22" rx="9" fill="#8B6340"/>
    <ellipse cx="60" cy="44" rx="16" ry="14" fill="#8B6340"/>
    <path d="M50 32 Q44 20 40 14" stroke="#5C3D1E" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M45 24 Q38 20 34 22" stroke="#5C3D1E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M43 18 Q36 15 36 10" stroke="#5C3D1E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M70 32 Q76 20 80 14" stroke="#5C3D1E" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M75 24 Q82 20 86 22" stroke="#5C3D1E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M77 18 Q84 15 84 10" stroke="#5C3D1E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <ellipse cx="46" cy="36" rx="7" ry="5" fill="#8B6340"/><ellipse cx="74" cy="36" rx="7" ry="5" fill="#8B6340"/>
    <circle cx="54" cy="42" r="4" fill="white"/><circle cx="66" cy="42" r="4" fill="white"/>
    <circle cx="55" cy="43" r="2.5" fill="#2C1A0E"/><circle cx="67" cy="43" r="2.5" fill="#2C1A0E"/>
    <circle cx="55.5" cy="42.5" r="0.8" fill="white"/>
    <ellipse cx="60" cy="52" rx="8" ry="6" fill="#A07050"/>
    <ellipse cx="60" cy="50" rx="4" ry="2.5" fill="#2C1A0E"/>
    <rect x="38" y="96" width="9" height="18" rx="4" fill="#6B4A2A"/>
    <rect x="50" y="98" width="9" height="16" rx="4" fill="#6B4A2A"/>
    <rect x="62" y="98" width="9" height="16" rx="4" fill="#6B4A2A"/>
    <rect x="74" y="96" width="9" height="18" rx="4" fill="#6B4A2A"/>
  </svg>
);
const CharMoose = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="82" rx="32" ry="24" fill="#5C3D1E"/>
    <rect x="50" y="54" width="16" height="24" rx="8" fill="#5C3D1E"/>
    <ellipse cx="60" cy="46" rx="16" ry="13" fill="#5C3D1E"/>
    <path d="M48 34 Q36 22 30 16" stroke="#3E2510" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M34 20 Q26 16 24 10" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M30 16 Q24 22 22 26" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M34 20 Q30 28 30 32" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M72 34 Q84 22 90 16" stroke="#3E2510" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M86 20 Q94 16 96 10" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M90 16 Q96 22 98 26" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M86 20 Q90 28 90 32" stroke="#3E2510" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <ellipse cx="60" cy="54" rx="11" ry="9" fill="#4A2E14"/>
    <circle cx="56" cy="52" r="2" fill="#2C1A0E"/><circle cx="64" cy="52" r="2" fill="#2C1A0E"/>
    <ellipse cx="60" cy="66" rx="6" ry="8" fill="#4A2E14"/>
    <circle cx="53" cy="43" r="4" fill="white"/><circle cx="67" cy="43" r="4" fill="white"/>
    <circle cx="54" cy="44" r="2.5" fill="#2C1A0E"/><circle cx="68" cy="44" r="2.5" fill="#2C1A0E"/>
    <circle cx="54.5" cy="43" r="1" fill="white"/>
    <rect x="36" y="97" width="9" height="18" rx="4" fill="#3E2510"/>
    <rect x="48" y="99" width="9" height="16" rx="4" fill="#3E2510"/>
    <rect x="63" y="99" width="9" height="16" rx="4" fill="#3E2510"/>
    <rect x="75" y="97" width="9" height="18" rx="4" fill="#3E2510"/>
  </svg>
);
const CharWolf = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={28}/>
    <ellipse cx="60" cy="78" rx="30" ry="24" fill="#8C8C8C"/>
    <path d="M88 72 Q106 60 104 76 Q102 88 92 86" fill="#8C8C8C"/>
    <ellipse cx="96" cy="78" rx="9" ry="10" fill="white" opacity="0.4"/>
    <rect x="50" y="52" width="18" height="20" rx="9" fill="#8C8C8C"/>
    <ellipse cx="60" cy="44" rx="20" ry="17" fill="#8C8C8C"/>
    <path d="M44 32 L38 14 L52 26 Z" fill="#8C8C8C"/>
    <path d="M76 32 L82 14 L68 26 Z" fill="#8C8C8C"/>
    <path d="M45 30 L40 17 L51 27 Z" fill="#C4A0A0"/>
    <path d="M75 30 L80 17 L69 27 Z" fill="#C4A0A0"/>
    <ellipse cx="60" cy="52" rx="13" ry="10" fill="#B0B0B0"/>
    <circle cx="52" cy="40" r="5" fill="white"/><circle cx="68" cy="40" r="5" fill="white"/>
    <circle cx="53" cy="41" r="3" fill="#C8A000"/><circle cx="69" cy="41" r="3" fill="#C8A000"/>
    <circle cx="52" cy="40" r="1.5" fill="#1A1A1A"/><circle cx="68" cy="40" r="1.5" fill="#1A1A1A"/>
    <circle cx="52.8" cy="40" r="0.7" fill="white"/>
    <ellipse cx="60" cy="50" rx="5" ry="3.5" fill="#2C2C2C"/>
    <rect x="40" y="96" width="9" height="16" rx="4" fill="#6B6B6B"/>
    <rect x="52" y="98" width="9" height="14" rx="4" fill="#6B6B6B"/>
    <rect x="64" y="98" width="9" height="14" rx="4" fill="#6B6B6B"/>
    <rect x="76" y="96" width="9" height="16" rx="4" fill="#6B6B6B"/>
  </svg>
);
const CharFox = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={24}/>
    <ellipse cx="60" cy="78" rx="26" ry="22" fill="#D45F1E"/>
    <path d="M84 76 Q108 62 110 80 Q112 96 94 96 Q86 96 82 88 Z" fill="#D45F1E"/>
    <ellipse cx="104" cy="82" rx="10" ry="12" fill="white" opacity="0.65"/>
    <rect x="52" y="54" width="16" height="20" rx="8" fill="#D45F1E"/>
    <ellipse cx="60" cy="46" rx="18" ry="16" fill="#D45F1E"/>
    <path d="M44 34 L38 12 L54 28 Z" fill="#D45F1E"/>
    <path d="M76 34 L82 12 L66 28 Z" fill="#D45F1E"/>
    <path d="M45 32 L40 15 L53 27 Z" fill="#E8956B"/>
    <path d="M75 32 L80 15 L67 27 Z" fill="#E8956B"/>
    <ellipse cx="60" cy="52" rx="14" ry="11" fill="white"/>
    <circle cx="52" cy="42" r="4.5" fill="white"/><circle cx="68" cy="42" r="4.5" fill="white"/>
    <circle cx="53" cy="43" r="3" fill="#2C8C40"/><circle cx="69" cy="43" r="3" fill="#2C8C40"/>
    <circle cx="52" cy="42" r="1.5" fill="#1A1A1A"/><circle cx="68" cy="42" r="1.5" fill="#1A1A1A"/>
    <circle cx="52.8" cy="41.5" r="0.7" fill="white"/>
    <ellipse cx="60" cy="51" rx="4.5" ry="3" fill="#2C1A0E"/>
    <rect x="42" y="94" width="8" height="16" rx="4" fill="#B84E18"/>
    <rect x="54" y="96" width="8" height="14" rx="4" fill="#B84E18"/>
    <rect x="66" y="96" width="8" height="14" rx="4" fill="#B84E18"/>
    <rect x="78" y="94" width="8" height="16" rx="4" fill="#B84E18"/>
  </svg>
);
const CharBeaver = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={34}/>
    <ellipse cx="82" cy="96" rx="22" ry="10" fill="#5C3D1E" opacity="0.9"/>
    <path d="M66 96 Q74 90 82 96 Q90 102 98 96" stroke="#3E2510" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="56" cy="78" rx="32" ry="26" fill="#8B5E3C"/>
    <circle cx="50" cy="50" r="22" fill="#8B5E3C"/>
    <circle cx="34" cy="32" r="8" fill="#8B5E3C"/><circle cx="66" cy="32" r="8" fill="#8B5E3C"/>
    <circle cx="34" cy="32" r="5" fill="#C4825A"/><circle cx="66" cy="32" r="5" fill="#C4825A"/>
    <ellipse cx="50" cy="58" rx="14" ry="11" fill="#C4825A"/>
    <rect x="44" y="62" width="7" height="9" rx="2" fill="white"/>
    <rect x="53" y="62" width="7" height="9" rx="2" fill="white"/>
    <circle cx="42" cy="46" r="5" fill="white"/><circle cx="58" cy="46" r="5" fill="white"/>
    <circle cx="43" cy="47" r="3" fill="#2C1A0E"/><circle cx="59" cy="47" r="3" fill="#2C1A0E"/>
    <circle cx="43.8" cy="46.5" r="1" fill="white"/>
    <rect x="38" y="98" width="10" height="12" rx="5" fill="#6B4226"/>
    <rect x="54" y="98" width="10" height="12" rx="5" fill="#6B4226"/>
  </svg>
);
const CharEagle = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <path d="M60 65 Q38 50 14 56 Q10 58 14 64 Q30 60 54 70 Z" fill="#4A3520"/>
    <path d="M60 65 Q82 50 106 56 Q110 58 106 64 Q90 60 66 70 Z" fill="#4A3520"/>
    <ellipse cx="60" cy="78" rx="18" ry="22" fill="#4A3520"/>
    <ellipse cx="60" cy="98" rx="12" ry="8" fill="white"/>
    <rect x="52" y="50" width="16" height="20" rx="8" fill="white"/>
    <circle cx="60" cy="42" r="18" fill="white"/>
    <path d="M72 42 L84 46 L72 50 Z" fill="#F4B942"/>
    <circle cx="66" cy="40" r="5" fill="#F4B942"/>
    <circle cx="67" cy="40" r="3" fill="#2C1A0E"/>
    <circle cx="67.8" cy="39.5" r="1" fill="white"/>
    <rect x="49" y="96" width="8" height="12" rx="4" fill="#F4B942"/>
    <rect x="63" y="96" width="8" height="12" rx="4" fill="#F4B942"/>
  </svg>
);
const CharPlaceholder = ({ size=96, color="#A8D4F5" }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="112" rx="28" ry="7" fill="rgba(0,0,0,0.08)"/>
    <circle cx="60" cy="58" r="40" fill={color} opacity="0.18"/>
    <circle cx="60" cy="58" r="28" fill={color} opacity="0.28"/>
    <circle cx="60" cy="58" r="16" fill={color} opacity="0.45"/>
  </svg>
);
const CHAR_MAP = {
  grizzly: CharGrizzly, bison: CharBison, elk: CharElk, moose: CharMoose,
  wolf: CharWolf, fox: CharFox, beaver: CharBeaver, eagle: CharEagle,
  owl:    (p) => <CharPlaceholder {...p} color="#2ABBE8"/>,
  hawk:   (p) => <CharPlaceholder {...p} color="#2ABBE8"/>,
  heron:  (p) => <CharPlaceholder {...p} color="#2ABBE8"/>,
  duck:   (p) => <CharPlaceholder {...p} color="#2ABBE8"/>,
  magpie: (p) => <CharPlaceholder {...p} color="#2ABBE8"/>,
  rose:     (p) => <CharPlaceholder {...p} color="#E87A8C"/>,
  lupine:   (p) => <CharPlaceholder {...p} color="#9B59B6"/>,
  fireweed: (p) => <CharPlaceholder {...p} color="#E84040"/>,
  pine:     (p) => <CharPlaceholder {...p} color="#2A6B4A"/>,
  fern:     (p) => <CharPlaceholder {...p} color="#3DBF7A"/>,
  sage:     (p) => <CharPlaceholder {...p} color="#8FBC45"/>,
  mountain: (p) => <CharPlaceholder {...p} color="#2272B6"/>,
  glacier:  (p) => <CharPlaceholder {...p} color="#A8D4F5"/>,
  lake:     (p) => <CharPlaceholder {...p} color="#3B9EE8"/>,
  river:    (p) => <CharPlaceholder {...p} color="#2272B6"/>,
  prairie:  (p) => <CharPlaceholder {...p} color="#8FBC45"/>,
  sky:      (p) => <CharPlaceholder {...p} color="#DDF0FC"/>,
};
function ItemCharacter({ itemId, size=96 }) {
  const C = CHAR_MAP[itemId];
  return C ? <C size={size}/> : <CharPlaceholder size={size}/>;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SCHEMA & CONSTANTS                                          ║
// ╚══════════════════════════════════════════════════════════════╝
const SCHEMA_VERSION = 5;
const STORAGE_KEY    = "gabi_app_v5";

const BLUE = {
  deepest: "#0D2D4F", dark: "#1A4A7A", mid: "#2272B6",
  bright: "#3B9EE8", light: "#A8D4F5", pale: "#DDF0FC",
  sky: "#EAF6FF", gold: "#F4B942", goldDark: "#C8860A",
};

const RANKS = [
  { min: 0,  label: "Seedling",       emoji: "🌱", color: "#4A8A4A" },
  { min: 1,  label: "Cub Ranger",     emoji: "🐾", color: BLUE.mid  },
  { min: 5,  label: "Trail Ranger",   emoji: "🌲", color: BLUE.dark },
  { min: 12, label: "Junior Ranger",  emoji: "⭐", color: "#7B3FA0" },
  { min: 25, label: "Montana Ranger", emoji: "🏅", color: BLUE.goldDark },
];
const getRank = (n) => [...RANKS].reverse().find(r => n >= r.min) || RANKS[0];

// Daily challenge helpers
function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
function getDailyGoal(totalFound) {
  if (totalFound >= 20) return 3;
  if (totalFound >= 10) return 2;
  return 1;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  LOCATION PACK — MONTANA                                     ║
// ╚══════════════════════════════════════════════════════════════╝
const MONTANA_PACK = {
  id: "montana", name: "Montana", tagline: "Big Sky Country",
  emoji: "🏔️", available: true,
  zones: [
    {
      id: "wildlife", label: "Wildlife", emoji: "🐾",
      color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky,
      items: [
        { id: "grizzly", name: "Grizzly Bear",  emoji: "🐻", fact: "Grizzlies can smell food from 20 miles away!",           letters: "BEAR"  },
        { id: "bison",   name: "Bison",         emoji: "🦬", fact: "Bison can run 40 mph — faster than a horse!",            letters: "BISON" },
        { id: "elk",     name: "Elk",           emoji: "🦌", fact: "A male elk's antlers can grow an inch every day!",       letters: "ELK"   },
        { id: "moose",   name: "Moose",         emoji: "🫎", fact: "Moose are excellent swimmers and love water plants!",    letters: "MOOSE" },
        { id: "wolf",    name: "Gray Wolf",     emoji: "🐺", fact: "Wolves howl to talk to their pack from miles away!",    letters: "WOLF"  },
        { id: "fox",     name: "Red Fox",       emoji: "🦊", fact: "Foxes use their fluffy tails as a warm blanket!",       letters: "FOX"   },
        { id: "beaver",  name: "Beaver",        emoji: "🦫", fact: "Beavers build dams to make their very own ponds!",      letters: "BEAVER"},
        { id: "eagle",   name: "Bald Eagle",    emoji: "🦅", fact: "Eagles can spot a rabbit from 2 miles in the sky!",    letters: "EAGLE" },
      ],
    },
    {
      id: "birds", label: "Birds", emoji: "🐦",
      color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF",
      items: [
        { id: "owl",    name: "Great Horned Owl",    emoji: "🦉",  fact: "Owls can turn their heads almost all the way around!", letters: "OWL"   },
        { id: "hawk",   name: "Red-tailed Hawk",     emoji: "🦅",  fact: "Hawks make the screaming sound you hear in movies!",   letters: "HAWK"  },
        { id: "heron",  name: "Great Blue Heron",    emoji: "🐦",  fact: "Herons stand super still to sneak up on fish!",        letters: "HERON" },
        { id: "duck",   name: "Mallard Duck",        emoji: "🦆",  fact: "Duck feathers are waterproof — they never get soggy!", letters: "DUCK"  },
        { id: "magpie", name: "Black-billed Magpie", emoji: "🐦‍⬛", fact: "Magpies are one of the smartest birds in the world!",  letters: "PIE"   },
      ],
    },
    {
      id: "plants", label: "Plants & Flowers", emoji: "🌸",
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
      items: [
        { id: "rose",     name: "Wild Rose",      emoji: "🌹", fact: "Wild roses are Montana's state flower!",                  letters: "ROSE"  },
        { id: "lupine",   name: "Lupine",         emoji: "💜", fact: "Lupine flowers look like little purple rockets!",          letters: "LUPINE"},
        { id: "fireweed", name: "Fireweed",       emoji: "🌺", fact: "Fireweed is the FIRST plant to grow after a forest fire!", letters: "WEED"  },
        { id: "pine",     name: "Ponderosa Pine", emoji: "🌲", fact: "Ponderosa pine bark smells like butterscotch candy!",     letters: "PINE"  },
        { id: "fern",     name: "Fern",           emoji: "🌿", fact: "Ferns are older than dinosaurs — they're ancient!",       letters: "FERN"  },
        { id: "sage",     name: "Sagebrush",      emoji: "🌾", fact: "Sagebrush smells amazing after rain!",                    letters: "SAGE"  },
      ],
    },
    {
      id: "landscape", label: "Landscapes", emoji: "🏔️",
      color: BLUE.deepest, accent: BLUE.mid, bg: BLUE.pale,
      items: [
        { id: "mountain", name: "Rocky Mountains", emoji: "🏔️", fact: "Some Montana mountains are over 12,000 feet tall!",        letters: "ROCK"  },
        { id: "glacier",  name: "Glacier",         emoji: "🧊", fact: "Glaciers are giant rivers of ice that move super slowly!", letters: "ICE"   },
        { id: "lake",     name: "Mountain Lake",   emoji: "🏞️", fact: "Montana has over 3,000 named lakes!",                     letters: "LAKE"  },
        { id: "river",    name: "River",           emoji: "🌊", fact: "Montana rivers are home to the famous rainbow trout!",    letters: "RIVER" },
        { id: "prairie",  name: "Prairie",         emoji: "🌾", fact: "Montana's prairies stretch farther than you can see!",   letters: "GRASS" },
        { id: "sky",      name: "Big Sky",         emoji: "☁️", fact: "Montana is 'Big Sky Country' — look up at that sky!",    letters: "SKY"   },
      ],
    },
  ],
  bonusWords: [
    { id: "car",    name: "Car",          emoji: "🚗", letters: "CAR",   category: "Trip"     },
    { id: "plane",  name: "Airplane",     emoji: "✈️", letters: "PLANE", category: "Trip"     },
    { id: "bag",    name: "Bag",          emoji: "🎒", letters: "BAG",   category: "Trip"     },
    { id: "map",    name: "Map",          emoji: "🗺️", letters: "MAP",   category: "Trip"     },
    { id: "tent",   name: "Tent",         emoji: "⛺", letters: "TENT",  category: "Trip"     },
    { id: "road",   name: "Road",         emoji: "🛣️", letters: "ROAD",  category: "Trip"     },
    { id: "camp",   name: "Camp",         emoji: "🏕️", letters: "CAMP",  category: "Trip"     },
    { id: "park",   name: "Park",         emoji: "🌲", letters: "PARK",  category: "Trip"     },
    { id: "trail",  name: "Trail",        emoji: "🥾", letters: "TRAIL", category: "Trip"     },
    { id: "tour",   name: "Tour",         emoji: "📸", letters: "TOUR",  category: "Trip"     },
    { id: "fish",   name: "Fish",         emoji: "🐟", letters: "FISH",  category: "Fishing"  },
    { id: "rod",    name: "Fishing Rod",  emoji: "🎣", letters: "ROD",   category: "Fishing"  },
    { id: "hook",   name: "Hook",         emoji: "🪝", letters: "HOOK",  category: "Fishing"  },
    { id: "trout",  name: "Trout",        emoji: "🐠", letters: "TROUT", category: "Fishing"  },
    { id: "bass",   name: "Bass",         emoji: "🐡", letters: "BASS",  category: "Fishing"  },
    { id: "net",    name: "Net",          emoji: "🥅", letters: "NET",   category: "Fishing"  },
    { id: "worm",   name: "Worm",         emoji: "🪱", letters: "WORM",  category: "Fishing"  },
    { id: "cast",   name: "Cast",         emoji: "🎣", letters: "CAST",  category: "Fishing"  },
    { id: "reel",   name: "Reel",         emoji: "🔄", letters: "REEL",  category: "Fishing"  },
    { id: "horse",  name: "Horse",        emoji: "🐴", letters: "HORSE", category: "Horses"   },
    { id: "ride",   name: "Ride",         emoji: "🤠", letters: "RIDE",  category: "Horses"   },
    { id: "barn",   name: "Barn",         emoji: "🏚️", letters: "BARN",  category: "Horses"   },
    { id: "pony",   name: "Pony",         emoji: "🐎", letters: "PONY",  category: "Horses"   },
    { id: "hay",    name: "Hay",          emoji: "🌾", letters: "HAY",   category: "Horses"   },
    { id: "mane",   name: "Mane",         emoji: "🐴", letters: "MANE",  category: "Horses"   },
    { id: "trot",   name: "Trot",         emoji: "🏇", letters: "TROT",  category: "Horses"   },
    { id: "hoof",   name: "Hoof",         emoji: "🐾", letters: "HOOF",  category: "Horses"   },
    { id: "boot",   name: "Boot",         emoji: "👢", letters: "BOOT",  category: "Gear"     },
    { id: "hat",    name: "Hat",          emoji: "🧢", letters: "HAT",   category: "Gear"     },
    { id: "coat",   name: "Coat",         emoji: "🧥", letters: "COAT",  category: "Gear"     },
    { id: "glove",  name: "Glove",        emoji: "🧤", letters: "GLOVE", category: "Gear"     },
    { id: "sun",    name: "Sun",          emoji: "☀️", letters: "SUN",   category: "Nature"   },
    { id: "moon",   name: "Moon",         emoji: "🌙", letters: "MOON",  category: "Nature"   },
    { id: "star",   name: "Star",         emoji: "⭐", letters: "STAR",  category: "Nature"   },
    { id: "cloud",  name: "Cloud",        emoji: "☁️", letters: "CLOUD", category: "Nature"   },
    { id: "rain",   name: "Rain",         emoji: "🌧️", letters: "RAIN",  category: "Nature"   },
    { id: "snow",   name: "Snow",         emoji: "❄️", letters: "SNOW",  category: "Nature"   },
    { id: "tree",   name: "Tree",         emoji: "🌲", letters: "TREE",  category: "Nature"   },
    { id: "fire",   name: "Fire",         emoji: "🔥", letters: "FIRE",  category: "Nature"   },
    { id: "rock",   name: "Rock",         emoji: "🪨", letters: "ROCK",  category: "Nature"   },
    { id: "leaf",   name: "Leaf",         emoji: "🍃", letters: "LEAF",  category: "Nature"   },
  ],
  bonusCategoryMeta: {
    "Trip":     { emoji: "✈️", color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8" },
    "Fishing":  { emoji: "🎣", color: "#1A6E8F", accent: "#2ABBE8", bg: "#E8F8FF" },
    "Horses":   { emoji: "🐴", color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6" },
    "Gear":     { emoji: "🧢", color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3" },
    "Nature":   { emoji: "☀️", color: "#B8860B", accent: "#F4B942", bg: "#FEF9EC" },
  },
  badges: [
    {
      id: "animal_tracker", name: "Animal Tracker", emoji: "🐾",
      desc: "Find 3 wildlife animals", color: BLUE.dark, accent: BLUE.bright,
      check: (d,z) => z[0].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[0].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[0].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "sky_watcher", name: "Sky Watcher", emoji: "🦅",
      desc: "Spot 2 birds in the wild", color: "#1A6E8F", accent: "#2ABBE8",
      check: (d,z) => z[1].items.filter(i=>d[i.id]).length>=2,
      progress: (d,z) => ({cur:Math.min(z[1].items.filter(i=>d[i.id]).length,2),max:2}),
      hint: (d,z) => z[1].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "wildflower_scout", name: "Wildflower Scout", emoji: "🌸",
      desc: "Discover 3 plants or flowers", color: "#2A6B4A", accent: "#3DBF7A",
      check: (d,z) => z[2].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[2].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[2].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "landscape_explorer", name: "Landscape Explorer", emoji: "🏔️",
      desc: "Find 3 Montana landscapes", color: BLUE.deepest, accent: BLUE.mid,
      check: (d,z) => z[3].items.filter(i=>d[i.id]).length>=3,
      progress: (d,z) => ({cur:Math.min(z[3].items.filter(i=>d[i.id]).length,3),max:3}),
      hint: (d,z) => z[3].items.filter(i=>!d[i.id]).slice(0,2).map(i=>i.name).join(", "),
    },
    {
      id: "super_spotter", name: "Super Spotter", emoji: "🌟",
      desc: "Find 10 things total", color: "#7B3FA0", accent: "#B565D6",
      check: (d) => Object.values(d).filter(Boolean).length>=10,
      progress: (d) => ({cur:Math.min(Object.values(d).filter(Boolean).length,10),max:10}),
      hint: () => "Keep exploring all zones!",
    },
    {
      id: "zone_master", name: "Zone Master", emoji: "🎯",
      desc: "Complete any full zone", color: "#8B4513", accent: "#D2691E",
      check: (d,z) => z.some(zone=>zone.items.every(i=>d[i.id])),
      progress: (d,z) => {
        const best=z.reduce((b,zone)=>{const n=zone.items.filter(i=>d[i.id]).length;return n>b.n?{n,total:zone.items.length}:b},{n:0,total:1});
        return {cur:best.n,max:best.total};
      },
      hint: (d,z) => {
        const c=[...z].sort((a,b)=>(b.items.filter(i=>d[i.id]).length/b.items.length)-(a.items.filter(i=>d[i.id]).length/a.items.length))[0];
        return `${c.label} is your closest!`;
      },
    },
    {
      id: "montana_ranger", name: "Montana Ranger", emoji: "🏅",
      desc: "Find all 25 things in Montana!", color: BLUE.goldDark, accent: BLUE.gold,
      check: (d,z) => z.flatMap(zone=>zone.items).every(i=>d[i.id]),
      progress: (d,z) => {const all=z.flatMap(zone=>zone.items);return {cur:all.filter(i=>d[i.id]).length,max:all.length};},
      hint: () => "Find everything — you can do it!",
    },
  ],
};

const AIRPORT_PACK = { id:"airport",name:"Airport Hunt",tagline:"Let's explore the airport!",emoji:"✈️",available:false,zones:[],badges:[],bonusWords:[],bonusCategoryMeta:{} };
const PACKS = { montana: MONTANA_PACK, airport: AIRPORT_PACK };

// ╔══════════════════════════════════════════════════════════════╗
// ║  APP CONTEXT + REDUCER                                       ║
// ╚══════════════════════════════════════════════════════════════╝
const DEFAULT_STATE = {
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

function migrateSave(saved) {
  if (saved.schemaVersion === 3) {
    return { ...DEFAULT_STATE, ...saved, schemaVersion: 5, dailyChallenge: DEFAULT_STATE.dailyChallenge, parentUnlocked: false, gamesProgress: DEFAULT_STATE.gamesProgress };
  }
  if (saved.schemaVersion === 4) {
    return { ...DEFAULT_STATE, ...saved, schemaVersion: 5, gamesProgress: DEFAULT_STATE.gamesProgress };
  }
  return { ...DEFAULT_STATE, ...saved };
}

function loadState() {
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

function saveState(state) {
  try {
    const { celebrating, newBadgeCount, parentUnlocked, ...p } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

function appReducer(state, action) {
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

const AppContext = createContext(null);
const useApp = () => useContext(AppContext);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, null, loadState);
  useEffect(() => { saveState(state); }, [state]);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  AUDIO ENGINE                                                ║
// ╚══════════════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════╗
// ║  LANGUAGE STRINGS & useT HOOK                                ║
// ╚══════════════════════════════════════════════════════════════╝
const STRINGS = {
  en: {
    // Header
    subtitle: "Montana Journal",
    // Nav tabs
    home: "Home", guide: "Guide", missions: "Missions",
    spelling: "Spelling", math: "Math", games: "Games", journal: "Journal",
    // Ranks
    rank0: "Seedling", rank1: "Cub Ranger", rank2: "Trail Ranger",
    rank3: "Junior Ranger", rank4: "Montana Ranger",
    // Home
    welcomeBack: "WELCOME BACK,", dayOf: "DAY {n} OF YOUR ADVENTURE",
    startExploring: "Tap Field Guide to start exploring Montana!",
    foundSoFar: "{found} of {total} things found · {badges} badges earned",
    whereNext: "Where to next?", recentFinds: "Recent Finds",
    airportHunt: "Airport Hunt", comingSoon: "Coming soon!",
    // Field Guide
    spotSomething: "Spot something? Tap its card to learn more, then stamp",
    iFoundIt: "I Found It!",
    foundIt: "✓ FOUND!", alreadyFound: "✓ Already in your Journal!",
    rangerFact: "RANGER FACT", spellIt: "SPELL IT:",
    learnMore: "Learn more", readMore: "Read more",
    zoneComplete: "Zone Complete!",
    zoneCompleteDesc: "Amazing! You found every {zone}!",
    stillOutThere: "{n} still out there!",
    discovered: "{found} of {total} discovered",
    stampedJournal: "✓ Stamped in your Journal!",
    // Missions
    currentRank: "CURRENT RANK", activeMissions: "Active Missions",
    trophyShelf: "Trophy Shelf", lookFor: "Look for:",
    earned: "EARNED!", badgeUnlocked: "BADGE UNLOCKED!",
    woohoo: "Woohoo! 🎉",
    // Spelling
    wordSpotter: "WORD SPOTTER", whichOneIs: "Which one is the",
    tapRightPicture: "Tap the right picture!",
    youGotItSpell: "You got it! Now let's spell it!",
    awesome: "Awesome! ⭐",
    wordsToLearn: "{n} words · tap any to play!",
    // Math
    howManyDoYouSee: "How many do you see? 👀",
    addThem: "Add them together! ➕",
    howManyLeft: "How many are left? 🤔",
    countIt: "Count It!", addItUp: "Add It Up!", takeAway: "Take Away!",
    correct: "correct", streak: "streak", mathStars: "math stars",
    toStar: "{n} to ⭐", justMore: "Just {n} more correct to earn a Math Star!",
    // Journal
    myStats: "My Stats", map: "Map", timeline: "Timeline",
    isA: "{name} IS A", dayOfAdventure: "Day {n} of your Montana adventure",
    thingsFound: "Things Found", badgesEarned: "Badges Earned",
    mathCorrect: "Math Correct", wordsPracticed: "Words Practiced",
    myAdventureReport: "My Adventure Report",
    almostRank: "Almost {rank}!",
    findMoreToLevel: "Find {n} more thing{s} to level up!",
    journalEmpty: "Your journal is empty!",
    journalEmptyDesc: "Head to the Field Guide and start finding things!",
    everyTimeYouFind: "Every time you find something, it lights up on the map! ✨",
    foundOnMap: "{found} of {total} things found!",
    // Daily challenge
    todaysChallenge: "TODAY'S CHALLENGE",
    challengeDone: "Amazing! You found {n} thing{s} today!",
    challengeGoal: "Find {goal} thing{s} today — {left} to go!",
    // Progress export
    adventureReport: "My Adventure Report",
    shareAdventure: "Share My Adventure",
    printKeepsake: "Print as Keepsake",
    dayN: "Day {n} of Montana",
    discoveries: "DISCOVERIES",
    madeWith: "Gabi Aventuras 🌟",
    // Parent mode
    parentMode: "Parent Mode",
    manageAdventure: "Manage {name}'s adventure",
    customDiscoveries: "Custom Discoveries",
    addSomething: "Add something to find",
    pickEmoji: "Pick an emoji:",
    whatShouldFind: "What should {name} find?",
    cancel: "Cancel", addIt: "Add It!",
    resetProgress: "Reset Progress",
    resetAll: "Reset all progress",
    resetConfirm: "Are you sure? This will erase everything!",
    yesReset: "Yes, Reset",
    // Onboarding
    hiThere: "Hi there!", whatsYourName: "What's your name?",
    thatsMe: "That's me! ⭐",
    whereGoing: "Where are you going?", pickAdventure: "Pick your adventure!",
    letsGo: "Let's go! ✈️", moreAdventures: "More adventures coming soon!",
    youAreNowA: "🎉 YOU ARE NOW A 🎉",
    rangerName: "RANGER {name}!",
    adventureBegins: "Your Montana adventure begins now. Find animals, earn badges, and explore Big Sky Country!",
    startExploringBtn: "Start Exploring! 🌲",
    // Games
    worldGames: "World Games", juegosDelMundo: "Juegos del Mundo · 4 games to explore!",
    usStates: "US States", usStatesEs: "Estados de EE.UU.",
    learnAllStates: "Learn all 50 state flags!", learnAllStatesEs: "¡Aprende las 50 banderas!",
    worldFlags: "World Flags", worldFlagsEs: "Banderas del Mundo",
    flagsAllContinents: "Flags from every continent!", flagsAllContinentsEs: "¡Banderas de todos los continentes!",
    spotFood: "Spot the Food", spotFoodEs: "Identifica la Comida",
    spotFoodDesc: "Find the right food from 3 choices!", spotFoodDescEs: "¡Encuentra la comida correcta!",
    matchFood: "Match the Food", matchFoodEs: "Une la Comida",
    matchFoodDesc: "Match each food to its country!", matchFoodDescEs: "¡Une cada comida con su país!",
    didYouKnow: "DID YOU KNOW?",
    worldFact: "There are 195 countries in the world — each with its own flag, food, and language!",
    worldFactEs: "¡Hay 195 países en el mundo, cada uno con su propia bandera, comida e idioma!",
    ofLearned: "of {n} learned", ofTasted: "of {n} tasted", complete: "complete ⭐",
    whichFlagIs: "Which flag is this?", tapRightName: "Tap the right name!",
    abbreviation: "Abbreviation:", capital: "Capital:",
    spellItBtn: "Spell It! ✏️", nextArrow: "Next →", nextFlag: "Next Flag! 🌍",
    whichOneIsFood: "Which one is the", fromCountry: "from",
    whichCountry: "Which country is this food from?",
    youGotItFood: "You got it!", nextFood: "Next Food! 🍽️",
    isFrom: "{food} is from", correctBang: "Correct!",
  },
  es: {
    subtitle: "Diario de Montana",
    home: "Inicio", guide: "Guía", missions: "Misiones",
    spelling: "Letras", math: "Mates", games: "Juegos", journal: "Diario",
    rank0: "Semilla", rank1: "Cub Guardabosque", rank2: "Guardabosque de Sendero",
    rank3: "Guardabosque Junior", rank4: "Guardabosque de Montana",
    welcomeBack: "BIENVENIDA,", dayOf: "DÍA {n} DE TU AVENTURA",
    startExploring: "¡Toca la Guía de Campo para explorar Montana!",
    foundSoFar: "{found} de {total} cosas encontradas · {badges} insignias",
    whereNext: "¿A dónde vamos?", recentFinds: "Encuentros Recientes",
    airportHunt: "Búsqueda en Aeropuerto", comingSoon: "¡Próximamente!",
    spotSomething: "¿Ves algo? Toca su tarjeta para aprender más, luego marca",
    iFoundIt: "¡Lo Encontré!",
    foundIt: "✓ ¡ENCONTRADO!", alreadyFound: "✓ ¡Ya está en tu Diario!",
    rangerFact: "DATO DEL GUARDABOSQUE", spellIt: "ESCRÍBELO:",
    learnMore: "Aprender más", readMore: "Leer más",
    zoneComplete: "¡Zona Completa!",
    zoneCompleteDesc: "¡Increíble! ¡Encontraste todo en {zone}!",
    stillOutThere: "¡{n} por encontrar!",
    discovered: "{found} de {total} descubiertos",
    stampedJournal: "✓ ¡Marcado en tu Diario!",
    currentRank: "RANGO ACTUAL", activeMissions: "Misiones Activas",
    trophyShelf: "Estante de Trofeos", lookFor: "Busca:",
    earned: "¡GANADA!", badgeUnlocked: "¡INSIGNIA DESBLOQUEADA!",
    woohoo: "¡Yupi! 🎉",
    wordSpotter: "BUSCADOR DE PALABRAS", whichOneIs: "¿Cuál es",
    tapRightPicture: "¡Toca la imagen correcta!",
    youGotItSpell: "¡Lo lograste! ¡Ahora escríbelo!",
    awesome: "¡Genial! ⭐",
    wordsToLearn: "{n} palabras · ¡toca cualquiera para jugar!",
    howManyDoYouSee: "¿Cuántos ves? 👀",
    addThem: "¡Súmalos! ➕",
    howManyLeft: "¿Cuántos quedan? 🤔",
    countIt: "¡Cuenta!", addItUp: "¡Suma!", takeAway: "¡Resta!",
    correct: "correctas", streak: "seguidas", mathStars: "estrellas de mates",
    toStar: "{n} para ⭐", justMore: "¡Solo {n} más para ganar una Estrella de Mates!",
    myStats: "Mis Estadísticas", map: "Mapa", timeline: "Línea de tiempo",
    isA: "{name} ES", dayOfAdventure: "Día {n} de tu aventura en Montana",
    thingsFound: "Cosas Encontradas", badgesEarned: "Insignias Ganadas",
    mathCorrect: "Mates Correctas", wordsPracticed: "Palabras Practicadas",
    myAdventureReport: "Mi Reporte de Aventura",
    almostRank: "¡Casi eres {rank}!",
    findMoreToLevel: "¡Encuentra {n} cosa{s} más para subir de nivel!",
    journalEmpty: "¡Tu diario está vacío!",
    journalEmptyDesc: "¡Ve a la Guía de Campo y empieza a encontrar cosas!",
    everyTimeYouFind: "¡Cada vez que encuentres algo, se ilumina en el mapa! ✨",
    foundOnMap: "¡{found} de {total} cosas encontradas!",
    todaysChallenge: "DESAFÍO DE HOY",
    challengeDone: "¡Increíble! ¡Encontraste {n} cosa{s} hoy!",
    challengeGoal: "¡Encuentra {goal} cosa{s} hoy — {left} más!",
    adventureReport: "Mi Reporte de Aventura",
    shareAdventure: "Compartir Mi Aventura",
    printKeepsake: "Imprimir como Recuerdo",
    dayN: "Día {n} en Montana",
    discoveries: "DESCUBRIMIENTOS",
    madeWith: "Gabi Aventuras 🌟",
    parentMode: "Modo Padres",
    manageAdventure: "Gestionar la aventura de {name}",
    customDiscoveries: "Descubrimientos Personalizados",
    addSomething: "Agrega algo para encontrar",
    pickEmoji: "Elige un emoji:",
    whatShouldFind: "¿Qué debe encontrar {name}?",
    cancel: "Cancelar", addIt: "¡Agregar!",
    resetProgress: "Reiniciar Progreso",
    resetAll: "Reiniciar todo el progreso",
    resetConfirm: "¿Estás seguro? ¡Esto borrará todo!",
    yesReset: "Sí, Reiniciar",
    hiThere: "¡Hola!", whatsYourName: "¿Cómo te llamas?",
    thatsMe: "¡Ese soy yo! ⭐",
    whereGoing: "¿A dónde vas?", pickAdventure: "¡Elige tu aventura!",
    letsGo: "¡Vamos! ✈️", moreAdventures: "¡Más aventuras próximamente!",
    youAreNowA: "🎉 AHORA ERES 🎉",
    rangerName: "¡GUARDABOSQUE {name}!",
    adventureBegins: "¡Tu aventura en Montana comienza ahora. Encuentra animales, gana insignias y explora el País del Gran Cielo!",
    startExploringBtn: "¡Explorar! 🌲",
    worldGames: "Juegos del Mundo", juegosDelMundo: "World Games · ¡4 juegos para explorar!",
    usStates: "Estados de EE.UU.", usStatesEs: "US States",
    learnAllStates: "¡Aprende las 50 banderas de los estados!", learnAllStatesEs: "Learn all 50 state flags!",
    worldFlags: "Banderas del Mundo", worldFlagsEs: "World Flags",
    flagsAllContinents: "¡Banderas de todos los continentes!", flagsAllContinentsEs: "Flags from every continent!",
    spotFood: "Identifica la Comida", spotFoodEs: "Spot the Food",
    spotFoodDesc: "¡Encuentra la comida correcta entre 3 opciones!", spotFoodDescEs: "Find the right food from 3 choices!",
    matchFood: "Une la Comida", matchFoodEs: "Match the Food",
    matchFoodDesc: "¡Une cada comida con su país!", matchFoodDescEs: "Match each food to its country!",
    didYouKnow: "¿SABÍAS QUE?",
    worldFact: "¡Hay 195 países en el mundo, cada uno con su propia bandera, comida e idioma!",
    worldFactEs: "There are 195 countries in the world — each with its own flag, food, and language!",
    ofLearned: "de {n} aprendidas", ofTasted: "de {n} probadas", complete: "completado ⭐",
    whichFlagIs: "¿De qué bandera es esta?", tapRightName: "¡Toca el nombre correcto!",
    abbreviation: "Abreviatura:", capital: "Capital:",
    spellItBtn: "¡Escríbelo! ✏️", nextArrow: "Siguiente →", nextFlag: "¡Siguiente Bandera! 🌍",
    whichOneIsFood: "¿Cuál es", fromCountry: "de",
    whichCountry: "¿De qué país viene esta comida?",
    youGotItFood: "¡Lo lograste!", nextFood: "¡Siguiente Comida! 🍽️",
    isFrom: "{food} es de", correctBang: "¡Correcto!",
  }
};

// Helper to interpolate {vars} in strings
function t(str, vars = {}) {
  if (!str) return "";
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(new RegExp(`\{${k}\}`, "g"), v), str);
}

function useLang() {
  const { state } = useApp();
  const lang = state.lang || "en";
  const S = STRINGS[lang];
  return { lang, S, t };
}

function useAudio() {
  const { state } = useApp();
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

// ╔══════════════════════════════════════════════════════════════╗
// ║  SHARED HELPERS                                              ║
// ╚══════════════════════════════════════════════════════════════╝
function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function getDecoys(correctItem, pack) {
  if (correctItem.category) {
    const same = pack.bonusWords.filter(i => i.category === correctItem.category && i.id !== correctItem.id);
    const other = pack.bonusWords.filter(i => i.id !== correctItem.id);
    return shuffle(same.length >= 2 ? same : other).slice(0, 2);
  }
  const zone = pack.zones.find(z => z.items.some(i => i.id === correctItem.id));
  const sameZone = zone.items.filter(i => i.id !== correctItem.id);
  const other = pack.zones.flatMap(z => z.id !== zone.id ? z.items : []);
  return shuffle([...sameZone, ...other]).slice(0, 2);
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  ONBOARDING                                                  ║
// ╚══════════════════════════════════════════════════════════════╝
const KEYBOARD_ROWS = [
  ["A","B","C","D","E","F","G"],
  ["H","I","J","K","L","M","N"],
  ["O","P","Q","R","S","T","U"],
  ["V","W","X","Y","Z","⌫"],
];

function OnboardingScreen() {
  const { dispatch } = useApp();
  const { S } = useLang();
  const [screen, setScreen] = useState(0); // 0=name, 1=location, 2=badge
  const [name, setName] = useState("");
  const [badgeVisible, setBadgeVisible] = useState(false);

  const handleKey = (k) => {
    if (k === "⌫") setName(n => n.slice(0, -1));
    else if (name.length < 12) setName(n => n + k);
  };

  const handleNameDone = () => {
    if (name.trim().length === 0) return;
    dispatch({ type: "SET_USER_NAME", name: name.trim() });
    setScreen(1);
  };

  const handleLocationPick = () => setScreen(2);

  const handleFinish = () => {
    setTimeout(() => dispatch({ type: "COMPLETE_ONBOARDING" }), 600);
  };

  useEffect(() => {
    if (screen === 2) setTimeout(() => setBadgeVisible(true), 300);
  }, [screen]);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: `linear-gradient(160deg,${BLUE.deepest},${BLUE.dark} 50%,${BLUE.mid})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", maxWidth: 600, margin: "0 auto", overflow: "hidden" }}>
      {/* Stars bg */}
      {[...Array(24)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2 + (i % 3), height: 2 + (i % 3), borderRadius: "50%", background: "white", opacity: 0.2 + (i % 4) * 0.1, pointerEvents: "none" }} />)}

      {/* Screen 0: Name input */}
      {screen === 0 && (
        <div style={{ width: "100%", padding: "60px 24px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 16, animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275)" }}>👋</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 32, letterSpacing: 2, textAlign: "center", marginBottom: 6 }}>{S.hiThere}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 18, textAlign: "center", marginBottom: 28 }}>{S.whatsYourName}</div>

          {/* Name display */}
          <div style={{ minHeight: 64, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
            {name.length === 0 ? (
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "rgba(255,255,255,0.3)", fontSize: 28, letterSpacing: 4 }}>_ _ _ _</div>
            ) : (
              name.split("").map((l, i) => (
                <div key={i} style={{ width: 44, height: 52, borderRadius: 12, background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 24, color: BLUE.deepest, boxShadow: `0 4px 0 ${BLUE.goldDark}`, animation: "popIn 0.25s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{l}</div>
              ))
            )}
          </div>

          {/* Keyboard */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {KEYBOARD_ROWS.map((row, ri) => (
              <div key={ri} style={{ display: "flex", gap: 6, justifyContent: "center" }}>
                {row.map(k => (
                  <button key={k} onClick={() => handleKey(k)}
                    style={{ flex: k === "⌫" ? 1.4 : 1, maxWidth: k === "⌫" ? 60 : 48, height: 44, borderRadius: 12, background: k === "⌫" ? "rgba(255,100,100,0.3)" : "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.2)", color: "white", fontFamily: "'Luckiest Guy',cursive", fontSize: k === "⌫" ? 18 : 16, cursor: "pointer", transition: "all 0.1s" }}
                    onPointerDown={e => e.currentTarget.style.transform = "scale(0.92)"}
                    onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                    onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >{k}</button>
                ))}
              </div>
            ))}
          </div>

          <button onClick={handleNameDone} disabled={name.trim().length === 0}
            style={{ width: "100%", maxWidth: 320, padding: "18px", background: name.trim().length > 0 ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "rgba(255,255,255,0.15)", border: "none", borderRadius: 20, fontFamily: "'Luckiest Guy',cursive", fontSize: 22, color: name.trim().length > 0 ? BLUE.deepest : "rgba(255,255,255,0.4)", cursor: name.trim().length > 0 ? "pointer" : "default", boxShadow: name.trim().length > 0 ? `0 6px 0 ${BLUE.goldDark}` : "none", transition: "all 0.2s" }}
            onPointerDown={e => name.trim().length > 0 && (e.currentTarget.style.transform = "translateY(4px)")}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.thatsMe}</button>
        </div>
      )}

      {/* Screen 1: Location picker */}
      {screen === 1 && (
        <div style={{ width: "100%", padding: "60px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 2, marginBottom: 8, animation: "fadeIn 0.4s ease" }}>Hi, {name}!</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 28, letterSpacing: 1, textAlign: "center", marginBottom: 8 }}>{S.whereGoing}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 16, marginBottom: 32, textAlign: "center" }}>{S.pickAdventure}</div>

          {/* Montana card */}
          <div onClick={handleLocationPick}
            style={{ width: "100%", maxWidth: 340, background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 28, padding: "28px 24px", border: `3px solid ${BLUE.gold}`, boxShadow: `0 0 40px ${BLUE.gold}40,0 12px 40px rgba(0,0,0,0.3)`, cursor: "pointer", textAlign: "center", animation: "slideUp 0.4s cubic-bezier(0.32,0.72,0,1)", transition: "all 0.15s" }}
            onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
            onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ fontSize: 72, marginBottom: 12 }}>🏔️</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 30, letterSpacing: 2 }}>MONTANA</div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 16, marginTop: 4 }}>Big Sky Country</div>
            <div style={{ marginTop: 16, background: BLUE.gold, borderRadius: 14, padding: "10px 20px", display: "inline-block", fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.deepest }}>{S.letsGo}</div>
          </div>

          {/* Coming soon */}
          <div style={{ marginTop: 16, width: "100%", maxWidth: 340, background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "18px 20px", border: "2px dashed rgba(255,255,255,0.2)", textAlign: "center", opacity: 0.6 }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>✈️ 🏖️ 🌴</div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 14 }}>{S.moreAdventures}</div>
          </div>
        </div>
      )}

      {/* Screen 2: Ranger badge */}
      {screen === 2 && (
        <div style={{ width: "100%", padding: "60px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 16, letterSpacing: 3, marginBottom: 16, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s" }}>{S.youAreNowA}</div>
          <div style={{ width: 160, height: 160, borderRadius: "50%", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, boxShadow: `0 0 0 12px ${BLUE.gold}30,0 20px 60px ${BLUE.goldDark}60`, transform: badgeVisible ? "scale(1)" : "scale(0)", transition: "transform 0.6s cubic-bezier(0.175,0.885,0.32,1.275)", marginBottom: 20 }}>🏕️</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 36, letterSpacing: 2, textAlign: "center", opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.3s", marginBottom: 8 }}>{t(S.rangerName, {name: name.toUpperCase()})}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 17, textAlign: "center", lineHeight: 1.6, maxWidth: 280, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.5s", marginBottom: 36 }}>{S.adventureBegins}</div>
          <button onClick={handleFinish}
            style={{ width: "100%", maxWidth: 320, padding: "20px", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, border: "none", borderRadius: 20, fontFamily: "'Luckiest Guy',cursive", fontSize: 24, color: BLUE.deepest, cursor: "pointer", boxShadow: `0 8px 0 ${BLUE.goldDark}`, opacity: badgeVisible ? 1 : 0, transition: "opacity 0.5s 0.7s", letterSpacing: 1 }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(6px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.startExploringBtn}</button>
        </div>
      )}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  DAILY CHALLENGE BANNER                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function DailyChallengeBanner() {
  const { state, dispatch } = useApp();
  const { S } = useLang();
  const { dailyChallenge } = state;
  const todayKey = getTodayKey();
  const isToday = dailyChallenge.dateKey === todayKey;
  const foundToday = isToday ? dailyChallenge.foundToday : 0;
  const goal = dailyChallenge.goal || 1;
  const done = foundToday >= goal;

  return (
    <div style={{ margin: "0 16px 12px", borderRadius: 20, overflow: "hidden", border: done ? `2px solid ${BLUE.gold}` : `2px solid ${BLUE.light}`, boxShadow: done ? `0 4px 20px ${BLUE.gold}30` : "0 2px 10px rgba(13,45,79,0.08)" }}>
      <div style={{ background: done ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : `linear-gradient(135deg,${BLUE.pale},white)`, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 28, flexShrink: 0 }}>{done ? "🏆" : "🎯"}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: done ? BLUE.deepest : BLUE.dark, letterSpacing: 1 }}>{S.todaysChallenge}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: done ? BLUE.deepest : BLUE.mid, marginTop: 2 }}>
{done ? t(S.challengeDone, {n: foundToday, s: foundToday > 1 ? (state.lang==="es" ? "s" : "s") : ""}) : t(S.challengeGoal, {goal, s: goal > 1 ? "s" : "", left: Math.max(0, goal - foundToday)})}
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[...Array(goal)].map((_, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: i < foundToday ? (done ? BLUE.deepest : BLUE.bright) : "rgba(0,0,0,0.12)", border: `2px solid ${i < foundToday ? (done ? BLUE.deepest : BLUE.bright) : "rgba(0,0,0,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>
              {i < foundToday ? "✓" : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  PROGRESS EXPORT                                             ║
// ╚══════════════════════════════════════════════════════════════╝
function ProgressExportSheet({ onClose }) {
  const { state } = useApp();
  const { S } = useLang();
  const { discovered, earnedBadges, mathStats, spellingStars, discoveryLog, dailyChallenge } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const totalBadges = Object.values(earnedBadges).filter(Boolean).length;
  const rank = getRank(totalFound);
  const name = state.userName || "Ranger";
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : 1;

  const shareText = `🏕️ ${name}'s Montana Adventure Report!\n\n` +
    `📍 Day ${tripDay} of the trip\n` +
    `🏅 Rank: ${rank.label}\n` +
    `🔍 Found: ${totalFound} of ${allItems.length} things\n` +
    `🏆 Badges: ${totalBadges} earned\n` +
    `🔢 Math: ${mathStats.total || 0} correct answers\n` +
    `📖 Spelling: ${Object.values(spellingStars).filter(v => v > 0).length} words practiced\n\n` +
    `Found: ${allItems.filter(i => discovered[i.id]).map(i => i.name).join(", ")}\n\n` +
    `Made with Gabi Aventuras 🌟`;

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: `${name}'s Montana Adventure`, text: shareText }); }
      catch {}
    } else {
      navigator.clipboard?.writeText(shareText);
      alert("Copied to clipboard!");
    }
  };

  const handlePrint = () => window.print();

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(13,45,79,0.6)", backdropFilter: "blur(4px)" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 201, background: "white", borderRadius: "28px 28px 0 0", padding: "0 0 48px", maxWidth: 600, margin: "0 auto", animation: "slideUp 0.35s cubic-bezier(0.32,0.72,0,1)", maxHeight: "88vh", overflow: "auto" }}>
        {/* Handle + close */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
          <div style={{ width: 40 }} />
          <div style={{ width: 44, height: 5, borderRadius: 3, background: "#D0DDE8" }} />
          <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: BLUE.pale, border: `2px solid ${BLUE.light}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color={BLUE.mid} /></button>
        </div>

        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 22, letterSpacing: 1, marginBottom: 16, textAlign: "center" }}>{S.adventureReport}</div>

          {/* Summary card — screenshot-friendly */}
          <div id="adventure-card" style={{ background: `linear-gradient(135deg,${BLUE.deepest},${BLUE.dark})`, borderRadius: 24, padding: "24px 20px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
            {[...Array(12)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.25 }} />)}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🏕️</div>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 1 }}>{name.toUpperCase()}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 13 }}>{rank.label} · {t(S.dayN, {n: tripDay})}</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "🔍", label: "Things Found", val: `${totalFound}/${allItems.length}` },
                { icon: "🏆", label: "Badges", val: `${totalBadges}` },
                { icon: "🔢", label: "Math Correct", val: `${mathStats.total || 0}` },
                { icon: "📖", label: "Words Practiced", val: `${Object.values(spellingStars).filter(v => v > 0).length}` },
              ].map(s => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px 14px" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22 }}>{s.val}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 11 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {totalFound > 0 && (
              <div style={{ marginTop: 12, background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 14px" }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>{S.discoveries}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {allItems.filter(i => discovered[i.id]).map(i => (
                    <span key={i.id} style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "2px 8px" }}>{i.emoji} {i.name}</span>
                  ))}
                </div>
              </div>
            )}
            <div style={{ marginTop: 12, fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center" }}>{S.madeWith}</div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button onClick={handleShare} style={{ width: "100%", background: `linear-gradient(135deg,${BLUE.mid},${BLUE.dark})`, color: "white", border: "none", borderRadius: 18, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Share2 size={20} color="white" /> {S.shareAdventure}
            </button>
            <button onClick={handlePrint} style={{ width: "100%", background: BLUE.pale, color: BLUE.dark, border: `2px solid ${BLUE.light}`, borderRadius: 18, padding: "14px", fontFamily: "'Luckiest Guy',cursive", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Printer size={18} color={BLUE.dark} /> {S.printKeepsake}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  PARENT MODE SHEET                                           ║
// ╚══════════════════════════════════════════════════════════════╝
function ParentModeSheet({ onClose }) {
  const { state, dispatch } = useApp();
  const { S } = useLang();
  const [confirmReset, setConfirmReset] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemEmoji, setNewItemEmoji] = useState("⭐");
  const [addMode, setAddMode] = useState(false);

  const handleReset = () => {
    dispatch({ type: "RESET_PROGRESS" });
    dispatch({ type: "LOCK_PARENT" });
    onClose();
  };

  const handleAddItem = () => {
    if (!newItemName.trim()) return;
    const id = `custom_${Date.now()}`;
    dispatch({
      type: "ADD_CUSTOM_ITEM",
      item: { id, name: newItemName.trim(), emoji: newItemEmoji, letters: newItemName.trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0, 8), custom: true }
    });
    setNewItemName("");
    setNewItemEmoji("⭐");
    setAddMode(false);
  };

  const EMOJI_OPTIONS = ["⭐","🌟","🐾","🌲","🏔️","🦋","🐦","🌸","🍎","🎒","🚗","✈️","🏕️","🐴","🎣"];

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(13,45,79,0.65)", backdropFilter: "blur(4px)" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 301, background: "white", borderRadius: "28px 28px 0 0", padding: "0 0 48px", maxWidth: 600, margin: "0 auto", animation: "slideUp 0.35s cubic-bezier(0.32,0.72,0,1)", maxHeight: "85vh", overflow: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
          <div style={{ width: 40 }} />
          <div style={{ width: 44, height: 5, borderRadius: 3, background: "#D0DDE8" }} />
          <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: BLUE.pale, border: `2px solid ${BLUE.light}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color={BLUE.mid} /></button>
        </div>
        <div style={{ height: 4, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`, margin: "10px 0 0" }} />

        <div style={{ padding: "20px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: `${BLUE.gold}20`, display: "flex", alignItems: "center", justifyContent: "center" }}><Settings size={24} color={BLUE.goldDark} /></div>
            <div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 20, letterSpacing: 1 }}>{S.parentMode}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: "#8BA0B8", fontSize: 13 }}>{t(S.manageAdventure, {name: state.userName || "Ranger"})}</div>
            </div>
          </div>

          {/* Custom items section */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 15, letterSpacing: 1, marginBottom: 10 }}>{S.customDiscoveries}</div>
            {state.customItems.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
                {state.customItems.map(item => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 10, background: BLUE.pale, borderRadius: 14, padding: "10px 14px", border: `1.5px solid ${BLUE.light}` }}>
                    <span style={{ fontSize: 24 }}>{item.emoji}</span>
                    <div style={{ flex: 1, fontFamily: "'Patrick Hand',cursive", fontSize: 15, color: BLUE.dark }}>{item.name}</div>
                    <button onClick={() => dispatch({ type: "REMOVE_CUSTOM_ITEM", itemId: item.id })} style={{ width: 32, height: 32, borderRadius: "50%", background: "#FFE8E8", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <X size={14} color="#E74C3C" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {!addMode ? (
              <button onClick={() => setAddMode(true)} style={{ width: "100%", padding: "12px", background: "white", border: `2px dashed ${BLUE.light}`, borderRadius: 14, fontFamily: "'Patrick Hand',cursive", fontSize: 15, color: BLUE.mid, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Plus size={18} color={BLUE.mid} /> {S.addSomething}
              </button>
            ) : (
              <div style={{ background: BLUE.sky, borderRadius: 16, padding: "16px", border: `2px solid ${BLUE.light}` }}>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: BLUE.mid, marginBottom: 8 }}>{S.pickEmoji}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {EMOJI_OPTIONS.map(e => (
                    <button key={e} onClick={() => setNewItemEmoji(e)} style={{ width: 36, height: 36, borderRadius: 10, background: newItemEmoji === e ? BLUE.mid : "white", border: `2px solid ${newItemEmoji === e ? BLUE.mid : BLUE.light}`, fontSize: 20, cursor: "pointer" }}>{e}</button>
                  ))}
                </div>
                <input
                  value={newItemName}
                  onChange={e => setNewItemName(e.target.value)}
                  placeholder={t(S.whatShouldFind, {name: state.userName || "Gabi"})}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: `2px solid ${BLUE.light}`, fontFamily: "'Patrick Hand',cursive", fontSize: 16, color: BLUE.dark, background: "white", marginBottom: 10, outline: "none", boxSizing: "border-box" }}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setAddMode(false)} style={{ flex: 1, padding: "10px", background: "#F0F5FA", border: "none", borderRadius: 12, fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: BLUE.mid, cursor: "pointer" }}>{S.cancel}</button>
                  <button onClick={handleAddItem} disabled={!newItemName.trim()} style={{ flex: 2, padding: "10px", background: newItemName.trim() ? `linear-gradient(135deg,${BLUE.mid},${BLUE.dark})` : "#D0DDE8", border: "none", borderRadius: 12, fontFamily: "'Luckiest Guy',cursive", fontSize: 15, color: newItemName.trim() ? "white" : "#A0B0C0", cursor: newItemName.trim() ? "pointer" : "default" }}>{S.addIt}</button>
                </div>
              </div>
            )}
          </div>

          {/* Reset */}
          <div style={{ borderTop: `2px solid ${BLUE.pale}`, paddingTop: 16 }}>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#C0392B", fontSize: 15, letterSpacing: 1, marginBottom: 8 }}>{S.resetProgress}</div>
            {!confirmReset ? (
              <button onClick={() => setConfirmReset(true)} style={{ width: "100%", padding: "14px", background: "#FFF0F0", border: "2px solid #FFB3B3", borderRadius: 14, fontFamily: "'Patrick Hand',cursive", fontSize: 15, color: "#C0392B", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Trash2 size={18} color="#C0392B" /> {S.resetAll}
              </button>
            ) : (
              <div style={{ background: "#FFF0F0", borderRadius: 14, padding: "16px", border: "2px solid #FFB3B3" }}>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 15, color: "#C0392B", marginBottom: 12, textAlign: "center" }}>{S.resetConfirm}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setConfirmReset(false)} style={{ flex: 1, padding: "12px", background: "white", border: `2px solid ${BLUE.light}`, borderRadius: 12, fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: BLUE.dark, cursor: "pointer" }}>{S.cancel}</button>
                  <button onClick={handleReset} style={{ flex: 1, padding: "12px", background: "#C0392B", border: "none", borderRadius: 12, fontFamily: "'Luckiest Guy',cursive", fontSize: 15, color: "white", cursor: "pointer" }}>{S.yesReset}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SHARED COMPONENTS                                           ║
// ╚══════════════════════════════════════════════════════════════╝
function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({ id: i, x: Math.random() * 100, delay: Math.random() * 0.8, dur: 1.8 + Math.random() * 1.2, size: 6 + Math.random() * 10, color: [BLUE.gold, BLUE.bright, "#FF6B9D", "#7AE8A0", "white", BLUE.light, "#FFB347"][i % 7], rotate: Math.random() * 360, drift: (Math.random() - 0.5) * 120 }));
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 299, pointerEvents: "none", overflow: "hidden" }}>
      {pieces.map(p => <div key={p.id} style={{ position: "absolute", left: `${p.x}%`, top: -20, width: p.size, height: p.size, background: p.color, borderRadius: p.id % 3 === 0 ? "50%" : p.id % 3 === 1 ? "2px" : "0", animation: `confettiFall ${p.dur}s ${p.delay}s ease-in forwards`, transform: `rotate(${p.rotate}deg)`, "--drift": `${p.drift}px` }} />)}
      <style>{`@keyframes confettiFall{0%{transform:translateY(0) translateX(0) rotate(0deg);opacity:1}100%{transform:translateY(110vh) translateX(var(--drift)) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}

function BadgeCelebration({ badge, onDone }) {
  const { S } = useLang();
  return (
    <>{<Confetti />}
      <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,45,79,0.75)", backdropFilter: "blur(8px)", animation: "fadeIn 0.3s ease" }}>
        <div style={{ background: "white", borderRadius: 32, padding: "44px 36px 36px", textAlign: "center", maxWidth: 340, width: "88%", boxShadow: `0 40px 100px rgba(0,0,0,0.4),0 0 0 6px ${badge.accent}60`, animation: "badgeSlam 0.5s cubic-bezier(0.175,0.885,0.32,1.275)", position: "relative" }}>
          <div style={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`, borderRadius: 30, padding: "6px 24px", fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: "white", letterSpacing: 2, border: "3px solid white", whiteSpace: "nowrap" }}>{S.badgeUnlocked}</div>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg,${badge.accent},${badge.color})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 56, boxShadow: `0 0 0 8px ${badge.accent}30,0 12px 40px ${badge.color}60`, animation: "badgePulse 1.5s ease-in-out infinite" }}>{badge.emoji}</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 28, color: badge.color, letterSpacing: 1, marginBottom: 8 }}>{badge.name}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 16, color: BLUE.dark, lineHeight: 1.5, marginBottom: 24, background: BLUE.sky, borderRadius: 14, padding: "12px 16px" }}>{badge.desc}</div>
          <button onClick={onDone} style={{ width: "100%", background: `linear-gradient(135deg,${badge.accent},${badge.color})`, color: "white", border: "none", borderRadius: 20, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 22, letterSpacing: 1, cursor: "pointer", boxShadow: `0 6px 0 ${badge.color}` }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(5px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.woohoo}</button>
        </div>
      </div>
      <style>{`@keyframes badgeSlam{from{transform:scale(0.1) rotate(-15deg);opacity:0}70%{transform:scale(1.08) rotate(2deg)}to{transform:scale(1) rotate(0deg);opacity:1}}@keyframes badgePulse{0%,100%{box-shadow:0 0 0 8px ${badge.accent}30,0 12px 40px ${badge.color}60}50%{box-shadow:0 0 0 16px ${badge.accent}18,0 12px 40px ${badge.color}80}}`}</style>
    </>
  );
}


// ╔══════════════════════════════════════════════════════════════╗
// ║  LANGUAGE TOGGLE BUTTON                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function LangToggle() {
  const { state, dispatch } = useApp();
  const lang = state.lang || "en";
  return (
    <button
      onClick={() => dispatch({ type: "SET_LANG", lang: lang === "en" ? "es" : "en" })}
      style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 20, padding: "4px 10px", cursor: "pointer", gap: 4, height: 36 }}
    >
      <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: lang === "en" ? "white" : "rgba(255,255,255,0.45)", letterSpacing: 0.5, transition: "color 0.2s" }}>EN</span>
      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>|</span>
      <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: lang === "es" ? "white" : "rgba(255,255,255,0.45)", letterSpacing: 0.5, transition: "color 0.2s" }}>ES</span>
    </button>
  );
}

function MuteButton() {
  const { state, dispatch } = useApp();
  return (
    <button onClick={() => dispatch({ type: "SET_MUTED", muted: !state.muted })} title={state.muted ? "Unmute" : "Mute"}
      style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
    >{state.muted ? <VolumeX size={16} color="white" /> : <Volume2 size={16} color="white" />}</button>
  );
}

function BottomNav() {
  const { state, dispatch } = useApp();
  const { activeTab, newBadgeCount } = state;
  const { S } = useLang();
  const tabs = [
    { id: "home",     label: S.home,     Icon: Home },
    { id: "guide",    label: S.guide,    Icon: Search },
    { id: "missions", label: S.missions, Icon: Trophy },
    { id: "spelling", label: S.spelling, Icon: BookOpen },
    { id: "math",     label: S.math,     Icon: Calculator },
    { id: "games",    label: S.games,    Icon: Gamepad2 },
    { id: "journal",  label: S.journal,  Icon: BookMarked },
  ];
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90, background: "white", borderTop: `2px solid ${BLUE.pale}`, display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch", boxShadow: "0 -4px 24px rgba(13,45,79,0.12)", maxWidth: 600, margin: "0 auto", paddingBottom: "env(safe-area-inset-bottom)", scrollbarWidth: "none" }}>
      {tabs.map(tab => {
        const active = activeTab === tab.id;
        const showBadge = tab.id === "missions" && newBadgeCount > 0;
        return (
          <button key={tab.id} onClick={() => dispatch({ type: "SET_TAB", tab: tab.id })} style={{ flex: 1, padding: "10px 2px 8px", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, position: "relative" }}>
            {active && <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 3, background: `linear-gradient(90deg,${BLUE.mid},${BLUE.bright})`, borderRadius: "0 0 4px 4px" }} />}
            <div style={{ position: "relative" }}>
              <tab.Icon size={22} color={active ? BLUE.mid : "#8BA0B8"} strokeWidth={active ? 2.5 : 1.8} />
              {showBadge && <div style={{ position: "absolute", top: -5, right: -8, background: "#FF4757", color: "white", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, border: "2px solid white" }}>{newBadgeCount}</div>}
            </div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 9, letterSpacing: 0.3, color: active ? BLUE.mid : "#8BA0B8" }}>{tab.label}</div>
          </button>
        );
      })}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  FIELD GUIDE TAB                                             ║
// ╚══════════════════════════════════════════════════════════════╝
function DetailSheet({ item, zone, onClose }) {
  const { state, dispatch } = useApp();
  const { S } = useLang();
  const { speakFound } = useAudio();
  const [pressing, setPressing] = useState(false);
  const [justFound, setJustFound] = useState(false);
  const handleFound = () => { setJustFound(true); speakFound(item.name); setTimeout(() => { dispatch({ type: "DISCOVER_ITEM", itemId: item.id }); onClose(); }, 900); };
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(13,45,79,0.5)", backdropFilter: "blur(4px)", animation: "fadeIn 0.2s ease" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 101, background: "white", borderRadius: "28px 28px 0 0", padding: "0 0 40px", boxShadow: "0 -12px 60px rgba(13,45,79,0.25)", animation: "slideUp 0.35s cubic-bezier(0.32,0.72,0,1)", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
          <div style={{ width: 40 }} />
          <div style={{ width: 44, height: 5, borderRadius: 3, background: "#D0DDE8" }} />
          <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: BLUE.pale, border: `2px solid ${BLUE.light}`, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color={BLUE.mid} /></button>
        </div>
        <div style={{ height: 6, margin: "10px 0 0", background: `linear-gradient(90deg,${zone.color},${zone.accent})` }} />
        <div style={{ textAlign: "center", padding: "24px 24px 0", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", transform: justFound ? "scale(1.1)" : "scale(1)", transition: "transform 0.3s" }}><ItemCharacter itemId={item.id} size={110} /></div>
          {justFound && <div style={{ position: "absolute", top: 20, right: 24, background: `linear-gradient(135deg,${zone.accent},${zone.color})`, color: "white", borderRadius: 20, padding: "6px 16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 14, letterSpacing: 1, animation: "popIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)" }}>✓ FOUND!</div>}
        </div>
        <div style={{ padding: "16px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 28, color: BLUE.deepest, lineHeight: 1.1, flex: 1 }}>{item.name}</div>
            <div style={{ background: `${zone.accent}22`, color: zone.color, borderRadius: 12, padding: "4px 12px", marginLeft: 12, fontFamily: "'Patrick Hand',cursive", fontSize: 12, fontWeight: 700, border: `1.5px solid ${zone.accent}40`, whiteSpace: "nowrap", flexShrink: 0 }}>{zone.emoji} {zone.label}</div>
          </div>
          <div style={{ background: `linear-gradient(135deg,${zone.bg},${BLUE.pale})`, border: `2px solid ${zone.accent}40`, borderRadius: 18, padding: "16px 18px", margin: "16px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Lightbulb size={28} color={zone.color} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 11, color: zone.color, letterSpacing: 2, marginBottom: 4 }}>{S.rangerFact}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 17, color: BLUE.deepest, lineHeight: 1.5 }}>{item.fact}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: BLUE.mid, letterSpacing: 1 }}>{S.spellIt}</div>
            {item.letters.split("").map((l, i) => <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: BLUE.pale, border: `2px solid ${BLUE.light}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.dark }}>{l}</div>)}
          </div>
          {!state.discovered[item.id] ? (
            <button onPointerDown={() => setPressing(true)} onPointerUp={() => { setPressing(false); handleFound(); }} onPointerLeave={() => setPressing(false)} disabled={justFound}
              style={{ width: "100%", background: justFound ? "linear-gradient(135deg,#5C7A3E,#3D5C28)" : pressing ? zone.color : `linear-gradient(135deg,${zone.accent},${zone.color})`, color: "white", border: "none", borderRadius: 20, padding: "18px", fontFamily: "'Luckiest Guy',cursive", fontSize: 22, letterSpacing: 1, cursor: justFound ? "default" : "pointer", boxShadow: pressing || justFound ? "none" : `0 6px 0 ${zone.color}`, transform: pressing ? "translateY(5px)" : "translateY(0)", transition: "all 0.12s" }}
            >{justFound ? S.stampedJournal : `${S.iFoundIt} 🌟`}</button>
          ) : (
            <div style={{ width: "100%", background: `${zone.accent}18`, border: `2px solid ${zone.accent}40`, borderRadius: 20, padding: "16px", textAlign: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: zone.color }}>{S.alreadyFound}</div>
          )}
        </div>
      </div>
    </>
  );
}

function ItemCard({ item, zone, onTap }) {
  const { state } = useApp();
  const { S } = useLang();
  const discovered = state.discovered[item.id];
  const [pressing, setPressing] = useState(false);
  return (
    <div onPointerDown={() => setPressing(true)} onPointerUp={() => { setPressing(false); onTap(); }} onPointerLeave={() => setPressing(false)}
      style={{ borderRadius: 22, background: discovered ? `linear-gradient(160deg,${zone.bg},white)` : "white", border: discovered ? `3px solid ${zone.accent}` : `2px solid ${BLUE.light}`, boxShadow: pressing ? `0 2px 8px ${zone.accent}20` : discovered ? `0 8px 28px ${zone.accent}30` : "0 4px 16px rgba(13,45,79,0.09)", transform: pressing ? "scale(0.97)" : "scale(1)", transition: "all 0.15s", cursor: "pointer", padding: "20px 14px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", overflow: "hidden", userSelect: "none" }}
    >
      {discovered && <div style={{ position: "absolute", top: 10, right: 10, background: `linear-gradient(135deg,${zone.accent},${zone.color})`, color: "white", borderRadius: 20, padding: "3px 10px", fontFamily: "'Luckiest Guy',cursive", fontSize: 10, letterSpacing: 1 }}>✓ FOUND</div>}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}><ItemCharacter itemId={item.id} size={76} /></div>
      <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 15, color: discovered ? zone.color : BLUE.dark, textAlign: "center", lineHeight: 1.3 }}>{item.name}</div>
      <div style={{ background: discovered ? `${zone.accent}18` : BLUE.pale, borderRadius: 10, padding: "6px 12px", fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: discovered ? zone.color : BLUE.mid, border: `1px solid ${discovered ? zone.accent + "40" : BLUE.light}`, width: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        {discovered ? <><CheckCircle2 size={13} color={zone.color} />{S.readMore}</> : <><Search size={12} color={BLUE.mid} />{S.learnMore}</>}
      </div>
    </div>
  );
}

function ZoneTab({ zone, active, onClick }) {
  const { state } = useApp();
  const { S } = useLang();
  const count = zone.items.filter(i => state.discovered[i.id]).length;
  return (
    <button onClick={onClick} style={{ flex: 1, padding: "10px 4px", background: active ? `linear-gradient(135deg,${zone.color},${zone.accent})` : "transparent", border: "none", borderRadius: 16, cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, boxShadow: active ? `0 4px 14px ${zone.accent}50` : "none" }}>
      <ZoneIcon zoneId={zone.id} size={26} active={active} />
      <div style={{ fontFamily: "'Patrick Hand',cursive", fontWeight: 700, fontSize: 10, color: active ? "white" : zone.color, letterSpacing: 0.5 }}>{zone.label.split(" ")[0]}</div>
      <div style={{ background: active ? "rgba(255,255,255,0.25)" : `${zone.color}18`, color: active ? "white" : zone.color, borderRadius: 10, padding: "2px 8px", fontFamily: "'Patrick Hand',cursive", fontSize: 11, fontWeight: 700 }}>{count}/{zone.items.length}</div>
    </button>
  );
}

function FieldGuideTab() {
  const { state } = useApp();
  const { S } = useLang();
  const pack = PACKS[state.selectedPack];
  const [activeZoneId, setActiveZoneId] = useState(pack.zones[0].id);
  const [openItem, setOpenItem] = useState(null);
  const zone = pack.zones.find(z => z.id === activeZoneId);
  const openZone = openItem ? pack.zones.find(z => z.items.some(i => i.id === openItem.id)) : null;
  // Include custom items in wildlife zone display
  const customZoneItems = state.customItems.map(ci => ({ ...ci, isCustom: true }));
  const displayItems = activeZoneId === "wildlife" ? [...zone.items, ...customZoneItems] : zone.items;

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ display: "flex", gap: 6, padding: "14px 16px 10px", background: "white", boxShadow: `0 3px 14px ${BLUE.deepest}12` }}>
        {pack.zones.map(z => <ZoneTab key={z.id} zone={z} active={activeZoneId === z.id} onClick={() => setActiveZoneId(z.id)} />)}
      </div>
      <div style={{ padding: "18px 20px 6px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg,${zone.accent},${zone.color})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 6px 18px ${zone.accent}45`, flexShrink: 0 }}><ZoneIcon zoneId={zone.id} size={28} active={true} /></div>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: zone.color, fontSize: 22, letterSpacing: 1, lineHeight: 1 }}>{zone.label}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "#6B8BAA", fontSize: 13, marginTop: 2 }}>
            {t(S.discovered, {found: zone.items.filter(i => state.discovered[i.id]).length, total: zone.items.length})} · <span style={{ color: zone.accent }}>{t(S.stillOutThere, {n: zone.items.length - zone.items.filter(i => state.discovered[i.id]).length})}</span>
          </div>
        </div>
      </div>
      <div style={{ margin: "10px 16px 14px", background: BLUE.pale, border: `1.5px dashed ${BLUE.light}`, borderRadius: 14, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: BLUE.mid }}>
        <Search size={18} color={BLUE.mid} style={{ flexShrink: 0 }} /><span>{S.spotSomething} <strong>"{S.iFoundIt}"</strong></span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, padding: "0 16px" }}>
        {displayItems.map(item => <ItemCard key={item.id} item={item} zone={zone} onTap={() => setOpenItem(item)} />)}
      </div>
      {zone.items.every(i => state.discovered[i.id]) && (
        <div style={{ margin: "20px 16px 0", background: `linear-gradient(135deg,${zone.color},${zone.accent})`, borderRadius: 20, padding: "20px 24px", textAlign: "center", boxShadow: `0 10px 30px ${zone.accent}45` }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}><Trophy size={40} color="white" /></div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 22 }}>{S.zoneComplete}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.9)", fontSize: 15, marginTop: 6 }}>{t(S.zoneCompleteDesc, {zone: zone.label.toLowerCase()})}</div>
        </div>
      )}
      {openItem && openZone && <DetailSheet item={openItem} zone={openZone} onClose={() => setOpenItem(null)} />}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  MISSIONS TAB                                                ║
// ╚══════════════════════════════════════════════════════════════╝
function MissionsTab() {
  const { state } = useApp();
  const { S } = useLang();
  const { discovered, earnedBadges } = state;
  const pack = PACKS[state.selectedPack];
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const active = pack.badges.filter(b => !earnedBadges[b.id]);
  const earned = pack.badges.filter(b => earnedBadges[b.id]);
  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ margin: "16px 16px 8px", background: `linear-gradient(135deg,${rank.color},${rank.color}CC)`, borderRadius: 24, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${rank.color}40` }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "3px solid rgba(255,255,255,0.4)" }}><Award size={34} color="white" /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: 1 }}>{S.currentRank}</div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 24, letterSpacing: 1, lineHeight: 1.1 }}>{rank.label}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 2 }}>{totalFound} of {pack.zones.flatMap(z => z.items).length} · {earned.length} of {pack.badges.length} badges</div>
        </div>
      </div>
      {active.length > 0 && (
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 18, letterSpacing: 1, marginBottom: 10 }}>{S.activeMissions}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {active.map(badge => {
              const { cur, max } = badge.progress(discovered, pack.zones);
              const hint = badge.hint(discovered, pack.zones);
              return (
                <div key={badge.id} style={{ background: "white", borderRadius: 20, border: `2px solid ${badge.accent}40`, padding: "16px 18px", boxShadow: `0 4px 16px ${badge.accent}18` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${badge.accent}30,${badge.color}20)`, border: `3px solid ${badge.accent}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{badge.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 17, color: badge.color }}>{badge.name}</div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: "#6B8BAA" }}>{badge.desc}</div>
                    </div>
                    <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 20, color: badge.color, background: `${badge.accent}15`, borderRadius: 12, padding: "4px 10px" }}>{cur}/{max}</div>
                  </div>
                  <div style={{ background: `${badge.accent}18`, borderRadius: 20, height: 12, overflow: "hidden", marginBottom: 10, border: `1px solid ${badge.accent}30` }}>
                    <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${badge.accent},${badge.color})`, width: `${(cur / max) * 100}%`, transition: "width 0.6s ease", minWidth: cur > 0 ? 12 : 0 }} />
                  </div>
                  {cur < max && hint && <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Search size={13} color={badge.color} /><span style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 13, color: badge.color }}>{S.lookFor} <strong>{hint}</strong></span></div>}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {earned.length > 0 && (
        <div style={{ padding: "20px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.goldDark, fontSize: 18, letterSpacing: 1, marginBottom: 10 }}>{S.trophyShelf}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
            {earned.map(badge => (
              <div key={badge.id} style={{ background: `linear-gradient(145deg,${badge.accent}18,white)`, borderRadius: 20, border: `3px solid ${badge.accent}`, padding: "18px 14px", textAlign: "center", boxShadow: `0 6px 20px ${badge.accent}30`, position: "relative" }}>
                <div style={{ position: "absolute", top: -10, right: 12, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`, borderRadius: 20, padding: "2px 10px", fontFamily: "'Luckiest Guy',cursive", fontSize: 9, color: "white", letterSpacing: 1 }}>{S.earned}</div>
                <div style={{ fontSize: 44, marginBottom: 6 }}>{badge.emoji}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 14, color: badge.color, letterSpacing: 0.5, lineHeight: 1.2 }}>{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SPELLING TAB + GAME                                         ║
// ╚══════════════════════════════════════════════════════════════╝
function SpellingGame({ item, onClose }) {
  const { dispatch } = useApp();
  const { S } = useLang();
  const { speakWord, speakCorrect, speakTryAgain } = useAudio();
  const pack = PACKS["montana"];
  const choices = useMemo(() => shuffle([item, ...getDecoys(item, pack)]), [item.id]);
  const [phase, setPhase] = useState("question");
  const [revealIdx, setRevealIdx] = useState(-1);
  const [wrongId, setWrongId] = useState(null);
  const letters = item.letters.split("");
  useEffect(() => { speakWord(item.letters); }, []);
  const handleChoice = (choice) => {
    if (phase !== "question") return;
    if (choice.id === item.id) {
      setPhase("correct"); speakCorrect(`Yes! ${item.name}! Let's spell it!`);
      let idx = 0; const iv = setInterval(() => { setRevealIdx(i => i + 1); idx++; if (idx >= letters.length) clearInterval(iv); }, 380);
    } else { setWrongId(choice.id); speakTryAgain(); setTimeout(() => setWrongId(null), 900); }
  };
  const handleDone = () => { dispatch({ type: "COMPLETE_SPELLING", itemId: item.id }); onClose(); };
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, background: `linear-gradient(160deg,${BLUE.deepest},${BLUE.dark} 60%,${BLUE.mid})`, display: "flex", flexDirection: "column", animation: "fadeIn 0.25s ease", maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 12px" }}>
        <button onClick={onClose} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} color="white" /></button>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 18, letterSpacing: 2 }}>{S.wordSpotter}</div>
        <button onClick={() => speakWord(item.letters)} style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Repeat2 size={18} color="white" /></button>
      </div>
      <div style={{ textAlign: "center", padding: "8px 20px 16px" }}>
        {phase === "question" && (<><div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 26, letterSpacing: 1 }}>{S.whichOneIs}</div><div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 36, letterSpacing: 2, textShadow: `0 0 20px ${BLUE.gold}80` }}>{item.letters}?</div><div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 15, marginTop: 4 }}>Tap the right picture!</div></>)}
        {phase === "correct" && <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "#7AE8A0", fontSize: 28, animation: "popIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{S.youGotItSpell}</div>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, padding: "0 16px", flex: 1, alignContent: "center" }}>
        {choices.map(choice => {
          const isCorrect = choice.id === item.id; const isWrong = wrongId === choice.id; const done = phase === "correct";
          return (
            <div key={choice.id} onClick={() => !done && handleChoice(choice)} style={{ borderRadius: 20, background: done && isCorrect ? "linear-gradient(135deg,#2ECC71,#27AE60)" : isWrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "rgba(255,255,255,0.12)", border: done && isCorrect ? "3px solid #7AE8A0" : isWrong ? "3px solid #FF6B6B" : "3px solid rgba(255,255,255,0.2)", padding: "20px 10px 16px", textAlign: "center", cursor: done ? "default" : "pointer", opacity: done && !isCorrect ? 0.35 : 1, transition: "all 0.2s", animation: isWrong ? "shake 0.4s ease" : done && isCorrect ? "popIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275)" : "none", boxShadow: done && isCorrect ? "0 0 28px #2ECC7180" : "none" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><ItemCharacter itemId={choice.id} size={64} /></div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 13, lineHeight: 1.2 }}>{choice.name}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "20px 20px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {letters.map((l, i) => <div key={i} style={{ width: 44, height: 52, borderRadius: 12, background: i <= revealIdx ? `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})` : "rgba(255,255,255,0.1)", border: i <= revealIdx ? `2px solid ${BLUE.gold}` : "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 22, color: i <= revealIdx ? BLUE.deepest : "transparent", transform: i === revealIdx ? "scale(1.2)" : "scale(1)", transition: "all 0.25s cubic-bezier(0.175,0.885,0.32,1.275)" }}>{l}</div>)}
        </div>
        {revealIdx >= letters.length - 1 && (
          <button onClick={handleDone} style={{ background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`, color: BLUE.deepest, border: "none", borderRadius: 20, padding: "14px 40px", cursor: "pointer", fontFamily: "'Luckiest Guy',cursive", fontSize: 20, letterSpacing: 1, boxShadow: `0 6px 0 ${BLUE.goldDark}`, animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)" }}
            onPointerDown={e => e.currentTarget.style.transform = "translateY(5px)"}
            onPointerUp={e => e.currentTarget.style.transform = "translateY(0)"}
          >{S.awesome}</button>
        )}
      </div>
    </div>
  );
}

function SpellingTab() {
  const { state } = useApp();
  const { S } = useLang();
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const [activeGame, setActiveGame] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Montana");
  const bonusCategories = ["Trip", "Fishing", "Horses", "Gear", "Nature"];
  const allCategories = ["Montana", ...bonusCategories];
  const diffLabel = (word) => { if (word.length <= 3) return { label: "Easy", color: "#2ECC71", bg: "#E8FAF0" }; if (word.length <= 4) return { label: "Medium", color: BLUE.mid, bg: BLUE.pale }; return { label: "Hard", color: "#9B59B6", bg: "#F5EEF8" }; };
  const activeItems = activeCategory === "Montana" ? allItems : pack.bonusWords.filter(w => w.category === activeCategory);
  const catMeta = activeCategory === "Montana" ? { emoji: "🏔️", color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky } : pack.bonusCategoryMeta[activeCategory];
  if (activeGame) return <SpellingGame item={activeGame} onClose={() => setActiveGame(null)} />;
  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 24, padding: "18px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${BLUE.dark}40` }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><BookOpen size={30} color={BLUE.gold} /></div>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 20, letterSpacing: 1 }}>{S.wordSpotter}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{t(S.wordsToLearn, {n: allItems.length + pack.bonusWords.length})}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, padding: "0 16px 12px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {allCategories.map(cat => {
          const meta = cat === "Montana" ? { emoji: "🏔️", color: BLUE.dark, accent: BLUE.bright } : pack.bonusCategoryMeta[cat];
          const isActive = activeCategory === cat;
          const count = cat === "Montana" ? allItems.length : pack.bonusWords.filter(w => w.category === cat).length;
          return (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ flexShrink: 0, background: isActive ? `linear-gradient(135deg,${meta.color},${meta.accent})` : "white", border: `2px solid ${isActive ? "transparent" : meta.accent + "60"}`, borderRadius: 16, padding: "8px 16px", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6, boxShadow: isActive ? `0 4px 14px ${meta.accent}40` : "0 2px 8px rgba(0,0,0,0.06)" }}>
              <span style={{ fontSize: 18 }}>{meta.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: isActive ? "white" : meta.color }}>{cat}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: isActive ? "rgba(255,255,255,0.8)" : "#8BA0B8" }}>{count} words</div>
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "0 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {activeItems.map(item => {
            const diff = diffLabel(item.letters); const stars = state.spellingStars[item.id] || 0; const found = !!state.discovered[item.id];
            return (
              <div key={item.id} onClick={() => setActiveGame(item)}
                style={{ background: "white", borderRadius: 18, padding: "14px 16px", border: `2px solid ${stars > 0 ? catMeta.accent + "60" : BLUE.light}`, boxShadow: stars > 0 ? `0 4px 16px ${catMeta.accent}20` : "0 2px 8px rgba(13,45,79,0.06)", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.15s" }}
                onPointerDown={e => e.currentTarget.style.transform = "scale(0.98)"}
                onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
                onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg,${catMeta.bg},white)`, border: `2px solid ${catMeta.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, position: "relative" }}>
                  {item.emoji}
                  {activeCategory === "Montana" && found && <div style={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "#2ECC71", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "white" }}>✓</div>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.dark, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
                    {item.letters.split("").map((l, i) => <div key={i} style={{ width: 24, height: 26, borderRadius: 6, background: BLUE.pale, border: `1.5px solid ${BLUE.light}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: BLUE.dark }}>{l}</div>)}
                    <div style={{ marginLeft: 2, background: diff.bg, borderRadius: 8, padding: "2px 8px", fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: diff.color, fontWeight: 700 }}>{diff.label}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flexShrink: 0 }}>
                  {stars > 0 ? <Star size={22} color={BLUE.goldDark} fill={BLUE.goldDark} /> : <Play size={22} color={BLUE.mid} />}
                  <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: BLUE.mid }}>{stars > 0 ? `×${stars}` : "Play!"}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  MATH TAB                                                    ║
// ╚══════════════════════════════════════════════════════════════╝
const PRAISE = ["Amazing! 🌟", "You got it! 🎉", "Wow! 🔥", "Super smart! ⭐", "Brilliant! 💫", "Correct! 🏅"];
function genProblem(mode, emojiPool, total) {
  const emoji = emojiPool[Math.floor(Math.random() * emojiPool.length)];
  if (mode === "count") { const a = 1 + Math.floor(Math.random() * 6); return { mode, emoji, a, b: 0, answer: a, display: Array(a).fill(emoji) }; }
  if (mode === "add") { const max = total >= 15 ? 10 : total >= 8 ? 8 : 6; const a = 1 + Math.floor(Math.random() * (max - 1)); const b = 1 + Math.floor(Math.random() * (max - a)); return { mode, emoji, a, b, answer: a + b, display: null }; }
  const a = 2 + Math.floor(Math.random() * 6); const b = 1 + Math.floor(Math.random() * (a - 1)); return { mode, emoji, a, b, answer: a - b, display: null };
}
function makeChoices(answer) {
  const wrong = new Set();
  while (wrong.size < 3) { const n = Math.max(0, Math.min(10, answer + Math.floor(Math.random() * 5) - 2)); if (n !== answer) wrong.add(n); }
  return shuffle([answer, ...wrong]);
}
function MathTab() {
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

// ╔══════════════════════════════════════════════════════════════╗
// ║  JOURNAL TAB                                                 ║
// ╚══════════════════════════════════════════════════════════════╝
function MontanaMap() {
  const { state } = useApp();
  const { S } = useLang();
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const foundItems = allItems.filter(i => state.discovered[i.id]);
  const pct = foundItems.length / allItems.length;
  const tier = pct === 0 ? 0 : pct < 0.2 ? 1 : pct < 0.5 ? 2 : pct < 0.8 ? 3 : 4;
  const fills = ["rgba(168,212,245,0.15)", "rgba(59,158,232,0.25)", "rgba(59,158,232,0.45)", "rgba(244,185,66,0.55)", "rgba(244,185,66,0.85)"];
  const glowColor = tier >= 3 ? BLUE.gold : BLUE.bright;
  const pinPos = [{ x: 38, y: 28 }, { x: 62, y: 22 }, { x: 82, y: 35 }, { x: 24, y: 55 }, { x: 50, y: 48 }, { x: 74, y: 60 }, { x: 34, y: 72 }, { x: 60, y: 75 }, { x: 85, y: 68 }, { x: 18, y: 38 }, { x: 44, y: 68 }, { x: 70, y: 42 }];
  return (
    <div style={{ margin: "0 16px", background: `linear-gradient(145deg,${BLUE.deepest},${BLUE.dark})`, borderRadius: 24, padding: "16px", boxShadow: `0 8px 32px ${BLUE.deepest}60`, position: "relative", overflow: "hidden" }}>
      {[...Array(20)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.3 + (i % 3) * 0.2 }} />)}
      <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 13, letterSpacing: 2, textAlign: "center", marginBottom: 10 }}>MONTANA — BIG SKY COUNTRY</div>
      <svg viewBox="0 0 400 240" style={{ width: "100%", display: "block" }}>
        <defs><filter id="mapglow"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <path d="M 20,20 L 360,20 L 380,30 L 390,60 L 385,120 L 370,140 L 340,145 L 320,160 L 290,165 L 260,175 L 230,178 L 200,180 L 170,178 L 130,175 L 100,170 L 70,165 L 45,158 L 20,150 L 15,100 L 18,60 Z"
          fill={fills[tier]} stroke={glowColor} strokeWidth={tier > 0 ? 2.5 : 1.5} filter={tier > 0 ? "url(#mapglow)" : "none"} style={{ transition: "all 1s ease" }} />
        {[{ x: 68, y: 55, l: "Glacier" }, { x: 180, y: 45, l: "Great Falls" }, { x: 310, y: 55, l: "Billings" }, { x: 90, y: 120, l: "Missoula" }, { x: 240, y: 130, l: "Big Sky" }].map((r, i) =>
          <text key={i} x={r.x} y={r.y} fontFamily="Patrick Hand,cursive" fontSize="11" fill="rgba(255,255,255,0.5)" textAnchor="middle">{r.l}</text>)}
        {foundItems.slice(0, 12).map((item, i) => { const p = pinPos[i]; const px = (p.x / 100) * 380 + 10; const py = (p.y / 100) * 200 + 10; return (<g key={item.id} style={{ animation: `pinDrop 0.5s ${i * 0.08}s both` }}><circle cx={px} cy={py} r="14" fill={BLUE.dark} stroke={BLUE.gold} strokeWidth="2" filter="url(#mapglow)" opacity="0.92" /><text x={px} y={py + 6} textAnchor="middle" fontSize="14">{item.emoji}</text></g>); })}
        {foundItems.length > 12 && <text x="370" y="160" fontFamily="Luckiest Guy,cursive" fontSize="11" fill={BLUE.gold} textAnchor="middle">+{foundItems.length - 12}</text>}
      </svg>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 13 }}>{t(S.foundOnMap, {found: foundItems.length, total: allItems.length})}</div>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 14 }}>{Math.round(pct * 100)}%</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, height: 8, marginTop: 8, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.bright},${BLUE.gold})`, width: `${Math.max(pct * 100, foundItems.length > 0 ? 3 : 0)}%`, transition: "width 0.8s ease" }} />
      </div>
      <style>{`@keyframes pinDrop{0%{transform:translateY(-30px);opacity:0}60%{transform:translateY(4px);opacity:1}100%{transform:translateY(0);opacity:1}}`}</style>
    </div>
  );
}

function JournalTab() {
  const { state } = useApp();
  const { S } = useLang();
  const { discovered, discoveryLog, earnedBadges, mathStats, spellingStars } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const [view, setView] = useState("stats");
  const [showExport, setShowExport] = useState(false);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const totalBadges = Object.values(earnedBadges).filter(Boolean).length;
  const totalMath = mathStats.total || 0;
  const totalSpelling = Object.values(spellingStars).filter(v => v > 0).length;
  const rank = getRank(totalFound);
  const name = state.userName || "Ranger";
  const dayGroups = useMemo(() => {
    const groups = {};
    discoveryLog.forEach(entry => { const key = new Date(entry.ts).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }); if (!groups[key]) groups[key] = []; groups[key].push(entry); });
    return Object.entries(groups);
  }, [discoveryLog]);
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : null;
  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ display: "flex", margin: "14px 16px 12px", background: BLUE.pale, borderRadius: 20, padding: 4, gap: 0 }}>
        {[{ id: "stats", label: S.myStats, Icon: Star }, { id: "map", label: S.map, Icon: MapPin }, { id: "timeline", label: S.timeline, Icon: BookMarked }].map(v => (
          <button key={v.id} onClick={() => setView(v.id)} style={{ flex: 1, padding: "10px 4px", background: view === v.id ? `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})` : "transparent", border: "none", borderRadius: 16, cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <v.Icon size={18} color={view === v.id ? "white" : BLUE.mid} strokeWidth={view === v.id ? 2.5 : 1.8} />
            <span style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 10, letterSpacing: 0.5, color: view === v.id ? "white" : BLUE.mid }}>{v.label}</span>
          </button>
        ))}
      </div>
      {view === "stats" && (
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: `linear-gradient(135deg,${rank.color},${rank.color}CC)`, borderRadius: 24, padding: "22px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${rank.color}50` }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "3px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Award size={38} color="white" /></div>
            <div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: 1 }}>{t(S.isA, {name: name.toUpperCase()})}</div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 28, letterSpacing: 1, lineHeight: 1.1 }}>{rank.label}!</div>
              {tripDay && <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4 }}>{t(S.dayOfAdventure, {n: tripDay})}</div>}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { Ic: Search, label: S.thingsFound, value: totalFound, max: allItems.length, color: BLUE.mid },
              { Ic: Trophy, label: S.badgesEarned, value: totalBadges, max: pack.badges.length, color: BLUE.goldDark },
              { Ic: Calculator, label: S.mathCorrect, value: totalMath, max: null, color: "#E67E22" },
              { Ic: BookOpen, label: S.wordsPracticed, value: totalSpelling, max: null, color: "#9B59B6" },
            ].map(s => (
              <div key={s.label} style={{ background: "white", borderRadius: 20, padding: "16px 14px", border: `2px solid ${s.color}25`, boxShadow: `0 4px 16px ${s.color}15` }}>
                <div style={{ marginBottom: 6 }}><s.Ic size={26} color={s.color} strokeWidth={1.8} /></div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 28, color: s.color, lineHeight: 1 }}>{s.value}{s.max ? <span style={{ fontSize: 14, color: "#AAB8C8" }}>/{s.max}</span> : ""}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: "#8BA0B8", marginTop: 2 }}>{s.label}</div>
                {s.max && <div style={{ background: `${s.color}18`, borderRadius: 10, height: 6, marginTop: 8, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${s.color},${s.color}99)`, width: `${(s.value / s.max) * 100}%`, transition: "width 0.8s ease" }} /></div>}
              </div>
            ))}
          </div>

          {/* Export button */}
          <button onClick={() => setShowExport(true)} style={{ width: "100%", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, color: "white", border: "none", borderRadius: 18, padding: "16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: `0 6px 0 ${BLUE.dark}` }}>
            <Share2 size={20} color="white" /> {S.myAdventureReport}
          </button>

          {(() => { const nextRank = RANKS.find(r => r.min > totalFound); if (!nextRank) return null; const needed = nextRank.min - totalFound; return (<div style={{ background: BLUE.pale, borderRadius: 18, padding: "14px 18px", border: `2px dashed ${BLUE.light}`, display: "flex", alignItems: "center", gap: 12 }}><span style={{ fontSize: 30 }}>{nextRank.emoji}</span><div><div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 15 }}>Almost {nextRank.label}!</div><div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.mid, fontSize: 13 }}>Find {needed} more thing{needed > 1 ? "s" : ""} to level up!</div></div></div>); })()}
        </div>
      )}
      {view === "map" && (
        <div>
          <div style={{ padding: "0 16px 14px", fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: BLUE.mid, textAlign: "center" }}>{S.everyTimeYouFind}</div>
          <MontanaMap />
          <div style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
            {pack.zones.map(z => {
              const found = z.items.filter(i => discovered[i.id]).length;
              return (
                <div key={z.id} style={{ background: "white", borderRadius: 16, padding: "12px 16px", border: `2px solid ${z.accent}30`, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{z.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: z.color }}>{z.label}</div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: z.accent, fontWeight: 700 }}>{found}/{z.items.length}</div>
                    </div>
                    <div style={{ background: `${z.accent}18`, borderRadius: 10, height: 8, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${z.accent},${z.color})`, width: `${(found / z.items.length) * 100}%`, transition: "width 0.8s ease", minWidth: found > 0 ? 8 : 0 }} /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {view === "timeline" && (
        <div style={{ padding: "0 16px" }}>
          {dayGroups.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 24px", background: BLUE.pale, borderRadius: 20, border: `2px dashed ${BLUE.light}`, marginTop: 8 }}>
              <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}><BookMarked size={48} color={BLUE.light} /></div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 20, marginBottom: 8 }}>{S.journalEmpty}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.mid, fontSize: 15, lineHeight: 1.5 }}>{S.journalEmptyDesc}</div>
            </div>
          ) : dayGroups.map(([dateStr, entries]) => (
            <div key={dateStr} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0 12px" }}>
                <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg,${BLUE.bright},transparent)`, borderRadius: 2 }} />
                <div style={{ background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 20, padding: "5px 16px", fontFamily: "'Luckiest Guy',cursive", fontSize: 12, color: "white", letterSpacing: 1, whiteSpace: "nowrap" }}>{dateStr}</div>
                <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg,transparent,${BLUE.bright})`, borderRadius: 2 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {entries.map((entry, ei) => {
                  const item = allItems.find(i => i.id === entry.itemId); if (!item) return null;
                  const zone = pack.zones.find(z => z.items.some(i => i.id === item.id));
                  const time = new Date(entry.ts).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
                  return (
                    <div key={ei} style={{ background: "white", borderRadius: 18, padding: "14px 16px", border: `2px solid ${zone.accent}30`, display: "flex", alignItems: "center", gap: 14, boxShadow: `0 3px 12px ${zone.accent}18` }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg,${zone.bg},white)`, border: `2px solid ${zone.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{item.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 16, color: BLUE.dark }}>{item.name}</div>
                        <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: zone.color, background: `${zone.accent}15`, borderRadius: 8, padding: "2px 8px", display: "inline-block", marginTop: 3 }}>{zone.emoji} {zone.label}</div>
                      </div>
                      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: "#8BA0B8", textAlign: "right", flexShrink: 0 }}>
                        <div>{time}</div>
                        <div style={{ marginTop: 4, color: BLUE.gold, fontWeight: 700 }}>Found!</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      {showExport && <ProgressExportSheet onClose={() => setShowExport(false)} />}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  HOME SCREEN                                                 ║
// ╚══════════════════════════════════════════════════════════════╝
function HomeScreen() {
  const { state, dispatch } = useApp();
  const { S } = useLang();
  const { discovered, earnedBadges, discoveryLog } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const tripDay = discoveryLog.length > 0 ? Math.floor((Date.now() - discoveryLog[0].ts) / 86400000) + 1 : null;
  const name = state.userName || "Ranger";
  const quickTabs = [
    { id: "guide",    label: S.guide,    Ic: Search,    color: BLUE.dark,     desc: state.lang === "es" ? "¡Encuentra y descubre!" : "Find & discover!" },
    { id: "spelling", label: S.spelling, Ic: BookOpen,  color: "#7B3FA0",     desc: state.lang === "es" ? "¡Practica palabras!" : "Spell words!" },
    { id: "math",     label: S.math,     Ic: Calculator,color: "#E67E22",     desc: state.lang === "es" ? "¡Cuenta y suma!" : "Count & add!" },
    { id: "missions", label: S.missions, Ic: Trophy,    color: BLUE.goldDark, desc: state.lang === "es" ? "¡Ver insignias!" : "Check badges!" },
    { id: "journal",  label: S.journal,  Ic: BookMarked,color: "#1A6E8F",     desc: state.lang === "es" ? "¡Mi aventura!" : "My adventure!" },
  ];
  return (
    <div style={{ paddingBottom: 110 }}>
      {/* Welcome hero */}
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${rank.color},${rank.color}BB)`, borderRadius: 24, padding: "24px 22px", boxShadow: `0 8px 28px ${rank.color}40` }}>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14, letterSpacing: 1 }}>{tripDay ? t(S.dayOf, {n: tripDay}) : S.welcomeBack}</div>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 32, letterSpacing: 2, lineHeight: 1.1, marginTop: 2 }}>{name.toUpperCase()}!</div>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14, marginTop: 6 }}>{totalFound === 0 ? "Tap Field Guide to start exploring Montana!" : `${totalFound} of ${allItems.length} things found · ${Object.values(earnedBadges).filter(Boolean).length} badges earned`}</div>
        <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 20, height: 10, marginTop: 12, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},white)`, width: `${Math.max((totalFound / allItems.length) * 100, totalFound > 0 ? 3 : 0)}%`, transition: "width 0.7s ease" }} />
        </div>
      </div>

      {/* Daily challenge */}
      <DailyChallengeBanner />

      {/* Quick-launch grid */}
      <div style={{ padding: "4px 16px 0" }}>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>{S.whereNext}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
          {quickTabs.map(t => (
            <div key={t.id} onClick={() => dispatch({ type: "SET_TAB", tab: t.id })}
              style={{ background: "white", borderRadius: 20, padding: "18px 16px", border: `2px solid ${t.color}25`, boxShadow: `0 4px 16px ${t.color}15`, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.15s" }}
              onPointerDown={e => e.currentTarget.style.transform = "scale(0.97)"}
              onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
              onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${t.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><t.Ic size={24} color={t.color} strokeWidth={1.8} /></div>
              <div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 14, color: t.color, letterSpacing: 0.5 }}>{t.label}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: "#8BA0B8" }}>{t.desc}</div>
              </div>
            </div>
          ))}
          <div style={{ background: "#F8F4FF", borderRadius: 20, padding: "18px 16px", border: "2px dashed #C8B8E8", display: "flex", alignItems: "center", gap: 12, opacity: 0.7 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "#EDE8F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Compass size={24} color="#7B3FA0" strokeWidth={1.8} /></div>
            <div>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 14, color: "#7B3FA0" }}>{S.airportHunt}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 12, color: "#A090B8" }}>{S.comingSoon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent finds */}
      {discoveryLog.length > 0 && (
        <div style={{ padding: "16px 16px 0" }}>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.dark, fontSize: 16, letterSpacing: 1, marginBottom: 10 }}>{S.recentFinds}</div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
            {[...discoveryLog].reverse().slice(0, 8).map((entry, i) => {
              const item = allItems.find(it => it.id === entry.itemId); if (!item) return null;
              const zone = pack.zones.find(z => z.items.some(it => it.id === item.id));
              return (
                <div key={i} onClick={() => dispatch({ type: "SET_TAB", tab: "guide" })}
                  style={{ flexShrink: 0, width: 80, background: "white", borderRadius: 18, padding: "12px 8px", border: `2px solid ${zone.accent}40`, textAlign: "center", cursor: "pointer", boxShadow: `0 3px 12px ${zone.accent}20` }}>
                  <div style={{ fontSize: 32 }}>{item.emoji}</div>
                  <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: zone.color, marginTop: 4, lineHeight: 1.2 }}>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


// ╔══════════════════════════════════════════════════════════════╗
// ║  GAMES DATA                                                  ║
// ╚══════════════════════════════════════════════════════════════╝

const US_STATES = [
  { id:"al", name:"Alabama",        es:"Alabama",             abbr:"AL", flag:"🏴" },
  { id:"ak", name:"Alaska",         es:"Alaska",              abbr:"AK", flag:"🏔️" },
  { id:"az", name:"Arizona",        es:"Arizona",             abbr:"AZ", flag:"🌵" },
  { id:"ar", name:"Arkansas",       es:"Arkansas",            abbr:"AR", flag:"💎" },
  { id:"ca", name:"California",     es:"California",          abbr:"CA", flag:"🐻" },
  { id:"co", name:"Colorado",       es:"Colorado",            abbr:"CO", flag:"⛰️" },
  { id:"ct", name:"Connecticut",    es:"Connecticut",         abbr:"CT", flag:"🌳" },
  { id:"de", name:"Delaware",       es:"Delaware",            abbr:"DE", flag:"🔵" },
  { id:"fl", name:"Florida",        es:"Florida",             abbr:"FL", flag:"🌴" },
  { id:"ga", name:"Georgia",        es:"Georgia",             abbr:"GA", flag:"🍑" },
  { id:"hi", name:"Hawaii",         es:"Hawái",               abbr:"HI", flag:"🌺" },
  { id:"id", name:"Idaho",          es:"Idaho",               abbr:"ID", flag:"🥔" },
  { id:"il", name:"Illinois",       es:"Illinois",            abbr:"IL", flag:"🌽" },
  { id:"in", name:"Indiana",        es:"Indiana",             abbr:"IN", flag:"🏁" },
  { id:"ia", name:"Iowa",           es:"Iowa",                abbr:"IA", flag:"🌾" },
  { id:"ks", name:"Kansas",         es:"Kansas",              abbr:"KS", flag:"🌻" },
  { id:"ky", name:"Kentucky",       es:"Kentucky",            abbr:"KY", flag:"🐴" },
  { id:"la", name:"Louisiana",      es:"Luisiana",            abbr:"LA", flag:"🎵" },
  { id:"me", name:"Maine",          es:"Maine",               abbr:"ME", flag:"🦞" },
  { id:"md", name:"Maryland",       es:"Maryland",            abbr:"MD", flag:"🦀" },
  { id:"ma", name:"Massachusetts",  es:"Massachusetts",       abbr:"MA", flag:"🎓" },
  { id:"mi", name:"Michigan",       es:"Míchigan",            abbr:"MI", flag:"🚗" },
  { id:"mn", name:"Minnesota",      es:"Minnesota",           abbr:"MN", flag:"🌲" },
  { id:"ms", name:"Mississippi",    es:"Misisipi",            abbr:"MS", flag:"🎸" },
  { id:"mo", name:"Missouri",       es:"Misuri",              abbr:"MO", flag:"🌉" },
  { id:"mt", name:"Montana",        es:"Montana",             abbr:"MT", flag:"🏔️" },
  { id:"ne", name:"Nebraska",       es:"Nebraska",            abbr:"NE", flag:"🌽" },
  { id:"nv", name:"Nevada",         es:"Nevada",              abbr:"NV", flag:"🎰" },
  { id:"nh", name:"New Hampshire",  es:"Nuevo Hampshire",     abbr:"NH", flag:"🍁" },
  { id:"nj", name:"New Jersey",     es:"Nueva Jersey",        abbr:"NJ", flag:"🌊" },
  { id:"nm", name:"New Mexico",     es:"Nuevo México",        abbr:"NM", flag:"☀️" },
  { id:"ny", name:"New York",       es:"Nueva York",          abbr:"NY", flag:"🗽" },
  { id:"nc", name:"North Carolina", es:"Carolina del Norte",  abbr:"NC", flag:"🌲" },
  { id:"nd", name:"North Dakota",   es:"Dakota del Norte",    abbr:"ND", flag:"🌾" },
  { id:"oh", name:"Ohio",           es:"Ohio",                abbr:"OH", flag:"🔴" },
  { id:"ok", name:"Oklahoma",       es:"Oklahoma",            abbr:"OK", flag:"🌪️" },
  { id:"or", name:"Oregon",         es:"Oregón",              abbr:"OR", flag:"🌲" },
  { id:"pa", name:"Pennsylvania",   es:"Pensilvania",         abbr:"PA", flag:"🔔" },
  { id:"ri", name:"Rhode Island",   es:"Rhode Island",        abbr:"RI", flag:"⚓" },
  { id:"sc", name:"South Carolina", es:"Carolina del Sur",    abbr:"SC", flag:"🌴" },
  { id:"sd", name:"South Dakota",   es:"Dakota del Sur",      abbr:"SD", flag:"🗿" },
  { id:"tn", name:"Tennessee",      es:"Tennessee",           abbr:"TN", flag:"🎸" },
  { id:"tx", name:"Texas",          es:"Texas",               abbr:"TX", flag:"⭐" },
  { id:"ut", name:"Utah",           es:"Utah",                abbr:"UT", flag:"🏜️" },
  { id:"vt", name:"Vermont",        es:"Vermont",             abbr:"VT", flag:"🍁" },
  { id:"va", name:"Virginia",       es:"Virginia",            abbr:"VA", flag:"🏛️" },
  { id:"wa", name:"Washington",     es:"Washington",          abbr:"WA", flag:"🌲" },
  { id:"wv", name:"West Virginia",  es:"Virginia Occidental", abbr:"WV", flag:"⛏️" },
  { id:"wi", name:"Wisconsin",      es:"Wisconsin",           abbr:"WI", flag:"🧀" },
  { id:"wy", name:"Wyoming",        es:"Wyoming",             abbr:"WY", flag:"🦬" },
];

const WORLD_COUNTRIES = [
  { id:"us", name:"United States", es:"Estados Unidos", flag:"🇺🇸", continent:"North America",  capital:"Washington D.C.", capitalEs:"Washington D.C." },
  { id:"mx", name:"Mexico",        es:"México",         flag:"🇲🇽", continent:"North America",  capital:"Mexico City",      capitalEs:"Ciudad de México" },
  { id:"ca", name:"Canada",        es:"Canadá",         flag:"🇨🇦", continent:"North America",  capital:"Ottawa",           capitalEs:"Ottawa" },
  { id:"cu", name:"Cuba",          es:"Cuba",           flag:"🇨🇺", continent:"Caribbean",      capital:"Havana",           capitalEs:"La Habana" },
  { id:"br", name:"Brazil",        es:"Brasil",         flag:"🇧🇷", continent:"South America",  capital:"Brasília",         capitalEs:"Brasilia" },
  { id:"ar", name:"Argentina",     es:"Argentina",      flag:"🇦🇷", continent:"South America",  capital:"Buenos Aires",     capitalEs:"Buenos Aires" },
  { id:"co", name:"Colombia",      es:"Colombia",       flag:"🇨🇴", continent:"South America",  capital:"Bogotá",           capitalEs:"Bogotá" },
  { id:"pe", name:"Peru",          es:"Perú",           flag:"🇵🇪", continent:"South America",  capital:"Lima",             capitalEs:"Lima" },
  { id:"cl", name:"Chile",         es:"Chile",          flag:"🇨🇱", continent:"South America",  capital:"Santiago",         capitalEs:"Santiago" },
  { id:"fr", name:"France",        es:"Francia",        flag:"🇫🇷", continent:"Europe",         capital:"Paris",            capitalEs:"París" },
  { id:"es", name:"Spain",         es:"España",         flag:"🇪🇸", continent:"Europe",         capital:"Madrid",           capitalEs:"Madrid" },
  { id:"it", name:"Italy",         es:"Italia",         flag:"🇮🇹", continent:"Europe",         capital:"Rome",             capitalEs:"Roma" },
  { id:"de", name:"Germany",       es:"Alemania",       flag:"🇩🇪", continent:"Europe",         capital:"Berlin",           capitalEs:"Berlín" },
  { id:"gb", name:"United Kingdom",es:"Reino Unido",    flag:"🇬🇧", continent:"Europe",         capital:"London",           capitalEs:"Londres" },
  { id:"pt", name:"Portugal",      es:"Portugal",       flag:"🇵🇹", continent:"Europe",         capital:"Lisbon",           capitalEs:"Lisboa" },
  { id:"gr", name:"Greece",        es:"Grecia",         flag:"🇬🇷", continent:"Europe",         capital:"Athens",           capitalEs:"Atenas" },
  { id:"za", name:"South Africa",  es:"Sudáfrica",      flag:"🇿🇦", continent:"Africa",         capital:"Pretoria",         capitalEs:"Pretoria" },
  { id:"eg", name:"Egypt",         es:"Egipto",         flag:"🇪🇬", continent:"Africa",         capital:"Cairo",            capitalEs:"El Cairo" },
  { id:"ng", name:"Nigeria",       es:"Nigeria",        flag:"🇳🇬", continent:"Africa",         capital:"Abuja",            capitalEs:"Abuya" },
  { id:"ke", name:"Kenya",         es:"Kenia",          flag:"🇰🇪", continent:"Africa",         capital:"Nairobi",          capitalEs:"Nairobi" },
  { id:"ma", name:"Morocco",       es:"Marruecos",      flag:"🇲🇦", continent:"Africa",         capital:"Rabat",            capitalEs:"Rabat" },
  { id:"jp", name:"Japan",         es:"Japón",          flag:"🇯🇵", continent:"Asia",           capital:"Tokyo",            capitalEs:"Tokio" },
  { id:"cn", name:"China",         es:"China",          flag:"🇨🇳", continent:"Asia",           capital:"Beijing",          capitalEs:"Pekín" },
  { id:"in", name:"India",         es:"India",          flag:"🇮🇳", continent:"Asia",           capital:"New Delhi",        capitalEs:"Nueva Delhi" },
  { id:"kr", name:"South Korea",   es:"Corea del Sur",  flag:"🇰🇷", continent:"Asia",           capital:"Seoul",            capitalEs:"Seúl" },
  { id:"sa", name:"Saudi Arabia",  es:"Arabia Saudita", flag:"🇸🇦", continent:"Asia",           capital:"Riyadh",           capitalEs:"Riad" },
  { id:"tr", name:"Turkey",        es:"Turquía",        flag:"🇹🇷", continent:"Asia",           capital:"Ankara",           capitalEs:"Ankara" },
  { id:"il", name:"Israel",        es:"Israel",         flag:"🇮🇱", continent:"Asia",           capital:"Jerusalem",        capitalEs:"Jerusalén" },
  { id:"au", name:"Australia",     es:"Australia",      flag:"🇦🇺", continent:"Oceania",        capital:"Canberra",         capitalEs:"Canberra" },
  { id:"nz", name:"New Zealand",   es:"Nueva Zelanda",  flag:"🇳🇿", continent:"Oceania",        capital:"Wellington",       capitalEs:"Wellington" },
];

const WORLD_FOODS = [
  { id:"pizza",     name:"Pizza",          es:"Pizza",           emoji:"🍕", countryId:"it", fact:"Pizza was invented in Naples, Italy over 200 years ago!",                        factEs:"¡La pizza fue inventada en Nápoles hace más de 200 años!" },
  { id:"sushi",     name:"Sushi",          es:"Sushi",           emoji:"🍣", countryId:"jp", fact:"Sushi rice is seasoned with vinegar to give it its special taste!",               factEs:"¡El arroz del sushi lleva vinagre para darle su sabor especial!" },
  { id:"tacos",     name:"Tacos",          es:"Tacos",           emoji:"🌮", countryId:"mx", fact:"Mexicans eat over 1 billion tacos every day!",                                    factEs:"¡Los mexicanos comen más de 1,000 millones de tacos cada día!" },
  { id:"croissant", name:"Croissant",      es:"Croissant",       emoji:"🥐", countryId:"fr", fact:"Croissants are from Austria but France made them world-famous!",                  factEs:"¡Los croissants son de Austria pero Francia los hizo mundialmente famosos!" },
  { id:"paella",    name:"Paella",         es:"Paella",          emoji:"🥘", countryId:"es", fact:"Paella gets its yellow color from a spice called saffron!",                       factEs:"¡La paella tiene color amarillo por una especia llamada azafrán!" },
  { id:"noodles",   name:"Noodles",        es:"Fideos",          emoji:"🍜", countryId:"cn", fact:"Noodles were invented in China over 4,000 years ago!",                            factEs:"¡Los fideos fueron inventados en China hace más de 4.000 años!" },
  { id:"curry",     name:"Curry",          es:"Curry",           emoji:"🍛", countryId:"in", fact:"India has over 1,000 different types of curry!",                                  factEs:"¡India tiene más de 1.000 tipos diferentes de curry!" },
  { id:"empanadas", name:"Empanadas",      es:"Empanadas",       emoji:"🥟", countryId:"ar", fact:"Empanadas came to Argentina from Spain and Portugal!",                             factEs:"¡Las empanadas llegaron a Argentina desde España y Portugal!" },
  { id:"poutine",   name:"Poutine",        es:"Poutine",         emoji:"🍟", countryId:"ca", fact:"Poutine — fries with cheese and gravy — was invented in Quebec!",                 factEs:"¡La poutine, con papas, queso y salsa, se inventó en Quebec!" },
  { id:"jollof",    name:"Jollof Rice",    es:"Arroz Jollof",    emoji:"🍚", countryId:"ng", fact:"Jollof rice cooked in tomato sauce is loved across all of West Africa!",           factEs:"¡El arroz jollof con salsa de tomate es amado en toda África Occidental!" },
  { id:"falafel",   name:"Falafel",        es:"Falafel",         emoji:"🧆", countryId:"il", fact:"Falafel is made from chickpeas and eaten all over the Middle East!",               factEs:"¡El falafel está hecho de garbanzos y se come en todo el Medio Oriente!" },
  { id:"bbq",       name:"BBQ",            es:"Barbacoa",        emoji:"🍖", countryId:"us", fact:"American BBQ has 4 styles — Texas, Kansas City, Carolina and Memphis!",            factEs:"¡La barbacoa americana tiene 4 estilos: Texas, Kansas City, Carolina y Memphis!" },
  { id:"ceviche",   name:"Ceviche",        es:"Ceviche",         emoji:"🐟", countryId:"pe", fact:"Ceviche cooks fish in lime juice — no heat needed at all!",                        factEs:"¡El ceviche cocina el pescado en limón, ¡sin calor!" },
  { id:"kimchi",    name:"Kimchi",         es:"Kimchi",          emoji:"🥬", countryId:"kr", fact:"Kimchi is fermented vegetables — Koreans eat it with almost every meal!",          factEs:"¡El kimchi es verdura fermentada, los coreanos lo comen en casi todas las comidas!" },
  { id:"tagine",    name:"Tagine",         es:"Tajín",           emoji:"🫕", countryId:"ma", fact:"Tagine is named after the cone-shaped clay pot it cooks in!",                      factEs:"¡El tajín toma su nombre del recipiente cónico de arcilla en que se cocina!" },
  { id:"vegemite",  name:"Vegemite",       es:"Vegemite",        emoji:"🍞", countryId:"au", fact:"Australians eat 22 million jars of Vegemite every year!",                          factEs:"¡Los australianos consumen 22 millones de frascos de Vegemite cada año!" },
  { id:"arepas",    name:"Arepas",         es:"Arepas",          emoji:"🫓", countryId:"co", fact:"Arepas are corn cakes eaten in Colombia and Venezuela every day!",                  factEs:"¡Las arepas son tortas de maíz que se comen a diario en Colombia y Venezuela!" },
  { id:"gyros",     name:"Gyros",          es:"Gyros",           emoji:"🥙", countryId:"gr", fact:"Gyros meat rotates on a giant vertical spit while it cooks!",                      factEs:"¡La carne del gyros gira en un asador vertical gigante mientras se cocina!" },
  { id:"injera",    name:"Injera",         es:"Injera",          emoji:"🫓", countryId:"ke", fact:"Injera is a spongy flatbread from Ethiopia used as food AND a plate!",              factEs:"¡El injera es un pan esponjoso de Etiopía que sirve como comida Y como plato!" },
  { id:"churrasco", name:"Churrasco",      es:"Churrasco",       emoji:"🥩", countryId:"br", fact:"Brazilians grill over 12 different cuts of meat at a churrasco BBQ!",              factEs:"¡Los brasileños asan más de 12 cortes de carne en sus churrascos!" },
  { id:"ramen",     name:"Ramen",          es:"Ramen",           emoji:"🍜", countryId:"jp", fact:"There are 4 main styles of ramen in Japan — each from a different region!",        factEs:"¡Hay 4 estilos principales de ramen en Japón, cada uno de una región diferente!" },
  { id:"hummus",    name:"Hummus",         es:"Hummus",          emoji:"🫘", countryId:"sa", fact:"Hummus made from chickpeas is eaten all across the Middle East!",                   factEs:"¡El hummus de garbanzos se come en todo el Medio Oriente!" },
  { id:"couscous",  name:"Couscous",       es:"Cuscús",          emoji:"🍚", countryId:"ma", fact:"Couscous is tiny wheat pasta and a staple food all across North Africa!",           factEs:"¡El cuscús es pasta pequeña de trigo y alimento básico del norte de África!" },
  { id:"dumplings", name:"Dumplings",      es:"Dumplings",       emoji:"🥟", countryId:"cn", fact:"Chinese dumplings called Jiaozi are eaten during New Year celebrations!",           factEs:"¡Los dumplings chinos llamados Jiaozi se comen en las celebraciones de Año Nuevo!" },
  { id:"pastelnata",name:"Pastel de Nata", es:"Pastel de Nata",  emoji:"🧁", countryId:"pt", fact:"These egg custard tarts from Lisbon are eaten over 1 billion times a year!",       factEs:"¡Estos pasteles de crema de Lisboa se consumen más de 1,000 millones de veces al año!" },
  { id:"choripan",  name:"Choripán",       es:"Choripán",        emoji:"🌭", countryId:"ar", fact:"Choripán is Argentina's famous chorizo sandwich eaten at every BBQ!",               factEs:"¡El choripán es el famoso sándwich de chorizo argentino en toda barbacoa!" },
  { id:"haggis",    name:"Haggis",         es:"Haggis",          emoji:"🥘", countryId:"gb", fact:"Haggis is Scotland's national dish, eaten especially on Burns Night!",              factEs:"¡El haggis es el plato nacional de Escocia, especialmente en la Noche de Burns!" },
  { id:"pisco",     name:"Pisco Sour",     es:"Pisco Sour",      emoji:"🍋", countryId:"pe", fact:"The Pisco Sour is Peru's national cocktail made from grapes grown in the Andes!", factEs:"¡El Pisco Sour es el cóctel nacional del Perú, hecho con uvas de los Andes!" },
  { id:"bobotie",   name:"Bobotie",        es:"Bobotie",         emoji:"🥘", countryId:"za", fact:"Bobotie is South Africa's national dish — a spiced meat bake with egg custard!",   factEs:"¡El bobotie es el plato nacional de Sudáfrica: carne especiada con huevo!" },
  { id:"mansaf",    name:"Mansaf",         es:"Mansaf",          emoji:"🍚", countryId:"sa", fact:"Mansaf is a giant feast dish eaten communally from one huge platter!",               factEs:"¡El mansaf es un enorme plato festivo que se come en comunidad de una fuente!" },
];

// ╔══════════════════════════════════════════════════════════════╗
// ║  FLAG CARD SVG (renders country/state flag as styled card)   ║
// ╚══════════════════════════════════════════════════════════════╝
function FlagCard({ item, size = 90, isState = false, selected = false, correct = false, wrong = false }) {
  const borderColor = correct ? "#2ECC71" : wrong ? "#E74C3C" : selected ? BLUE.bright : BLUE.light;
  const bg = correct ? "linear-gradient(135deg,#2ECC71,#27AE60)" : wrong ? "linear-gradient(135deg,#FF6B6B,#E74C3C)" : "white";
  return (
    <div style={{ width: size, height: size * 0.72, borderRadius: 14, background: bg, border: `3px solid ${borderColor}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: correct ? `0 0 20px #2ECC7160` : wrong ? `0 0 12px #FF6B6B60` : `0 3px 10px rgba(13,45,79,0.10)`, transition: "all 0.2s", overflow: "hidden", position: "relative" }}>
      <div style={{ fontSize: size * 0.38, lineHeight: 1 }}>{item.flag}</div>
      {isState && <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: size * 0.14, color: correct || wrong ? "white" : BLUE.mid, marginTop: 3, letterSpacing: 1 }}>{item.abbr}</div>}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  FLAG EXPLORER GAME                                          ║
// ╚══════════════════════════════════════════════════════════════╝
function FlagGame({ mode, onBack }) {
  const { state, dispatch } = useApp();
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

// ╔══════════════════════════════════════════════════════════════╗
// ║  FOODS GAME                                                  ║
// ╚══════════════════════════════════════════════════════════════╝
function FoodsGame({ mode, onBack }) {
  const { state, dispatch } = useApp();
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

      {/* MATCH MODE */
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

// ╔══════════════════════════════════════════════════════════════╗
// ║  GAMES HUB TAB                                               ║
// ╚══════════════════════════════════════════════════════════════╝
function GamesTab() {
  const { state } = useApp();
  const { S } = useLang();
  const [activeGame, setActiveGame] = useState(null); // { type, mode }
  const gp = state.gamesProgress || {};

  if (activeGame?.type === "flags") return <FlagGame mode={activeGame.mode} onBack={() => setActiveGame(null)} />;
  if (activeGame?.type === "foods") return <FoodsGame mode={activeGame.mode} onBack={() => setActiveGame(null)} />;

  const flagsUsDone = Object.keys(gp.flagsUs || {}).length;
  const flagsWorldDone = Object.keys(gp.flagsWorld || {}).length;
  const foodsSpotDone = Object.keys(gp.foodsSpot || {}).length;
  const foodsMatchDone = Object.keys(gp.foodsMatch || {}).length;

  const gameCards = [
    {
      type: "flags", mode: "us",
      title: S.usStates,   titleEs: S.usStatesEs,
      icon: "🇺🇸",
      desc: S.learnAllStates,
      descEs: S.learnAllStatesEs,
      done: flagsUsDone, total: 50,
      color: BLUE.dark, accent: BLUE.bright, bg: BLUE.sky,
    },
    {
      type: "flags", mode: "world",
      title: S.worldFlags, titleEs: S.worldFlagsEs,
      icon: "🌍",
      desc: S.flagsAllContinents,
      descEs: S.flagsAllContinentsEs,
      done: flagsWorldDone, total: 30,
      color: "#2A6B4A", accent: "#3DBF7A", bg: "#EDFAF3",
    },
    {
      type: "foods", mode: "spot",
      title: S.spotFood, titleEs: S.spotFoodEs,
      icon: "🍽️",
      desc: S.spotFoodDesc,
      descEs: S.spotFoodDescEs,
      done: foodsSpotDone, total: WORLD_FOODS.length,
      color: "#8B4513", accent: "#D2691E", bg: "#FDF0E6",
    },
    {
      type: "foods", mode: "match",
      title: S.matchFood, titleEs: S.matchFoodEs,
      icon: "🗺️",
      desc: S.matchFoodDesc,
      descEs: S.matchFoodDescEs,
      done: foodsMatchDone, total: WORLD_FOODS.length,
      color: "#7B3FA0", accent: "#B565D6", bg: "#F5EEF8",
    },
  ];

  return (
    <div style={{ paddingBottom: 110 }}>
      {/* Header */}
      <div style={{ margin: "16px 16px 12px", background: `linear-gradient(135deg,${BLUE.dark},${BLUE.mid})`, borderRadius: 24, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: `0 8px 28px ${BLUE.dark}40` }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Gamepad2 size={30} color={BLUE.gold} />
        </div>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 22, letterSpacing: 1 }}>{S.worldGames}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{S.juegosDelMundo}</div>
        </div>
      </div>

      {/* Game cards */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {gameCards.map(g => (
          <div key={`${g.type}-${g.mode}`} onClick={() => setActiveGame({ type: g.type, mode: g.mode })}
            style={{ background: "white", borderRadius: 22, padding: "20px 18px", border: `2px solid ${g.accent}30`, boxShadow: `0 6px 20px ${g.accent}18`, cursor: "pointer", transition: "all 0.15s" }}
            onPointerDown={e => e.currentTarget.style.transform = "scale(0.98)"}
            onPointerUp={e => e.currentTarget.style.transform = "scale(1)"}
            onPointerLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg,${g.bg},white)`, border: `2px solid ${g.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>{g.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: g.color, letterSpacing: 0.5 }}>{g.title}</div>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: g.accent, letterSpacing: 0.3 }}>{g.titleEs}</div>
              </div>
              <div style={{ background: `${g.accent}18`, borderRadius: 12, padding: "6px 12px", textAlign: "center", flexShrink: 0 }}>
                <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 18, color: g.color, lineHeight: 1 }}>{g.done}</div>
                <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 10, color: g.accent }}>of {g.total}</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 14, color: "#6B8BAA", marginBottom: 10 }}>
              {g.desc} <span style={{ color: g.accent }}>· {g.descEs}</span>
            </div>
            <div style={{ background: `${g.accent}18`, borderRadius: 20, height: 10, overflow: "hidden", border: `1px solid ${g.accent}30` }}>
              <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${g.accent},${g.color})`, width: `${Math.max((g.done / g.total) * 100, g.done > 0 ? 3 : 0)}%`, transition: "width 0.6s ease" }} />
            </div>
            {g.done > 0 && <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: 11, color: g.color, marginTop: 6, textAlign: "right" }}>{Math.round((g.done / g.total) * 100)}% complete ⭐</div>}
          </div>
        ))}
      </div>

      {/* Fun fact banner */}
      <div style={{ margin: "16px 16px 0", background: `linear-gradient(135deg,${BLUE.gold}15,${BLUE.gold}30)`, borderRadius: 18, padding: "14px 18px", border: `2px solid ${BLUE.gold}40`, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 28, flexShrink: 0 }}>🌎</span>
        <div>
          <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.goldDark, fontSize: 13, letterSpacing: 1, marginBottom: 4 }}>{S.didYouKnow}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.dark, fontSize: 14, lineHeight: 1.5 }}>{S.worldFact}</div>
          <div style={{ fontFamily: "'Patrick Hand',cursive", color: "#8B4513", fontSize: 13, lineHeight: 1.4, marginTop: 4 }}>{S.worldFactEs}</div>
        </div>
      </div>
    </div>
  );
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  ROOT APP                                                    ║
// ╚══════════════════════════════════════════════════════════════╝
function AppShell() {
  const { state, dispatch } = useApp();
  const { activeTab, celebrating, onboardingDone } = state;
  const pack = PACKS[state.selectedPack];
  const allItems = pack.zones.flatMap(z => z.items);
  const totalFound = Object.values(state.discovered).filter(Boolean).length;
  const rank = getRank(totalFound);
  const name = state.userName || "GABI";
  const [showParent, setShowParent] = useState(false);

  // Long-press header name to unlock parent mode
  const longPressTimer = useRef(null);
  const handleHeaderPressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setShowParent(true);
    }, 2000);
  };
  const handleHeaderPressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  // Show onboarding if not done
  if (!onboardingDone) return <OnboardingScreen />;

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(170deg,${BLUE.sky},#F0F8FF 40%,white)`, fontFamily: "'Patrick Hand',cursive", maxWidth: 600, margin: "0 auto" }}>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Patrick+Hand&display=swap" rel="stylesheet" />
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg,${BLUE.deepest},${BLUE.dark} 60%,${BLUE.mid})`, padding: "20px 20px 16px", position: "sticky", top: 0, zIndex: 50, boxShadow: `0 6px 24px ${BLUE.deepest}50` }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.bright},${BLUE.gold},${BLUE.bright})` }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div
            onClick={() => dispatch({ type: "SET_TAB", tab: "home" })}
            onPointerDown={handleHeaderPressStart}
            onPointerUp={handleHeaderPressEnd}
            onPointerLeave={handleHeaderPressEnd}
            style={{ cursor: "pointer" }}
          >
            <div style={{ fontFamily: "'Luckiest Guy',cursive", fontSize: 44, lineHeight: 0.95, letterSpacing: 4, background: `linear-gradient(135deg,#FFFFFF 20%,${BLUE.gold} 60%,#FFD97D)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.35))" }}>
              {name.toUpperCase()}
            </div>
            <div style={{ fontFamily: "'Luckiest Guy',cursive", color: "white", fontSize: 14, letterSpacing: 3, textShadow: "1px 2px 0 rgba(0,0,0,0.25)", lineHeight: 1, marginTop: 2 }}>{shellS.subtitle}</div>
            <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 11, letterSpacing: 1, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}><Award size={11} color={BLUE.light} />{rank.label}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LangToggle />
            <MuteButton />
            <div style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 18, padding: "8px 14px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 26, lineHeight: 1 }}>{totalFound}</div>
              <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 10 }}>of {allItems.length}</div>
            </div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 20, height: 12, overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)" }}>
          <div style={{ height: "100%", borderRadius: 20, background: `linear-gradient(90deg,${BLUE.gold},${BLUE.bright})`, width: `${Math.max((totalFound / allItems.length) * 100, totalFound > 0 ? 2 : 0)}%`, transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)", boxShadow: `0 0 12px ${BLUE.bright}80` }} />
        </div>
      </div>
      {/* Tab content */}
      {activeTab === "home"     && <HomeScreen />}
      {activeTab === "guide"    && <FieldGuideTab />}
      {activeTab === "missions" && <MissionsTab />}
      {activeTab === "spelling" && <SpellingTab />}
      {activeTab === "math"     && <MathTab />}
      {activeTab === "games"    && <GamesTab />}
      {activeTab === "journal"  && <JournalTab />}
      <BottomNav />
      {celebrating && <BadgeCelebration badge={celebrating} onDone={() => dispatch({ type: "DISMISS_CELEBRATION" })} />}
      {showParent && <ParentModeSheet onClose={() => setShowParent(false)} />}
      <style>{`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes popIn{from{transform:scale(0.5);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes shake{0%,100%{transform:translateX(0) scale(0.93)}25%{transform:translateX(-8px) scale(0.93)}75%{transform:translateX(8px) scale(0.93)}}
        @media print{.no-print{display:none!important}#adventure-card{border-radius:0!important}}
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}