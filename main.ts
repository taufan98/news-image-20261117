// news-image-20261117 — a make.fun program/v1 entry (Node 22, stdlib only).
//
// The entry image is the file entry.png next to this program: a five-panel
// editorial illustration summing up Tuesday 17 November 2026 — the Kerch
// Bridge strike, the Xi-Trump-Putin summit announcement, tankers hit near
// Hormuz, the Chase banking outage, and the Vulcan rocket failure. The
// program simply copies that image to the grader's output directory, so the
// run needs no network and is byte-for-byte deterministic.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The output file keeps the name entry.png whatever its bytes are.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
