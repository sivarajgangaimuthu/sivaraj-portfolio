import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-cyanGlow via-mintGlow to-goldGlow"
      style={{ scaleX }}
    />
  );
}
