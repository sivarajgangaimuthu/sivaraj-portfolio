import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
