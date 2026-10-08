import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { BrandMark } from "@/components/layout/BrandMark";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { brandAssets } from "@/content/brandAssets";
import { footerNav, siteConfig } from "@/content/site";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line bg-track">
      <div aria-hidden="true" className="h-0.5 w-24 bg-red" />
      <Container className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-5">
            <BrandMark />
            <Image
              src={brandAssets.badge}
              alt="MadTown Racing circular badge"
              width={84}
              height={84}
              unoptimized
              className="hidden size-16 shrink-0 rounded-full border border-line-strong object-cover sm:block"
            />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel">{siteConfig.tagline}</p>
          <p className="eyebrow mt-6 text-muted">{siteConfig.location}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <h2 className="eyebrow text-dim">Site</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-warm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-warm"
              >
                Instagram ↗<span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-dim">Get involved</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/join"
                className="group inline-flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase hover:text-red-text"
              >
                Join the team <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="group inline-flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase hover:text-red-text"
              >
                Partner with us <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 font-mono text-[0.7rem] tracking-[0.12em] text-dim uppercase sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}
          </p>
          <p>Student-operated · {siteConfig.locationShort}</p>
        </Container>
      </div>
    </footer>
  );
}
