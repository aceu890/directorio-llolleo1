import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const scriptPath = path.join(root, "script.js");
let script = fs.readFileSync(scriptPath, "utf8");

const start = script.indexOf("const hermanos = [");
const endMarker = "const directory = document.getElementById(\"directory\");";
const end = script.indexOf(endMarker);
if (start === -1 || end === -1) {
  throw new Error("No se encontraron límites del array hermanos");
}

script =
  script.slice(0, start) +
  "let hermanos = [];\n\n" +
  script.slice(end);

// Quitar declaración duplicada de hermanosPorNombre
script = script.replace(
  /let hermanosPorNombre = new Map\(\);\r?\n\r?\nconst hermanosPorNombre = new Map\(\r?\n  hermanos\.map\(\(h\) => \[nameTokens\(h\.nombre\), h\]\)\r?\n\);\r?\n\r?\n/,
  "let hermanosPorNombre = new Map();\n\n"
);

// Si quedó solo la const antigua
script = script.replace(
  /const hermanosPorNombre = new Map\(\r?\n  hermanos\.map\(\(h\) => \[nameTokens\(h\.nombre\), h\]\)\r?\n\);\r?\n\r?\n/,
  "let hermanosPorNombre = new Map();\n\n"
);

fs.writeFileSync(scriptPath, script, "utf8");
console.log("OK hermanos array removido");
