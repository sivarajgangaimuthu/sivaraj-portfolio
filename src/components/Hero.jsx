import { motion } from "framer-motion";
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, stats, typingRoles } from "../data/portfolio";
import { useTypingText } from "../hooks/useTypingText";

const particlePositions = [
  ["12%", "18%", "bg-cyanGlow", 0],
  ["24%", "72%", "bg-mintGlow", 0.7],
  ["45%", "26%", "bg-goldGlow", 1.2],
  ["68%", "64%", "bg-roseGlow", 0.3],
  ["82%", "22%", "bg-cyanGlow", 1.1],
  ["90%", "78%", "bg-mintGlow", 0.5]
];

export default function Hero() {
  const typed = useTypingText(typingRoles);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:52px_52px] opacity-35" />
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyanGlow/15 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-roseGlow/10 blur-3xl" />
        {particlePositions.map(([left, top, colorClass, delay]) => (
          <motion.span
            key={`${left}-${top}`}
            className={`absolute h-2 w-2 rounded-full ${colorClass}`}
            style={{ left, top }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="eyebrow">Available for software engineering roles</span>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Sivaraj</span>
          </h1>
          <div className="mt-5 h-12 text-2xl font-semibold text-slate-100 sm:text-3xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 bg-cyanGlow" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build scalable Java backend systems, polished React applications,
            and practical GenAI products with Gemini API and Google ADK.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyanGlow to-mintGlow px-6 py-3 font-semibold text-ink shadow-glow transition hover:scale-[1.02]"
            >
              View Projects <FaArrowDown />
            </a>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.12]"
            >
              Download Resume <FaDownload />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-slate-200 transition hover:text-cyanGlow"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-slate-200 transition hover:text-cyanGlow"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] p-5"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-ink/70 p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-roseGlow" />
              <span className="h-3 w-3 rounded-full bg-goldGlow" />
              <span className="h-3 w-3 rounded-full bg-mintGlow" />
            </div>
            <pre className="overflow-hidden text-sm leading-7 text-slate-300 sm:text-base">
              <code>
                <span className="text-roseGlow">const</span> developer = {"{"}
                {"\n"}  name: <span className="text-mintGlow">"Sivaraj G"</span>,
                {"\n"}  stack: [<span className="text-goldGlow">"Java"</span>, <span className="text-goldGlow">"React"</span>, <span className="text-goldGlow">"GenAI"</span>],
                {"\n"}  focus: <span className="text-mintGlow">"scalable product engineering"</span>,
                {"\n"}  status: <span className="text-cyanGlow">"ready to build"</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-center">
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
