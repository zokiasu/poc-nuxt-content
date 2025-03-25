<template>
  <div class="relative isolate">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
          Foire Aux Questions
        </h1>
        
        <!-- Barre de recherche -->
        <div class="mb-12">
          <SearchBar class="w-full" @search="searchQuery = $event" />
        </div>

        <!-- Liste des articles -->
        <div class="grid gap-6 sm:grid-cols-2">
          <div v-for="article in filteredArticles" :key="article.id" class="group relative">
            <NuxtLink :to="article.path" class="block">
              <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:border-indigo-100">
                <h2 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                  {{ article.title }}
                </h2>
                <p class="mt-3 text-gray-600 line-clamp-2">
                  {{ article.description }}
                </p>
                <div class="mt-4">
                  <span class="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                    {{ article.category }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  path: string
  title: string
  description: string
  category: string
}
const route = useRoute()

const { data: articles } = await useAsyncData(route.path, () => {
  return queryCollection('faq')
    .all()
})

const searchQuery = ref('')

const filteredArticles = computed(() => {  
  const query = searchQuery.value.toLowerCase()

  return articles.value?.filter((article: any) =>
    article.title?.toLowerCase().includes(query) ||
    article.description?.toLowerCase().includes(query) ||
    article.category?.toLowerCase().includes(query)
  ) || []
})
</script> 