// One-Line Office Jokes — entry program (program/v1).
// Writes one single-line joke about office life to /output/entry.txt.
// The joke must stay one line, UTF-8, 1-199 characters per the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I expensed my sanity as 'miscellaneous'.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
