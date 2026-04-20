import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette extracted from sava-select.de
        cocoa: {
          50: "#f7f3ed",
          100: "#e8dcc5",
          200: "#d3bc96",
          300: "#b99466",
          400: "#9a7040",
          500: "#7d5424",
          600: "#63411a",
          700: "#503613",
          800: "#3a2810",
          900: "#26190a",
          950: "#140d05",
        },
        cream: {
          50: "#fbf9f1",
          100: "#f5f1df",
          200: "#ede9d0",
          300: "#e0d6a9",
          400: "#d1c07a",
          500: "#bfa754",
          600: "#a58a3f",
          700: "#7f6a32",
          800: "#5c4d26",
          900: "#3d331a",
        },
        amber: {
          50: "#fef7ec",
          100: "#fdebc8",
          200: "#fbd58a",
          300: "#f9bc56",
          400: "#f1aa4c",
          500: "#e08a1d",
          600: "#c46d15",
          700: "#9b5014",
          800: "#7e4016",
          900: "#683516",
        },
        palm: {
          50: "#eef9f1",
          100: "#d6f0de",
          200: "#aee1bf",
          300: "#7cc998",
          400: "#4baa6d",
          500: "#2a8c4e",
          600: "#1a6c32",
          700: "#175529",
          800: "#144422",
          900: "#11371d",
        },
        ink: "#0f0a05",
        paper: "#fbf9f1",
      },
      fontFamily: {
        display: ["var(--font-display)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 11vw, 10rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-md": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }],
        "stat": ["clamp(4rem, 14vw, 14rem)", { lineHeight: "0.9", letterSpacing: "-0.05em", fontWeight: "500" }],
        "eyebrow": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.2em", fontWeight: "500" }],
      },
      spacing: {
        section: "clamp(6rem, 12vw, 12rem)",
        "section-sm": "clamp(4rem, 8vw, 8rem)",
      },
      maxWidth: {
        prose: "65ch",
        container: "88rem",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.16, 1, 0.3, 1)",
        "apple-out": "cubic-bezier(0.32, 0.72, 0, 1)",
        "apple-in": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "ken-burns": "kenBurns 20s ease-out infinite alternate",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1.5%, -1%)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
