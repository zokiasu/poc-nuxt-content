<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string
}>(), {
  icon: 'i-lucide-apple'
})

const handleClick = () => {
  console.log('clicked')
}
</script>

<template>
  <div>
    <UButton color="secondary" :icon="icon" @click="handleClick">
      <slot />
    </UButton>
  </div>
</template>
