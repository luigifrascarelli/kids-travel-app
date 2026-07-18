import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { BLUE } from "../../data/constants.js";

export function SWUpdateBanner() {
  const { state } = useApp();
  const lang = state.lang || "en";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener("swUpdateAvailable", handler);
    return () => window.removeEventListener("swUpdateAvailable", handler);
  }, []);

  const handleUpdate = () => {
    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage("SKIP_WAITING");
    }
    window.location.reload();
  };

  if (!show) return null;
  const text = lang === "es"
    ? { msg: "¡Nueva versión disponible!", btn: "Actualizar" }
    : { msg: "New version available!", btn: "Update" };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: `linear-gradient(90deg,${BLUE.gold},${BLUE.goldDark})`,
      padding: "10px 16px", display: "flex", alignItems: "center",
      justifyContent: "space-between", maxWidth: 600, margin: "0 auto",
    }}>
      <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.deepest, fontSize: 14 }}>✨ {text.msg}</div>
      <button onClick={handleUpdate} style={{
        background: BLUE.deepest, color: BLUE.gold, border: "none",
        borderRadius: 12, padding: "6px 16px",
        fontFamily: "'Luckiest Guy',cursive", fontSize: 13, cursor: "pointer",
      }}>{text.btn}</button>
    </div>
  );
}

