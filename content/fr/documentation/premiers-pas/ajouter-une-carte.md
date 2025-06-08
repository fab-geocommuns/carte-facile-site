---
title: Ajouter une carte
description: Ajouter une carte à votre site internet ou application avec Carte Facile.
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
<!-- Style CSS pour que la carte occupe tout l'espace disponible et avoir une couleur de fond. -->
<style>
    html,body, #map { height:100%; width: 100%; margin:0 }
    #map { background: #000120; }
</style>
```

<br>

## Cas 1 : avec une installation via npm

Dans votre fichier javascript, initialisez la carte avec :

```typescript
// Importations nécessaires pour la carte
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'carte-facile/carte-facile.css';

// Création la carte
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyles.simple, // style de carte
  minZoom: 1.8, // niveau de zoom minimum (optionnel)
  maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
  zoom: 5, // niveau de zoom inital (optionnel)
  center: [2.5, 47], // placement initial de la carte (optionnel)
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
        minZoom: 1.8, // niveau de zoom minimum (optionnel)
        maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
        zoom: 5, // niveau de zoom inital (optionnel)
        center: [2.5, 47], // placement initial de la carte (optionnel)
    });
</script>
```

Un exemple de code prêt à l'emploi est disponible ici : [**Carte simple**]({{ "/documentation/exemples/carte-simple-maplibre-cdn" | locale_url }})

**🗺️ Félicitations, vous avez maintenant une carte fonctionnelle ! 🗺️**

<br>

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

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/premiers-pas/ajouter-des-surcouches" | locale_url }}>
  Ajouter des surcouches
</a>