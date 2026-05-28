/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0b10",
        fog: "#f3f4f6",
        sea: "#0e7490",
        sky: "#0ea5e9",
        slate: "#1e293b",
        dusk: "#0f172a",
        ember: "#f97316",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};
