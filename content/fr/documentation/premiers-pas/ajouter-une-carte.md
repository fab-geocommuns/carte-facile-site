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
import { mapStyle } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Création la carte
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyle.simple, // style de carte
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
        style: CarteFacile.mapStyle.simple, // style de carte
        maxZoom: 18.9 // zoom maximum pour les données IGN
    });
</script>
```

Un exemple de code prêt à l'emploi est disponible ici : [**Carte simple**](/documentation/exemples/carte-simple-maplibre)

**🗺️ Félicitations, vous avez maintenant une carte fonctionnelle ! 🗺️**

<br>

---

## Styles de carte disponibles

CarteFacile propose plusieurs styles prédéfinis :

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Style", "Description"],
    data: [
        ["`mapStyle.simple`", "Style par défaut, adapté à la plupart des usages"],
        ["`mapStyle.desaturated`", "Version désaturée, idéale pour la datavisualisation"],
        ["`mapStyle.aerial`", "Vue photographies aériennes et satellite"]
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
map.setStyle(mapStyle.aerial);
```