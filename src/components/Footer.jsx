import { socials } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Sivaraj G. Built with React, Tailwind, and motion.
        </p>
        <div className="flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noreferrer"}
                aria-label={social.label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-slate-300 transition hover:text-cyanGlow"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
