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
const CharEmojiFallback = ({ size=96, emoji, color="#3B9EE8" }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="112" rx="28" ry="7" fill="rgba(0,0,0,0.08)"/>
    <circle cx="60" cy="58" r="42" fill={color} opacity="0.15"/>
    <circle cx="60" cy="58" r="34" fill={color} opacity="0.22"/>
    <circle cx="60" cy="58" r="34" stroke={color} strokeWidth="2.5" strokeOpacity="0.4" fill="none"/>
    {emoji && <text x="60" y="72" fontSize="44" textAnchor="middle">{emoji}</text>}
  </svg>
);

// ── BIRD CHARACTER PORTRAITS ──────────────────────────────────

const CharOwl = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="112" rx="30" ry="7" fill="rgba(0,0,0,0.12)" />
    {/* Branch */}
    <rect x="18" y="90" width="84" height="10" rx="5" fill="#6B4226" />
    <rect x="30" y="96" width="8" height="16" rx="4" fill="#5C3A1E" />
    <rect x="82" y="96" width="8" height="16" rx="4" fill="#5C3A1E" />
    {/* Body */}
    <ellipse cx="60" cy="72" rx="26" ry="28" fill="#C8A96E" />
    {/* Wing texture */}
    <ellipse cx="38" cy="72" rx="14" ry="20" fill="#A0784A" />
    <ellipse cx="82" cy="72" rx="14" ry="20" fill="#A0784A" />
    {/* Belly */}
    <ellipse cx="60" cy="78" rx="16" ry="18" fill="#E8D5A0" />
    {/* Feather marks on belly */}
    <path d="M52 68 Q60 72 68 68" stroke="#C8A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M50 75 Q60 79 70 75" stroke="#C8A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M52 82 Q60 86 68 82" stroke="#C8A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Head */}
    <circle cx="60" cy="46" r="24" fill="#C8A96E" />
    {/* Ear tufts */}
    <path d="M46 28 L42 14 L50 24 Z" fill="#8B6340" />
    <path d="M74 28 L78 14 L70 24 Z" fill="#8B6340" />
    {/* Facial disc */}
    <ellipse cx="60" cy="48" rx="18" ry="16" fill="#E8D5A0" opacity="0.7" />
    {/* Eyes — large and expressive */}
    <circle cx="51" cy="44" r="9" fill="#F5F0E0" />
    <circle cx="69" cy="44" r="9" fill="#F5F0E0" />
    <circle cx="51" cy="44" r="6" fill="#F4A620" />
    <circle cx="69" cy="44" r="6" fill="#F4A620" />
    <circle cx="51" cy="44" r="3.5" fill="#1A1A1A" />
    <circle cx="69" cy="44" r="3.5" fill="#1A1A1A" />
    <circle cx="52.5" cy="42.5" r="1.2" fill="white" />
    <circle cx="70.5" cy="42.5" r="1.2" fill="white" />
    {/* Beak */}
    <path d="M56 52 L60 58 L64 52 Q60 55 56 52 Z" fill="#D4A017" />
    {/* Feet on branch */}
    <path d="M48 90 L44 98 M48 90 L48 99 M48 90 L52 98" stroke="#8B6340" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M72 90 L68 98 M72 90 L72 99 M72 90 L76 98" stroke="#8B6340" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CharHawk = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="112" rx="28" ry="7" fill="rgba(0,0,0,0.12)" />
    {/* Branch */}
    <rect x="16" y="88" width="88" height="9" rx="4.5" fill="#5C3A1E" />
    <rect x="32" y="94" width="7" height="18" rx="3.5" fill="#4A2E14" />
    <rect x="81" y="94" width="7" height="18" rx="3.5" fill="#4A2E14" />
    {/* Tail — rust red fan */}
    <path d="M44 88 Q60 98 76 88 Q68 106 60 108 Q52 106 44 88 Z" fill="#C84B1E" />
    <path d="M50 90 Q60 100 70 90" stroke="#A03A14" strokeWidth="1" fill="none" />
    <path d="M47 92 Q60 103 73 92" stroke="#A03A14" strokeWidth="1" fill="none" />
    {/* Body */}
    <ellipse cx="60" cy="70" rx="22" ry="24" fill="#8B6340" />
    {/* Breast streaking */}
    <ellipse cx="60" cy="74" rx="13" ry="16" fill="#E8D5A0" />
    <path d="M55 64 Q58 70 55 76" stroke="#8B6340" strokeWidth="1.2" fill="none" />
    <path d="M60 62 Q63 68 60 76" stroke="#8B6340" strokeWidth="1.2" fill="none" />
    <path d="M65 64 Q62 70 65 76" stroke="#8B6340" strokeWidth="1.2" fill="none" />
    {/* Wings folded */}
    <path d="M38 68 Q30 60 32 50 Q40 58 46 68 Z" fill="#6B4226" />
    <path d="M82 68 Q90 60 88 50 Q80 58 74 68 Z" fill="#6B4226" />
    {/* Head */}
    <circle cx="60" cy="46" r="20" fill="#6B4226" />
    {/* White cheek patches */}
    <ellipse cx="50" cy="48" rx="6" ry="5" fill="#E8D5A0" opacity="0.6" />
    <ellipse cx="70" cy="48" rx="6" ry="5" fill="#E8D5A0" opacity="0.6" />
    {/* Eyes — sharp and proud */}
    <circle cx="52" cy="44" r="5" fill="#F5F0E0" />
    <circle cx="68" cy="44" r="5" fill="#F5F0E0" />
    <circle cx="52" cy="44" r="3.5" fill="#C8860A" />
    <circle cx="68" cy="44" r="3.5" fill="#C8860A" />
    <circle cx="52" cy="44" r="2" fill="#1A1A1A" />
    <circle cx="68" cy="44" r="2" fill="#1A1A1A" />
    <circle cx="53" cy="43" r="0.8" fill="white" />
    <circle cx="69" cy="43" r="0.8" fill="white" />
    {/* Hooked beak */}
    <path d="M55 50 L60 54 L65 50 L62 58 L60 60 L58 58 Z" fill="#D4A017" />
    {/* Supercilium stripe */}
    <path d="M44 40 Q52 36 60 38" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M76 40 Q68 36 60 38" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Feet */}
    <path d="M47 88 L42 96 M47 88 L47 97 M47 88 L52 96" stroke="#C8860A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M73 88 L68 96 M73 88 L73 97 M73 88 L78 96" stroke="#C8860A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CharHeron = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="28" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Legs — long and elegant */}
    <rect x="53" y="90" width="5" height="26" rx="2.5" fill="#C8A96E" />
    <rect x="62" y="90" width="5" height="26" rx="2.5" fill="#C8A96E" />
    {/* Feet */}
    <path d="M55 114 L48 118 M55 114 L55 119 M55 114 L62 118" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" />
    <path d="M64 114 L57 118 M64 114 L64 119 M64 114 L71 118" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" />
    {/* Body — compact and hunched */}
    <ellipse cx="60" cy="76" rx="20" ry="18" fill="#8BA0B8" />
    {/* Wing detail */}
    <path d="M40 72 Q36 64 40 56 Q48 66 54 76 Z" fill="#6B8099" />
    <path d="M80 72 Q84 64 80 56 Q72 66 66 76 Z" fill="#6B8099" />
    {/* White belly */}
    <ellipse cx="60" cy="80" rx="11" ry="12" fill="#F0F4F8" />
    {/* Neck — long and S-curved */}
    <path d="M54 62 Q46 52 50 36 Q58 28 60 30" stroke="#8BA0B8" strokeWidth="12" strokeLinecap="round" fill="none" />
    <path d="M54 62 Q46 52 50 36 Q58 28 60 30" stroke="#F0F4F8" strokeWidth="6" strokeLinecap="round" fill="none" />
    {/* Black neck stripe */}
    <path d="M54 58 Q48 48 51 38" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Head */}
    <ellipse cx="60" cy="28" rx="14" ry="12" fill="#8BA0B8" />
    {/* White face */}
    <ellipse cx="60" cy="30" rx="9" ry="8" fill="#F0F4F8" />
    {/* Black head stripe and crest */}
    <path d="M48 24 Q54 20 60 22 Q66 20 72 24" stroke="#2C3E50" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M66 22 Q74 18 80 14" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Eye */}
    <circle cx="64" cy="28" r="4" fill="#F5F0E0" />
    <circle cx="64" cy="28" r="2.5" fill="#C8860A" />
    <circle cx="64" cy="28" r="1.5" fill="#1A1A1A" />
    <circle cx="64.8" cy="27.2" r="0.6" fill="white" />
    {/* Long sharp beak */}
    <path d="M66 30 L94 26 L66 33 Z" fill="#D4A017" />
  </svg>
);

