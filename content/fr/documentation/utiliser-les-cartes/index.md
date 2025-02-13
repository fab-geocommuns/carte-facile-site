---
title: Utiliser les cartes sur son site
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Utiliser les cartes
  order: 2
  nav: docs
---

Ce tutoriel explique comment ajouter une carte sur son site web, avec l'aide de la librairie javascript [MapLibre GL JS](https://maplibre.org). 

La première étape est d'ajouter les bibliothèques nécessaires au bon fonctionnement de Maplibre. Deux possibilités sont disponibles pour utiliser la librairie : en utilisant les liens (le plus simple si vous débutez), ou bien avec le gestionnaire de paquets NPM.

---

## En utilisant les liens

### Installer les bibliothèques

Ajoutez les liens suivants dans la section `<head>` de votre fichier HTML, pour ajouter les dernières versions des bibliothèques MapLibre depuis un CDN :
```html
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
```
Au besoin, vous pouvez sélectionner une version spécifique des bibliothèque, en modifiant le numéro de version dans les URLs.

### Ajouter la carte

Pour afficher la carte, ajouter ce code dans les balises `<body>` de votre page hml :

```html
<div id="map"></div>
<script>
    var map = new maplibregl.Map({
        container: 'map', // id du conteneur de la carte
        style: 'https://betagouv.github.io/styles-de-cartes/maps/standard_ign.json', // URL du style de carte
        maxZoom: 18.9 // niveau de zoom maximum, adapté aux style utilisant les données IGN
    });
</script>
```
La balise `<div>` avec l'attribut `id="map"` est le conteneur de la carte, tandis que le script contenu dans les balises `<script>` initialise la carte en allant chercher les styles et les données nécessaires à son fonctionnement.

L'URL de style de carte est a modifier selon le style que vous souhaitez utiliser. Pour obtenir l'URL d'un stylede carte parmi ceux présenté sur le site, il suffit de cliquer sur le bouton "Copier l'URL du style" sur la page du style, dans l'onglet des [Cartes](/fr/cartes). Copier ensuite l'URL obtenue et l'utiliser dans le code ci-dessus.

:::callout Avertissement sur les URLs des cartes
Le service est encore en construction et les URLs des styles ne sont pas complètement stables. 
:::

N'oubliez pas d'ajuster les styles de votre page et de la balise `<div>` avec l'attribut `id="map"`, afin que la carte soit affichée correctement. Par exemple, si vous souhaitez afficher la carte en plein écran, vous pouvez ajouter le code suivant dans la section `<head>` de votre fichier HTML :

```html
<style>
    html,body, #map { height:100%; width: 100%; margin:0;}
</style>
```

**Félicitation, vous avez maintenant une carte affichée sur votre site !**


### Exemple de code complet

L'exemple de code ci-dessous est un exemple complet de code pour afficher une carte sur une page web, qui reprent les étapes précédentes. 
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
        var map = new maplibregl.Map({
            container: 'map', // id du conteneur de la carte
            style: 'https://betagouv.github.io/styles-de-cartes/maps/standard_ign.json', // URL du style de carte
            maxZoom: 18.9 // niveau de zoom maximum, adapté aux style utilisant les données IGN
        });
    </script>
</body>
</html>
```

---

## En utilisant le gestionnaire de paquets NPM

### Installer les bibliothèques

Installer les bibliotohèque en utilisant la commande suivante dans votre terminal :
```bash
npm install maplibre-gl
```

### Ajouter la carte

Ajoutez la balise pour la carte dans votre fichier HTML :
```html
<div id="map"></div>
```

Puis importez le module MapLibre et initialisez la carte dans votre fichier JavaScript :
```javascript
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map', // id du conteneur de la carte
    style: 'https://betagouv.github.io/styles-de-cartes/maps/standard_ign.json', // URL du style de carte
    maxZoom: 18.9 // niveau de zoom maximum, adapté aux style utilisant les données IGN
});
```

C'est tout ! Vous avez maintenant une carte affichée sur votre site web.

L'URL de style de carte est a modifier selon le style que vous souhaitez utiliser. Découvrez les styles disponibles sur la page [Cartes](/fr/cartes).

---

## Ressources supplémentaires

- [Documentation officielle de MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)