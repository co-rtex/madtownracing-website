import { telemetryPath } from "@/lib/telemetry";
import { cn } from "@/lib/cn";

/** Decorative speed trace. Draws itself in on mount unless reduced motion. */
export function TelemetryLine({
  className,
  seed = 1,
  animate = true,
  color = "var(--race-red)",
  secondary = true,
}: {
  className?: string;
  seed?: number;
  animate?: boolean;
  color?: string;
  secondary?: boolean;
}) {
  const w = 1200;
  const h = 160;
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={cn("w-full", className)}
      fill="none"
    >
      {secondary && (
        <path
          d={telemetryPath({
            width: w,
            height: h,
            seed: seed + 3,
            amplitude: 0.32,
          })}
          stroke="rgb(255 255 255 / 0.22)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      )}
      <path
        d={telemetryPath({ width: w, height: h, seed })}
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className={animate ? "anim-draw" : undefined}
        pathLength={2000}
        style={{ ["--len" as string]: 2000 }}
      />
    </svg>
  );
}
