import { socials } from "../data/portfolio";

export default function FloatingSocials() {
  return (
    <aside
      aria-label="Social links"
      className="fixed bottom-8 left-5 z-40 hidden flex-col gap-3 lg:flex"
    >
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.label === "Email" ? undefined : "_blank"}
            rel={social.label === "Email" ? undefined : "noreferrer"}
            aria-label={social.label}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink/70 text-slate-300 backdrop-blur transition hover:border-cyanGlow/40 hover:text-cyanGlow"
          >
            <Icon />
          </a>
        );
      })}
    </aside>
  );
}
