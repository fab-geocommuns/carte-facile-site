---
title: Carte simple avec MapLibre et liens CDN
layout: layouts/docs.njk
description: Exemple d'un afichage d'une carte en utilisant MapLibre GL JS et Carte facile, avec les liens CDN.
eleventyNavigation:
  key: Carte avec MapLibre et CDN
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
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ma carte</title>
        
        <!-- Importation des bibliothèques MapLibre -->
        <script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
        <link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
        <!-- Importation de la bibliothèque Carte facile -->
        <script src="https://unpkg.com/carte-facile@0.4.3/dist/index.js"></script>
        
        <!-- Style pour afficher la carte en plein écran -->
        <style>
            html,body, #map { height:100%; width: 100%; margin:0;}
        </style>
    </head>
    <body>
        <!-- Le conteneur de la carte -->
        <div id="map"></div>

        <!-- Le script qui initialise la carte -->
        <script>
            // Création la carte
            var map = new Map({
                container: 'map', // id du conteneur de la carte
                style: carteFacile.mapStyle.ign.standard, // Style de carte
                maxZoom: 18.9 // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
            });

            // Ajout d'un contrôle de navigation
            let nav = new NavigationControl();
            map.addControl(nav, 'top-left');

            // Ajout d'une échelle
            let scale = new ScaleControl({
                maxWidth: 80,
                unit: 'imperial'
            });
            map.addControl(scale);

            // Exemple de changement de style
            function changeToAerial() {
                map.setStyle(carteFacile.mapStyle.ign.aerial);
            }
        </script>
    </body>
</html>