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

    <!-- Importation des styles CSS -->
    <link
      href="https://unpkg.com/maplibre-gl@^{{ data.versions.maplibre }}/dist/maplibre-gl.css"
      rel="stylesheet"
    />
    <link
      href="https://unpkg.com/carte-facile@^{{ data.versions.carteFacile }}/dist/carte-facile.css"
      rel="stylesheet"
    />

    <!-- Import map : indique au navigateur où trouver les bibliothèques MapLibre GL JS et Carte Facile -->
    <script type="importmap">
      {
        "imports": {
          "maplibre-gl": "https://unpkg.com/maplibre-gl@^{{ data.versions.maplibre }}/dist/maplibre-gl.mjs",
          "carte-facile": "https://unpkg.com/carte-facile@^{{ data.versions.carteFacile }}/dist/carte-facile.esm.js"
        }
      }
    </script>

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
    <script type="module">
      import * as maplibregl from "maplibre-gl";
      import { mapStyles, SearchControl, MapSelectorControl, addOverlay, hideLayer } from "carte-facile";

      // Création la carte
      let map = new maplibregl.Map({
        container: "map", // id du conteneur de la carte
        style: mapStyles.simple, // Style de carte
        maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
      });

      // Ajout d'une barre de recherche
      map.addControl(new SearchControl);

      // Ajout d'un contrôle de navigation
      map.addControl(new maplibregl.NavigationControl);

      // Ajout d'une échelle
      map.addControl(new maplibregl.ScaleControl);

      // Ajout d'un bouton de Géolocalisation
      map.addControl(new maplibregl.GeolocateControl);

      // Ajout d'un sélecteur de carte
      map.addControl(new MapSelectorControl);

      // Ajouter des surcouches (dé-commenter les lignes en dessous pour ajouter ces surcouches)
      //addOverlay(map, 'cadastre');
      //addOverlay(map, ['levelCurves', 'administrativeBoundaries']);

      // Masquer des couches (dé-commenter les lignes en dessous pour masquer ces surcouches)
      //hideLayer(map, 'buildings');
      //hideLayer(map, ['buildings', 'street_labels']);
    </script>
  </body>
</html>
```
