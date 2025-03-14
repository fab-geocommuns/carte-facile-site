---
title: Guide de démarrage
layout: layouts/docs.njk
description: Apprenez à installer et utiliser la librairie Carte facile, pour ajouter une carte sur votre site.
eleventyNavigation:
  key: Guide de démarrage
  parent: Pour commencer
  order: 1
  nav: docs
---

Ce guide vous permettra de créer votre première carte avec Carte facile en quelques minutes.

Carte facile agit comme une surcouche aux librairies cartographiques habituelles, afin de faciliter leur utilisation et bénéficier de cartes et composants prêts à l'emploi. Vous pouvez donc profitez de toutes les fonctionnalités offerte par la librairie cartographique que vous utilisez habituellement.

La première étape est d'ajouter la bibliothèque Carte facile ainsi que la bibliothèque de cartographie désirée. Nous utiliserons dans ce guide la librairie [MapLibre GL JS](https://maplibre.org/).

Deux possibilités sont disponibles pour utiliser ces librairies : en utilisant le gestionnaire de paquets NPM, ou en utilisant les liens CDN dans le header de votre page html.

***

## Utilisation avec npm

:::info Prérequis
Avant d'installer Carte facile via npm, assurez-vous d'avoir :
- Node.js (version 14 ou supérieure)
- npm (ou yarn)

[Installer npm et Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
:::

<br>

Installez la librairie carte-facile en utilisant la commande suivante dans votre terminal :

```bash
npm install carte-facile
```

Installez la bibliothèque cartographique de votre choix. Si votre projet n'utilise pas déjà une librairie spécifique, nous vous conseillons d'utiliser la librairie MapLibre GL :

```bash
npm install maplibre-gl
```

:::warning Compatibilité
Actuellement, la librairie carte-facile fonctionne avec maplibre-gl mais n'est pas encore éprouvée pour les autres librairies cartographiques, comme OpenLayers ou Leaflet. Cette documentation indique donc uniquement la méthode d'utilisation avec MapLibre GL.
:::

<br>

Ajoutez un conteneur dans votre fichier HTML pour votre carte :

```html
<div id="map"></div>
```
Les attributs de style de cette balise sont à ajuster en fonction de la taille de la carte que vous desirez. Par exemple, si vous souhaitez afficher la carte en plein écran, vous pouvez ajouter le code suivant dans la section `<head>` de votre fichier HTML :

```html
<style>
    html,body, #map { height:100%; width: 100%; margin:0;}
</style>
```

Importez ensuite les bibliothèques et initialisez la carte dans votre fichier Javascript :

```typescript
import { getMap } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: getMap('standard', 'ign'), // la fonction getMap de carte-facile permet de récupérer une carte spécifique
  maxZoom: 18.9 // niveau de zoom maximum, adapté aux style utilisant les données IGN
});
```

**Vous avez maintenant une carte affichée sur votre site !**

<br>

***

## Changer la carte

Vous pouvez modifier la carte affichée, en modifiant les valeurs de la fonction **getMap(type,provider)**.

Par exemple :
```typescript
// Obtenir la carte désaturée avec les données de l'IGN
getMap('desaturated', 'ign');

// Obtenir la carte des photographies aériennes avec les données de l'IGN
getMap('aerial', 'ign');
```

Voici les cartes prédéfinies actuellement disponibles :

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Carte", "Description"],
    data: [
        ["`standard`", "Style par défaut, adapté à la plupart des usages."],
        ["`desaturated`", "Version désaturée, idéale pour la datavisualisation."],
        ["`aerial`", "Vue photographies aériennes et satellite."]
    ]
}) }}

Et les fournisseurs de données disponibles :

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Fournisseur", "Description", "Disponibilité"],
    data: [
        ["`ign`", "Données géographique de l'Institut national de l’information géographique et forestière (France).", " ✅ Disponible"],
        ["`osm`", "Données géographique d'OpenStreetMap.", "🛠️ À venir"]
    ]
}) }}

Pour visualiser les cartes :

<a class="fr-btn fr-btn--secondary fr-icon-arrow-right-line fr-btn--icon-right" href="{{ "/cartes" | locale_url }}">Explorer les cartes disponibles</a>

<br>

***

## Prochaines étapes

- Consultez la [documentation complète de l'API]("/cartes") pour découvrir toutes les possibilités de Carte facile.
- Consultez les possibilités de la librairie Maplibre GL sur la [documentation officielle](https://maplibre.org/maplibre-gl-js/docs/).
- Explorez les [exemples de code]("/documentation/exemples").

<br>

***

## Variante : utilisation via les liens CDN

Si vous n'utilisez pas de gestionnaire de paquets comme npm, vous pouvez également utilisez les liens directs dans votre page html, pour afficher une carte.


Ajoutez les liens suivants dans la section `<head>` de votre fichier HTML, pour ajouter les dernières versions des bibliothèques Carte facile et MapLibre depuis un CDN :
```html
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<script src="https://unpkg.com/carte-facile@0.2.2/dist/index.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
```
Au besoin, vous pouvez sélectionner une version spécifique des bibliothèque, en modifiant le numéro de version dans les URLs.

Pour afficher la carte, ajoutez ce code dans les balises `<body>` de votre page hml :

```html
<div id="map"></div>
<script>
    var map = new maplibregl.Map({
        container: 'map', // id du conteneur de la carte
        style: getMap('standard', 'ign'), // URL du style de carte
        maxZoom: 18.9 // niveau de zoom maximum, adapté aux style utilisant les données IGN
    });
</script>
```
La balise `<div>` avec l'attribut `id="map"` est le conteneur de la carte, tandis que le script contenu dans les balises `<script>` initialise la carte en allant chercher les styles et les données nécessaires à son fonctionnement.

La fonction `getMap('standard', 'ign')` est la fonction de Carte facile qui permet de sélectionner la carte désirée paris celles disponibles.

N'oubliez pas d'ajuster les styles de votre page et de la balise `<div>` avec l'attribut `id="map"`, afin que la carte soit affichée correctement. Par exemple, si vous souhaitez afficher la carte en plein écran, vous pouvez ajouter le code suivant dans la section `<head>` de votre fichier HTML :

```html
<style>
    html,body, #map { height:100%; width: 100%; margin:0;}
</style>
```

**La carte est maintenant affichée sur votre site !**

:::info Code complet
L'exemple de code complet, prêt à utiliser, est disponible dans les exemples : [carte simple avec MapLibre et les liens CDN]("/documentation/exemples/carte-simple-maplibre-cdn").
:::