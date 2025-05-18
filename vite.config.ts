import { defineConfig } from "vite"
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { djangoVitePlugin } from "django-vite-plugin"

export default defineConfig({
    base: './',
    plugins: [
        react(),
        tailwindcss(),
        djangoVitePlugin([
            "static/app.js",
            "static/app.css",
            "src/home/static/home/home.js",
            "src/home/static/home/home.css",
        ]),
    ],
})
