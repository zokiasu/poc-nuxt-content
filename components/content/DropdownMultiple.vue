<template>
  <USelect
    v-model="selected"
    :options="options"
    multiple
    placeholder="Sélectionnez plusieurs options"
    :ui="{
      wrapper: 'w-full max-w-md',
      container: 'relative',
      input: 'bg-white dark:bg-gray-800',
      option: {
        base: 'flex items-center gap-2',
        active: 'bg-indigo-50 text-indigo-700',
        inactive: 'text-gray-700'
      }
    }"
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
const selected = ref([])
const options = [
  {
    label: 'Vue.js',
    value: 'vue',
    icon: 'i-logos-vue'
  },
  {
    label: 'React',
    value: 'react',
    icon: 'i-logos-react'
  },
  {
    label: 'Angular',
    value: 'angular',
    icon: 'i-logos-angular-icon'
  },
  {
    label: 'Svelte',
    value: 'svelte',
    icon: 'i-logos-svelte-icon'
  }
]
</script> 