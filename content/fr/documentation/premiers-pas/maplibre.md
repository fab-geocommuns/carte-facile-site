<!-- ---
title: Guide pour MapLibre GL JS
layout: layouts/docs.njk
description: Guide complet pour l'utilisation de CarteFacile avec MapLibre GL JS.
eleventyNavigation:
  key: MapLibre GL JS
  parent: Premiers pas
  order: 3
  nav: docs
---
 -->
CarteFacile simplifie l'utilisation de MapLibre GL JS en fournissant des styles et composants prêts à l'emploi. Ce guide vous accompagne de l'installation à l'utilisation avancée.

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (ou yarn)

### Méthode 1 : Installation via npm (recommandé)

```bash
npm install carte-facile maplibre-gl
```

### Méthode 2 : Installation via CDN

Pour les projets simples ou les prototypes rapides, vous pouvez utiliser les liens CDN :

```html
<!-- Importation des bibliothèques MapLibre -->
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
<!-- Importation de la bibliothèque Carte facile -->
<script src="https://unpkg.com/carte-facile@0.3.3/dist/index.js"></script>
```

## 🗺️ Premiers pas

### 1. Configuration de base

Ajoutez un conteneur pour votre carte :

```html
<div id="map"></div>
<style>
    html, body, #map { height: 100%; width: 100%; margin: 0; }
</style>
```

### 2. Initialisation de la carte

```typescript
import { mapStyle } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
  container: 'map',
  style: mapStyle.ign.standard,
  maxZoom: 18.9
});
```

**Félicitations ! Vous avez maintenant une carte fonctionnelle !**

## 🎨 Personnalisation

### Styles de carte disponibles

CarteFacile propose plusieurs styles prédéfinis :

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Style", "Description"],
    data: [
        ["`mapStyle.ign.simple`", "Style par défaut, adapté à la plupart des usages"],
        ["`mapStyle.ign.desaturated`", "Version désaturée, idéale pour la datavisualisation"],
        ["`mapStyle.ign.aerial`", "Vue photographies aériennes et satellite"]
    ]
}) }}

### Fournisseurs de données

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Fournisseur", "Description", "Disponibilité"],
    data: [
        ["`mapStyle.ign`", "Données géographiques de l'IGN (France)", "✅ Disponible"],
        ["`mapStyle.osm`", "Données OpenStreetMap", "🛠️ À venir"]
    ]
}) }}

### Changer de style

Pour changer le style d'une carte existante :

```typescript
map.setStyle(mapStyle.ign.aerial);
```

## ⚙️ Fonctionnalités avancées

### Contrôles de la carte

```typescript
// Navigation
const nav = new maplibregl.NavigationControl();
map.addControl(nav, 'top-left');

// Échelle
const scale = new maplibregl.ScaleControl({
    maxWidth: 80,
    unit: 'metric'
});
map.addControl(scale);
```

### Marqueurs et popups

```typescript
// Marqueur simple
const marker = new maplibregl.Marker()
  .setLngLat([2.3522, 48.8566])
  .addTo(map);

// Popup
const popup = new maplibregl.Popup()
  .setLngLat([2.3522, 48.8566])
  .setHTML('<h3>Paris</h3><p>La ville lumière</p>')
  .addTo(map);
```

### Gestion des données

```typescript
map.on('load', () => {
  // Ajout d'une source GeoJSON
  map.addSource('points', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [2.3522, 48.8566]
          },
          properties: {
            title: 'Paris'
          }
        }
      ]
    }
  });

  // Ajout d'une couche
  map.addLayer({
    id: 'points',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-radius': 6,
      'circle-color': '#ff0000'
    }
  });
});
```

## 🏆 Bonnes pratiques

### Performance

```typescript
// Optimisation des performances
map.dragRotate.disable();
map.touchZoomRotate.disableRotation();
map.setMaxFPS(30);
```

### Gestion de la mémoire

```typescript
// Nettoyage des ressources
function cleanup() {
  map.remove();
  // Supprimer les références aux marqueurs, popups, etc.
}
```

### Responsive Design

```typescript
// Gestion du redimensionnement
window.addEventListener('resize', () => {
  map.resize();
});
```

## 🛠️ Dépannage

### Problèmes courants

1. **La carte ne s'affiche pas**
   - Vérifiez que le conteneur a une hauteur définie
   - Assurez-vous que les styles CSS sont bien importés

2. **Les tuiles ne se chargent pas**
   - Vérifiez votre connexion internet
   - Assurez-vous que le style est correctement configuré

3. **Performances faibles**
   - Réduisez le nombre de marqueurs et de sources
   - Utilisez la clusterisation pour les grands ensembles de données

## 📚 Ressources supplémentaires

- [Documentation officielle MapLibre](https://maplibre.org/maplibre-gl-js/docs/)
- [Exemples de code]("/documentation/exemples")
- [Documentation API]("/documentation/api/index") 