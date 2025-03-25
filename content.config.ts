import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    faq: defineCollection({
      type: 'page',
      source: 'faq/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        tags: z.array(z.string()).optional()
      })
    })
  }
}) 