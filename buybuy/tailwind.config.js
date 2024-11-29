/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "var(--text)",
        back: "var(--background)",
        "accent-1": "var(--accent1)",
        "accent-2": "var(--accent2)",
        "accent-3": "var(--accent3)",
      },
    },
  },
  plugins: [],
};
