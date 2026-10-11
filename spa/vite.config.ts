import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const projectRoot = path.resolve(__dirname, "..");

// Standalone static build config for the Goodfolk Digital homepage.
// Run from the spa/ directory: `vite build`
// Produces plain static files (no SSR server) in ../spa-dist/.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "src"),
    },
  },
  publicDir: path.resolve(projectRoot, "public"),
  build: {
    outDir: path.resolve(projectRoot, "spa-dist"),
    emptyOutDir: true,
  },
});
