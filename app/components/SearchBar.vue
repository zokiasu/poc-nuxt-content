<template>
  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
      </svg>
    </div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher dans la FAQ..."
      class="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200"
      @input="emitSearch"
    />
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

const emitSearch = () => {
  emit('search', searchQuery.value)
}
</script> 