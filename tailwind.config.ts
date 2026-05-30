import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: "#0B2545",
          blue: "#1D6AE5",
          teal: "#16B8A6",
          mint: "#DFF7F3",
          ink: "#102033",
          silver: "#F5F9FC"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 37, 69, 0.14)",
        glass: "0 16px 45px rgba(29, 106, 229, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
