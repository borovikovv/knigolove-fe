import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      xxs: '.65rem',
      sx: '.688rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      md: '0.938rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2/3xl': '1.625rem',
      '2/5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '5.75xl': '3.75rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
  },
  plugins: [],
};
export default config;
