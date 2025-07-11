---
title: hideLayer()
description: Masque les groupes de couches spécifiés.
layout: layouts/docs.njk
eleventyNavigation:
  key: hideLayer()
  parent: Gestion des couches
  order: 2
  nav: docs
---

Masque les groupes de couches spécifiés.

```typescript
hideLayer(map, LayerGroup.buildings)
hideLayer(map, [LayerGroup.buildings, LayerGroup.streets])

// Variante sans typage ni autocomplétion
hideLayer(map, 'buildings')
hideLayer(map, ['buildings', 'streets'])
```