---
title: Échelle
description: Ajouter une échelle sur une carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: Échelle
  parent: Ajouter des fonctionnalités
  order: 2
  nav: docs
---

La librairie Maplibre propose une fonctionnalité d'ajout d'échelle. Elle s'ajuste automatiquement selon le niveau de zoom et vous pouvez spécifier l'unité désirée ainsi que sa largeur maximum. 

## Ajouter une échelle

```typescript
map.addControl(new maplibregl.ScaleControl);
```

<br>

## Personnaliser l'échelle

Vous pouvez configurer la largeur de l'échelle et l'unité de l'échelle. Comme pour tout les contrôleurs de carte dans Maplibre, vous pouvez également préciser sa position sur la carte.

```typescript
const scale = new maplibregl.ScaleControl({
    maxWidth: 80,        // Largeur maximale en pixels
    unit: 'metric'        // 'imperial', 'metric' ou 'nautical'
});
map.addControl(scale, 'bottom-right'); // Position personnalisée, parmis 'top-left', 'top-right', 'bottom-left' ou 'bottom-right'
```

Pour plus d'informations, consultez la [documentation Maplibre](https://maplibre.org/maplibre-gl-js/docs/API/classes/ScaleControl/).

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/ajouter-des-fonctionnalites/geolocalisation" | locale_url }}>
  Ajouter un bouton de géolocalisation
</a>