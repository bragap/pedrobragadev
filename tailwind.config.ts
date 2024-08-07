import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      }
    },
    keyframes: {
      in: {
        "0%": { transform: "translateY(18px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "in-reverse": {
        "0%": { transform: "translateY(-18px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      "in-slow": {
        "0%": { transform: "translateY(18px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      }
    },
    animation: {
      in: "in .6s both",
      "in-reverse": "in-reverse .6s both",
      "in-slow": "in-slow 1s both",
    },
  },
  plugins: [],
};
export default config;
