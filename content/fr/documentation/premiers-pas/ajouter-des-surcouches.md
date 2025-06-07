---
title: Ajouter des surcouches
description: Ajouter des surcouches à votre carte avec Carte Facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Ajouter des surcouches
  parent: Premiers pas
  order: 3
  nav: docs 
---

Carte Facile permet d'ajouter des surcouches de carte pour enrichir votre visualisation. Le styles des surcouches ajoutées s'adapteront automatiquement à la carte sélectionnée initialement, pour avoir une bonne lisibilité.

Pour ajouter une surcouche à votre carte, utilisez la fonction `addOverlay` :

```typescript
import { addOverlay } from 'carte-facile';

// Ajout de la surcouche cadastrale
addOverlay(map, 'cadastre');

// Ajout de la surcouche des limites administratives
addOverlay(map, 'administrativeBoundaries');
```

Vous pouvez également retirer une surcouche à tout moment :

```typescript
import { removeOverlay } from 'carte-facile';

// Retrait de la surcouche cadastrale
removeOverlay(map, 'cadastre');
```
:::warning Si vous utilisez les liens CDN
Ajoutez `CarteFacile` avant les fonctions `addOverlay` et `removeOverlay` :
```typescript
CarteFacile.addOverlay(map, 'administrativeBoundaries');
```
:::

<br><br>

## Surcouches disponibles

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Surcouche", "Description"],
    data: [
        ["cadastre", "Affiche les feuilles et les parcelles cadastrales."],
        ["administrativeBoundaries", "Affiche les limites administratives des régions, départements, EPCI et communes."]
    ]
}) }}

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/premiers-pas/masquer-des-couches" | locale_url }}>
  Masquer des couches
</a>