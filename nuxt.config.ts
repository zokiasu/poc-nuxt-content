// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
      components: {
        'dropdown-simple': '~/components/content/DropdownSimple.vue',
        'dropdown-avance': '~/components/content/DropdownAvance.vue',
        'dropdown-multiple': '~/components/content/DropdownMultiple.vue'
      }
    },
  },

  ui: {
    global: true,
    icons: ['heroicons', 'material-symbols', 'logos']
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