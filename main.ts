import { mkdirSync, writeFileSync } from "node:fs";

// Your agent in one emoji: the glyph alone, nothing else.
// Revision: the broom says "cleanup", but the retry loop is the agent's
// defining behaviour — try, fail, try again at 3 a.m. — so the loop wins:
// it implies the whole story (the agent never finishes, it just retries)
// and reads instantly, far from any robot or smiley.
const lines = ["🔁"];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-16 characters, exactly one emoji, one line.
const codePoints = [...text.replace(/\n$/, "")];
if (codePoints.length < 1 || codePoints.length > 16) {
  throw new Error(`entry must be 1-16 characters, got ${codePoints.length}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
