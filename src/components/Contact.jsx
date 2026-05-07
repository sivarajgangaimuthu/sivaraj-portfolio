import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { contactMethods, profile } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [fallbackMessage, setFallbackMessage] = useState("");

  const handleSubmit = (event) => {
    if (formEndpoint) return;

    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    setFallbackMessage("Opening your email client because Formspree is not configured yet.");
    window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${encodeURIComponent(
      name
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something useful."
        description="Reach out for Java backend, full-stack, or GenAI application opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          className="glass-panel rounded-[1.5rem] p-6 sm:p-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl font-semibold text-white">
            Contact details
          </h3>
          <div className="mt-6 space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "Email" ? undefined : "_blank"}
                rel={method.label === "Email" ? undefined : "noreferrer"}
                className="focus-ring block rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-cyanGlow/40 hover:bg-white/[0.08]"
              >
                <span className="text-sm font-semibold text-cyanGlow">{method.label}</span>
                <span className="mt-1 block break-words text-slate-100">{method.value}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="glass-panel rounded-[1.5rem] p-6 sm:p-8"
          action={formEndpoint || undefined}
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                className="focus-ring w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="focus-ring w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
            <textarea
              required
              name="message"
              rows="6"
              className="focus-ring w-full resize-none rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500"
              placeholder="Tell me about the role or project..."
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyanGlow to-mintGlow px-6 py-3 font-semibold text-ink shadow-glow transition hover:scale-[1.01] sm:w-auto"
          >
            Send Message <FaPaperPlane />
          </button>
          {fallbackMessage && (
            <p className="mt-4 text-sm text-slate-400">{fallbackMessage}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
