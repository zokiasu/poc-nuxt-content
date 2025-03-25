// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  content: {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },

  ui: {
    icons: ['heroicons', 'material-symbols', 'logos']
  },

  components: {
    dirs: [
      {
        path: '~/components/content',
        prefix: 'Content',
        pathPrefix: false,
        global: true
      }
    ]
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