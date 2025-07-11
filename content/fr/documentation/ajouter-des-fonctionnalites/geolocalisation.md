---
title: Géolocalisation
description: Ajouter la possibilité de se géolocaliser sur une carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: Géolocalisation
  parent: Ajouter des fonctionnalités
  order: 3
  nav: docs
---

La librairie Maplibre propose un bouton de géolocalisation, qui permet aux usagers de se localiser sur la carte via l'API de géolocalisation du navigateur internet.

## Ajouter un bouton de géolocalisation

```typescript
map.addControl(new maplibregl.GeolocateControl);
```

<br>

De la même manière que pour les autres contrôleurs, vous pouvez choisir la position du bouton sur la carte :

```typescript
map.addControl(new maplibregl.GeolocateControl(), 'top-left');
```

Il est possible de personnaliser le comportement (précision, suivi continu, etc.), notamment pour de l'usage mobile et GPS. Pour en savoir plus, consultez la [documentation Maplibre](https://maplibre.org/maplibre-gl-js/docs/API/classes/GeolocateControl/).

Par exemple, pour faire le suivi en continu de la position de l'utilisateur :

```typescript
map.addControl(new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true    // Demander une précision élevée
    },
    trackUserLocation: true,        // Continuer à suivre la position de l'utilisateur
}));
```