const CharDuck = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Water surface */}
    <ellipse cx="60" cy="96" rx="38" ry="8" fill="#A8D4F5" opacity="0.5" />
    <path d="M22 96 Q40 90 60 96 Q80 102 98 96" stroke="#2272B6" strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Body floating on water */}
    <ellipse cx="60" cy="88" rx="30" ry="16" fill="#8B6340" />
    {/* Wing speculum — iridescent blue patch */}
    <path d="M46 84 Q60 80 74 84 Q60 90 46 84 Z" fill="#2272B6" />
    <path d="M46 84 Q60 80 74 84" stroke="white" strokeWidth="1.5" fill="none" />
    {/* White ring — neck collar */}
    <ellipse cx="60" cy="70" rx="12" ry="5" fill="white" />
    {/* Neck */}
    <rect x="52" y="62" width="16" height="16" rx="8" fill="#2A6B4A" />
    {/* Head — iridescent green */}
    <circle cx="60" cy="56" r="16" fill="#2A6B4A" />
    {/* Iridescent sheen */}
    <ellipse cx="56" cy="52" rx="8" ry="6" fill="#3DBF7A" opacity="0.4" />
    {/* Eye */}
    <circle cx="64" cy="54" r="4.5" fill="#1A1A1A" />
    <circle cx="64" cy="54" r="2.5" fill="#2C2C2C" />
    <circle cx="65" cy="53" r="1" fill="white" />
    {/* Bill — yellow-green flat */}
    <path d="M66 58 L84 56 L84 62 L66 62 Q62 62 62 60 Q62 58 66 58 Z" fill="#C8D040" />
    <path d="M66 60 L84 59" stroke="#A0A830" strokeWidth="1" fill="none" />
    {/* Tail curl */}
    <path d="M82 82 Q92 76 90 68" stroke="#2C1A0E" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Ripples */}
    <path d="M24 100 Q40 96 56 100" stroke="#2272B6" strokeWidth="1" fill="none" opacity="0.3" />
    <path d="M64 100 Q80 96 96 100" stroke="#2272B6" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);

const CharMagpie = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="112" rx="28" ry="6" fill="rgba(0,0,0,0.12)" />
    {/* Branch */}
    <rect x="14" y="88" width="92" height="9" rx="4.5" fill="#5C3A1E" />
    <rect x="30" y="94" width="7" height="18" rx="3.5" fill="#4A2E14" />
    <rect x="83" y="94" width="7" height="18" rx="3.5" fill="#4A2E14" />
    {/* Long graduated tail */}
    <path d="M72 88 Q88 92 96 108 Q84 104 80 96 Q78 104 72 108 Q70 96 72 88 Z" fill="#1A1A2E" />
    {/* Iridescent tail sheen */}
    <path d="M74 90 Q86 94 92 106" stroke="#2272B6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M74 93 Q84 96 88 106" stroke="#3DBF7A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
    {/* Body — black */}
    <ellipse cx="56" cy="72" rx="22" ry="20" fill="#1A1A2E" />
    {/* White shoulder patches */}
    <ellipse cx="44" cy="68" rx="10" ry="8" fill="white" />
    <ellipse cx="68" cy="68" rx="10" ry="8" fill="white" />
    {/* White belly patch */}
    <ellipse cx="56" cy="78" rx="13" ry="10" fill="white" />
    {/* Wing iridescence */}
    <path d="M34 70 Q30 62 34 54 Q42 64 48 74 Z" fill="#2272B6" opacity="0.7" />
    {/* Head — black with white cheeks */}
    <circle cx="56" cy="50" r="18" fill="#1A1A2E" />
    <ellipse cx="50" cy="54" rx="7" ry="5" fill="white" />
    <ellipse cx="62" cy="54" rx="7" ry="5" fill="white" />
    {/* Eye — sharp and intelligent */}
    <circle cx="50" cy="48" r="5" fill="#1A1A2E" />
    <circle cx="50" cy="48" r="3" fill="#2C2C2C" />
    <circle cx="51" cy="47" r="1.2" fill="white" />
    {/* Bill — black and strong */}
    <path d="M46 54 L34 54 L34 50 L46 50 Q50 50 50 52 Q50 54 46 54 Z" fill="#2C2C2C" />
    {/* Feet */}
    <path d="M44 88 L39 96 M44 88 L44 97 M44 88 L49 96" stroke="#4A4A4A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M68 88 L63 96 M68 88 L68 97 M68 88 L73 96" stroke="#4A4A4A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);


// ── PLANT BOTANICAL SCENE ILLUSTRATIONS ──────────────────────

const CharRose = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Ground */}
    <ellipse cx="60" cy="112" rx="28" ry="6" fill="rgba(0,0,0,0.10)" />
    {/* Main stem */}
    <path d="M60 108 Q58 90 60 70 Q62 50 60 34" stroke="#2A6B4A" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Left stem with bud */}
    <path d="M58 80 Q44 72 40 60" stroke="#2A6B4A" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Thorns */}
    <path d="M60 90 L54 86" stroke="#2A6B4A" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 75 L66 71" stroke="#2A6B4A" strokeWidth="2" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M60 86 Q50 78 46 68 Q58 72 60 86 Z" fill="#3DBF7A" />
    <path d="M60 72 Q70 64 74 54 Q62 58 60 72 Z" fill="#3DBF7A" />
    <path d="M40 60 Q30 52 28 42 Q40 48 40 60 Z" fill="#3DBF7A" />
    {/* Side bud */}
    <circle cx="40" cy="58" r="8" fill="#E87A8C" />
    <path d="M36 54 Q40 50 44 54" stroke="#C84B6A" strokeWidth="1.5" fill="none" />
    {/* Main bloom — layered petals */}
    {/* Outer petals */}
    <path d="M60 34 Q48 26 46 16 Q58 22 60 34 Z" fill="#E87A8C" />
    <path d="M60 34 Q72 26 74 16 Q62 22 60 34 Z" fill="#E87A8C" />
    <path d="M60 34 Q44 32 38 24 Q50 26 60 34 Z" fill="#E87A8C" />
    <path d="M60 34 Q76 32 82 24 Q70 26 60 34 Z" fill="#E87A8C" />
    <path d="M60 34 Q48 44 44 52 Q56 44 60 34 Z" fill="#C84B6A" />
    <path d="M60 34 Q72 44 76 52 Q64 44 60 34 Z" fill="#C84B6A" />
    {/* Inner petals */}
    <path d="M60 34 Q52 28 52 22 Q58 28 60 34 Z" fill="#FF9AB0" />
    <path d="M60 34 Q68 28 68 22 Q62 28 60 34 Z" fill="#FF9AB0" />
    <path d="M60 34 Q54 40 52 46 Q58 38 60 34 Z" fill="#C84B6A" />
    <path d="M60 34 Q66 40 68 46 Q62 38 60 34 Z" fill="#C84B6A" />
    {/* Center */}
    <circle cx="60" cy="34" r="7" fill="#F4B942" />
    <circle cx="60" cy="34" r="4" fill="#C8860A" />
  </svg>
);

