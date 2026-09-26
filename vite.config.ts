import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        id: "/",

        name: "Instagram UI",
        short_name: "Instagram",

        description: "A modern Instagram-style social media web app.",

        start_url: "/",
        scope: "/",

        display: "standalone",
        display_override: ["standalone", "minimal-ui"],

        orientation: "portrait",

        background_color: "#ffffff",
        theme_color: "#ffffff",

        lang: "en",
        dir: "ltr",

        categories: ["social", "photo", "personalization"],

        icons: [
          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },

          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],

        shortcuts: [
          {
            name: "Home",
            short_name: "Home",
            description: "Open your Instagram home feed",
            url: "/",
            icons: [
              {
                src: "/pwa-192.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },

          {
            name: "Search",
            short_name: "Search",
            description: "Search users and posts",
            url: "/search",
            icons: [
              {
                src: "/pwa-192.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },

          {
            name: "Create Post",
            short_name: "Post",
            description: "Create a new post",
            url: "/post",
            icons: [
              {
                src: "/pwa-192.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },

          {
            name: "Profile",
            short_name: "Profile",
            description: "Open your profile",
            url: "/profile",
            icons: [
              {
                src: "/pwa-192.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}"],
      },
    }),
  ],
});
