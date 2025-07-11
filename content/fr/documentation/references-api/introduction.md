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

- [**mapStyles**]({{ "/documentation/references-api/mapstyles" | locale_url }}) - Collection des styles de carte disponibles.
- [**mapThumbnails**]({{ "/documentation/references-api/mapthumbnails" | locale_url }}) - Aperçus visuels pour les cartes et surcouches.

<br>

## Gestion des surcouches

- [**Overlay**]({{ "/documentation/references-api/overlay" | locale_url }}) - Constante des types de surcouches disponibles.
- [**addOverlay()**]({{ "/documentation/references-api/addoverlay" | locale_url }}) - Ajoute une ou plusieurs surcouches à la carte.
- [**removeOverlay()**]({{ "/documentation/references-api/removeoverlay" | locale_url }}) - Supprime une ou plusieurs surcouches de la carte.

<br>

## Gestion des couches

- [**LayerGroup**]({{ "/documentation/references-api/layergroup" | locale_url }}) - Constantes des groupes de couches disponibles.
- [**hideLayer()**]({{ "/documentation/references-api/hidelayer" | locale_url }}) - Masque les groupes de couches spécifiés.
- [**showLayer()**]({{ "/documentation/references-api/showlayer" | locale_url }}) - Affiche les groupes de couches spécifiés.

<br>

## Composants d'interface

Les composants sont construits pour fonctionner avec l'environnement de composants de MapLibre.

### MapSelectorControl
Interface graphique pour sélection de styles et surcouches
```typescript
new MapSelectorControl()

// En configurant les cartes et surcouches disponibles
new MapSelectorControl({ 
  styles: ['simple', 'aerial'], 
  overlays: ['cadastre'] 
})
```
Exemple d'un ajout de controleur avec MapLibre, sur un conteneur de carte nommé `map` :
```typescript
map.addControl(new MapSelectorControl());
```


### ZoomLevelControl
Affichage du niveau de zoom en temps réel
```typescript
new ZoomLevelControl()
```
Exemple d'un ajout de controleur avec MapLibre :
```typescript
map.addControl(new ZoomLevelControl());
```

---

## Thèmes

### setTheme()
Applique un thème d'interface aux composants
```typescript
setTheme(map, 'default')  // Thème par défaut
setTheme(map, 'dsfr')     // Thème DSFR
```

