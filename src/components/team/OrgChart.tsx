import { departments, leadershipRole } from "@/content/team";

/** Team Principal → three departments, drawn with thin technical rules. */
export function OrgChart() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="border border-red bg-red/10 px-8 py-4 text-center">
          <p className="eyebrow text-red-text">Leadership</p>
          <p className="mt-1 font-display text-2xl font-bold uppercase">{leadershipRole.name}</p>
        </div>
      </div>

      {/* Connectors (md+) */}
      <div aria-hidden="true" className="relative hidden h-12 md:block">
        <span className="absolute top-0 left-1/2 h-6 w-px bg-red" />
        <span className="absolute top-6 right-[16.66%] left-[16.66%] h-px bg-red" />
        <span className="absolute top-6 left-[16.66%] h-6 w-px bg-red" />
        <span className="absolute top-6 left-1/2 h-6 w-px bg-red" />
        <span className="absolute top-6 right-[16.66%] h-6 w-px bg-red" />
      </div>
      <div aria-hidden="true" className="mx-auto h-8 w-px bg-red md:hidden" />

      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {departments.map((department, index) => (
          <li key={department.id} className="border border-line-strong bg-pit">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3 className="font-display text-2xl font-bold tracking-wide text-red-text uppercase">
                {department.name}
              </h3>
              <span className="font-mono text-xs text-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm text-steel">{department.summary}</p>
              <ul className="mt-5 space-y-2">
                {department.functions.map((fn) => (
                  <li
                    key={fn}
                    className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted uppercase"
                  >
                    <span aria-hidden="true" className="h-px w-3 bg-line-strong" />
                    {fn}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
