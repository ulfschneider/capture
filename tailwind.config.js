/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: colors.purple[200],
        DEFAULT: colors.purple[500],
        dark: colors.purple[700],
      },
    },
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      serif: [
        "Charter",
        '"Bitstream Charter"',
        '"Sitka Text"',
        "Cambria",
        "serif",
      ],
      mono: [
        "ui-monospace",
        '"Cascadia Code"',
        '"Source Code Pro"',
        "Menlo",
        "Consolas",
        '"DejaVu Sans Mono"',
        "monospace",
      ],
      display: ["system-ui", "sans-serif"],
      body: ["system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
