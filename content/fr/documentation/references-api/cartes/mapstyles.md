---
title: mapStyles
description: Collection des styles de carte disponibles.
layout: layouts/docs.njk
eleventyNavigation:
  key: mapStyles
  parent: Cartes
  order: 1
  nav: docs
---

Collection des styles de carte disponibles.

```typescript
// Utilisation
mapStyles.simple

// Voir tous les styles disponibles  
console.log(Object.keys(mapStyles))
// ou utilisez l'autocomplétion de votre IDE
```

Exemple de création de carte avec MapLibre :
```typescript
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyles.simple, // style de carte
});
```

Pour connaitre toutes les options possibles sur la création de carte avec MapLibre, consultez la documentation dédiée : 
- [Map](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/)
- [MapOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapOptions/)