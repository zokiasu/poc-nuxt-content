# Règles pour les Composants Vue/Nuxt

## Structure de Base d'un Composant

Chaque composant doit suivre cette structure de base :

```vue
<template>
  <div>
    <!-- Le contenu du composant -->
  </div>
</template>

<script setup lang="ts">
// 1. Imports
import { ref, computed } from 'vue'

// 2. Props
interface Props {
  // Props typées
}

const props = defineProps<Props>()

// 3. Emits
const emit = defineEmits<{
  // Events typés
}>()

// 4. Composables
// 5. Refs/State
// 6. Computed
// 7. Methods
// 8. Lifecycle hooks
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
```

## Conventions de Nommage

1. **Noms de Fichiers**
   - PascalCase pour les fichiers de composants
   - Exemple : `UserProfile.vue`, `NavigationBar.vue`

2. **Props**
   - camelCase pour les noms de props
   - Préfixer les props booléennes avec `is`, `has`, ou `should`
   - Exemple : `isVisible`, `hasPermission`

3. **Events**
   - kebab-case pour les noms d'événements
   - Exemple : `@update-value`, `@item-selected`

## Documentation

Chaque composant doit inclure :

```vue
<script setup lang="ts">
/**
 * @component NomDuComposant
 * @description Brève description du composant
 * 
 * @example
 * <NomDuComposant
 *   :prop1="value1"
 *   :prop2="value2"
 *   @event="handler"
 * />
 */

interface Props {
  /**
   * Description de la prop
   * @default valeur par défaut
   */
  propName: string
}
</script>
```

## Bonnes Pratiques

1. **Props**
   - Toujours typer les props
   - Définir des valeurs par défaut si nécessaire
   - Valider les props avec TypeScript

2. **Composition**
   - Utiliser les composables pour la logique réutilisable
   - Extraire la logique complexe dans des composables
   - Garder les composants focalisés sur une seule responsabilité

3. **Performance**
   - Utiliser `shallowRef` pour les objets volumineux
   - Éviter les computed properties inutiles
   - Utiliser `v-memo` pour les listes statiques

4. **Style**
   - Utiliser `scoped` par défaut
   - Suivre une méthodologie CSS (BEM recommandé)
   - Éviter les styles globaux

## Tests

Les composants doivent être testables :
- Props facilement mockables
- Events vérifiables
- État interne accessible via refs
- Logique complexe extraite dans des composables testables

## Accessibilité

- Utiliser les attributs ARIA appropriés
- Assurer la navigation au clavier
- Maintenir un contraste suffisant
- Utiliser des balises sémantiques 