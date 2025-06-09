---
title: Carte simple avec MapLibre et liens CDN
layout: layouts/docs.njk
description: Exemple d'affichage d'une carte simple en utilisant Carte Facile et MapLibre GL JS, avec les liens CDN.
eleventyNavigation:
  key: Carte simple avec MapLibre et CDN
  parent: Exemples
  order: 1
  nav: docs
---

L'exemple de code ci-dessous est un exemple complet de code pour afficher une carte sur une page web, en utilisant les liens CDN.

Vous pouvez simplement enregistrer ce code dans un fichier nommé **index.html** et l'ouvrir avec votre navigateur internet pour voir le résultat.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma carte</title>

    <!-- Importation des bibliothèques MapLibre GL JS -->
    <link
      href="https://unpkg.com/maplibre-gl@^{{ data.versions.maplibre }}/dist/maplibre-gl.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/maplibre-gl@^{{ data.versions.maplibre }}/dist/maplibre-gl.js"></script>

    <!-- Importation des bibliothèques Carte Facile -->
    <link
      href="https://unpkg.com/carte-facile@^{{ data.versions.carteFacile }}/dist/carte-facile.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/carte-facile@^{{ data.versions.carteFacile }}/dist/carte-facile.js"></script>

    <!-- Style pour afficher la carte en plein écran -->
    <style>
      html,
      body,
      #map {
        height: 100%;
        width: 100%;
        margin: 0;
      }
      #map {
        background: #000120;
      }
    </style>
  </head>
  <body>
    <!-- Le conteneur de la carte -->
    <div id="map"></div>

    <!-- Le script qui initialise la carte -->
    <script>
      // Création la carte
      let map = new maplibregl.Map({
        container: "map", // id du conteneur de la carte
        style: CarteFacile.mapStyles.simple, // Style de carte
        maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
      });

      // Ajout d'un contrôle de navigation
      const nav = new maplibregl.NavigationControl();
      map.addControl(nav, "top-right");

      // Ajout d'une échelle
      const scale = new maplibregl.ScaleControl({
        maxWidth: 80,
        unit: "imperial",
      });
      map.addControl(scale);

      // Ajouter des surcouches (dé-commenter les lignes en dessous pour ajouter ces surcouches)
      //CarteFacile.addOverlay(map, 'administrativeBoundaries');
      //CarteFacile.addOverlay(map, 'cadastre');

      // Masquer des couches (dé-commenter les lignes en dessous pour masquer ces surcouches)
      //CarteFacile.hideLayers(map, [CarteFacile.LayerGroup.buildings, CarteFacile.LayerGroup.boundaries_epcis]);
    </script>
  </body>
</html>
```
