<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-xl font-bold text-gray-800">
                Mon Site
              </NuxtLink>
            </div>
            <div class="flex sm:ml-6 sm:space-x-8">
              <NuxtLink 
                to="/" 
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
                :class="{ 'border-b-2 border-indigo-500': $route.path === '/' }"
              >
                Accueil
              </NuxtLink>
              <NuxtLink 
                to="/faq" 
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
                :class="{ 'border-b-2 border-indigo-500': $route.path.startsWith('/faq') }"
              >
                FAQ
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>