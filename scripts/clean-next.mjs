import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

for (const dir of [".next", path.join("node_modules", ".cache")]) {
  const target = path.join(root, dir);
  try {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  } catch {
    // ignore
  }
}
