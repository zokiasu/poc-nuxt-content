// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
})