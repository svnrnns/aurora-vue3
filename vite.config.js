import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const packagename = "@svnrnns/aurora";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/Aurora.js"),
      name: packagename,
      fileName: (format) => `${packagename}.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
