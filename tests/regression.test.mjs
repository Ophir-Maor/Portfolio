import assert from 'node:assert/strict';
import test from 'node:test';
import { regression } from '../src/utils/regression.ts';

test('zero-noise data recovers the underlying relationship', () => {
  const fit = regression(0);
  assert.ok(Math.abs(fit.slope - 0.65) < 1e-12);
  assert.ok(Math.abs(fit.intercept - 0.15) < 1e-12);
  assert.ok(fit.rmse < 1e-12);
});
test('noise increases error and least-squares residuals sum to zero', () => {
  const low = regression(0.3);
  const high = regression(1.8);
  assert.equal(high.points.length, 32);
  assert.ok(high.rmse > low.rmse);
  assert.ok(
    Math.abs(high.points.reduce((sum, p) => sum + p.y - high.predict(p.x), 0)) <
      1e-12,
  );
  assert.ok(
    Math.abs(
      high.points.reduce((sum, p) => sum + p.x * (p.y - high.predict(p.x)), 0),
    ) < 1e-12,
  );
  assert.deepEqual(regression(1.8).points, high.points);
});
