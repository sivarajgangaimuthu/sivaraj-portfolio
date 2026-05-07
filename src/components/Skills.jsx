import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for full-stack and AI product work."
        description="Grouped by the way I build: strong Java backend foundations, React frontends, databases, and AI tooling."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const GroupIcon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="glass-panel relative overflow-hidden rounded-[1.5rem] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${group.accent}`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyanGlow">
                    <GroupIcon />
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/50 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyanGlow/40 hover:text-white"
                      >
                        <Icon className="text-cyanGlow" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
