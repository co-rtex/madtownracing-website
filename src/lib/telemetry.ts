/**
 * Deterministic pseudo-telemetry trace (speed-trace style) for decorative
 * SVGs. Pure function — safe for server rendering and prerendering.
 */
export function telemetryPath({
  width,
  height,
  points = 120,
  seed = 1,
  amplitude = 0.38,
}: {
  width: number;
  height: number;
  points?: number;
  seed?: number;
  amplitude?: number;
}): string {
  const mid = height / 2;
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = t * width;
    // Long straights (slow rise), sharp braking zones (fast drop).
    const lap = (t * 3.2 + seed * 0.37) % 1;
    const straight = lap < 0.78 ? Math.pow(lap / 0.78, 0.6) : 1 - (lap - 0.78) / 0.22;
    const wobble = Math.sin(t * 41 + seed) * 0.06 + Math.sin(t * 13.7 + seed * 2.1) * 0.08;
    const y = mid - (straight - 0.5 + wobble) * height * amplitude * 2;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}
