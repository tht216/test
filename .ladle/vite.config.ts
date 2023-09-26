import { defineConfig, loadEnv } from "vite";
import path from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: "/",
    server: {
      open: false,
    },
    resolve: {
      alias: {
        "next/image": path.resolve(__dirname, "./UnoptimizedImage.tsx"),
        "next/link": path.resolve(__dirname, "./UnoptimizedLink.tsx"),
        "next/router":  path.resolve(__dirname, "./UnoptimizedUseRouter.tsx"),
      },
    },
  });
};
