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

**Prérequis** : avoir [Node.js](https://nodejs.org/fr) installé sur votre ordinateur (npm est inclus avec Node.js).

Cette méthode est recommandée pour les projets professionnels ou les applications complexes. Lancez cette commande dans le terminal de votre projet pour installer les librairies Carte Facile et MapLibre :
```bash
npm install carte-facile maplibre-gl
```

Puis passez à l'étape suivante.

<br>

## Méthode 2 : Installation via CDN

Cette méthode est adaptée pour les projets simples, les prototypes ou les tests rapides. Elle ne nécessite pas Node.js.

Pour utiliser cette méthode, ajoutez simplement ces lignes dans le `<head>` de votre page HTML :

```html
<!-- Importation des bibliothèques MapLibre -->
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />

<!-- Importation de la bibliothèque Carte facile -->
<script src="https://unpkg.com/carte-facile@0.4.10/dist/carte-facile.js"></script>
```

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/premiers-pas/ajouter-une-carte" | locale_url }}>
  Ajouter une carte
</a>