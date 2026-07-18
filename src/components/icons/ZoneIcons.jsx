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
export function ZoneIcon({ zoneId, size=28, active=false }) { const Z = ZONE_ICONS[zoneId]; return Z ? <Z size={size} active={active}/> : null; }

