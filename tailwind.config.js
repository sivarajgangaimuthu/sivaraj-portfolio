/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#05070d",
        panel: "rgba(12, 18, 31, 0.66)",
        line: "rgba(148, 163, 184, 0.18)",
        cyanGlow: "#4dd8ff",
        mintGlow: "#8ff7d3",
        goldGlow: "#f8d57e",
        roseGlow: "#ff7ab6"
      },
      boxShadow: {
        glow: "0 0 42px rgba(77, 216, 255, 0.22)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
