---
title: showLayer()
description: Affiche les groupes de couches spécifiés.
layout: layouts/docs.njk
eleventyNavigation:
  key: showLayer()
  parent: Gestion des couches
  order: 3
  nav: docs
---

Affiche les groupes de couches spécifiés.

```typescript
showLayer(map, LayerGroup.buildings)
showLayer(map, [LayerGroup.buildings, LayerGroup.streets])

// Variante sans typage ni autocomplétion
showLayer(map, 'buildings')
showLayer(map, ['buildings', 'streets'])
```