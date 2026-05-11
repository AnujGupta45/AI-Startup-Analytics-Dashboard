/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f9fafb",
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2937",
          foreground: "#f9fafb",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(17, 24, 39, 0.7)",
          foreground: "#f9fafb",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
