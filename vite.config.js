import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Automatically find every .html file in the project (excluding node_modules and dist)
const htmlFiles = glob.sync("**/*.html", {
  ignore: ["node_modules/**", "dist/**"],
  cwd: __dirname,
});

const input = {};
htmlFiles.forEach((file) => {
  // Use the file path (without .html) as a unique key
  const name = file.replace(/\.html$/, "").replace(/[\\/]/g, "-");
  input[name] = path.resolve(__dirname, file);
});

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/AEU-static-website/",
  build: {
    rollupOptions: {
      input,
    },
  },
});
