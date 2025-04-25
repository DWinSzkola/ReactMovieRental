import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    preview: {
        host: true,
        port: parseInt(process.env.PORT) || 4173,
        allowedHosts: ["reactmovierental.onrender.com"],
    },
});
