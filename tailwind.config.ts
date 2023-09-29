import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
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
        red: {
          400: "#F46A6A",
        },
        green: {
          400: "#49C180",
          500: "#1FC561",
        },
        zinc: {
          400: "#484848",
          500: "#737B7D",
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
          600: "#555B6D",
        },
        stone: { 300: "#C4C4C4", 950: "#0F0F0F" },
        divider: { 500: "#E2E5E6" },
        neutral: {
          50: "#FAFAFA",
          200: "#E0E0E0",
          400: "#949494",
          450: "#A3A3A3",
          700: "#373F41",
        },
        slate: {
          50: "#EFF2F7",
          100: "#F3F3F9",
          500: "#74788D",
          800: "#2A3042",
        },
      },

      fontFamily: {
        Helvetica: ["Helvetica Neue", "ui-sans-serif", "system-ui"],
      },
      backgroundPosition: {
        "left-0.68": "center left 0.68rem",
        "left-0.88": "center left 0.88rem",
        "right-0.87": "center right 0.87rem",
      },
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(100deg, #009DF5 -14.88%, #3CC4FF 112.1%)",
        "gradient-blue-white":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(95deg, #0199EE -3.33%, #5FCFFF 104.02%)",
        pros: "url('/background/bg-pros.svg')",
        search: "url('/icon/search.svg')",
        "search-big": "url('/icon/search-big.svg')",
        select: "url('/icon/select.svg')",
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
