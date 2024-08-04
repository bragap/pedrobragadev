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
      textColor:{
        'color-primary': '#1db6b6'
      }
    },
  },
  plugins: [],
};
export default config;
