import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const data = readFileSync(new URL("../src/projects.ts", import.meta.url), "utf8");
const images = [...data.matchAll(/image\("([^"]+)"\)/g)].map((match) => match[1]);
const slugs = [...data.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);

assert.ok(images.length > 0, "Project images are missing");
assert.equal(new Set(slugs).size, slugs.length, "Project URLs must be unique");
for (const image of [...images, "about-studio.jpg"]) {
  assert.ok(existsSync(new URL(`../public/images/${image}`, import.meta.url)), `Missing image: ${image}`);
}
console.log(`Checked ${slugs.length} projects and ${images.length + 1} local images.`);
