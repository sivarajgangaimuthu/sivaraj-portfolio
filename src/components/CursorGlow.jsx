import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const moveGlow = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", moveGlow);
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
