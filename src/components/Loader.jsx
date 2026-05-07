import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
        >
          <div className="relative grid h-28 w-28 place-items-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-cyanGlow/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-goldGlow/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="font-display text-2xl font-bold gradient-text">SG</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
