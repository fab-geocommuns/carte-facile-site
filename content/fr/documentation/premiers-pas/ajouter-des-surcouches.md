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

Vous pouvez ajouter une ou plusieurs surcouches (par exemple le cadastre ou les limites administratives) à votre carte en utilisant la fonction `addOverlay` :

```typescript
import { addOverlay, Overlay } from 'carte-facile';

// Ajouter une seule surcouche
addOverlay(map, Overlay.administrativeBoundaries);

// Ou ajouter plusieurs surcouches en même temps
addOverlay(map, [Overlay.administrativeBoundaries, Overlay.cadastre]);
```

Le style de la surcouche s'adapte automatiquement au fond de carte utilisé.

Pour retirer une ou plusieurs surcouches, utilisez la fonction `removeOverlay` :

```typescript
import { removeOverlay } from 'carte-facile';

// Retirer une seule surcouche
removeOverlay(map, Overlay.administrativeBoundaries);

// Ou retirer plusieurs surcouches en même temps
removeOverlay(map, [Overlay.administrativeBoundaries, Overlay.cadastre]);
```

:::info Si vous utilisez les liens CDN
Ajoutez `CarteFacile` avant `addOverlay` et `removeOverlay`, et supprimez les lignes d'import. Vous pouvez utiliser directement les noms des surcouches entre guillemets au lieu de `CarteFacile.Overlay.nomSurcouche` :
```typescript
CarteFacile.addOverlay(map, ['levelCurves', 'administrativeBoundaries']);
```
:::

<br><br>

## Surcouches disponibles

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Surcouche", "Description"],
    data: [
        ["cadastre", "Affiche les feuilles et les parcelles cadastrales."],
        ["administrativeBoundaries", "Affiche les limites administratives des régions, départements, EPCI et communes."],
        ["levelCurves", "Affiche les courbes de niveau, permettant de décrire le relief."]
    ]
}) }}

<br>

Pour afficher toutes les surcouches disponibles, servez-vous de l’autocomplétion de votre IDE avec `Overlay.`, ou utilisez la méthode suivante pour afficher la liste dans la console du navigateur :

```typescript
import { Overlay } from 'carte-facile';

console.log(Overlay);

```

Si vous utilisez les liens CDN :
```typescript
console.log(CarteFacile.Overlay);
```
<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/premiers-pas/masquer-des-couches" | locale_url }}>
  Masquer des couches
</a>