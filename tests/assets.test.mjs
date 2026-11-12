import { Buffer } from 'node:buffer';
import { URL } from 'node:url';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { projects, profile } from '../src/content/portfolio.ts';

test('every referenced project image and portrait exists and is an image', () => {
  const paths = [
    ...projects.flatMap((project) =>
      (project.media ?? []).map((image) => image.path),
    ),
    profile.portrait,
  ];
  for (const path of paths) {
    const url = new URL(`../public/${path}`, import.meta.url);
    assert.ok(existsSync(url), `Missing image: ${path}`);
    const bytes = readFileSync(url);
    const png = bytes
      .subarray(0, 8)
      .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    assert.ok(png || jpeg, `Invalid image: ${path}`);
  }
});
