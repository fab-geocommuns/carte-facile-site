---
title: MapSelectorControl
description: Interface graphique pour sélectionner les cartes et surcouches.
layout: layouts/docs.njk
eleventyNavigation:
  key: MapSelectorControl
  parent: Références API
  order: 10
  nav: docs
---

Interface graphique pour sélectionner les cartes et surcouches.

```typescript
new MapSelectorControl()

// En configurant les cartes et surcouches disponibles
new MapSelectorControl({ 
  styles: ['simple', 'aerial'], 
  overlays: ['cadastre'] 
})
```
Exemple d'un ajout de controleur avec MapLibre, sur un conteneur de carte nommé `map` :
```typescript
map.addControl(new MapSelectorControl());
```