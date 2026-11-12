import { useEffect, useId, useRef, useState } from 'react';
import { airbnbResults, summarizeCheckpoints } from '../content/airbnbResults';

const { checkpoints } = airbnbResults;
const summary = summarizeCheckpoints(checkpoints);
const x = (phase: number) => 65 + ((phase - 1) / 6) * 485;
const y = (rmse: number) => 210 - ((rmse - 78) / 6) * 170;
const line = checkpoints
  .map((point, i) => `${i ? 'L' : 'M'}${x(point.phase)},${y(point.rmse)}`)
  .join(' ');

export default function ModelEvolution({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [selected, setSelected] = useState(checkpoints.length - 1);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const controls = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const point = checkpoints[selected]!;
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={root}
      className={`model-evolution ${compact ? 'model-compact' : 'model-expanded'} ${visible ? 'model-visible' : ''}`}
    >
      <div className="model-heading">
        <span className="eyebrow">MODEL EVOLUTION</span>
        <span className="mono">KAGGLE PUBLIC LEADERBOARD</span>
      </div>
      {!compact && (
        <div className="model-intro">
          <h2>Public leaderboard progress</h2>
          <p>
            Selected historical Kaggle public leaderboard scores. Lower RMSE is
            better.
          </p>
        </div>
      )}
      <div className="model-stats">
        <div>
          <span>Initial public RMSE</span>
          <strong>{summary.start.rmse.toFixed(5)}</strong>
        </div>
        <span className="model-arrow" aria-hidden="true">
          ↘
        </span>
        <div>
          <span>Best reported public RMSE</span>
          <strong className="mint">{summary.best.rmse.toFixed(5)}</strong>
        </div>
        <span className="model-improvement">
          {summary.percent.toFixed(1)}% lower
        </span>
      </div>
      <div className="model-chart-layout">
        <div className="model-chart">
          <svg
            viewBox="0 0 600 265"
            role="img"
            aria-labelledby={`${id}-title ${id}-desc`}
          >
            <title id={`${id}-title`}>
              Public leaderboard RMSE progression
            </title>
            <desc id={`${id}-desc`}>
              Selected phases 1, 2, 3, 4, 6, and 7. RMSE falls from 83.33910 to
              79.12672. Vertical axis spans 78 to 84 and does not start at zero.
              Horizontal spacing follows phase numbers, not elapsed time.
            </desc>
            <defs>
              <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#9c98f7" />
                <stop offset="1" stopColor="#76e4d2" />
              </linearGradient>
            </defs>
            {[78, 80, 82, 84].map((tick) => (
              <g key={tick} className="model-axis">
                <path
                  d={`M65 ${y(tick)}H550`}
                  stroke="currentColor"
                  strokeOpacity=".14"
                />
                <text x="48" y={y(tick) + 5} textAnchor="end">
                  {tick}
                </text>
              </g>
            ))}
            <text className="model-axis-label" x="65" y="22">
              RMSE ↓
            </text>
            <path
              className="model-line"
              d={line}
              pathLength="1"
              fill="none"
              stroke={`url(#${id}-gradient)`}
              strokeWidth="2.5"
            />
            {!compact && (
              <path
                d={`M${x(point.phase)} 40V210`}
                stroke="#76e4d2"
                strokeDasharray="3 5"
                opacity=".3"
              />
            )}
            {checkpoints.map((p, i) => (
              <g key={p.phase}>
                <text
                  className="model-axis"
                  x={x(p.phase)}
                  y="239"
                  textAnchor="middle"
                >
                  {p.phase}
                </text>
                <circle
                  cx={x(p.phase)}
                  cy={y(p.rmse)}
                  r={!compact && selected === i ? 8 : 5}
                  fill={i === checkpoints.length - 1 ? '#76e4d2' : '#bbb7ff'}
                  stroke="#101624"
                  strokeWidth="2"
                />
                {!compact && (
                  <circle
                    cx={x(p.phase)}
                    cy={y(p.rmse)}
                    r="22"
                    fill="transparent"
                    className="model-hit"
                    onClick={() => setSelected(i)}
                    aria-hidden="true"
                  />
                )}
              </g>
            ))}
            <text className="model-axis-label" x="550" y="262" textAnchor="end">
              PHASE (SELECTED CHECKPOINTS)
            </text>
          </svg>
        </div>
        {!compact && (
          <div
            className="model-checkpoint"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="eyebrow">PHASE {point.phase}</p>
            <div className="model-score">{point.rmse.toFixed(5)}</div>
            <p className="model-score-label">Kaggle public RMSE</p>
            <h3>{point.change}</h3>
            <p className="model-delta">
              {selected === 0
                ? 'The starting point for this selected history.'
                : `${(summary.start.rmse - point.rmse).toFixed(5)} lower RMSE than the initial baseline.`}
            </p>
          </div>
        )}
      </div>
      {!compact && (
        <div
          className="model-selector"
          role="group"
          aria-label="Select a public leaderboard checkpoint"
        >
          {checkpoints.map((p, i) => (
            <button
              key={p.phase}
              ref={(element) => {
                controls.current[i] = element;
              }}
              type="button"
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
              onKeyDown={(event) => {
                let next: number;
                switch (event.key) {
                  case 'ArrowRight':
                  case 'ArrowDown':
                    next = (i + 1) % checkpoints.length;
                    break;
                  case 'ArrowLeft':
                  case 'ArrowUp':
                    next = (i - 1 + checkpoints.length) % checkpoints.length;
                    break;
                  case 'Home':
                    next = 0;
                    break;
                  case 'End':
                    next = checkpoints.length - 1;
                    break;
                  default:
                    return;
                }
                event.preventDefault();
                setSelected(next);
                controls.current[next]?.focus();
              }}
            >
              Phase {p.phase}
              <span className="sr-only">
                : {p.rmse.toFixed(5)} public RMSE, {p.change}
              </span>
            </button>
          ))}
        </div>
      )}
      {compact ? (
        <p className="model-takeaway">
          {airbnbResults.takeaway} <span>Lower RMSE is better.</span>
        </p>
      ) : (
        <p className="model-disclosure">
          {airbnbResults.provenance} These are selected submissions, not all
          experiments; Phase 5 is not included. The RMSE axis is zoomed to
          78–84, and phases are not dates. Scores are public leaderboard
          results, not local validation RMSE, private scores, or final rankings.
        </p>
      )}
    </div>
  );
}
