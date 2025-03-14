---
title: getMap
description: Cette page référence les classes disponibles dans l'API Carte facile
layout: layouts/docs.njk
eleventyNavigation:
  key: getMap
  parent: API
  order: 2
  nav: docs
---

La fonction principale pour obtenir un style de carte. Elle retourne le contenu du fichier JSON de spécification des styles et des sources de données de la carte demandée.

```typescript
getMap(style, provider)
```

## Paramètres

- **`style`** (string) : Le style de carte à utiliser
  - **`'standard'`** : Style par défaut
  - **`'desaturated'`** : Style désaturé
  - **`'aerial'`** : Vue en photogarphies aériennes
- **`provider`** (string) : Le fournisseur des   données
  - **`'ign'`** : Institut national de l’information géographique et forestière (France).
  - **`'osm'`** : OpenStreetMap (disponibilité à venir)

## Retour

```typescript
interface MapConfig {
  name: string;          // Nom du style de carte
  provider: MapProvider; // Fournisseur de la carte (ign, osm)
  metadata: {
    fr: {
      name: string;        // Nom en français
      description: string; // Description en français
      use: string;        // Cas d'utilisation en français
      accessibility: string; // Informations d'accessibilité en français
    };
    en: {
      name: string;        // Nom en anglais
      description: string; // Description en anglais
      use: string;        // Cas d'utilisation en anglais
      accessibility: string; // Informations d'accessibilité en anglais
    };
    source: string;      // Source des données
    url: string;         // URL de la source
    version: string;     // Version du style
  };
  thumbnail: string;     // Chemin vers l'image de miniature de la carte
}
```

## Exemple avec MapLibre

```typescript
import {Map} from 'maplibre-gl';    // Importation spécifique à MapLibre
import { getMap } from 'carte-facile';

const map = new maplibregl.Map({
  style: getMap('standard', 'ign'),
  // ...
});
```
