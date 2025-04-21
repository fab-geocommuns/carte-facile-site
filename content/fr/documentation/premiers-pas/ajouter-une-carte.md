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
<div id="map"></div>
<style>
    html, body, #map { height: 100%; width: 100%; margin: 0; }
</style>
```

<br>

## Cas 1 : Pour une installation via npm

Dans votre fichier javascript, initialisez la carte avec :

```typescript
import { mapStyle } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
  container: 'map',
  style: mapStyle.simple,
  maxZoom: 18.9
});
```

:::info
Si vous n'utilisez pas de bundler (outil qui gère les imports entre fichiers JavaScript), utilisez plutôt la méthode d'installation via CDN.
:::

<br><br>

## Cas 2 : Pour une installation via liens CDN

Ajoutez dans votre html :

```html
<script>
    // Création la carte
    var map = new maplibregl.Map({
        container: 'map', // id du conteneur de la carte
        style: CarteFacile.mapStyle.simple, // Style de carte
        maxZoom: 18.9 // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
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
  let nav = new maplibregl.NavigationControl();
  map.addControl(nav, 'top-right');
```

Pour ajouter une échelle :

```typescript
  let scale = new maplibregl.ScaleControl({
      maxWidth: 80,
      unit: 'imperial'
  });
  map.addControl(scale);
```

Pour changer le style d'une carte existante :

```typescript
map.setStyle(mapStyle.aerial);
```