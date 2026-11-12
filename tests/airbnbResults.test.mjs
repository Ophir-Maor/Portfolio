import assert from 'node:assert/strict';
import test from 'node:test';
import {
  airbnbResults,
  summarizeCheckpoints,
} from '../src/content/airbnbResults.ts';

test('reported checkpoint precision and omitted phase are preserved', () => {
  assert.deepEqual(
    airbnbResults.checkpoints.map((p) => p.phase),
    [1, 2, 3, 4, 6, 7],
  );
  assert.deepEqual(
    airbnbResults.checkpoints.map((p) => p.rmse.toFixed(5)),
    ['83.33910', '82.16727', '81.34958', '80.71633', '79.90140', '79.12672'],
  );
});
test('improvement is calculated from starting score to lowest reported RMSE', () => {
  const result = summarizeCheckpoints(airbnbResults.checkpoints);
  assert.ok(Math.abs(result.improvement - 4.21238) < 1e-10);
  assert.equal(result.percent.toFixed(1), '5.1');
  const nonMonotonic = summarizeCheckpoints([
    { phase: 1, rmse: 100, change: 'Baseline' },
    { phase: 2, rmse: 80, change: 'Best' },
    { phase: 3, rmse: 90, change: 'Regression' },
  ]);
  assert.equal(nonMonotonic.best.phase, 2);
  assert.equal(nonMonotonic.percent, 20);
  assert.throws(() => summarizeCheckpoints([]));
});
