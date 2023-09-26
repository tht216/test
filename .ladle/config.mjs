export default {
  viteConfig: "./.ladle/vite.config.ts",
  port: 1235,
  outDir: "ladle-build",
  addons: {
    a11y: {
      enabled: false,
    },
    rtl: {
      enabled: false,
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
        xxlarge: 1536,
      },
      defaultState: 0,
    },
  },
};
