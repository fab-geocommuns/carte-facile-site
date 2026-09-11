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
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'carte-facile/carte-facile.css';

// Création la carte
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyles.simple, // style de carte
  maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
});
```

<br>

## Cas 2 : avec une installation via liens CDN

Une fois l'[import map mise en place]({{ "/documentation/premiers-pas/installation" | locale_url }}#methode-2-installation-via-cdn), le code est identique à celui d'une installation via npm : ajoutez dans votre html un `<script type="module">` qui importe les bibliothèques nécessaires.

```html
<script type="module">
    import * as maplibregl from 'maplibre-gl';
    import { mapStyles } from 'carte-facile';

    // Création la carte
    let map = new maplibregl.Map({
        container: 'map', // id du conteneur de la carte
        style: mapStyles.simple, // style de carte
        maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
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
        ["simple", "Style par défaut, adapté à la plupart des usages"],
        ["simpleOsm", "Style par défaut, utilisant les données OSM plutôt qu'IGN"],
        ["desaturated", "Version désaturée, idéale pour la datavisualisation"],
        ["aerial", "Vue photographies aériennes et satellite"]
    ]
}) }}

:::info Facilitez-vous la tâche avec le sélecteur de cartes !
Ajoutez rapidement un sélecteur pour permettre à vos utilisateurs de changer de carte ou d’afficher des surcouches en un clic.

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line fr-mt-2w"
  href={{ "/documentation/ajouter-des-fonctionnalites/selecteur-de-cartes" | locale_url }}>
  Ajouter un sélecteur de carte
</a>
:::

<br>

Pour afficher tous les styles disponibles, servez-vous de l’autocomplétion de votre IDE avec `mapStyles.`, ou utilisez la méthode suivante pour afficher la liste dans la console du navigateur :

```typescript
import { mapStyles } from 'carte-facile';

console.log(mapStyles);
```

*Cette syntaxe fonctionne aussi bien avec une installation npm qu'avec les liens CDN (une fois l'[import map mise en place]({{ "/documentation/premiers-pas/installation" | locale_url }}#methode-2-installation-via-cdn)).*

<br>

---

<br>

## Personnalisation de la carte 

Pour ajouter des contrôles de navigation :

```typescript
  const nav = new maplibregl.NavigationControl();
  map.addControl(nav, 'top-right');
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