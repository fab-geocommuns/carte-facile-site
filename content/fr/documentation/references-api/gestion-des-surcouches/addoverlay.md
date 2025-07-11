---
title: addOverlay()
description: Ajoute une ou plusieurs surcouches à la carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: addOverlay()
  parent: Gestion des surcouches
  order: 2
  nav: docs
---

Ajoute une ou plusieurs surcouches à la carte.

```typescript
addOverlay(map, Overlay.cadastre)
addOverlay(map, [Overlay.cadastre, Overlay.administrativeBoundaries])

// Variante sans typage ni autocomplétion
addOverlay(map, 'cadastre')
addOverlay(map, ['cadastre', 'administrativeBoundaries'])
```