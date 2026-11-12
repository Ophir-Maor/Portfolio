import { useState } from 'react';
export default function SignalField() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="signal-field"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: (e.clientX - r.left) / r.width - 0.5,
          y: (e.clientY - r.top) / r.height - 0.5,
        });
      }}
      onPointerLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <svg
        viewBox="0 0 580 500"
        role="img"
        aria-label="Illustrative signal field: inputs connect through a computation network to outputs"
        style={{
          transform: `translate(${position.x * 10}px, ${position.y * 10}px)`,
        }}
      >
        <defs>
          <radialGradient id="field-glow">
            <stop stopColor="#76e4d2" stopOpacity=".18" />
            <stop offset="1" stopColor="#080b12" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="#a5b2c5"
              strokeOpacity=".08"
            />
          </pattern>
        </defs>
        <rect width="580" height="500" fill="url(#grid)" />
        <ellipse cx="310" cy="250" rx="245" ry="225" fill="url(#field-glow)" />
        <g className="field-orbits" fill="none" stroke="#76e4d2">
          <ellipse
            cx="295"
            cy="250"
            rx="190"
            ry="88"
            transform="rotate(-35 295 250)"
          />
          <ellipse
            cx="295"
            cy="250"
            rx="190"
            ry="88"
            transform="rotate(35 295 250)"
          />
          <circle cx="295" cy="250" r="115" />
        </g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path
              className="signal-path"
              style={{ animationDelay: `${i * -0.9}s` }}
              d={`M65 ${120 + i * 85} L210 ${155 + i * 58} L370 ${145 + i * 65} L510 ${140 + i * 80}`}
              fill="none"
              stroke={i % 2 ? '#9c98f7' : '#76e4d2'}
            />
            {[65, 210, 370, 510].map((x, j) => (
              <circle
                key={x}
                cx={x}
                cy={[120 + i * 85, 155 + i * 58, 145 + i * 65, 140 + i * 80][j]}
                r={j === 1 || j === 2 ? 5 : 3}
                fill={i % 2 ? '#9c98f7' : '#76e4d2'}
              />
            ))}
          </g>
        ))}
        <circle
          cx="295"
          cy="250"
          r="32"
          fill="#101624"
          stroke="#76e4d2"
          strokeOpacity=".6"
        />
        <text x="295" y="257" textAnchor="middle" fill="#edf2fa" fontSize="20">
          ƒ
        </text>
        <g fill="#a5b2c5" fontSize="10" fontFamily="monospace">
          <text x="45" y="465">
            01 / INPUT
          </text>
          <text x="235" y="465">
            02 / COMPUTE
          </text>
          <text x="450" y="465">
            03 / OUTPUT
          </text>
          <text x="32" y="34">
            SIGNAL FIELD / EXPLORATION 001
          </text>
        </g>
      </svg>
      <span className="field-caption mono">
        <span className="status-dot" /> Ideas in. Possibilities out.
      </span>
    </div>
  );
}
