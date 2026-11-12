export const samples = Array.from({ length: 32 }, (_, i) => ({
  x: (i + 1) / 33,
  offset: Math.sin(i * 13.7) * 0.12 + Math.cos(i * 3.1) * 0.04,
}));
export function regression(noise: number) {
  const points = samples.map(({ x, offset }) => ({
    x,
    y: 0.15 + x * 0.65 + offset * noise,
  }));
  const meanX = points.reduce((s, p) => s + p.x, 0) / points.length;
  const meanY = points.reduce((s, p) => s + p.y, 0) / points.length;
  const slope =
    points.reduce((s, p) => s + (p.x - meanX) * (p.y - meanY), 0) /
    points.reduce((s, p) => s + (p.x - meanX) ** 2, 0);
  const intercept = meanY - slope * meanX;
  const predict = (x: number) => intercept + slope * x;
  const rmse = Math.sqrt(
    points.reduce((s, p) => s + (p.y - predict(p.x)) ** 2, 0) / points.length,
  );
  return { points, predict, slope, intercept, rmse };
}
