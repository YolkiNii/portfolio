import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "fade-in-down": "fade-in-down 2s",
      "fade-in": "fade-in 1.5s ease-in-out"
    },
    keyframes: {
      "fade-in-down": {
        from: {
          opacity: "0",
          transform: "translateY(-100%)"
        },
        to: {
          opacity: "1",
          transform: "translateY(0%)"
        }
      },
      "fade-in": {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1"
        }
      }
    },
    colors: {
      "cream": "#EBE9E1",
      "yellow": "#EFB11D",
      "light-pink": "#FFA2B6",
      "hot-pink": "#D6536D",
      "red-orange": "#E43D12",
      "light-red-orange": "#F7B09D"
    },
    screens: {
      "sm": {"max": "640px"},
      "md": {"max": "768px"},
      "xl": {"max": "1280px"}
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
