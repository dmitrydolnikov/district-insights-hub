import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment
  // Set to your repository name if deploying to a project site
  // Leave as "/" if deploying to a user/organization site
  base: process.env.GITHUB_PAGES === "true" ? "/district-insights-hub/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
