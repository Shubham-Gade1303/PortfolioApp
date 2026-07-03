import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/constants/data";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  LeetCode: SiLeetcode,
  Mail: FaEnvelope,
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-mono text-sm font-semibold">{SITE.name}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {SITE.tagline}
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {Icon ? <Icon size={16} /> : null}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
            Quick links
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 gap-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--color-border)] pt-6 text-center font-mono text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} {SITE.name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
