import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const BASE = "https://rohrkraft24.de/images";
const OUT = "public/images";

function collectFromText(text, set) {
  for (const m of text.matchAll(/rohrkraft24\.de\/images\/([^\s"'<>]+)/g)) set.add(m[1]);
  for (const m of text.matchAll(/\/images\/([a-z0-9-]+\.webp)/gi)) set.add(m[1]);
  for (const m of text.matchAll(/"image(?:Sm)?"\s*:\s*"([^"]+\.webp)"/g)) set.add(m[1]);
  for (const m of text.matchAll(/"src"\s*:\s*"([^"]+\.webp)"/g)) set.add(m[1]);
}

function walk(dir, set) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, set);
    else if (/\.(ts|tsx|json)$/.test(entry.name)) collectFromText(readFileSync(p, "utf8"), set);
  }
}

const images = new Set();
walk("src", images);

mkdirSync(OUT, { recursive: true });

let ok = 0;
let fail = 0;

for (const file of [...images].sort()) {
  const dest = join(OUT, file);
  if (existsSync(dest)) {
    ok++;
    continue;
  }
  try {
    const res = await fetch(`${BASE}/${file}`);
    if (!res.ok) throw new Error(res.statusText);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    console.log("ok", file);
    ok++;
  } catch (e) {
    console.error("fail", file, e.message);
    fail++;
  }
}

writeFileSync(join(OUT, "manifest.json"), JSON.stringify([...images].sort(), null, 2));
console.log(`done: ${ok} ok, ${fail} failed, ${images.size} total`);
