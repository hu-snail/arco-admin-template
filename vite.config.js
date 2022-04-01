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
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "https://624659e7e3450d61b0fd6ba2.mockapi.io/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
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
