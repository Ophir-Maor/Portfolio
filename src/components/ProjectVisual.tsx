export default function ProjectVisual({ id }: { id: string }) {
  return (
    <div className={`project-visual visual-${id}`}>
      <svg
        viewBox="0 0 600 360"
        role="img"
        aria-label={`${id} conceptual illustration, not a project screenshot`}
      >
        <defs>
          <pattern
            id={`grid-${id}`}
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0H0V30"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".08"
            />
          </pattern>
        </defs>
        <rect width="600" height="360" fill={`url(#grid-${id})`} />
        {id === 'xometrics' ? (
          <>
            <g fill="none" stroke="#76e4d2">
              <path d="M145 65H95V115M455 65H505V115M95 245V295H145M455 295H505V245" />
              <rect
                x="192"
                y="49"
                width="216"
                height="267"
                strokeDasharray="5 6"
                opacity=".5"
              />
            </g>
            <path
              d="M280 112C252 110 239 140 251 158L220 185L179 220L191 238L250 208L263 191L250 263L237 316H270L295 237L309 274L335 316H365L331 247L324 184L369 211L413 190L404 173L366 186L329 152C343 129 327 103 309 103Z"
              fill="#76e4d2"
              fillOpacity=".17"
              stroke="#76e4d2"
            />
            <circle
              cx="296"
              cy="83"
              r="25"
              fill="#76e4d2"
              fillOpacity=".2"
              stroke="#76e4d2"
            />
            <path
              className="scan-line"
              d="M95 175H505"
              stroke="#76e4d2"
              opacity=".7"
            />
            <text x="112" y="88" fill="#76e4d2" fontSize="10">
              SUBJECT / SEGMENTATION
            </text>
          </>
        ) : id === 'brandes' ? (
          <g fill="#141b2a" stroke="#9c98f7">
            <path d="M130 180H470M300 100V270" opacity=".5" />
            {[
              [100, 145, 'SQL'],
              [250, 65, 'REVIEW'],
              [250, 235, 'API'],
              [400, 145, 'BLAZOR'],
            ].map(([x, y, label]) => (
              <g key={label}>
                <rect
                  x={Number(x)}
                  y={Number(y)}
                  width="100"
                  height="70"
                  rx="4"
                />
                <text
                  x={Number(x) + 50}
                  y={Number(y) + 40}
                  textAnchor="middle"
                  stroke="none"
                  fill="#c6c1ff"
                  fontSize="12"
                >
                  {label}
                </text>
              </g>
            ))}
          </g>
        ) : id === 'airbnb' ? (
          <>
            <path
              d="M85 65V290H525"
              fill="none"
              stroke="#a5b2c5"
              opacity=".4"
            />
            <path
              d="M95 270C200 250 300 155 510 85"
              fill="none"
              stroke="#76e4d2"
              strokeWidth="2"
            />
            {Array.from({ length: 38 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 10.5}
                cy={265 - i * 4.7 + Math.sin(i * 7) * 42}
                r="4"
                fill={i % 3 ? '#9c98f7' : '#76e4d2'}
                opacity=".7"
              />
            ))}
            <text x="105" y="48" fill="#a5b2c5" fontSize="10">
              ILLUSTRATIVE DISTRIBUTION / NOT PROJECT DATA
            </text>
          </>
        ) : id === 'study-agent' ? (
          <>
            <rect
              x="95"
              y="65"
              width="410"
              height="240"
              rx="7"
              fill="#141b2a"
              stroke="#53617a"
            />
            <path d="M95 98H505M320 98V305" stroke="#53617a" opacity=".5" />
            {[135, 155, 175, 210, 230, 250].map((y) => (
              <path
                key={y}
                d={`M120 ${y}H${y % 3 ? 283 : 240}`}
                stroke="#a5b2c5"
                opacity=".3"
              />
            ))}
            <rect
              x="111"
              y="200"
              width="186"
              height="38"
              fill="#76e4d2"
              fillOpacity=".08"
              stroke="#76e4d2"
              strokeDasharray="3 3"
            />
            <text x="342" y="140" fill="#76e4d2" fontSize="12">
              CONTEXT →
            </text>
            <text x="342" y="165" fill="#a5b2c5" fontSize="11">
              Local inference
            </text>
            <path
              d="M345 198H479M345 220H465M345 242H440"
              stroke="#9c98f7"
              opacity=".7"
            />
          </>
        ) : (
          <g fill="none" stroke="#76e4d2">
            <path d="M190 130L350 100L425 170L265 205ZM190 130V240L265 285L425 250V170M265 205V285M350 100V210L425 250M190 240L350 210" />
            {[
              [195, 146],
              [396, 181],
              [265, 255],
              [350, 127],
            ].map(([x, y]) => (
              <ellipse
                key={`${x}`}
                cx={x}
                cy={y}
                rx="30"
                ry="15"
                transform={`rotate(-20 ${x} ${y})`}
              />
            ))}
            <path
              d="M300 102Q330 30 480 48"
              strokeDasharray="4 5"
              opacity=".5"
            />
            <path d="M85 310H505M85 325H505" opacity=".15" />
          </g>
        )}
        <text x="28" y="337" fill="#a5b2c5" fontFamily="monospace" fontSize="9">
          CONCEPT STUDY / {id.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
