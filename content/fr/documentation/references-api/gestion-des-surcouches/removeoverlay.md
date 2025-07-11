---
title: removeOverlay()
description: Supprime une ou plusieurs surcouches de la carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: removeOverlay()
  parent: Gestion des surcouches
  order: 3
  nav: docs
---

Supprime une ou plusieurs surcouches de la carte.

```typescript
removeOverlay(map, Overlay.cadastre)
removeOverlay(map, [Overlay.cadastre, Overlay.administrativeBoundaries])

// Variante sans typage ni autocomplétion
removeOverlay(map, 'cadastre')
removeOverlay(map, ['cadastre', 'administrativeBoundaries'])
```