const CharLupine = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="24" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Stem */}
    <rect x="57" y="50" width="6" height="64" rx="3" fill="#2A6B4A" />
    {/* Palmate leaves */}
    {[[-28, 90, -20], [-20, 80, -15], [-14, 70, -10], [14, 70, 10], [20, 80, 15], [28, 90, 20]].map(([dx, y, rot], i) => (
      <g key={i} transform={`translate(${60 + dx}, ${y}) rotate(${rot})`}>
        <path d="M0 0 Q-6 -14 0 -22 Q6 -14 0 0 Z" fill="#3DBF7A" />
      </g>
    ))}
    {/* Large leaf spread at base */}
    <path d="M60 100 Q40 94 34 80 Q50 86 60 100 Z" fill="#3DBF7A" />
    <path d="M60 100 Q80 94 86 80 Q70 86 60 100 Z" fill="#3DBF7A" />
    <path d="M60 100 Q42 98 36 88 Q50 90 60 100 Z" fill="#2A6B4A" opacity="0.6" />
    {/* Flower spike — densely packed florets */}
    {[46, 40, 34, 28, 22, 16, 10].map((y, i) => {
      const spread = Math.max(4, 14 - i * 1.5);
      return (
        <g key={i}>
          <ellipse cx={60 - spread * 0.7} cy={y} rx="5" ry="4" fill="#9B59B6" />
          <ellipse cx={60 + spread * 0.7} cy={y + 2} rx="5" ry="4" fill="#7B3FA0" />
          <ellipse cx="60" cy={y - 2} rx="4.5" ry="3.5" fill="#B565D6" />
          {/* White petal highlight */}
          <ellipse cx={60 - spread * 0.7} cy={y - 1} rx="2" ry="1.5" fill="white" opacity="0.5" />
        </g>
      );
    })}
    {/* Top bud */}
    <ellipse cx="60" cy="8" rx="4" ry="6" fill="#7B3FA0" />
  </svg>
);

const CharFireweed = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="22" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Main stem — tall and dramatic */}
    <rect x="58" y="20" width="5" height="92" rx="2.5" fill="#C84040" />
    {/* Narrow lance-shaped leaves alternating up stem */}
    {[[50, 95, -30], [70, 85, 25], [48, 75, -25], [72, 65, 20], [50, 55, -20]].map(([x, y, rot], i) => (
      <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
        <path d="M0 0 Q-3 -10 0 -18 Q3 -10 0 0 Z" fill="#3DBF7A" />
      </g>
    ))}
    {/* Seed pods — wispy at bottom of spike */}
    <path d="M60 80 Q52 78 48 72" stroke="#C84040" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M60 74 Q68 72 72 66" stroke="#C84040" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Flowers up the spike — bright magenta */}
    {[60, 48, 38, 28, 20].map((y, i) => {
      const alpha = i < 2 ? 1 : 0.85;
      return (
        <g key={i}>
          {/* 4 petals */}
          <ellipse cx="60" cy={y - 6} rx="5" ry="3.5" fill="#E84040" opacity={alpha} />
          <ellipse cx="60" cy={y + 6} rx="5" ry="3.5" fill="#E84040" opacity={alpha} />
          <ellipse cx="54" cy={y} rx="3.5" ry="5" fill="#E84040" opacity={alpha} />
          <ellipse cx="66" cy={y} rx="3.5" ry="5" fill="#E84040" opacity={alpha} />
          {/* Stamens */}
          <circle cx="60" cy={y} r="3" fill="#F4B942" />
          {/* Sepals */}
          <path d="M56 ${y+4} Q60 ${y+8} 64 ${y+4}" stroke="#8B2020" strokeWidth="1" fill="none" />
        </g>
      );
    })}
    {/* Top buds not yet open */}
    <ellipse cx="60" cy="12" rx="3" ry="5" fill="#C82020" />
    <ellipse cx="60" cy="6" rx="2" ry="3" fill="#8B2020" />
  </svg>
);

const CharPine = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="20" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Trunk — distinctive warm reddish-orange bark */}
    <rect x="53" y="72" width="14" height="42" rx="4" fill="#C8860A" />
    {/* Bark plates */}
    <rect x="55" y="76" width="4" height="12" rx="2" fill="#A0640A" opacity="0.6" />
    <rect x="61" y="80" width="4" height="10" rx="2" fill="#A0640A" opacity="0.6" />
    <rect x="55" y="92" width="4" height="10" rx="2" fill="#A0640A" opacity="0.6" />
    <rect x="61" y="95" width="4" height="10" rx="2" fill="#A0640A" opacity="0.6" />
    {/* Lower branches */}
    <path d="M53 78 Q36 74 26 80 Q38 76 53 82 Z" fill="#2A6B4A" />
    <path d="M67 78 Q84 74 94 80 Q82 76 67 82 Z" fill="#2A6B4A" />
    {/* Layered crown — triangular tiers */}
    {/* Bottom tier */}
    <path d="M28 76 Q60 56 92 76 Q76 66 60 70 Q44 66 28 76 Z" fill="#2A6B4A" />
    {/* Middle tier */}
    <path d="M36 62 Q60 42 84 62 Q72 52 60 56 Q48 52 36 62 Z" fill="#3DBF7A" />
    {/* Upper tier */}
    <path d="M42 48 Q60 30 78 48 Q68 40 60 44 Q52 40 42 48 Z" fill="#2A6B4A" />
    {/* Top tier */}
    <path d="M48 36 Q60 18 72 36 Q66 28 60 32 Q54 28 48 36 Z" fill="#3DBF7A" />
    {/* Tip */}
    <path d="M54 22 Q60 8 66 22 Q60 16 54 22 Z" fill="#2A6B4A" />
    {/* Pine cones */}
    <ellipse cx="44" cy="68" rx="4" ry="5" fill="#8B6340" />
    <ellipse cx="76" cy="68" rx="4" ry="5" fill="#8B6340" />
    <path d="M42 65 Q44 62 46 65" stroke="#5C3A1E" strokeWidth="1" fill="none" />
    <path d="M42 68 Q44 65 46 68" stroke="#5C3A1E" strokeWidth="1" fill="none" />
  </svg>
);

const CharFern = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="26" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Central unfurling frond — fiddelhead */}
    <path d="M60 108 Q60 80 58 60 Q56 40 60 20" stroke="#2A6B4A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Fiddlehead curl at top */}
    <path d="M60 20 Q68 14 70 22 Q72 30 64 32 Q58 30 60 20" stroke="#3DBF7A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Pinnate leaflets — left side */}
    {[[55, 95, -40], [53, 82, -45], [52, 70, -50], [51, 58, -52], [52, 46, -55], [53, 34, -52]].map(([x, y, rot], i) => (
      <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
        <path d="M0 0 Q-8 -4 -14 0 Q-8 4 0 0 Z" fill="#3DBF7A" />
        {/* Sub-leaflets */}
        <path d="M-4 -1 Q-7 -5 -10 -2" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M-4 1 Q-7 5 -10 2" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M-8 -0.5 Q-11 -4 -13 -1" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M-8 0.5 Q-11 4 -13 1" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
      </g>
    ))}
    {/* Pinnate leaflets — right side */}
    {[[65, 92, 40], [67, 79, 45], [68, 67, 50], [67, 55, 52], [66, 43, 55], [65, 31, 52]].map(([x, y, rot], i) => (
      <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
        <path d="M0 0 Q8 -4 14 0 Q8 4 0 0 Z" fill="#3DBF7A" />
        <path d="M4 -1 Q7 -5 10 -2" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M4 1 Q7 5 10 2" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M8 -0.5 Q11 -4 13 -1" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
        <path d="M8 0.5 Q11 4 13 1" stroke="#2A6B4A" strokeWidth="0.8" fill="none" />
      </g>
    ))}
    {/* Secondary fronds arching out */}
    <path d="M60 100 Q40 88 24 92 Q38 84 60 96 Z" fill="#3DBF7A" opacity="0.8" />
    <path d="M60 100 Q80 88 96 92 Q82 84 60 96 Z" fill="#3DBF7A" opacity="0.8" />
  </svg>
);

