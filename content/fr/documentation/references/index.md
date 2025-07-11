---
title: Références
description: Cette page référence l'API de Carte facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Références
  order: 5
  nav: docs
--- 

## Import
```typescript
import { 
  mapStyles, mapThumbnails,
  addOverlay, removeOverlay, showLayer, hideLayer,
  Overlay, LayerGroup, MapSelectorControl, ZoomLevelControl, setTheme 
} from 'carte-facile';
```

En cas d'utilisation de Carte Facile avec les liens CDN, ne pas faire d'import mais ajouter `CarteFacile.` devant chaque collection, fonction ou composant que vous utilisez.
```typescript
// Exemple
CarteFacile.mapStyles.simple
```

---

## Styles et configuration

### mapStyles
Collection des styles de carte disponibles.
```typescript
// Utilisation
mapStyles.simple

// Voir tous les styles disponibles  
console.log(Object.keys(mapStyles))
// ou utilisez l'autocomplétion de votre IDE
```

Exemple de création de carte avec MapLibre :
```typescript
let map = new maplibregl.Map({
  container: 'map', // id du conteneur de la carte
  style: mapStyles.simple, // style de carte
  maxZoom: 18.9, // niveau de zoom maximum, adapté aux cartes utilisant les données IGN
});
```

### mapThumbnails
URLs des aperçus visuels pour styles et surcouches.
```typescript
// Utilisation
mapThumbnails.simple

// Voir tous les aperçus disponibles
console.log(Object.keys(mapThumbnails))
// ou utilisez l'autocomplétion de votre IDE
```

Exemple d'utilisation pour afficher un aperçu :
```html
<!-- Dans le html -->
<img id="preview" alt="Aperçu carte" />
```
```javascript
// Sélectionner la balise html pour ajouter la source
document.querySelector('#preview').src = mapThumbnails.simple;
```
---

## Gestion des surcouches

### Overlay
Constante des types de surcouches disponibles
```typescript
// Utilisation
Overlay.cadastre

// Voir toutes les surcouches disponibles
console.log(Object.values(Overlay))
// ou utilisez l'autocomplétion de votre IDE
```

### addOverlay()
Ajoute une ou plusieurs surcouches à la carte
```typescript
addOverlay(map, Overlay.cadastre)
addOverlay(map, [Overlay.cadastre, Overlay.administrativeBoundaries])

// Variante sans typage ni autocomplétion
addOverlay(map, 'cadastre')
addOverlay(map, ['cadastre', 'administrativeBoundaries'])
```

### removeOverlay()
Supprime une ou plusieurs surcouches de la carte
```typescript
removeOverlay(map, Overlay.cadastre)
removeOverlay(map, [Overlay.cadastre, Overlay.administrativeBoundaries])

// Variante sans typage ni autocomplétion
removeOverlay(map, 'cadastre')
removeOverlay(map, ['cadastre', 'administrativeBoundaries'])
```

---

## Gestion des couches

### LayerGroup
Constantes des groupes de couches disponibles
```typescript
// Utilisation
LayerGroup.buildings

// Voir tous les groupes disponibles
console.log(Object.values(LayerGroup))
// ou utilisez l'autocomplétion de votre IDE
```

### showLayer()
Affiche les groupes de couches spécifiés
```typescript
showLayer(map, LayerGroup.buildings)
showLayer(map, [LayerGroup.buildings, LayerGroup.streets])

// Variante sans typage ni autocomplétion
showLayer(map, 'buildings')
showLayer(map, ['buildings', 'streets'])
```

### hideLayer()
Masque les groupes de couches spécifiés
```typescript
hideLayer(map, LayerGroup.buildings)
hideLayer(map, [LayerGroup.buildings, LayerGroup.streets])

// Variante sans typage ni autocomplétion
hideLayer(map, 'buildings')
hideLayer(map, ['buildings', 'streets'])
```

---

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

