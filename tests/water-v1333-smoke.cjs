/**
 * KidApp regression test: water rescue's SVG and 15 lesson definitions.
 *
 * Run from repository root:
 *    node tests/water-v1333-smoke.cjs
 *
 * Prevents missing '>' in self-closing SVG helper output, which caused blank
 * illustrations in iOS Safari. Also ensures task IDs and mobile layout hooks.
 */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(
  path.join(root, "apps/life-grade1/life-v14-water.js"), "utf8"
);
const css = fs.readFileSync(
  path.join(root, "apps/life-grade1/life-v14-water.css"), "utf8"
);
const html = fs.readFileSync(
  path.join(root, "apps/life-grade1/index.html"), "utf8"
);
const world = vm.runInNewContext(
  source + "\n({ tasks:LIFE_WATER_V14_TASKS, svg:lifeWater14Svg, captions:LIFE_WATER_V14_SCENE_CAPTIONS })",
  { escapeHTML: (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;") }
);
assert.equal(world.tasks.length, 15, "There must be 15 tasks");
for (let i = 1; i <= 15; i++) {
  assert.equal(world.tasks[i - 1].id, "U" + String(i).padStart(2, "0"));
}
assert.equal(Object.keys(world.captions).length, 15);
assert.match(html, /life-v14-water\.css\?v=/);
assert.match(html, /life-v14-water\.js\?v=/);
assert.match(css, /\.water14-choice-grid>\.water14-choice[\s\S]{0,220}display:block/);

let inspected = 0;
for (const t of world.tasks) {
  for (let stage = 0; stage <= 4; stage++) {
    const svg = world.svg(t, stage, {
      soil: stage % 2 === 0 ? "dry" : "moist",
      fill: stage + 1
    });
    assert.match(svg, /^<svg\s/);
    assert.match(svg, /<\/svg>$/);
    assert.doesNotMatch(svg, /\/<(?=[a-z])/i, "Broken self-closing tag");
    const tagRE = /<([^>]+)>/g;
    const stack = [];
    let nodes = 0;
    for (const match of svg.matchAll(tagRE)) {
      const raw = match[1];
      if (raw.startsWith("/") ) {
        const closing = raw.slice(1).trim();
        assert.equal(stack.pop(), closing, "Closing tag mismatch");
      } else if (!raw.startsWith("?") && !raw.startsWith("!")) {
        const name = raw.match(/^([A-Za-z][\w:-]*)/)?.[1];
        assert.ok(name, "Element tag name missing");
        nodes++;
        if (!raw.endsWith("/")) stack.push(name);
      }
    }
    assert.deepEqual(stack, [], "Unclosed SVG elements");
    assert.ok(nodes >= 9, "Scene should contain meaningful shapes");
    inspected++;
  }
}
console.log("Water SVG smoke test passed:", world.tasks.length, "tasks /", inspected, "SVG variants.");