const CharSage = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <ellipse cx="60" cy="114" rx="32" ry="5" fill="rgba(0,0,0,0.10)" />
    {/* Ground soil patch */}
    <ellipse cx="60" cy="110" rx="28" ry="6" fill="#8B6340" opacity="0.3" />
    {/* Main woody stems */}
    <path d="M60 108 Q56 96 52 82 Q48 68 46 56" stroke="#8B7355" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M60 108 Q62 96 64 82 Q66 68 70 54" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M60 108 Q58 94 50 80 Q44 68 36 60" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 108 Q64 94 72 80 Q78 68 84 60" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 108 Q55 98 44 90 Q36 84 30 78" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M60 108 Q66 98 76 90 Q84 84 90 78" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Silvery-grey foliage clusters — sagebrush leaves are tiny and aromatic */}
    {[
      [46, 54], [70, 52], [36, 58], [84, 58], [30, 76], [90, 76],
      [50, 70], [72, 68], [42, 82], [78, 80], [54, 44], [68, 42],
      [38, 68], [82, 66], [46, 88], [74, 86],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <ellipse cx={cx} cy={cy} rx="8" ry="5" fill="#8FBC8F" opacity="0.75" transform={`rotate(${(i * 23) % 40 - 20}, ${cx}, ${cy})`} />
        <ellipse cx={cx} cy={cy} rx="5" ry="3" fill="#B0C8A0" opacity="0.6" transform={`rotate(${(i * 17) % 30 - 15}, ${cx}, ${cy})`} />
      </g>
    ))}
    {/* Tiny yellow flower spikes at tips */}
    {[[46, 50], [70, 48], [54, 40], [36, 54], [84, 54]].map(([cx, cy], i) => (
      <g key={i}>
        <rect x={cx - 1} y={cy - 8} width="2" height="8" rx="1" fill="#C8A030" />
        {[0, 3, 6].map(dy => (
          <circle key={dy} cx={cx} cy={cy - dy} r="1.5" fill="#F4B942" />
        ))}
      </g>
    ))}
  </svg>
);


// ── LANDSCAPE SCENE ILLUSTRATIONS ────────────────────────────

const CharMountain = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Sky gradient */}
    <rect x="0" y="0" width="120" height="80" rx="12" fill="#A8D4F5" />
    <rect x="0" y="40" width="120" height="40" rx="0" fill="#DDF0FC" opacity="0.5" />
    {/* Sun */}
    <circle cx="92" cy="18" r="10" fill="#F4B942" opacity="0.9" />
    <circle cx="92" cy="18" r="7" fill="#FFD97D" />
    {/* Distant peaks — lighter blue-grey */}
    <path d="M0 65 L18 38 L32 52 L48 28 L62 44 L74 32 L88 48 L102 30 L120 50 L120 80 L0 80 Z"
      fill="#6B8BAA" opacity="0.5" />
    {/* Snow caps on distant peaks */}
    <path d="M48 28 L42 38 L54 38 Z" fill="white" opacity="0.8" />
    <path d="M102 30 L96 42 L108 42 Z" fill="white" opacity="0.8" />
    {/* Main foreground peak — left */}
    <path d="M0 80 L30 28 L56 80 Z" fill="#4A6B8A" />
    <path d="M30 28 L22 46 L38 46 Z" fill="white" opacity="0.9" />
    {/* Main foreground peak — center/right */}
    <path d="M44 80 L72 14 L100 80 Z" fill="#2D4F6B" />
    <path d="M72 14 L62 34 L82 34 Z" fill="white" />
    <path d="M68 24 L72 14 L76 24 L72 22 Z" fill="white" />
    {/* Right peak */}
    <path d="M88 80 L106 40 L120 80 Z" fill="#3D5F7A" />
    <path d="M106 40 L100 54 L112 54 Z" fill="white" opacity="0.85" />
    {/* Treeline at base */}
    <path d="M0 80 Q10 72 20 76 Q28 68 36 74 Q44 66 52 72 Q58 65 64 70 Q70 64 78 68 Q86 62 94 66 Q102 60 110 64 Q116 60 120 62 L120 80 Z"
      fill="#2A6B4A" />
    {/* Ground */}
    <rect x="0" y="80" width="120" height="40" rx="0" fill="#3DBF7A" opacity="0.6" />
    <rect x="0" y="88" width="120" height="32" rx="0" fill="#2A6B4A" opacity="0.4" />
  </svg>
);

