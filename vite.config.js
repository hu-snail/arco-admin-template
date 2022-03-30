const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginForArco from "@arco-plugins/vite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginForArco()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // 根路径
      "@": path.resolve(__dirname, "src"), // src 路径
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/variable.less"
        )}";`,
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
