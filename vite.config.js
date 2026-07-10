import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/AEU-static-website/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "loginpage.html",
        student: "studentpage.html",
        fgpassword: "fgpassword.html",
      },
    },
  },
});
