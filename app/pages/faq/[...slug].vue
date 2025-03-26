<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('faq').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <NuxtLink to="/faq" class="flex items-center gap-2">
      <UIcon name="material-symbols:arrow-left-alt-rounded" class="size-5" /> <span class="text-sm">Retour</span>
    </NuxtLink>
    <div class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </div>
  </div>
</template>
