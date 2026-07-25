#!/usr/bin/env node
/**
 * check-ios12-css.js
 *
 * eslint-plugin-compat catches unsupported JS/DOM *APIs* (fetch, Array methods,
 * navigator.maxTouchPoints, etc.) against the browserslist target. It does NOT
 * catch CSS property values sitting inside React inline `style={{...}}` objects,
 * because to ESLint those are just plain JS object keys/strings — it has no idea
 * they're interpreted as CSS by the browser at runtime.
 *
 * That gap is exactly how `inset: 0` and `gap` (in flex containers) shipped to
 * production and broke rendering on the iPad mini 2 (iOS 12.5.8 / Safari 12
 * engine) — both are Safari 14.1+ features with no error, no warning, just
 * silently-ignored CSS.
 *
 * This script does a lightweight regex scan of style={{ ... }} blocks in
 * .jsx/.js files for property names known to be unsupported or to need a
 * -webkit- fallback on iOS 12, and reports file:line so they can be reviewed
 * before shipping.
 *
 * Run: npm run check:ios12-css
 * Exits non-zero if anything is found, so it can gate CI/pre-push if desired.
 */

import { readFileSync } from "fs";
import { globSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "src");

// property: { pattern, note }
const RISKY_PROPS = [
  {
    name: "inset",
    pattern: /\binset\s*:/g,
    note: "CSS 'inset' shorthand unsupported before Safari 14.1. Use explicit top/right/bottom/left instead.",
  },
  {
    name: "gap",
    pattern: /(?<!column)(?<!row)\bgap\s*:/g,
    note: "'gap' in flexbox unsupported before Safari 14.1 (grid-gap was fine earlier). If this container uses display:flex, children will render with zero spacing on iOS 12. Verify and consider margin-based spacing as a fallback.",
  },
  {
    name: "aspectRatio",
    pattern: /\baspectRatio\s*:/g,
    note: "'aspect-ratio' unsupported before Safari 15. Use a padding-bottom trick or explicit width/height as a fallback.",
  },
  {
    name: "backdropFilter (unprefixed only)",
    pattern: /(?<!Webkit)backdropFilter\s*:/g,
    note: "React doesn't auto-prefix inline styles. Pair with WebkitBackdropFilter for iOS 12 support (unprefixed backdrop-filter needs a much newer Safari).",
  },
];

const files = globSync("**/*.{js,jsx}", { cwd: SRC_DIR }).map((f) =>
  path.join(SRC_DIR, f)
);

let totalFindings = 0;

for (const file of files) {
  const content = readFileSync(file, "utf8");
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    for (const prop of RISKY_PROPS) {
      prop.pattern.lastIndex = 0;
      if (prop.pattern.test(line)) {
        totalFindings++;
        const relPath = path.relative(process.cwd(), file);
        console.log(`\x1b[33m${relPath}:${idx + 1}\x1b[0m  [${prop.name}]`);
        console.log(`  ${prop.note}`);
        console.log(`  ${line.trim().slice(0, 140)}${line.trim().length > 140 ? "..." : ""}\n`);
      }
    }
  });
}

if (totalFindings === 0) {
  console.log("✓ No known iOS-12-risky CSS properties found in inline styles.");
  process.exit(0);
} else {
  console.log(
    `\x1b[31m✖ ${totalFindings} potential iOS 12 Safari compatibility issue(s) found.\x1b[0m`
  );
  console.log("Review each above — not all are guaranteed bugs (e.g. grid gap is fine), but each is worth a manual check.");
  process.exit(1);
}