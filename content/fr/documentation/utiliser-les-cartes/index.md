---
title: Utiliser les cartes sur son site
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Utiliser les cartes
  order: 2
  nav: docs
---

Ce tutoriel explique comment ajouter une carte sur son site web, avec l'aide de la librairie javascript [MapLibre GL JS](https://maplibre.org). 

## Installer les bibliothèques

La première étape est d'ajouter les bibliothèques nécessaires au bon fonctionnement de Maplibre. Deux possibilités sont disponibles : via les liens du CDN (le plus simple si vous débutez), ou bien avec le gestionnaire de paquets NPM.

<br>

**En utilisant les liens du CDN**

Ajoutez les liens suivants dans la section `<head>` de votre fichier HTML, pour ajouter les dernières versions des bibliothèques MapLibre :
```html
<script src="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@^5.1.0/dist/maplibre-gl.css" rel="stylesheet" />
```
Au besoin, vous pouvez sélectionner une version spécifique des bibliothèque, en modifiant le numéro de version dans les URLs.

<br>

**En utilisant le gestionnaire de paquets NPM**



(avec ajout PMtiles par sécurité) / Possibilité de l'ajouter avec CDN ou NPM https://maplibre.org/maplibre-gl-js/docs/ 
Il existe deux façons d'ajouter les bibliothèques :
- Ajouter les fichiers MapLibre via un CDN. C'est la méthode
- Ajouter les fichiers MapLibre via NPM, soi vous  utilisez ce gestionnaire de paquets.
  

Ajouter le conteneur de la carte et style minimal


Initialiser la carte
Ajoutez le code JavaScript suivant juste avant la fermeture de la balise `</body>` :
- Liste des différents styles disponibles


Code complet

---

Explications de la structure HTML :
- La balise `meta viewport` assure une bonne adaptation sur mobile
- Les fichiers MapLibre sont chargés depuis un CDN (unpkg)
- Le conteneur de la carte (`#map`) est stylisé pour occuper tout l'espace disponible
- Les marges du body sont supprimées pour un affichage plein écran



## Pour aller plus loin

### Bonnes pratiques et optimisation

### Performance
- Chargez MapLibre de manière asynchrone pour ne pas bloquer le rendu de la page
- Utilisez la version minifiée de MapLibre en production
- Définissez des limites de zoom appropriées pour votre usage


## Ressources supplémentaires

- [Documentation officielle de MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/)
- [Styles disponibles sur openmaptiles.geo.data.gouv.fr](https://openmaptiles.geo.data.gouv.fr/)
- [Exemples d'utilisation](https://maplibre.org/maplibre-gl-js-docs/example/)
- [Guide des performances MapLibre](https://maplibre.org/maplibre-gl-js-docs/api/performance/)

????accordionsgroup

??? Précisions si vous partez de zéro

Il est supposé dans ce tutoriel que vous avez déjà un site préparé, sur lequel vous souhaitez ajouter une carte. 

Si vous ne savez pas comment créer un site, voici un fichier html minimal qui vous permettra de commencer. Les commentaires sont présents pour vous aider à comprendre le code. 

```html
  <p>Contenu 1</p>
  <p>Contenu 1</p>
  <p>Contenu 1</p>
```

Créez sur votre ordinateur un fichier nommé **index.html** et coller ce code dans le fichier à l'aide d'un éditeur de texte, ou de code comme [Visual Studio Code](https://code.visualstudio.com/) ou autre. 

Enregistrez le fichier puis ouvrez le avec votre navigateur pour afficher le résultat. Pour chaque modification que vous réalisez dans le fichier, sauvegarder puis recharger la page dans le navigateur pour voir le résultat.
*Le fichier avec le code entier et commenté est disponible à la fin de ce tutoriel.*

???

????  



Test : 

:::tabs Titre du système d'onglets
|Premier onglet
Contenu du premier onglet

|Deuxième onglet
Contenu du deuxième onglet

|Troisième onglet
Contenu du troisième onglet
:::