---
title: getMap()
description: La fonction principale pour obtenir un style de carte.
layout: layouts/docs.njk
eleventyNavigation:
  key: getMap()
  parent: API
  order: 2
  nav: docs
---

La fonction principale pour obtenir un style de carte, en choisissant le type et le fournisseur.

```typescript
getMap(type, provider)
```

## Paramètres

- **`type`** (string) : Le type de carte à utiliser
  - **`'standard'`** : Style par défaut
  - **`'desaturated'`** : Style désaturé
  - **`'aerial'`** : Vue en photographies aériennes
- **`provider`** (string) : Le fournisseur des   données
  - **`'ign'`** : Institut national de l’information géographique et forestière (France).
  - **`'osm'`** : OpenStreetMap (disponibilité à venir)

## Retour

La fonction retourne le contenu du fichier JSON de spécification des styles et des sources de données de la carte demandée.

## Exemples d'utilisation

### Avec MapLibre GL

Pour créer une carte :

```typescript
import { Map } from 'maplibre-gl';    // Importation spécifique à MapLibre
import { getMap } from 'carte-facile';

const map = new maplibregl.Map({
  style: getMap('standard', 'ign'),
  // ...
});
```

Pour changer le type de la carte précédemment créée :
```typescript
map.setStyle(getMap('aerial', 'ign')); // setStyle est une méthode de MapLibre GL
```
