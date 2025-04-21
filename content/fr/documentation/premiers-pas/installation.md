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

Ce guide d'installation se concentre sur l'utilisation de Carte Facile avec MapLibre GL JS, qui est la bibliothèque recommandée pour tirer pleinement parti des fonctionnalités de Carte facile.

<br>

## Méthode 1 : Installation via npm (recommandé)

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (ou yarn)

```bash
npm install carte-facile maplibre-gl
```

<br>

## Méthode 2 : Installation via CDN

Pour les projets simples ou les prototypes rapides, vous pouvez utiliser les liens CDN :

```html
<!-- Importation des bibliothèques MapLibre -->
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />

<!-- Importation de la bibliothèque Carte facile -->
<script src="https://unpkg.com/carte-facile@0.4.3/dist/index.umd.js"></script>
```

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/premiers-pas/ajouter-une-carte" | locale_url }}>
  Ajouter une carte
</a>