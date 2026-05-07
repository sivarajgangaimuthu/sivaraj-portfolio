import { motion } from "framer-motion";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { achievements, education } from "../data/portfolio";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="section-shell">
      <div className="mb-10">
        <span className="eyebrow">Experience</span>
        <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
          Experience & Education
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          className="glass-panel rounded-[1.5rem] p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-goldGlow/12 text-goldGlow">
              <FaAward />
            </span>
            <h3 className="font-display text-2xl font-semibold text-white">
              Achievements
            </h3>
          </div>
          <div className="space-y-4">
            {achievements.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <p className="font-medium text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="education"
          className="glass-panel rounded-[1.5rem] p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanGlow/12 text-cyanGlow">
              <FaGraduationCap />
            </span>
            <h3 className="font-display text-2xl font-semibold text-white">
              Education
            </h3>
          </div>
          <p className="font-display text-3xl font-semibold text-white">
            {education.college}
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">{education.degree}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3">
            <span className="text-slate-400">CGPA</span>
            <span className="font-display text-2xl font-bold text-goldGlow">
              {education.cgpa}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
