import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6FF',
          100: '#BAE3FF',
          200: '#7CC4FA',
          300: '#47A3F3',
          400: '#2186EB',
          500: '#0967D2',
          600: '#0552B5',
          700: '#03449E',
          800: '#01337D',
          900: '#002159',
        },
      },
    },
  },
  safelist: [
    {
      pattern: /^(bg|text|border)-(primary|gray|cyan|purple|red|blue|yellow|green)-\d+/,
      variants: ['hover', 'group-hover'],
    },
    {
      pattern: /^(bg|text|border)-(primary|gray|cyan|purple|red|blue|yellow|green)-\d+\/\d+/,
    },
    {
      pattern: /^hover:border-(primary|gray|cyan|purple|red|blue|yellow|green)-\d+\/\d+/,
    }
  ],
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
