#!/usr/bin/env node
// ╔══════════════════════════════════════════════════════════════╗
// ║  patch-phase7.mjs                                            ║
// ║  Run from your project root:                                 ║
// ║    node scripts/patch-phase7.mjs                             ║
// ║                                                              ║
// ║  What it does:                                               ║
// ║  1. Fixes shellS crash in AppShell                           ║
// ║  2. Adds InstallPromptBanner component                       ║
// ║  3. Adds SWUpdateBanner component                            ║
// ║  4. Mounts both banners in AppShell JSX                      ║
// ╚══════════════════════════════════════════════════════════════╝

import { readFileSync, writeFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_PATH = join(__dirname, "../src/App.jsx");

// ── Back up original ──────────────────────────────────────────
const backupPath = APP_PATH.replace(".jsx", ".phase6.bak.jsx");
copyFileSync(APP_PATH, backupPath);
console.log(`✅  Backup saved: src/App.phase6.bak.jsx`);

let src = readFileSync(APP_PATH, "utf8");

// ─────────────────────────────────────────────────────────────
// PATCH 1: Fix shellS crash — add useLang() to AppShell
// ─────────────────────────────────────────────────────────────
const patch1Find = `  const { activeTab, celebrating, onboardingDone } = state;`;
const patch1Replace = `  const { activeTab, celebrating, onboardingDone } = state;
  const { S } = useLang();   // Phase 7: was missing, caused shellS crash`;

if (!src.includes(patch1Find)) {
  console.error("❌  PATCH 1 FAILED: Could not find target string. Check App.jsx.");
  process.exit(1);
}
src = src.replace(patch1Find, patch1Replace);
console.log("✅  Patch 1: useLang() added to AppShell");

// ─────────────────────────────────────────────────────────────
// PATCH 2: Fix shellS.subtitle -> S.subtitle in JSX
// ─────────────────────────────────────────────────────────────
if (src.includes("{shellS.subtitle}")) {
  src = src.replace(/\{shellS\.subtitle\}/g, "{S.subtitle}");
  console.log("✅  Patch 2: shellS.subtitle → S.subtitle");
} else if (src.includes("shellS.subtitle")) {
  src = src.replace(/shellS\.subtitle/g, "S.subtitle");
  console.log("✅  Patch 2: shellS.subtitle → S.subtitle (unbracketed form)");
} else {
  console.log("ℹ️   Patch 2: shellS.subtitle not found — may already be fixed");
}

// ─────────────────────────────────────────────────────────────
// PATCH 3: Add InstallPromptBanner + SWUpdateBanner components
//          Inserted just before the AppShell function
// ─────────────────────────────────────────────────────────────
const newComponents = `
// ╔══════════════════════════════════════════════════════════════╗
// ║  INSTALL PROMPT BANNER (Phase 7)                             ║
// ╚══════════════════════════════════════════════════════════════╝
function InstallPromptBanner() {
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
      background: \`linear-gradient(135deg,\${BLUE.deepest},\${BLUE.dark})\`,
      borderRadius: 20, padding: "14px 16px",
      border: \`2px solid \${BLUE.gold}60\`,
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
          background: \`linear-gradient(135deg,\${BLUE.gold},\${BLUE.goldDark})\`,
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

// ╔══════════════════════════════════════════════════════════════╗
// ║  SW UPDATE BANNER (Phase 7)                                  ║
// ╚══════════════════════════════════════════════════════════════╝
function SWUpdateBanner() {
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
      background: \`linear-gradient(90deg,\${BLUE.gold},\${BLUE.goldDark})\`,
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

`;

const appShellMarker = "function AppShell() {";
if (!src.includes(appShellMarker)) {
  console.error("❌  PATCH 3 FAILED: Cannot find AppShell function.");
  process.exit(1);
}
src = src.replace(appShellMarker, newComponents + appShellMarker);
console.log("✅  Patch 3: InstallPromptBanner + SWUpdateBanner components added");

// ─────────────────────────────────────────────────────────────
// PATCH 4: Mount banners in AppShell JSX
// Find the ParentModeSheet line and add banners after it
// ─────────────────────────────────────────────────────────────
const patch4Find = `{showParent && <ParentModeSheet onClose={() => setShowParent(false)} />}`;
const patch4Replace = `{showParent && <ParentModeSheet onClose={() => setShowParent(false)} />}
      <InstallPromptBanner />
      <SWUpdateBanner />`;

if (!src.includes(patch4Find)) {
  console.error("❌  PATCH 4 FAILED: Cannot find ParentModeSheet mount point.");
  process.exit(1);
}
src = src.replace(patch4Find, patch4Replace);
console.log("✅  Patch 4: Banners mounted in AppShell JSX");

// ─────────────────────────────────────────────────────────────
// Write output
// ─────────────────────────────────────────────────────────────
writeFileSync(APP_PATH, src, "utf8");
console.log("\n🎉  All patches applied successfully!");
console.log("    src/App.jsx has been updated.");
console.log("    Original saved as src/App.phase6.bak.jsx\n");
console.log("Next steps:");
console.log("  1. npm run dev  — verify app loads without errors");
console.log("  2. node scripts/generate-icons.mjs  — create PWA icons");
console.log("  3. git add . && git commit -m 'Phase 7 — PWA, offline, install prompt' && git push");
