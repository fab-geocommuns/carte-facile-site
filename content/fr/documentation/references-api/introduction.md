---
title: Références API
description: Cette page référence l'API de Carte facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Introduction
  parent: Références API
  order: 1
  nav: docs
--- 

Documentation complète de l'API Carte facile.

## Import
```typescript
import { 
  mapStyles, mapThumbnails,
  Overlay, addOverlay, removeOverlay, 
  LayerGroup, showLayer, hideLayer,
  MapSelectorControl, ZoomLevelControl, 
  setTheme 
} from 'carte-facile';
```

En cas d'utilisation de Carte Facile avec les liens CDN, ne pas faire d'import mais ajouter `CarteFacile.` devant chaque collection, fonction ou composant que vous utilisez.
```typescript
// Exemple
CarteFacile.mapStyles.simple
```

<br>

## Cartes

- [**mapStyles**]({{ "/documentation/references-api/cartes/mapstyles" | locale_url }}) - Collection des styles de carte disponibles.
- [**mapThumbnails**]({{ "/documentation/references-api/cartes/mapthumbnails" | locale_url }}) - Aperçus visuels pour les cartes et surcouches.

<br>

## Gestion des surcouches

- [**Overlay**]({{ "/documentation/references-api/gestion-des-surcouches/overlay" | locale_url }}) - Constante des types de surcouches disponibles.
- [**addOverlay()**]({{ "/documentation/references-api/gestion-des-surcouches/addoverlay" | locale_url }}) - Ajoute une ou plusieurs surcouches à la carte.
- [**removeOverlay()**]({{ "/documentation/references-api/gestion-des-surcouches/removeoverlay" | locale_url }}) - Supprime une ou plusieurs surcouches de la carte.

<br>

## Gestion des couches

- [**LayerGroup**]({{ "/documentation/references-api/gestion-des-couches/layergroup" | locale_url }}) - Constantes des groupes de couches disponibles.
- [**hideLayer()**]({{ "/documentation/references-api/gestion-des-couches/hidelayer" | locale_url }}) - Masque les groupes de couches spécifiés.
- [**showLayer()**]({{ "/documentation/references-api/gestion-des-couches/showlayer" | locale_url }}) - Affiche les groupes de couches spécifiés.

<br>

## Composants d'interface

Les composants sont construits pour fonctionner avec l'environnement de composants de MapLibre.

- [**MapSelectorControl**]({{ "/documentation/references-api/composants-interface/mapselectorcontrol" | locale_url }}) - Interface graphique pour sélectionner les cartes et surcouches.
- [**ZoomLevelControl**]({{ "/documentation/references-api/composants-interface/zoomlevelcontrol" | locale_url }}) - Affichage du niveau de zoom en temps réel.

<br>

## Thèmes

- [**setTheme()**]({{ "/documentation/references-api/themes/settheme" | locale_url }}) - Applique un thème d'interface aux composants.

