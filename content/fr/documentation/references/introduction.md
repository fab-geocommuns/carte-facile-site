---
title: Introduction
description: Cette page référence les classes disponibles dans l'API Carte facile
layout: layouts/docs.njk
eleventyNavigation:
  key: Introduction
  parent: API
  order: 1
  nav: docs
---

## Styles et Configuration
mapStyles - Collection des styles de carte disponibles
mapThumbnails - URLs des aperçus visuels pour styles et surcouches
mapOverlays - Configuration complète des surcouches avec variantes

## Gestion des Surcouches
addOverlay() - Ajoute une ou plusieurs surcouches à la carte
removeOverlay() - Supprime une ou plusieurs surcouches de la carte
Overlay - Constantes des types de surcouches disponibles

## Gestion des couches
showLayer() - Affiche les groupes de couches spécifiés
hideLayer() - Masque les groupes de couches spécifiés
LayerGroup - Constantes des groupes de couches disponibles

##Composants d'Interface
MapSelectorControl - Interface graphique pour sélection de styles et surcouches
ZoomLevelControl - Affichage du niveau de zoom en temps réel

##Thèmes
setTheme() - Applique un thème d'interface aux composants

## Import
```typescript
import { 
  mapStyles, mapThumbnails, mapOverlays,
  addOverlay, removeOverlay, showLayer, hideLayer,
  Overlay, LayerGroup, MapSelectorControl, ZoomLevelControl, setTheme 
} from 'carte-facile';
```