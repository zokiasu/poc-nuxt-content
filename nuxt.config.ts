// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  components: true,

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-03-12',
})