import { motion } from "framer-motion";
import { FaLaptopCode, FaMicrochip, FaRocket } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: FaMicrochip,
    title: "ECE Graduate 2025",
    text: "Engineering foundation with a builder's bias for clean systems and product thinking."
  },
  {
    icon: FaLaptopCode,
    title: "Java + React Strength",
    text: "Comfortable shipping REST APIs, backend workflows, and modern frontends."
  },
  {
    icon: FaRocket,
    title: "AI-Integrated Applications",
    text: "Exploring Gemini API, Google ADK, and RAG patterns for useful automation."
  }
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About"
        title="Backend depth, frontend polish, and an AI builder mindset."
        description="I enjoy turning ideas into reliable products, from Spring Boot APIs to React experiences and GenAI workflows."
      />

      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-9 text-slate-300">
            I am an Electronics and Communication Engineering graduate from
            the 2025 batch, passionate about software development, full stack
            engineering, and AI-powered applications. My core strengths are
            Java, Spring Boot, React.js, REST APIs, and database-backed product
            workflows.
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            I have hackathon experience and enjoy building systems that are
            scalable, readable, and useful for real users. Recently, I have
            been focused on AI-integrated applications using Gemini API and
            Google ADK.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-panel rounded-[1.5rem] p-6"
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyanGlow/12 text-cyanGlow">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
