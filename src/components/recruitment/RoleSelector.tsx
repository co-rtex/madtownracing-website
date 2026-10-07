"use client";

import { useState } from "react";
import type { Role, RoleInterest } from "@/types/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * "What sounds most interesting?" — pick an interest, get role suggestions.
 * Fully keyboard operable; results are announced politely.
 */
export function RoleSelector({
  interests,
  roles,
  applyCta,
}: {
  interests: RoleInterest[];
  roles: Role[];
  applyCta: React.ReactNode;
}) {
  const [interestId, setInterestId] = useState(interests[0]!.id);
  const interest = interests.find((i) => i.id === interestId) ?? interests[0]!;
  const matches = interest.roles
    .map((id) => roles.find((r) => r.id === id))
    .filter((r): r is Role => r !== undefined);
  const [roleId, setRoleId] = useState(matches[0]!.id);
  const role = matches.find((r) => r.id === roleId) ?? matches[0]!;

  const chooseInterest = (id: string) => {
    setInterestId(id);
    const next = interests.find((i) => i.id === id);
    if (next?.roles[0]) setRoleId(next.roles[0]);
  };

  return (
    <div>
      <fieldset>
        <legend className="display text-[clamp(1.8rem,3vw,2.6rem)]">
          What sounds most interesting?
        </legend>
        <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
          {interests.map((option) => {
            const active = option.id === interestId;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => chooseInterest(option.id)}
                  className={cn(
                    "flex h-full min-h-28 w-full flex-col items-center justify-center gap-3 border px-3 py-4 text-center transition-colors",
                    active
                      ? "border-red bg-red text-warm"
                      : "border-line-strong bg-pit text-muted hover:border-warm/50 hover:text-warm",
                  )}
                >
                  <Icon name={option.icon} className="size-6" />
                  <span className="font-display text-[0.95rem] leading-tight font-bold tracking-[0.08em] uppercase">
                    {option.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div aria-live="polite" className="mt-10 grid border border-line-strong lg:grid-cols-12">
        <div className="border-b border-line-strong p-6 md:p-8 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="eyebrow text-dim">Suggested roles</p>
          <ul className="mt-4 space-y-1">
            {matches.map((match) => {
              const active = match.id === role.id;
              return (
                <li key={match.id}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setRoleId(match.id)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 border-l-2 px-4 py-3 text-left transition-colors",
                      active
                        ? "border-red bg-pit text-warm"
                        : "border-transparent text-steel hover:bg-pit/60 hover:text-muted",
                    )}
                  >
                    <span className="font-display text-xl font-bold tracking-wide uppercase">
                      {match.name}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-widest text-dim uppercase">
                      {match.department}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div key={role.id} className="anim-rise p-6 md:p-10 lg:col-span-8">
          <p className="eyebrow text-red-text">You might like</p>
          <h3 className="display mt-3 text-[clamp(2.4rem,4.4vw,4rem)]">{role.name}</h3>
          <p className="mt-3 max-w-xl text-lg text-muted">{role.description}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="eyebrow text-dim">Typical work</h4>
              <ul className="mt-3 space-y-2">
                {role.typicalWork.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="eyebrow text-dim">Experience</h4>
              <ul className="mt-3 space-y-2">
                {role.experience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">{applyCta}</div>
        </div>
      </div>
    </div>
  );
}
