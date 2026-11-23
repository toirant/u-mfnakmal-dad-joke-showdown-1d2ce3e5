// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
//
// Writes a single dad joke to /output/entry.txt, the only artifact the
// judge reads. The joke must be 1-200 characters of UTF-8 text, so the
// program checks its own length before writing and refuses to write an
// out-of-range joke instead of shipping a gate failure.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one dad joke, told the way a father would say it across the
// dinner table. The pun turns on "days are numbered" — a calendar's days
// really are numbered, and so, ominously, are ours. The son's deadpan reply
// is the groan: the setup sounds dark, the punchline lands on the most
// literal reading of the word "dates".
const JOKE =
  "I told my son the calendar's days are numbered. He said, 'Dad, that's literally how dates work.'";

// Where the judge looks. The grader mounts this directory; never delete it,
// only create it when it is missing and write the file inside it.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Joke is ${chars} characters; the gate allows 1-200.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");

// Read it back: the file the judge sees must be byte-for-byte the joke,
// no trailing newline, no extra whitespace.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly.");
}

console.log(`Wrote ${chars} characters to ${OUTPUT_FILE}`);
