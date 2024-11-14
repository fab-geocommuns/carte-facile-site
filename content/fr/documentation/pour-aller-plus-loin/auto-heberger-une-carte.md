---
title: Auto-héberger une carte
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Auto-héberger une carte
  parent: Pour aller plus loin
  order: 2
  nav: docs
---

Tutoriel pour auto-héberger une carte rapidement et à moindres frais.

Expliquer pourquoi auto-héberger peut être intréressant : auto-gestion infrastructure pour services sensibles avec besoins de haute disponibilité ou données privées.

### 1. Télécharger ou créer une carte en format PMtiles&#x20;

Soit une carte téléchargée dans celle disponible sur le service [cartes-cle-en-main](../../le-service/cartes-cle-en-main/ "mention"), soit en générer une depuis vos propres données géographiques [generer-une-carte.md](generer-une-carte.md "mention")

### 2. Mettre en place la carte sur un serveur

### 3. Utiliser ou créer un style

Si vous auto-hébergez des cartes proposées par ce site, vous pouvez utiliser les styles proposés ici : [cartes-cle-en-main](../../le-service/cartes-cle-en-main/ "mention")

Vous pouvez également modifier ces styles ou en créer de nouveaux pour vos propres données : [styliser-une-carte.md](styliser-une-carte.md "mention")

### 4. Placer le style sur le serveur

### 4. Afficher la carte

Après avoir configuré votre fichier de style JSON, utilisez une bibliothèque comme MapLibre GL JS pour charger et afficher la carte.

Voici un extrait de code qui vous permet d'afficher la carte sur une page web. Copiez et collez le code ci-dessous dans votre page html, en remplaçant&#x20;

```html
  <div id="map"></div>
  <script>
      const map = new maplibregl.Map({
         container: 'map',
         style: 'your_style_path.json',
      });
      map.addControl(new maplibregl.NavigationControl());
  </script>
```

