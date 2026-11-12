import { useState } from 'react';
import { regression } from '../utils/regression';
export default function RegressionLab() {
  const [noise, setNoise] = useState(0.7);
  const [residuals, setResiduals] = useState(true);
  const { points, predict, rmse } = regression(noise);
  const x = (v: number) => 55 + v * 650;
  const y = (v: number) => 285 - v * 240;
  return (
    <div className="lab-panel">
      <div className="lab-chart">
        <div className="chart-heading mono">
          <span>EXPERIMENT 001 / LINEAR REGRESSION</span>
          <span className="synthetic">SYNTHETIC DATA</span>
        </div>
        <svg
          viewBox="0 0 750 330"
          role="img"
          aria-label={`Linear regression on 32 synthetic samples. Noise ${noise.toFixed(2)}; root mean squared error ${rmse.toFixed(3)}.`}
        >
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <g key={v}>
              <path
                d={`M55 ${y(v)}H705`}
                stroke="#a5b2c5"
                strokeOpacity=".12"
              />
              <text
                x="35"
                y={y(v) + 4}
                textAnchor="end"
                fill="#a5b2c5"
                fontSize="10"
              >
                {v.toFixed(2)}
              </text>
              <text
                x={x(v)}
                y="308"
                textAnchor="middle"
                fill="#a5b2c5"
                fontSize="10"
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}
          {residuals &&
            points.map((p, i) => (
              <path
                key={i}
                d={`M${x(p.x)} ${y(p.y)}V${y(predict(p.x))}`}
                stroke="#9c98f7"
                strokeOpacity=".55"
              />
            ))}
          <path
            d={`M${x(0)} ${y(predict(0))}L${x(1)} ${y(predict(1))}`}
            stroke="#76e4d2"
            strokeWidth="2"
          />
          {points.map((p, i) => (
            <circle key={i} cx={x(p.x)} cy={y(p.y)} r="4" fill="#d5d3ff" />
          ))}
          <text
            x="380"
            y="328"
            textAnchor="middle"
            fill="#a5b2c5"
            fontSize="10"
          >
            INPUT FEATURE (NORMALIZED)
          </text>
        </svg>
        <div className="chart-legend mono">
          <span>● Observations</span>
          <span className="mint">― Least-squares fit</span>
          <span className="violet">│ Residuals</span>
        </div>
      </div>
      <div className="lab-controls">
        <span className="eyebrow">YOUR TURN AT THE CONTROLS</span>
        <h3>How noisy is too noisy?</h3>
        <p>
          Increase the noise. Watch the observations spread out and the fitted
          line adapt.
        </p>
        <label htmlFor="noise">
          Observation noise <output>{noise.toFixed(2)}</output>
        </label>
        <input
          id="noise"
          type="range"
          min="0"
          max="1.8"
          step="0.05"
          value={noise}
          onChange={(e) => setNoise(Number(e.target.value))}
        />
        <div className="range-labels mono">
          <span>LESS NOISE</span>
          <span>MORE NOISE</span>
        </div>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={residuals}
            onChange={(e) => setResiduals(e.target.checked)}
          />{' '}
          Show residuals
        </label>
        <div className="metric">
          <span className="mono">ROOT MEAN SQUARED ERROR</span>
          <output aria-live="polite">{rmse.toFixed(3)}</output>
        </div>
        <p className="fine">
          32 deterministic synthetic samples. Ordinary least squares,
          recalculated in your browser. This is an illustrative experiment, not
          results from the Airbnb project.
        </p>
      </div>
    </div>
  );
}
