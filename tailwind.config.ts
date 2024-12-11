import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Corinthia","Dancing Script"', 'cursive'], // Example font
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#f0cf0a' },
          '50%': { color: '#ff5722' },
          '100%': { color: '#61dafb' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', },
          '100%': { transform: 'translateX(0)', },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sizeIncrease: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        colorChange: 'colorChange 5s infinite ease-in-out',
        slideLeft: 'slideLeft 1s  ease-in-out ',
        float: 'float 8s ease-in-out infinite',
        sizeIncrease: 'sizeIncrease 2s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
