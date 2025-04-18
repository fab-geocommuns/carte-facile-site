---
title: Installation
description: Installation de Carte facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Installation
  parent: Premiers pas
  order: 1
  nav: docs 
---

Carte facile est une bibliothèque JavaScript qui simplifie l'intégration de cartes dans vos applications web. Elle propose :

- Des styles de carte prêts à l'emploi, compatibles avec plusieurs bibliothèques cartographiques
- Des composants clé en main pour enrichir vos cartes
- Une documentation complète pour faciliter la prise en main

## Compatibilité

Carte facile est conçue pour être flexible :

- **Styles de carte** : Compatibles avec MapLibre GL JS, Leaflet et OpenLayers
- **Composants et fonctionnalités avancées** : Optimisés pour MapLibre GL JS

Ce guide d'installation se concentre sur l'utilisation avec MapLibre GL JS, qui est la bibliothèque recommandée pour tirer pleinement parti des fonctionnalités de Carte facile.

## Méthode 1 : Installation via npm (recommandé)

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (ou yarn)

```bash
npm install carte-facile maplibre-gl
```

## Méthode 2 : Installation via CDN

Pour les projets simples ou les prototypes rapides, vous pouvez utiliser les liens CDN :

```html
<!-- Importation des bibliothèques MapLibre -->
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
<!-- Importation de la bibliothèque Carte facile -->
<script src="https://unpkg.com/carte-facile@0.4.3/dist/index.umd.js"></script>
```

## Prochaines étapes

Une fois l'installation terminée, vous pouvez :
- [Ajouter une carte à votre page](/documentation/premiers-pas/ajouter-une-carte)