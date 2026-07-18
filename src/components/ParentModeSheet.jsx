import { useState } from "react";
import { X, Settings, Trash2, Plus } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { useLang } from "../hooks/useLang.js";
import { BLUE } from "../data/constants.js";
import { t } from "../data/strings.js";

export function ParentModeSheet({ onClose }) {
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

