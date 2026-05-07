import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems, navSectionIds } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navSectionIds);

  const linkClass = (id) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      activeSection === id
        ? "bg-white/[0.12] text-white shadow-glow"
        : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-4 z-[70] px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-premium backdrop-blur-xl">
        <a href="#home" className="focus-ring rounded-full font-display text-lg font-bold">
          <span className="gradient-text">Sivaraj G</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-premium backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.08]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
