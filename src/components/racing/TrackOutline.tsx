/** Generic, fictional circuit outline used for empty calendar slots. */
export function TrackOutline({ variant = 0 }: { variant?: number }) {
  const paths = [
    "M30 90 L60 30 L120 22 L160 40 L150 70 L190 78 L200 100 L140 112 L70 108 Z",
    "M40 100 C30 60 60 26 100 30 L170 34 C200 36 206 70 180 80 L120 84 L160 104 L60 112 Z",
    "M30 70 L50 30 L110 40 L130 22 L190 40 L180 80 L130 76 L120 110 L50 104 Z",
  ];
  return (
    <svg aria-hidden="true" viewBox="0 0 230 130" className="h-auto w-full" fill="none">
      <path
        d={paths[variant % paths.length]}
        stroke="rgb(244 242 236 / .25)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d={paths[variant % paths.length]}
        stroke="rgb(244 242 236 / .5)"
        strokeWidth="1"
        strokeDasharray="3 5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
