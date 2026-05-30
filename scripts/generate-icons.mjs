#!/usr/bin/env node
// ╔══════════════════════════════════════════════════════════════╗
// ║  generate-icons.mjs                                          ║
// ║  Run once: node scripts/generate-icons.mjs                   ║
// ║  Outputs: public/icons/icon-192.png, icon-512.png            ║
// ║           public/icons/apple-touch-icon.png (180x180)        ║
// ╚══════════════════════════════════════════════════════════════╝

import { createCanvas } from "canvas";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/icons");
mkdirSync(OUT_DIR, { recursive: true });

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");
  const r = size * 0.18; // corner radius

  // Background gradient: deep navy → mid blue
  const bgGrad = ctx.createLinearGradient(0, 0, size, size);
  bgGrad.addColorStop(0, "#0D2D4F");
  bgGrad.addColorStop(0.6, "#1A4A7A");
  bgGrad.addColorStop(1, "#2272B6");

  // Rounded rect background
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fillStyle = bgGrad;
  ctx.fill();

  // Gold accent bar at top
  const barH = size * 0.06;
  const barGrad = ctx.createLinearGradient(0, 0, size, 0);
  barGrad.addColorStop(0, "#F4B942");
  barGrad.addColorStop(0.5, "#FFD97D");
  barGrad.addColorStop(1, "#F4B942");
  ctx.fillStyle = barGrad;
  ctx.fillRect(0, 0, size, barH);

  // Mountain silhouette
  const mScale = size / 512;
  ctx.fillStyle = "rgba(168, 212, 245, 0.15)";
  ctx.beginPath();
  ctx.moveTo(0 * mScale, size);
  ctx.lineTo(100 * mScale, 260 * mScale);
  ctx.lineTo(180 * mScale, 340 * mScale);
  ctx.lineTo(256 * mScale, 160 * mScale);
  ctx.lineTo(340 * mScale, 300 * mScale);
  ctx.lineTo(420 * mScale, 240 * mScale);
  ctx.lineTo(512 * mScale, size);
  ctx.closePath();
  ctx.fill();

  // "G" letter — Luckiest Guy style approximation
  const cx = size * 0.5;
  const cy = size * 0.54;
  const fontSize = size * 0.52;
  ctx.font = `bold ${fontSize}px Arial Black, Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillText("G", cx + size * 0.025, cy + size * 0.025);

  // Gold gradient text
  const textGrad = ctx.createLinearGradient(cx - fontSize / 2, cy - fontSize / 2, cx + fontSize / 2, cy + fontSize / 2);
  textGrad.addColorStop(0, "#FFFFFF");
  textGrad.addColorStop(0.4, "#F4B942");
  textGrad.addColorStop(1, "#FFD97D");
  ctx.fillStyle = textGrad;
  ctx.fillText("G", cx, cy);

  // Small star decoration
  const starX = size * 0.72;
  const starY = size * 0.28;
  const starR = size * 0.06;
  ctx.fillStyle = "#F4B942";
  drawStar(ctx, starX, starY, 5, starR, starR * 0.45);

  return canvas;
}

function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerR);
  ctx.closePath();
  ctx.fill();
}

// Generate all sizes
const sizes = [
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
  { size: 180, name: "apple-touch-icon.png" },
];

for (const { size, name } of sizes) {
  const canvas = drawIcon(size);
  const buffer = canvas.toBuffer("image/png");
  const outPath = join(OUT_DIR, name);
  writeFileSync(outPath, buffer);
  console.log(`✅  ${name} (${size}x${size})`);
}

console.log("\nDone! Icons written to public/icons/");
console.log("Now run: npm run dev  (or push to Netlify)");
