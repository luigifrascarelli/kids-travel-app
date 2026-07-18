import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
import { BLUE } from "../../data/constants.js";

export function InstallPromptBanner() {
  const { state } = useApp();
  const lang = state.lang || "en";
  const [prompt, setPrompt] = useState(null);
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem("installDismissed") === "1"; } catch { return false; }
  });
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIos(ios);
    setIsStandalone(
      window.navigator.standalone === true ||
        window.matchMedia("(display-mode: standalone)").matches
    );
    const handler = (e) => { e.preventDefault(); setPrompt(e); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (prompt) { prompt.prompt(); await prompt.userChoice; setPrompt(null); }
    handleDismiss();
  };
  const handleDismiss = () => {
    setDismissed(true);
    try { localStorage.setItem("installDismissed", "1"); } catch {}
  };

  if (isStandalone || dismissed) return null;
  const showIos = isIos && !isStandalone;
  const showAndroid = !!prompt;
  if (!showIos && !showAndroid) return null;

  const text = lang === "es"
    ? { title: "Añadir al inicio", desc: 'Toca ⬆️ luego "Añadir a inicio"', btn: "Instalar" }
    : { title: "Add to Home Screen", desc: 'Tap ⬆️ then "Add to Home Screen"', btn: "Install" };

  return (
    <div style={{
      position: "fixed", bottom: 80, left: 16, right: 16, zIndex: 400,
      background: `linear-gradient(135deg,${BLUE.deepest},${BLUE.dark})`,
      borderRadius: 20, padding: "14px 16px",
      border: `2px solid ${BLUE.gold}60`,
      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      display: "flex", alignItems: "center", gap: 12,
      animation: "slideUp 0.4s cubic-bezier(0.32,0.72,0,1)",
      maxWidth: 568, margin: "0 auto",
    }}>
      <div style={{ fontSize: 28, flexShrink: 0 }}>📲</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Luckiest Guy',cursive", color: BLUE.gold, fontSize: 14 }}>{text.title}</div>
        <div style={{ fontFamily: "'Patrick Hand',cursive", color: BLUE.light, fontSize: 12, marginTop: 2 }}>{text.desc}</div>
      </div>
      {showAndroid && (
        <button onClick={handleInstall} style={{
          background: `linear-gradient(135deg,${BLUE.gold},${BLUE.goldDark})`,
          border: "none", borderRadius: 12, padding: "8px 14px",
          fontFamily: "'Luckiest Guy',cursive", fontSize: 13, color: BLUE.deepest,
          cursor: "pointer", flexShrink: 0,
        }}>{text.btn}</button>
      )}
      <button onClick={handleDismiss} style={{
        width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.1)",
        border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}><X size={13} color="rgba(255,255,255,0.7)" /></button>
    </div>
  );
}

