---
title: mapStyle
description: L'objet principal pour accéder aux styles de carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: mapStyle
  parent: API
  order: 1
  nav: docs
---

L'objet `mapStyle` est l'interface principale pour accéder aux styles de carte prédéfinis.

## Styles disponibles

```typescript
import { mapStyle } from 'carte-facile';

// Styles IGN
mapStyle.ign.standard    // Style par défaut
mapStyle.ign.desaturated // Style désaturé
mapStyle.ign.aerial      // Photographies aériennes

// Styles OSM (à venir)
mapStyle.osm.standard
mapStyle.osm.desaturated
mapStyle.osm.aerial
```

## Utilisation

Pour commencer à utiliser carte-facile, consultez les guides suivants :

- [Guide MapLibre](/documentation/guides/maplibre) - Pour utiliser carte-facile avec MapLibre GL
- [Guide Leaflet](/documentation/guides/leaflet) - Pour utiliser carte-facile avec Leaflet (à venir)
- [Guide OpenLayers](/documentation/guides/openlayers) - Pour utiliser carte-facile avec OpenLayers (à venir)

## Notes

- Les styles OSM ne sont pas encore disponibles