const CharGlacier = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Sky */}
    <rect x="0" y="0" width="120" height="60" rx="12" fill="#B8DCF0" />
    {/* Distant mountain silhouette */}
    <path d="M0 55 L20 30 L40 45 L60 20 L80 38 L100 25 L120 42 L120 60 L0 60 Z"
      fill="#8BA8C0" opacity="0.6" />
    {/* Glacier body — massive blue-white ice mass */}
    <path d="M10 60 L8 40 L20 28 L36 32 L48 20 L64 24 L78 18 L92 26 L106 30 L114 44 L112 60 Z"
      fill="#C8E8F8" />
    {/* Glacier surface layers / strata */}
    <path d="M10 60 L12 50 L28 42 L44 46 L58 36 L72 40 L86 34 L100 42 L112 50 L112 60 Z"
      fill="#A8D4F0" opacity="0.7" />
    <path d="M10 60 L14 54 L30 50 L46 54 L60 46 L74 50 L88 46 L102 54 L112 56 L112 60 Z"
      fill="#88C4E8" opacity="0.5" />
    {/* Deep crevasses — characteristic of glaciers */}
    <path d="M30 58 Q28 44 32 34" stroke="#2272B6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M52 60 Q50 46 54 32" stroke="#2272B6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M74 58 Q72 44 76 30" stroke="#2272B6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M94 58 Q92 48 96 38" stroke="#2272B6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    {/* Ice seracs — jagged towers */}
    <path d="M40 42 L36 28 L44 34 L48 24 L52 34 L56 30 L54 42 Z" fill="#DDF4FF" opacity="0.8" />
    <path d="M66 40 L62 26 L68 32 L72 20 L76 32 L80 28 L78 40 Z" fill="#DDF4FF" opacity="0.8" />
    {/* Snow sparkle effects */}
    {[[22, 36], [58, 26], [88, 32], [34, 48], [70, 44], [100, 40]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x} ${y-4} M${x-3} ${y-1} L${x+3} ${y-1}`}
        stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    ))}
    {/* Meltwater stream at base */}
    <path d="M10 60 Q30 65 50 62 Q70 65 90 62 Q105 65 112 60"
      stroke="#3B9EE8" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Rocky moraine at base */}
    <rect x="0" y="82" width="120" height="38" rx="0" fill="#8B7355" opacity="0.5" />
    <ellipse cx="25" cy="86" rx="8" ry="5" fill="#6B5535" opacity="0.6" />
    <ellipse cx="60" cy="88" rx="10" ry="4" fill="#6B5535" opacity="0.5" />
    <ellipse cx="95" cy="85" rx="7" ry="4" fill="#6B5535" opacity="0.6" />
    {/* Ice blue pool at glacier base */}
    <ellipse cx="60" cy="76" rx="30" ry="8" fill="#88C4E8" opacity="0.5" />
  </svg>
);

const CharLake = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Sky — golden hour */}
    <rect x="0" y="0" width="120" height="55" rx="12" fill="#A8D4F5" />
    <rect x="0" y="20" width="120" height="35" fill="#DDF0FC" opacity="0.5" />
    {/* Small white clouds */}
    <ellipse cx="25" cy="15" rx="14" ry="7" fill="white" opacity="0.8" />
    <ellipse cx="35" cy="12" rx="10" ry="6" fill="white" opacity="0.8" />
    <ellipse cx="85" cy="20" rx="12" ry="6" fill="white" opacity="0.7" />
    <ellipse cx="95" cy="17" rx="9" ry="5" fill="white" opacity="0.7" />
    {/* Mountain peaks reflected */}
    <path d="M0 52 L22 28 L42 48 L60 16 L78 44 L98 30 L120 48 L120 56 L0 56 Z"
      fill="#4A6B8A" />
    <path d="M60 16 L52 32 L68 32 Z" fill="white" opacity="0.9" />
    <path d="M22 28 L16 40 L28 40 Z" fill="white" opacity="0.7" />
    {/* Treeline */}
    <path d="M0 56 Q8 50 16 54 Q22 46 30 52 Q38 44 46 50 Q52 44 58 48 Q64 42 72 46 Q80 40 88 44 Q96 40 104 44 Q112 40 120 44 L120 58 L0 58 Z"
      fill="#2A6B4A" />
    {/* Lake — mirror-still water */}
    <rect x="0" y="66" width="120" height="54" rx="0" fill="#2272B6" />
    {/* Water reflection — inverted mountains */}
    <path d="M0 66 L22 90 L42 72 L60 104 L78 76 L98 90 L120 72 L120 66 Z"
      fill="#1A4A7A" opacity="0.5" />
    {/* Reflection of trees */}
    <path d="M0 66 Q8 70 16 68 Q22 74 30 70 Q38 76 46 72 Q52 76 58 74 Q64 78 72 76 Q80 80 88 78 L120 76 L120 66 Z"
      fill="#1A4A7A" opacity="0.35" />
    {/* Surface shimmer */}
    <path d="M10 76 Q30 73 50 76 Q70 79 90 76 Q105 73 115 76"
      stroke="#A8D4F5" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M5 84 Q25 81 45 84 Q65 87 85 84 Q100 81 118 84"
      stroke="#A8D4F5" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Shoreline rocks */}
    <ellipse cx="18" cy="68" rx="10" ry="4" fill="#6B8BAA" opacity="0.6" />
    <ellipse cx="98" cy="68" rx="12" ry="4" fill="#6B8BAA" opacity="0.5" />
    {/* Sun reflection on water */}
    <path d="M55 70 L65 70" stroke="#F4B942" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <path d="M52 74 L68 74" stroke="#F4B942" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M54 78 L66 78" stroke="#F4B942" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

const CharRiver = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Sky */}
    <rect x="0" y="0" width="120" height="40" rx="12" fill="#A8D4F5" />
    {/* Background hills */}
    <path d="M0 38 Q20 22 40 32 Q60 18 80 28 Q100 16 120 26 L120 40 L0 40 Z"
      fill="#3DBF7A" opacity="0.6" />
    {/* Pine trees on banks */}
    {[[8, 54], [18, 50], [28, 54], [92, 52], [102, 48], [112, 52]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x - 2} y={y} width="4" height="12" rx="2" fill="#8B6340" />
        <path d={`M${x - 8} ${y} Q${x} ${y - 18} ${x + 8} ${y} Z`} fill="#2A6B4A" />
        <path d={`M${x - 6} ${y - 8} Q${x} ${y - 22} ${x + 6} ${y - 8} Z`} fill="#3DBF7A" />
      </g>
    ))}
    {/* Grassy banks */}
    <path d="M0 54 Q14 48 28 52 Q36 46 42 54 L42 120 L0 120 Z" fill="#3DBF7A" />
    <path d="M78 54 Q86 46 94 52 Q106 48 120 54 L120 120 L78 120 Z" fill="#3DBF7A" />
    {/* River winding through — turquoise blue */}
    <path d="M42 54 Q50 60 48 72 Q46 84 52 94 Q56 102 54 114 Q56 116 58 114 Q62 102 58 92 Q54 80 56 68 Q58 56 64 50 Q70 44 74 52 Q76 56 78 54"
      stroke="#3B9EE8" strokeWidth="18" strokeLinecap="round" fill="none" />
    {/* River highlight — lighter center */}
    <path d="M42 54 Q50 60 48 72 Q46 84 52 94 Q56 102 54 114 Q56 116 58 114 Q62 102 58 92 Q54 80 56 68 Q58 56 64 50 Q70 44 74 52 Q76 56 78 54"
      stroke="#A8D4F5" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />
    {/* Rocks in river */}
    <ellipse cx="50" cy="68" rx="5" ry="3" fill="#8BA0B8" opacity="0.8" transform="rotate(-10, 50, 68)" />
    <ellipse cx="58" cy="82" rx="4" ry="2.5" fill="#6B8099" opacity="0.8" />
    <ellipse cx="54" cy="96" rx="5" ry="3" fill="#8BA0B8" opacity="0.7" transform="rotate(5, 54, 96)" />
    {/* White water / rapids around rocks */}
    <path d="M46 66 Q50 63 54 66" stroke="white" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
    <path d="M55 80 Q58 77 62 80" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
    {/* Ripples */}
    <path d="M44 88 Q52 85 60 88 Q52 91 44 88 Z" fill="white" opacity="0.2" />
    <path d="M48 104 Q56 101 62 104" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
  </svg>
);

const CharPrairie = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Big sky — the whole top two-thirds */}
    <rect x="0" y="0" width="120" height="78" rx="12" fill="#A8D4F5" />
    {/* Gradient from horizon up */}
    <rect x="0" y="0" width="120" height="40" rx="12" fill="#DDF0FC" opacity="0.5" />
    {/* Large cumulus clouds — classic Big Sky */}
    <ellipse cx="30" cy="24" rx="22" ry="14" fill="white" opacity="0.9" />
    <ellipse cx="18" cy="28" rx="16" ry="10" fill="white" opacity="0.9" />
    <ellipse cx="44" cy="28" rx="14" ry="9" fill="white" opacity="0.9" />
    <ellipse cx="30" cy="18" rx="12" ry="8" fill="white" />
    <ellipse cx="85" cy="18" rx="18" ry="11" fill="white" opacity="0.85" />
    <ellipse cx="74" cy="22" rx="12" ry="8" fill="white" opacity="0.85" />
    <ellipse cx="98" cy="22" rx="12" ry="8" fill="white" opacity="0.85" />
    <ellipse cx="85" cy="14" rx="10" ry="7" fill="white" opacity="0.9" />
    {/* Cloud shadows hint */}
    <ellipse cx="30" cy="76" rx="20" ry="4" fill="#8BA0B8" opacity="0.12" />
    <ellipse cx="85" cy="74" rx="16" ry="3" fill="#8BA0B8" opacity="0.10" />
    {/* Horizon — very flat */}
    <rect x="0" y="74" width="120" height="46" rx="0" fill="#8FBC45" />
    {/* Prairie layers — distance to foreground color shift */}
    <rect x="0" y="74" width="120" height="12" fill="#A8CC60" />
    <rect x="0" y="82" width="120" height="12" fill="#8FBC45" />
    <rect x="0" y="90" width="120" height="30" fill="#7AAA30" />
    {/* Distant treeline on horizon — very low */}
    <path d="M0 74 Q12 70 24 73 Q36 68 48 72 Q60 68 72 72 Q84 68 96 71 Q108 68 120 72 L120 76 L0 76 Z"
      fill="#5C8A20" opacity="0.5" />
    {/* Grass texture — individual blades in foreground */}
    {Array.from({ length: 20 }, (_, i) => {
      const x = i * 6 + 2;
      const h = 8 + (i % 4) * 4;
      return (
        <g key={i}>
          <path d={`M${x} 120 Q${x - 2} ${120 - h} ${x + 1} ${120 - h - 4}`}
            stroke="#5C8A20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d={`M${x + 3} 120 Q${x + 5} ${120 - h + 2} ${x + 2} ${120 - h - 2}`}
            stroke="#7AAA30" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
      );
    })}
    {/* Wildflowers dotted in grass */}
    {[[15, 100], [38, 104], [55, 98], [78, 102], [100, 100], [112, 96]].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="3" fill={["#F4B942", "#E87A8C", "#9B59B6", "#F4B942", "#E87A8C", "#FFD97D"][i]} />
      </g>
    ))}
    {/* Fence line — classic prairie */}
    <line x1="0" y1="88" x2="120" y2="88" stroke="#8B6340" strokeWidth="1" opacity="0.4" strokeDasharray="8 4" />
    {[16, 44, 72, 100].map(x => (
      <rect key={x} x={x - 1} y="84" width="2" height="8" rx="1" fill="#8B6340" opacity="0.5" />
    ))}
  </svg>
);

const CharSky = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    {/* Deep blue gradient sky — the whole scene */}
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A4A7A" />
        <stop offset="40%" stopColor="#2272B6" />
        <stop offset="75%" stopColor="#A8D4F5" />
        <stop offset="100%" stopColor="#DDF0FC" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="120" height="120" rx="14" fill="url(#skyGrad)" />
    {/* Sun — golden and warm */}
    <circle cx="72" cy="28" r="14" fill="#F4B942" opacity="0.3" />
    <circle cx="72" cy="28" r="10" fill="#F4B942" opacity="0.5" />
    <circle cx="72" cy="28" r="7" fill="#FFD97D" opacity="0.9" />
    <circle cx="72" cy="28" r="5" fill="#FFEE80" />
    {/* Sun rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 72 + Math.cos(rad) * 9;
      const y1 = 28 + Math.sin(rad) * 9;
      const x2 = 72 + Math.cos(rad) * 16;
      const y2 = 28 + Math.sin(rad) * 16;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F4B942" strokeWidth="2" strokeLinecap="round" opacity="0.6" />;
    })}
    {/* Dramatic cumulus clouds — towering vertically */}
    {/* Main cloud tower left */}
    <ellipse cx="28" cy="58" rx="20" ry="24" fill="white" opacity="0.92" />
    <ellipse cx="20" cy="66" rx="14" ry="16" fill="white" opacity="0.9" />
    <ellipse cx="36" cy="64" rx="14" ry="18" fill="white" opacity="0.9" />
    <ellipse cx="28" cy="48" rx="14" ry="12" fill="white" />
    <ellipse cx="22" cy="54" rx="10" ry="10" fill="white" />
    <ellipse cx="34" cy="52" rx="12" ry="10" fill="white" />
    {/* Cloud shadow bottom */}
    <ellipse cx="28" cy="78" rx="18" ry="6" fill="#8BA0B8" opacity="0.2" />
    {/* Cloud tower right — slightly behind */}
    <ellipse cx="96" cy="52" rx="16" ry="20" fill="white" opacity="0.85" />
    <ellipse cx="88" cy="60" rx="12" ry="14" fill="white" opacity="0.85" />
    <ellipse cx="104" cy="58" rx="12" ry="16" fill="white" opacity="0.85" />
    <ellipse cx="96" cy="42" rx="12" ry="10" fill="white" opacity="0.9" />
    {/* Wispy cirrus clouds high up */}
    <path d="M50 14 Q62 10 78 14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M48 18 Q58 15 70 18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M4 22 Q14 18 26 22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
    {/* Horizon glow */}
    <rect x="0" y="90" width="120" height="30" rx="0" fill="#F4B942" opacity="0.08" />
    {/* Distant flat land at bottom — tiny strip */}
    <rect x="0" y="104" width="120" height="16" rx="0" fill="#5C8A20" opacity="0.6" />
    <path d="M0 104 Q20 100 40 103 Q60 100 80 103 Q100 100 120 103 L120 106 L0 106 Z"
      fill="#3DBF7A" opacity="0.5" />
    {/* Birds silhouettes — tiny specks high in the sky */}
    {[[44, 34], [50, 30], [56, 33], [62, 29]].map(([x, y], i) => (
      <path key={i} d={`M${x - 3} ${y} Q${x} ${y - 2} ${x + 3} ${y}`}
        stroke="#1A4A7A" strokeWidth="1.2" fill="none" opacity="0.5" />
    ))}
  </svg>
);

// ── AIRPORT HUNT ICONS ──────────────────────────────────────────
const CharAirplane = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={34}/>
    <ellipse cx="58" cy="70" rx="40" ry="13" fill="#E8F4FC"/>
    <path d="M20 70 Q14 68 12 70 Q14 72 20 72 Z" fill="#3B9EE8"/>
    <path d="M50 58 L34 30 L44 30 L60 58 Z" fill="#2272B6"/>
    <path d="M50 82 L34 108 L44 108 L60 82 Z" fill="#2272B6"/>
    <path d="M92 64 L112 52 L112 60 L96 70 Z" fill="#2272B6"/>
    <ellipse cx="96" cy="70" rx="8" ry="9" fill="#0D2D4F"/>
    <circle cx="52" cy="66" r="3" fill="#A8D4F5"/><circle cx="62" cy="66" r="3" fill="#A8D4F5"/>
    <circle cx="72" cy="66" r="3" fill="#A8D4F5"/><circle cx="82" cy="66" r="3" fill="#A8D4F5"/>
    <path d="M18 70 Q30 66 44 70 Q30 74 18 70 Z" fill="#F4B942"/>
  </svg>
);
const CharGate = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <rect x="24" y="18" width="72" height="86" rx="10" fill="#1A4A7A"/>
    <rect x="34" y="30" width="52" height="66" rx="6" fill="#3B9EE8"/>
    <rect x="34" y="30" width="52" height="26" rx="6" fill="#A8D4F5"/>
    <circle cx="78" cy="66" r="3" fill="#0D2D4F"/>
    <rect x="42" y="10" width="36" height="16" rx="4" fill="#F4B942"/>
    <text x="60" y="22" textAnchor="middle" fontFamily="Luckiest Guy,cursive" fontSize="12" fill="#0D2D4F">B7</text>
  </svg>
);
const CharRunway = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={40}/>
    <rect x="6" y="60" width="108" height="34" rx="4" fill="#5C6B7A"/>
    {[14,34,54,74,94].map((x,i)=><rect key={i} x={x} y="74" width="14" height="6" rx="2" fill="white"/>)}
    <path d="M70 60 L82 34 L92 34 L84 60 Z" fill="#2272B6"/>
    <ellipse cx="88" cy="34" rx="7" ry="6" fill="#0D2D4F"/>
    <path d="M76 44 L64 40 L66 46 Z" fill="#3B9EE8"/>
  </svg>
);
const CharCockpit = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={34}/>
    <path d="M60 16 C30 16 16 46 16 76 L104 76 C104 46 90 16 60 16 Z" fill="#2272B6"/>
    <path d="M60 26 C38 26 28 48 28 70 L92 70 C92 48 82 26 60 26 Z" fill="#A8D4F5"/>
    <rect x="28" y="70" width="64" height="10" fill="#0D2D4F"/>
    <circle cx="46" cy="54" r="9" fill="#0D2D4F"/><circle cx="74" cy="54" r="9" fill="#0D2D4F"/>
    <circle cx="43" cy="51" r="2.5" fill="#3B9EE8"/><circle cx="71" cy="51" r="2.5" fill="#3B9EE8"/>
    <rect x="52" y="60" width="16" height="6" rx="2" fill="#F4B942"/>
  </svg>
);
const CharWing = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={38}/>
    <path d="M8 90 Q60 62 112 78 L106 92 Q58 78 12 98 Z" fill="#2272B6"/>
    <path d="M8 90 Q60 62 112 78 L110 84 Q58 68 10 94 Z" fill="#3B9EE8"/>
    <ellipse cx="70" cy="88" rx="14" ry="8" fill="#0D2D4F"/>
    <ellipse cx="70" cy="86" rx="10" ry="5" fill="#5C6B7A"/>
    <circle cx="30" cy="94" r="3" fill="#F4B942"/>
  </svg>
);
const CharLuggage = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <rect x="28" y="42" width="64" height="56" rx="10" fill="#C0392B"/>
    <rect x="28" y="42" width="64" height="56" rx="10" fill="none" stroke="#8B2417" strokeWidth="2"/>
    <rect x="48" y="28" width="24" height="16" rx="6" fill="none" stroke="#8B2417" strokeWidth="4"/>
    <rect x="34" y="60" width="52" height="6" rx="3" fill="#F1948A"/>
    <rect x="34" y="76" width="52" height="6" rx="3" fill="#F1948A"/>
    <circle cx="42" cy="98" r="6" fill="#3E2A1E"/><circle cx="78" cy="98" r="6" fill="#3E2A1E"/>
    <rect x="86" y="50" width="12" height="16" rx="3" fill="#F4B942"/>
  </svg>
);
const CharPretzel = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <path d="M30 50 C30 30 90 30 90 50 C90 66 66 62 66 78 C66 90 78 88 78 78"
      stroke="#A0672E" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <path d="M30 50 C30 30 90 30 90 50 C90 66 66 62 66 78 C66 90 78 88 78 78"
      stroke="#C4854A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {[[36,44],[54,32],[72,34],[86,48],[62,68],[74,82]].map(([x,y],i)=>
      <circle key={i} cx={x} cy={y} r="1.6" fill="#F4E4C4"/>)}
  </svg>
);
const CharPizza = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={34}/>
    <path d="M60 22 L100 96 L20 96 Z" fill="#F4B942"/>
    <path d="M60 34 L90 88 L30 88 Z" fill="#E8842C"/>
    <circle cx="60" cy="52" r="7" fill="#C0392B"/><circle cx="46" cy="70" r="7" fill="#C0392B"/>
    <circle cx="72" cy="70" r="7" fill="#C0392B"/>
    <circle cx="60" cy="60" r="3" fill="#3DBF7A"/><circle cx="52" cy="78" r="3" fill="#3DBF7A"/>
  </svg>
);
const CharSmoothie = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={26}/>
    <path d="M40 40 L80 40 L74 100 Q60 106 46 100 Z" fill="#F1948A"/>
    <path d="M40 40 L80 40 L77 56 L43 56 Z" fill="#FDEDEC"/>
    <rect x="56" y="14" width="6" height="30" rx="3" fill="#3DBF7A"/>
    <circle cx="50" cy="70" r="6" fill="#C0392B"/><circle cx="66" cy="80" r="6" fill="#8B2417"/>
    <path d="M36 40 Q60 32 84 40" stroke="#F1948A" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);
const CharSandwich = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={36}/>
    <path d="M18 92 L60 30 L102 92 Z" fill="#F4B942"/>
    <path d="M26 88 L60 42 L94 88 Z" fill="#3DBF7A"/>
    <path d="M30 78 L60 50 L90 78 L86 88 L34 88 Z" fill="#C0392B"/>
    <path d="M34 70 L60 58 L86 70" stroke="#F4E4C4" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M18 92 L102 92 L98 100 L22 100 Z" fill="#E8842C"/>
  </svg>
);
const CharDonut = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={32}/>
    <circle cx="60" cy="62" r="38" fill="#E8B084"/>
    <circle cx="60" cy="62" r="38" fill="#F1948A" opacity="0.001"/>
    <circle cx="60" cy="62" r="30" fill="#F06292" opacity="0"/>
    <path d="M60 24 A38 38 0 1 1 59.9 24 Z" fill="#F06292"/>
    <circle cx="60" cy="62" r="14" fill="#E8B084"/>
    {[[40,40],[80,40],[40,84],[80,84],[60,30],[30,62],[90,62],[60,94]].map(([x,y],i)=>
      <rect key={i} x={x} y={y} width="6" height="2.5" rx="1.2" fill={i%2?"#3B9EE8":"#F4B942"} transform={`rotate(${i*40} ${x} ${y})`}/>)}
  </svg>
);
const CharCoffee = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={26}/>
    <path d="M34 46 L86 46 L80 96 Q60 104 40 96 Z" fill="#6B4226"/>
    <ellipse cx="60" cy="46" rx="26" ry="7" fill="#3E2510"/>
    <path d="M86 54 Q104 54 104 70 Q104 84 86 82" stroke="#6B4226" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M46 30 Q42 22 48 16" stroke="#C8B8A8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
    <path d="M60 28 Q56 20 62 14" stroke="#C8B8A8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
    <rect x="38" y="60" width="44" height="18" rx="3" fill="#F4B942" opacity="0.85"/>
  </svg>
);
const CharPilot = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="92" rx="30" ry="22" fill="#1A4A7A"/>
    <rect x="46" y="76" width="28" height="10" fill="#1A4A7A"/>
    <circle cx="60" cy="54" r="24" fill="#E8B084"/>
    <path d="M36 46 Q60 24 84 46 L84 40 Q60 16 36 40 Z" fill="#0D2D4F"/>
    <path d="M36 42 Q60 30 84 42 L84 46 Q60 36 36 46 Z" fill="#F4B942"/>
    <circle cx="50" cy="56" r="3" fill="#2C1A0E"/><circle cx="70" cy="56" r="3" fill="#2C1A0E"/>
    <path d="M52 66 Q60 70 68 66" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <rect x="46" y="86" width="28" height="6" rx="2" fill="#F4B942"/>
  </svg>
);
const CharAttendant = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="92" rx="28" ry="22" fill="#C0392B"/>
    <circle cx="60" cy="54" r="24" fill="#E8B084"/>
    <path d="M36 48 Q36 24 60 24 Q84 24 84 48 L78 48 Q78 32 60 32 Q42 32 42 48 Z" fill="#3E2510"/>
    <circle cx="50" cy="56" r="3" fill="#2C1A0E"/><circle cx="70" cy="56" r="3" fill="#2C1A0E"/>
    <path d="M52 66 Q60 70 68 66" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M44 80 Q60 90 76 80 L72 94 Q60 100 48 94 Z" fill="#F4B942"/>
  </svg>
);
const CharSecurity = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="92" rx="28" ry="22" fill="#2A6B4A"/>
    <circle cx="60" cy="54" r="24" fill="#E8B084"/>
    <path d="M34 50 Q34 22 60 22 Q86 22 86 50 L86 42 Q60 30 34 42 Z" fill="#1A2E1A"/>
    <rect x="34" y="38" width="52" height="8" rx="3" fill="#1A2E1A"/>
    <circle cx="50" cy="56" r="3" fill="#2C1A0E"/><circle cx="70" cy="56" r="3" fill="#2C1A0E"/>
    <path d="M53 68 Q60 65 67 68" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="60" cy="86" r="8" fill="#F4B942"/>
    <path d="M60 80 L62 84 L66 84 L63 87 L64 91 L60 88 L56 91 L57 87 L54 84 L58 84 Z" fill="#8B6B00"/>
  </svg>
);
const CharPassenger = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="92" rx="28" ry="22" fill="#7B3FA0"/>
    <circle cx="60" cy="54" r="24" fill="#C4825A"/>
    <path d="M36 50 Q34 24 60 24 Q86 24 84 50 Q78 34 60 34 Q42 34 36 50 Z" fill="#2C1A0E"/>
    <circle cx="50" cy="56" r="3" fill="#2C1A0E"/><circle cx="70" cy="56" r="3" fill="#2C1A0E"/>
    <path d="M50 66 Q60 74 70 66" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <rect x="82" y="74" width="20" height="26" rx="8" fill="#F4B942"/>
    <path d="M86 74 Q92 62 98 74" stroke="#8B6B00" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);
const CharK9 = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={32}/>
    <ellipse cx="60" cy="86" rx="30" ry="22" fill="#D2B48C"/>
    <circle cx="60" cy="52" r="24" fill="#D2B48C"/>
    <path d="M38 34 Q30 14 38 30 Z" fill="#8B6340"/><path d="M82 34 Q90 14 82 30 Z" fill="#8B6340"/>
    <ellipse cx="60" cy="60" rx="10" ry="8" fill="#F4E4C4"/>
    <circle cx="50" cy="48" r="4" fill="#2C1A0E"/><circle cx="70" cy="48" r="4" fill="#2C1A0E"/>
    <ellipse cx="60" cy="58" rx="4" ry="3" fill="#2C1A0E"/>
    <path d="M56 63 Q60 67 64 63" stroke="#2C1A0E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <rect x="44" y="78" width="32" height="8" rx="4" fill="#C0392B"/>
    <circle cx="60" cy="82" r="3" fill="#F4B942"/>
  </svg>
);
const CharHandler = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <ellipse cx="60" cy="92" rx="28" ry="22" fill="#F4B942"/>
    <circle cx="60" cy="54" r="24" fill="#C4825A"/>
    <path d="M36 46 Q60 26 84 46 L84 38 Q60 20 36 38 Z" fill="#2C1A0E"/>
    <circle cx="50" cy="56" r="3" fill="#2C1A0E"/><circle cx="70" cy="56" r="3" fill="#2C1A0E"/>
    <path d="M52 66 Q60 70 68 66" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <rect x="40" y="78" width="40" height="8" rx="3" fill="#E8842C"/>
    <path d="M30 96 L36 82 L44 82 L38 96 Z" fill="#5C6B7A"/>
    <circle cx="30" cy="98" r="6" fill="#3E2A1E"/>
  </svg>
);
const CharArrivals = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={36}/>
    <rect x="14" y="30" width="92" height="56" rx="8" fill="#1A2E1A"/>
    <rect x="22" y="38" width="76" height="40" rx="4" fill="#2A6B4A"/>
    <path d="M40 62 L60 46 L80 62 L72 62 L72 74 L48 74 L48 62 Z" fill="white"/>
    <path d="M34 40 Q54 30 74 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);
const CharDepartures = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={36}/>
    <rect x="14" y="30" width="92" height="56" rx="8" fill="#0D2D4F"/>
    <rect x="22" y="38" width="76" height="40" rx="4" fill="#2272B6"/>
    <path d="M40 68 L60 84 L80 68 L72 68 L72 56 L48 56 L48 68 Z" fill="white"/>
    <path d="M34 46 Q54 56 74 46" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);
const CharRestroom = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={34}/>
    <rect x="16" y="20" width="88" height="76" rx="10" fill="#2272B6"/>
    <rect x="26" y="30" width="30" height="56" rx="4" fill="white"/>
    <rect x="64" y="30" width="30" height="56" rx="4" fill="white"/>
    <circle cx="41" cy="44" r="6" fill="#2272B6"/>
    <path d="M32 76 L32 58 Q32 52 41 52 Q50 52 50 58 L50 76 Z" fill="#2272B6"/>
    <circle cx="79" cy="44" r="6" fill="#C0392B"/>
    <path d="M79 52 L67 78 L74 78 L79 66 L84 78 L91 78 Z" fill="#C0392B"/>
  </svg>
);
const CharGiftshop = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={30}/>
    <path d="M30 50 L90 50 L84 100 L36 100 Z" fill="#7B3FA0"/>
    <path d="M30 50 L90 50 L88 62 L32 62 Z" fill="#B565D6"/>
    <path d="M46 50 Q46 26 60 26 Q74 26 74 50" stroke="#F4B942" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <circle cx="60" cy="26" r="7" fill="#F4B942"/>
    <rect x="54" y="50" width="12" height="50" fill="#F4B942" opacity="0.85"/>
  </svg>
);
const CharBookstore = ({ size=96 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Shadow rx={36}/>
    <path d="M60 36 Q40 26 20 34 L20 90 Q40 82 60 92 Z" fill="#C0392B"/>
    <path d="M60 36 Q80 26 100 34 L100 90 Q80 82 60 92 Z" fill="#E8842C"/>
    <path d="M60 36 L60 92" stroke="#8B2417" strokeWidth="2"/>
    <path d="M28 46 L52 40 M28 56 L52 50 M28 66 L52 60" stroke="#F4E4C4" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M92 46 L68 40 M92 56 L68 50 M92 66 L68 60" stroke="#FBD9B0" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="70" y="20" width="8" height="24" fill="#F4B942"/>
  </svg>
);

const CHAR_MAP = {
  grizzly: CharGrizzly, bison: CharBison, elk: CharElk, moose: CharMoose,
  wolf: CharWolf, fox: CharFox, beaver: CharBeaver, eagle: CharEagle,
  owl:    CharOwl,
  hawk:   CharHawk,
  heron:  CharHeron,
  duck:   CharDuck,
  magpie: CharMagpie,
  rose:     CharRose,
  lupine:   CharLupine,
  fireweed: CharFireweed,
  pine:     CharPine,
  fern:     CharFern,
  sage:     CharSage,
  mountain: CharMountain,
  glacier:  CharGlacier,
  lake:     CharLake,
  river:    CharRiver,
  prairie:  CharPrairie,
  sky:      CharSky,
  // Airport Hunt
  airplane: CharAirplane, gate: CharGate, runway: CharRunway, cockpit: CharCockpit,
  wing: CharWing, luggage: CharLuggage,
  pretzel: CharPretzel, pizza: CharPizza, smoothie: CharSmoothie, sandwich: CharSandwich,
  donut: CharDonut, coffee: CharCoffee,
  pilot: CharPilot, attendant: CharAttendant, security: CharSecurity, passenger: CharPassenger,
  k9: CharK9, handler: CharHandler,
  arrivals: CharArrivals, departures: CharDepartures, restroom: CharRestroom,
  giftshop: CharGiftshop, bookstore: CharBookstore,
};
export function ItemCharacter({ itemId, emoji, size=96 }) {
  const C = CHAR_MAP[itemId];
  return C ? <C size={size}/> : <CharEmojiFallback size={size} emoji={emoji}/>;
}

