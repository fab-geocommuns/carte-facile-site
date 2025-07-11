---
title: mapThumbnails
description: Aperçus visuels pour les cartes et surcouches.
layout: layouts/docs.njk
eleventyNavigation:
  key: mapThumbnails
  parent: Références API
  order: 3
  nav: docs
---
Aperçus visuels pour les cartes et surcouches.

```typescript
// Utilisation
mapThumbnails.simple

// Voir tous les aperçus disponibles
console.log(Object.keys(mapThumbnails))
// ou utilisez l'autocomplétion de votre IDE
```

Exemple d'utilisation pour afficher un aperçu :
```html
<!-- Dans le html -->
<img id="preview" alt="Aperçu carte" />
```
```javascript
// Sélectionner la balise html pour ajouter la source
document.querySelector('#preview').src = mapThumbnails.simple;
```