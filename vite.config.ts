import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            { runtime: "automatic", importSource: "@emotion/react" },
            "emotion-loader",
          ],
        ],
      },
    }),
    WindiCSS(),
  ],
  server: {
    port: 9000,
    proxy: {
      "/api": {
        target: "https://dev-q-n-a.trap.games/",
        changeOrigin: true,
      },
      "/grpc": {
        target: "https://dev-q-n-a.trap.games/",
        changeOrigin: true,
      },
    },
  },
});
