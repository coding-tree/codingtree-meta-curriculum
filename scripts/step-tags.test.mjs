// Run: node --test scripts/*.test.mjs
// meta-struktura modules carry their Coding Tree step id and show it as a tag
// (codingtree-meta-curriculum#1). No dependencies: the data blocks are read
// out of the page source and evaluated as plain JS literals.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../meta-struktura/index.html", import.meta.url), "utf8");

function literal(name, open, close) {
  const start = html.indexOf(`const ${name} = ${open}`);
  assert.notEqual(start, -1, `${name} not found in meta-struktura/index.html`);
  const end = html.indexOf(`\n${close};`, start);
  const body = html.slice(start + `const ${name} = `.length, end + 2);
  return new Function(`return ${body};`)();
}

const EXPECTED = {
  CT1: ["belt.baby-bird.how-a-computer-thinks", "Krok: Baby Bird"],
  S1: ["belt.white.first-programs", "Krok: Biały pas"],
  S2: ["belt.orange.games-with-logic", "Krok: Pomarańczowy pas"],
  PY1: ["belt.blue.first-real-language", "Krok: Niebieski pas"],
  PY2: ["belt.yellow-green.scripts-and-history", "Krok: Żółto-zielony pas"],
  WEB1: ["belt.green.the-web", "Krok: Zielony pas"],
  WEB2: ["belt.green.the-web", "Krok: Zielony pas"],
  PY3: ["belt.brown.servers-and-apps", "Krok: Brązowy pas"],
  WEB3: ["belt.brown.servers-and-apps", "Krok: Brązowy pas"],
  DATA1: ["side.tech-world", "Ścieżka: Świat technologii dziś"],
};

test("every module carries its Curriculum Map step id", () => {
  const modules = literal("MODULES", "[", "]");
  assert.deepEqual(modules.map((m) => m.id).sort(), Object.keys(EXPECTED).sort());
  for (const m of modules) assert.equal(m.step, EXPECTED[m.id][0], `${m.id}.step`);
});

test("every step id has its Polish tag", () => {
  const labels = literal("STEP_LABELS", "{", "}");
  for (const [id, [step, label]] of Object.entries(EXPECTED)) {
    assert.equal(labels[step], label, `${id}: label for ${step}`);
  }
});

test("the map card and the list row both render the step tag", () => {
  const card = html.slice(html.indexOf("const ModuleCard"), html.indexOf("const DetailPanel"));
  const list = html.slice(html.indexOf("/* ─── LIST VIEW ─── */"), html.indexOf("{/* Detail panel */}"));
  assert.match(card, /<StepTag mod=\{mod\} \/>/, "ModuleCard has no StepTag");
  assert.match(list, /<StepTag mod=\{mod\} \/>/, "list view has no StepTag");
  assert.match(html, /data-step=\{mod\.step\}/, "StepTag does not expose data-step");
});
