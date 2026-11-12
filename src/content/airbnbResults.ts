/** Selected historical Kaggle public leaderboard submissions, reported by Ophir.
 * Not local validation metrics, private scores, or a complete experiment log.
 * Keep full precision; submission IDs/dates and leaderboard exports are not supplied.
 */
export interface LeaderboardCheckpoint {
  phase: number;
  rmse: number;
  change: string;
}
export const airbnbResults = {
  metric: 'RMSE',
  source: 'Kaggle public leaderboard',
  provenance: 'Selected historical checkpoints reported by Ophir Maor.',
  takeaway:
    'Progress came from ensemble diversity, validation work, and targeted corrections.',
  checkpoints: [
    { phase: 1, rmse: 83.3391, change: 'Initial CatBoost baseline.' },
    { phase: 2, rmse: 82.16727, change: 'CatBoost/LightGBM ensembling.' },
    { phase: 3, rmse: 81.34958, change: 'Tail-sensitive experimentation.' },
    {
      phase: 4,
      rmse: 80.71633,
      change: 'Refined ensemble and stronger validation.',
    },
    { phase: 6, rmse: 79.9014, change: 'Further model-diversity experiments.' },
    {
      phase: 7,
      rmse: 79.12672,
      change: 'Host/property and event-related corrections.',
    },
  ] satisfies LeaderboardCheckpoint[],
};

export function summarizeCheckpoints(
  checkpoints: readonly LeaderboardCheckpoint[],
) {
  const start = checkpoints[0];
  if (!start) throw new Error('At least one checkpoint is required.');
  const best = checkpoints.reduce(
    (lowest, point) => (point.rmse < lowest.rmse ? point : lowest),
    start,
  );
  const improvement = start.rmse - best.rmse;
  return {
    start,
    best,
    improvement,
    percent: (improvement / start.rmse) * 100,
  };
}
