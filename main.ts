// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of deliberately terrible AI advice to
// /output/entry.txt (must be 1..140 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Skip the backups — your files are stored safely on your computer, and computers are famously permanent.";

// Gate guard: this competition's scorer only accepts a single line of
// 1..140 characters (counted with the trailing newline written here).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 140) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
