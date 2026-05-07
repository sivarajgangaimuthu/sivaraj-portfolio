import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work built around real engineering problems."
        description="Each project highlights production-facing concerns: synchronization, clean APIs, persistence, AI search, or risk-aware automation."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group glass-panel flex min-h-full flex-col overflow-hidden rounded-[1.5rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyanGlow/40 hover:text-cyanGlow"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-ink transition hover:bg-mintGlow"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
