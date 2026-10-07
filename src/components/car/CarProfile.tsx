import { cn } from "@/lib/cn";

/**
 * Stylised side profile of a Mazda MX-5 ND race car (front facing left),
 * drawn as an original illustration. Replace with real photography via the
 * media manifest when available. viewBox: 1000 × 320, ground at y≈300.
 */
const BODY =
  "M84 292C64 288 54 278 52 264C50 246 52 232 60 218C70 204 90 194 116 186C160 166 200 136 248 132C300 130 370 138 434 136L546 58C556 52 570 49 590 49L650 51C684 53 704 64 718 80C734 98 748 110 768 114C820 114 880 112 922 112C940 112 950 120 952 134C954 160 948 200 938 232C930 256 920 272 900 282C875 280 858 278 839 276A84 84 0 1 0 701 276L307 276A84 84 0 1 0 169 276C140 280 112 288 84 292Z";
const GREENHOUSE =
  "M434 136L546 58C556 52 570 49 590 49L650 51C684 53 704 64 718 80C734 98 748 110 768 114C700 118 560 128 434 136Z";
const GLASS = "M468 131L550 64C558 58 570 56 588 56L628 57L636 125Z";
const QUARTER = "M646 124L640 58L652 58C676 60 692 70 704 86L716 119Z";

const WHEELS = [
  {
    cx: 238,
    spokes:
      "M252.8 230.3L284.4 235.4M248.6 238.6L271.2 261.2M240.3 242.8L245.4 274.4M231.2 241.4L216.7 269.9M224.6 234.8L196.1 249.3M223.2 225.7L191.6 220.6M227.4 217.4L204.8 194.8M235.7 213.2L230.6 181.6M244.8 214.6L259.3 186.1M251.4 221.2L279.9 206.7",
  },
  {
    cx: 770,
    spokes:
      "M784.8 230.3L816.4 235.4M780.6 238.6L803.2 261.2M772.3 242.8L777.4 274.4M763.2 241.4L748.7 269.9M756.6 234.8L728.1 249.3M755.2 225.7L723.6 220.6M759.4 217.4L736.8 194.8M767.7 213.2L762.6 181.6M776.8 214.6L791.3 186.1M783.4 221.2L811.9 206.7",
  },
] as const;

export function CarProfile({
  id,
  tone = "livery",
  className,
}: {
  /** Unique prefix for gradient ids when multiple cars render on a page. */
  id: string;
  tone?: "livery" | "shadow";
  className?: string;
}) {
  const shadow = tone === "shadow";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 320"
      className={cn("h-auto w-full", className)}
      fill="none"
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          {shadow ? (
            <>
              <stop offset="0" stopColor="#3a3a3a" />
              <stop offset="0.45" stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#0a0a0a" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#f1efe9" />
              <stop offset="0.55" stopColor="#c4c2bc" />
              <stop offset="1" stopColor="#5e5d59" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3f45" />
          <stop offset="1" stopColor="#0d0e10" />
        </linearGradient>
        <radialGradient id={`${id}-tire`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.72" stopColor="#1c1c1c" />
          <stop offset="1" stopColor="#060606" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <path d={BODY} />
        </clipPath>
      </defs>

      <ellipse cx="505" cy="300" rx="470" ry="9" fill="#000" />

      {WHEELS.map((wheel) => (
        <g key={wheel.cx}>
          <circle cx={wheel.cx} cy="228" r="72" fill={`url(#${id}-tire)`} />
          <circle cx={wheel.cx} cy="228" r="66" stroke="#2c2c2c" />
          <circle cx={wheel.cx} cy="228" r="51" fill="#0f0f0f" stroke="#4d4d4d" strokeWidth="1.5" />
          <circle cx={wheel.cx} cy="228" r="37" stroke="#353535" strokeWidth="7" opacity="0.8" />
          <path
            d={`M${wheel.cx - 33} 209A38 38 0 0 1 ${wheel.cx - 7} 191`}
            stroke="var(--race-red)"
            strokeWidth="10"
          />
          <path d={wheel.spokes} stroke="#3c3c3c" strokeWidth="5" strokeLinecap="round" />
          <circle cx={wheel.cx} cy="228" r="11" fill="#1d1d1d" stroke="#585858" />
        </g>
      ))}

      <path d={BODY} fill={`url(#${id}-body)`} />
      <g clipPath={`url(#${id}-clip)`}>
        <path d="M40 300V252C200 250 600 246 980 236V300Z" fill="#111" />
        <path
          d="M290 256C500 246 700 232 960 196V210C700 246 500 260 290 268Z"
          fill="var(--race-red)"
        />
        <path d={GREENHOUSE} fill="#0e0e0e" />
      </g>
      <path d={GLASS} fill={`url(#${id}-glass)`} />
      <path d={QUARTER} fill={`url(#${id}-glass)`} opacity="0.85" />
      {/* Roll structure visible through the glass */}
      <path d="M600 57 612 125M560 80 636 72" stroke="#6b6b6b" strokeWidth="2" opacity="0.7" />
      {/* Door shut lines and shoulder crease */}
      <path
        d="M472 140C468 180 468 228 472 268M690 124C698 160 702 210 700 258"
        stroke="#0b0b0b"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        d="M318 196C450 186 600 170 790 146"
        stroke="#fff"
        strokeOpacity={shadow ? 0.12 : 0.55}
        strokeWidth="1.2"
      />
      <path d="M458 133 476 117 494 119 490 133Z" fill="#141414" />
      <path
        d="M66 214C84 202 110 192 140 184L134 196C112 203 88 210 68 220Z"
        fill="#1a1a1a"
        stroke="#888"
        strokeWidth="0.8"
      />
      <path d="M946 120 952 130 951 160 944 154Z" fill="var(--race-red)" />
      <path d={BODY} stroke="#f4f2ec" strokeOpacity={shadow ? 0.5 : 0.35} />
      {!shadow && (
        <text
          x="548"
          y="210"
          fontFamily="var(--font-barlow-condensed), Arial Narrow, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="34"
          fill="#111"
        >
          M/R
        </text>
      )}
    </svg>
  );
}
