<template>
  <USelect
    v-model="selected"
    :options="options"
    placeholder="Sélectionnez une option"
    :ui="{
      wrapper: 'w-full max-w-xs',
      container: 'relative',
      input: 'bg-white dark:bg-gray-800',
      option: {
        base: 'flex items-center gap-2',
        active: 'bg-indigo-50 text-indigo-700',
        inactive: 'text-gray-700'
      }
    }"
  />
</template>

<script setup lang="ts">
const selected = ref(null)
const options = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  }
]
</script> 