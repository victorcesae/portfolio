import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 4000,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  base: "/portfolio/",
});
