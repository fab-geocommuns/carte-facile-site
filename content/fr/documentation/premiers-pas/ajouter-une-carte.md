---
title: Ajouter une carte
description: Ajouter une carte à votre site internet ou application avec Carte facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Ajouter une carte
  parent: Premiers pas
  order: 2
  nav: docs 
---

Dans votre html, ajoutez un conteneur pour votre carte :

```html
<!-- Conteneur HTML qui accueillera la carte -->
<div id="map"></div>
<!-- Style CSS pour que la carte occupe tout l'espace disponible -->
<style>
    html, body, #map { height: 100%; width: 100%; margin: 0; }
</style>
```

<br>

## Cas 1 : avec une installation via npm

Dans votre fichier javascript, initialisez la carte avec :

```typescript
// Importations nécessaires pour la carte
import { mapStyles, addOverlay, removeOverlay } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'carte-facile/dist/carte-facile.css';

// Création la carte
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyles.simple, // style de carte
  maxZoom: 18.9 // zoom maximum pour les données IGN
});
```

<br>

## Cas 2 : avec une installation via liens CDN

Ajoutez dans votre html :

```html
<script>
    // Création la carte
    let map = new maplibregl.Map({
        container: 'map', // id du conteneur de la carte
        style: CarteFacile.mapStyles.simple, // style de carte
        maxZoom: 18.9 // zoom maximum pour les données IGN
    });
</script>
```

Un exemple de code prêt à l'emploi est disponible ici : [**Carte simple**]({{ "/documentation/exemples/carte-simple-maplibre-cdn" | locale_url }})

**🗺️ Félicitations, vous avez maintenant une carte fonctionnelle ! 🗺️**

<br>

---

## Styles de carte disponibles

CarteFacile propose plusieurs styles prédéfinis :

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Style", "Description"],
    data: [
        ["mapStyles.simple", "Style par défaut, adapté à la plupart des usages"],
        ["mapStyles.simpleOsm", "Style par défaut, utilisant les données OSM plutôt qu'IGN"],
        ["mapStyles.desaturated", "Version désaturée, idéale pour la datavisualisation"],
        ["mapStyles.aerial", "Vue photographies aériennes et satellite"]
    ]
}) }}

<br>

---

<br>

## Personnalisation de la carte 

Pour ajouter des contrôles de navigation :

```typescript
  const nav = new maplibregl.NavigationControl();
  map.addControl(nav, 'top-right');
```

Pour ajouter une échelle :

```typescript
  const scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: 'imperial'
  });
  map.addControl(scale);
```

Pour changer le style d'une carte existante :

```typescript
map.setStyle(mapStyles.aerial);
```

<br>

---

<br>

## Ajouter des surcouches de carte

Carte Facile permet d'ajouter des surcouches de carte pour enrichir votre visualisation. Le styles des surcouches ajoutées s'adapteront automatiquement à la carte sélectionnée initialement, pour avoir une bonne lisibilité.

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Surcouche", "Description"],
    data: [
        ["cadastre", "Affiche les feuilles et les parcelles cadastrales."],
        ["administrative-boundaries", "Affiche les limites administratives des régions, départements, EPCI et communes."]
    ]
}) }}

Pour ajouter une surcouche à votre carte, utilisez la fonction `addOverlay` :

```typescript
// Ajout de la surcouche cadastrale
addOverlay(map, 'cadastre');

// Ajout de la surcouche des limites administratives
addOverlay(map, 'administrative-boundaries');
```

Vous pouvez également retirer une surcouche à tout moment :

```typescript
// Retrait de la surcouche cadastrale
removeOverlay(map, 'cadastre');
```

⚠️ Si vous utilisez les liens CDN, ajouter `CarteFacile` avant les fonctions `addOverlay` et `removeOverlay` :
```typescript
CarteFacile.addOverlay(map, 'administrative-boundaries');
```
