# Règles Nuxt pour Cursor

## Version et Documentation Officielle

### Version
Cette application utilise Nuxt.js version 3.16.0. Toute modification doit être compatible avec cette version spécifique.

### Documentation Officielle
- **IMPORTANT** : Toujours se référer à la [documentation officielle de Nuxt](https://nuxt.com/docs) avant d'implémenter des modifications
- Vérifier la compatibilité des fonctionnalités avec la version 3.16.0
- Ne pas implémenter de fonctionnalités expérimentales ou dépréciées
- Suivre les recommandations et les bonnes pratiques officielles de Nuxt
- En cas de conflit entre les règles locales et la documentation officielle, la documentation officielle prévaut

### Modifications
- Toute modification doit être justifiée et documentée
- Les modifications doivent suivre les standards de Nuxt
- Éviter les solutions non conventionnelles ou les "hacks"
- Privilégier les solutions natives de Nuxt aux solutions alternatives

### Documentation et Commentaires
- Commenter uniquement ce qui n'est pas évident dans le code
- Une ligne de commentaire par fonction pour expliquer son but
- Documenter les cas complexes ou les décisions architecturales importantes
- Éviter les commentaires qui répètent ce que le code fait déjà clairement

Exemple de commentaires appropriés :
```ts
// Calcule le total des commandes avec les taxes et remises appliquées
function calculateOrderTotal(orders: Order[]): number {
  // ... code ...
}

// Cas complexe : Gestion des conflits de fuseaux horaires
function synchronizeTimeZones() {
  // Explication du cas particulier
  if (userTimezone !== serverTimezone) {
    // ... code ...
  }
}
```

## Structure du Projet

### Composants
Les composants doivent suivre ces règles :
- Utiliser la convention de nommage PascalCase
- Être placés dans le dossier `components/`
- Utiliser `<script setup lang="ts">` pour TypeScript

Exemple :
```vue
<template>
  <div class="user-card">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
// Gère l'affichage et les interactions d'une carte utilisateur
interface Props {
  title: string
}

defineProps<Props>()
</script>
```

### Pages
Les pages doivent :
- Être placées dans le dossier `pages/`
- Utiliser `definePageMeta` pour les métadonnées
- Suivre la structure de routing dynamique de Nuxt

Exemple :
```vue
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['auth']
})
</script>
```

## Composables
Les composables doivent :
- Commencer par le préfixe `use`
- Être placés dans le dossier `composables/`
- Être typés avec TypeScript

Exemple :
```ts
// Gère l'état et les actions du panier d'achat
export function useShoppingCart() {
  const items = ref<CartItem[]>([])

  // Logique complexe : Mise à jour du total avec gestion des promotions
  function updateTotalWithPromotions() {
    // ... code complexe qui mérite une explication ...
  }

  return {
    items,
    updateTotalWithPromotions
  }
}
```

## Content
Les fichiers de contenu doivent :
- Être placés dans le dossier `content/`
- Utiliser les formats supportés (md, yaml, json, csv)
- Inclure les métadonnées nécessaires

## API Routes
Les routes API doivent :
- Être placées dans `server/api/`
- Utiliser les méthodes HTTP appropriées
- Inclure la validation des entrées
- Gérer les erreurs correctement

## Imports Recommandés
Toujours considérer ces imports Nuxt :
- `useHead` pour la gestion des métadonnées
- `useAsyncData` pour les requêtes asynchrones
- `useFetch` pour les appels API
- `useRoute` et `useRouter` pour la navigation
- `defineNuxtComponent` pour les composants
- `useRuntimeConfig` pour la configuration

## Composants Nuxt
Utiliser les composants Nuxt natifs :
- `<NuxtLink>` pour la navigation
- `<NuxtPage>` pour le routage
- `<NuxtLayout>` pour les layouts
- `<ClientOnly>` pour le rendu côté client

## TypeScript
- Utiliser `<script setup lang="ts">` dans tous les composants
- Définir les interfaces pour les props
- Utiliser les types Nuxt intégrés
- Éviter `any` sauf si absolument nécessaire

## Middleware
Les middlewares doivent :
- Être placés dans `middleware/` ou `server/middleware/`
- Avoir un nom descriptif
- Gérer les cas d'erreur
- Être documentés avec leurs cas d'utilisation

## Plugins
Les plugins doivent :
- Être placés dans `plugins/`
- Être nommés clairement selon leur fonction
- Utiliser la fonction `defineNuxtPlugin`
- Être documentés avec des exemples d'utilisation 