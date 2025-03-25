<template>
  <USelect
    v-model="selected"
    :options="options"
    placeholder="Rechercher..."
    searchable
    :loading="loading"
    :clearable="true"
    size="lg"
    :ui="{
      wrapper: 'w-64',
      container: 'relative',
      input: 'bg-white dark:bg-gray-800'
    }"
    @search="handleSearch"
  >
    <template #option="{ option }">
      <div class="flex items-center gap-2">
        <UIcon :name="option.icon" class="size-5" />
        {{ option.label }}
      </div>
    </template>
  </USelect>
</template>

<script setup lang="ts">
const selected = ref(null)
const loading = ref(false)

const options = ref([
  {
    label: 'France',
    value: 'fr',
    icon: 'i-flag-fr'
  },
  {
    label: 'Allemagne',
    value: 'de',
    icon: 'i-flag-de'
  },
  {
    label: 'Espagne',
    value: 'es',
    icon: 'i-flag-es'
  }
])

const handleSearch = async (query: string) => {
  loading.value = true
  // Simuler un appel API
  await new Promise(resolve => setTimeout(resolve, 1000))
  options.value = [
    { label: `Résultat 1 pour "${query}"`, value: '1', icon: 'i-heroicons-magnifying-glass' },
    { label: `Résultat 2 pour "${query}"`, value: '2', icon: 'i-heroicons-magnifying-glass' }
  ]
  loading.value = false
}
</script> 