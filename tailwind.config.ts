import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        container: "6%",
      },
      colors: {
        text: "#c3c3c3",
        primary: "#121212",
        secondary: "#1f1f1f",
        accent: "#25B366",
      },
      borderRadius: {
        corner: "5px",
      },
      fontSize: {
        title: "3.75rem",
        paragraph: "1.5rem",
      },
      lineHeight: {
        paragraph: "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
export default config;
