import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// ⚠️ Replace 'your-repo-name' with your actual GitHub repo name
const repoName = 'ts-bpo-test';

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`,
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));