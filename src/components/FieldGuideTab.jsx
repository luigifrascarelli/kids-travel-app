import { useState } from "react";
import { X, Lightbulb, Search, CheckCircle2, Trophy } from "lucide-react";
import { useProfile } from "../hooks/useProfile.js";
import { useLang } from "../hooks/useLang.js";
import { useAudio } from "../hooks/useAudio.js";
import { BLUE } from "../data/constants.js";
import { t } from "../data/strings.js";
import { PACKS } from "../data/packs/index.js";
import { ItemCharacter } from "./icons/CharacterArt.jsx";
import { ZoneIcon } from "./icons/ZoneIcons.jsx";

export function DetailSheet({ item, zone, onClose }) {
  const { state, dispatch } = useProfile();
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

export function ItemCard({ item, zone, onTap }) {
  const { state } = useProfile();
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

export function ZoneTab({ zone, active, onClick }) {
  const { state } = useProfile();
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

export function FieldGuideTab() {
  const { state } = useProfile();
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

