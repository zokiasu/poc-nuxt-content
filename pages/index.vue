<template>
  <div class="relative isolate overflow-hidden">
    <!-- Hero section -->
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            Bienvenue sur notre site
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Vous avez des questions ? Consultez notre FAQ pour trouver des réponses aux questions les plus fréquentes.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink 
              to="/faq" 
              class="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
            >
              Voir la FAQ
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Decoration -->
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>