import type { PlaceholderVariant } from "@/types/content";
import { CarProfile } from "@/components/car/CarProfile";
import { telemetryPath } from "@/lib/telemetry";

/**
 * Original, locally generated artwork that stands in for photography until
 * real images are supplied. Purely decorative.
 */
export function PlaceholderArt({ variant, id }: { variant: PlaceholderVariant; id: string }) {
  return (
    <div aria-hidden="true" className="noise absolute inset-0 overflow-hidden bg-garage">
      {variant === "track" && <TrackArt />}
      {variant === "garage" && <GarageArt />}
      {variant === "data" && <DataArt />}
      {variant === "car" && <CarArt id={id} />}
      {variant === "team" && <TeamArt id={id} />}
      {variant === "detail" && <DetailArt />}
    </div>
  );
}

function TrackArt() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_75%_30%,rgb(226_27_34/0.22),transparent_60%)]" />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <path
          d="M-40 520 C 200 420 420 300 820 210"
          stroke="rgb(255 255 255 / .18)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M200 540 C 380 430 560 320 840 260"
          stroke="rgb(255 255 255 / .12)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M-40 520 C 200 420 420 300 820 210"
          stroke="#e21b22"
          strokeWidth="9"
          strokeDasharray="26 26"
          fill="none"
          opacity=".75"
        />
        <path
          d="M-40 520 C 200 420 420 300 820 210"
          stroke="#f4f2ec"
          strokeWidth="9"
          strokeDasharray="26 26"
          strokeDashoffset="26"
          fill="none"
          opacity=".35"
        />
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={i}
            x1={-100 + i * 40}
            y1={160 + i * 22}
            x2={900}
            y2={120 + i * 14}
            stroke="rgb(255 255 255 / .05)"
          />
        ))}
      </svg>
    </>
  );
}

function GarageArt() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-2/3 bg-[linear-gradient(to_bottom,rgb(244_242_236/0.10),transparent)]" />
      <div className="absolute inset-x-[8%] top-[10%] flex justify-between">
        {Array.from({ length: 4 }, (_, i) => (
          <span
            key={i}
            className="h-1 w-[18%] bg-warm/70 shadow-[0_0_30px_6px_rgb(244_242_236/0.25)]"
          />
        ))}
      </div>
      <div className="tech-grid absolute inset-x-0 bottom-0 h-1/2 origin-bottom [transform:perspective(400px)_rotateX(55deg)] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute bottom-[18%] left-[12%] h-[2px] w-[40%] bg-red/70 shadow-[0_0_24px_4px_rgb(226_27_34/0.35)]" />
    </>
  );
}

function DataArt() {
  return (
    <>
      <div className="tech-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_40%,rgb(226_27_34/0.14),transparent_70%)]" />
      <svg viewBox="0 0 800 500" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <path
          d={telemetryPath({ width: 800, height: 180, seed: 2 })}
          transform="translate(0 70)"
          stroke="#e21b22"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={telemetryPath({
            width: 800,
            height: 180,
            seed: 5,
            amplitude: 0.3,
          })}
          transform="translate(0 80)"
          stroke="rgb(244 242 236 / .45)"
          strokeWidth="1.2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={telemetryPath({
            width: 800,
            height: 100,
            seed: 9,
            amplitude: 0.25,
            points: 80,
          })}
          transform="translate(0 330)"
          stroke="rgb(244 242 236 / .25)"
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="520"
          y1="0"
          x2="520"
          y2="500"
          stroke="rgb(244 242 236 / .35)"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
}

function CarArt({ id }: { id: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_68%_58%,rgb(244_242_236/0.13),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_90%_75%,rgb(226_27_34/0.25),transparent_70%)]" />
      {/* Track surface */}
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-[#151515] to-[#0a0a0a]" />
      <div className="absolute inset-x-0 bottom-[34%] h-px bg-gradient-to-r from-transparent via-warm/20 to-transparent" />
      {/* Speed streaks */}
      <div className="absolute inset-x-0 top-[48%] flex flex-col gap-4 opacity-70">
        {[62, 40, 78, 28, 54].map((w, i) => (
          <span
            key={i}
            className={
              i === 2
                ? "h-0.5 bg-gradient-to-r from-transparent via-red/60 to-transparent"
                : "h-px bg-gradient-to-r from-transparent via-warm/25 to-transparent"
            }
            style={{ width: `${w}%`, marginLeft: `${30 + ((i * 17) % 40)}%` }}
          />
        ))}
      </div>
      <div className="absolute right-[-4%] bottom-[16%] w-[78%] max-w-[1180px] drop-shadow-[0_30px_40px_rgb(0_0_0/0.8)]">
        <CarProfile id={`${id}-art`} />
      </div>
    </>
  );
}

function TeamArt({ id }: { id: string }) {
  return (
    <>
      <GarageArt />
      <div className="absolute -right-[10%] -bottom-[20%] font-display text-[min(40vw,560px)] leading-none font-black text-transparent italic [-webkit-text-stroke:1px_rgb(244_242_236/0.07)]">
        M/R
      </div>
      <div className="absolute right-[4%] bottom-[12%] w-[70%] max-w-[900px] opacity-80">
        <CarProfile id={`${id}-team`} tone="shadow" />
      </div>
    </>
  );
}

function DetailArt() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_65%_55%,rgb(226_27_34/0.15),transparent_70%)]" />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <g transform="translate(560 300)" fill="none">
          <circle r="260" stroke="rgb(255 255 255 / .08)" strokeWidth="40" />
          <circle r="200" stroke="rgb(255 255 255 / .14)" strokeWidth="2" />
          <circle r="150" stroke="rgb(255 255 255 / .10)" strokeWidth="60" />
          {Array.from({ length: 36 }, (_, i) => {
            const a = (i / 36) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={Math.cos(a) * 172}
                cy={Math.sin(a) * 172}
                r="5"
                fill="rgb(255 255 255 / .12)"
              />
            );
          })}
          <path
            d="M-190 -90 A 210 210 0 0 1 -60 -200"
            stroke="#e21b22"
            strokeWidth="46"
            opacity=".85"
          />
          <circle r="50" stroke="rgb(255 255 255 / .2)" strokeWidth="2" />
        </g>
      </svg>
    </>
  );
}
