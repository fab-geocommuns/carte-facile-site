---
title: mapStyles
description: Collection des styles de carte disponibles.
layout: layouts/docs.njk
eleventyNavigation:
  key: mapStyles
  parent: Références API
  order: 2
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
  maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
});
```