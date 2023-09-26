import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          700: "#292929",
          800: "#303133",
        },
        blue: {
          500: "#308EE1",
        },
        sky: {
          400: "#3CC4FF",
          500: "#009DF5",
        },
      },

      fontFamily: {
        Helvetica: ["Helvetica Neue", "ui-sans-serif", "system-ui"],
      },

      backgroundImage: {
        "gradient-blue":
          "linear-gradient(100deg, #009DF5 -14.88%, #3CC4FF 112.1%)",
      },

      width: {
        inner: "calc(100% - 2px)",
      },

      height: {
        inner: "calc(100% - 2px)",
      },
    },
  },
  plugins: [],
};
export default config;
