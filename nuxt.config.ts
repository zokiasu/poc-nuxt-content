// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

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

  // Don't know why components from content are not global by default
  // As it looks like studio need them to be to locate them
  // So we need to manually add them to the global components
  hooks: {
    'components:extend': (components) => {
      const toGlobalyze = components.filter(c => c.filePath.includes('/content/'))
      toGlobalyze.forEach(c => c.global = true)
    },
  },

  compatibilityDate: '2025-03-12',
})