import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
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
        gray: {
          200: "#EAEAEA",
        },
      },

      fontFamily: {
        Helvetica: ["Helvetica Neue", "ui-sans-serif", "system-ui"],
      },

      backgroundImage: {
        "gradient-blue":
          "linear-gradient(100deg, #009DF5 -14.88%, #3CC4FF 112.1%)",
        "gradient-blue-white":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(95deg, #0199EE -3.33%, #5FCFFF 104.02%)",
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
