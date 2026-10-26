import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: { DEFAULT: "#14532D", dark: "#0C3B20", soft: "#1F6B3E" }, mint: { DEFAULT: "#DDF3E6", deep: "#B7E4C7" }, paper: "#FAF8F3", ink: "#14201A", muted: "#4A5A51" },
    fontFamily: { display: ["Georgia", "Cambria", "'Times New Roman'", "serif"], sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "'Noto Sans'", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
