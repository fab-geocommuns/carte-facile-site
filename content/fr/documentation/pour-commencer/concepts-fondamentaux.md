---
title: Concepts fondamentaux
layout: layouts/docs.njk
description: Cette page présente des concepts clé pour comprendre les mécanismes généraux de l'utilisation des cartes sur le web, qui ne sont pas spécifiques à Carte facile.
eleventyNavigation:
  key: Concepts fondamentaux
  parent: Pour commencer
  order: 2
  nav: docs

---

Cette page présente des concepts clé pour comprendre les mécanismes généraux de l'utilisation des cartes sur le web, qui ne sont pas spécifiques à Carte facile.

Pour construire des cartes sur un site web, nous avons besoin de **données géographiques**, provenant d'une source (un serveur distant sur lesquelles elles soont stockées), qui sont servies via ce qu'on appelle un **flux de données géographiques**. On applique ensuite un **style** à ces données pour les rendre lisibles et utilisables par les usagers du site.

Le schéma ci-dessous illustre le processus :

![Schéma de synthèse des liens entre données géographiques, flux de données géographiques et styles de cartes.](/img/documentation/schema_concepts-fondamentaux.svg)

<br>

---

## Données géographiques

**Les données géographiques sont par exemple des points (lieux, fontaines, etc), des lignes (routes, rivières, etc), des surfaces (zones, bâtiments, parcelles,etc), des images (photos aériennes), qui peuvent être représentés sur une carte grâce à un système de coordonnées géographiques.**

On peut distinguer deux formats principaux dans lesquels sont stockées et mis à disposition les données géographiques :

* Les **données vectorielles** : sont stockées sous forme de vecteurs (des points, des lignes et des polygones). Ces vecteurs sont décrits mathématiquement plutôut que par des pixels, ce qui permet un rendu flexible et interactif. En simplifiant, si on zoom fortement dans la carte, on ne verra jamais de pixelisation.
* Les **données raster** : sont stockées sous forme de matrices d'images (pixels). Chaque image (ou "tuile") est une petite portion de la carte à une résolution donnée. En simplifiant, si on zoom fortement dans la carte, on verra apparaitre des pixels.

Certaines données ne peuvent être mises à disposition que sous forme de données raster, par exemple les images aériennes. Mais de nombreuses données peuvent mises à disposition à la fois en raster ou en vectoriel.

Voici un tableau qui permet de comparer les avantages et inconvénients des deux formats :

| Critère                 | Cartes Raster                                                 | Cartes Vectorielles                                            |
| ----------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| **Qualité au zoom**     | Perd en qualité (pixellisation), changement de zoom "saccadé" | Qualité constante, changement de zoom lisse                    |
| **Taille des fichiers** | Lourde à haute résolution                                     | Généralement plus légère                                       |
| **Interactivité**       | Limitée, images statiques                                     | Hautement interactive : modifications possibles en temps réel. |
| **Personnalisation**    | Difficile (images fixes)                                      | Facile (styles modifiables)                                    |
| **Compatibilité**       | Excellente sur tous les appareils                             | Peut être limitée sur certains appareils anciens et peu performants                   |

Les formats raster et vectoriel peuvent être associés et ainsi offrir une grande flexibilité pour la création de cartes interactives, notament grâce aux styles de cartes.

<br>

---

## Sources de données géographiques

**Ces données géographiques sont produites et mises à disposition par des groupes de personnes et organismes.** Notre service s'appuie principalement sur deux grandes sources de données :

* **[Institut National de l'Information Géographique et Forestière (IGN)](https://www.ign.fr/) :** Fournit des données précises et détaillées sur le territoire français, y compris des cartes topographiques, des orthophotos, et d'autres données géospatiales.
* **[OpenStreetMap (OSM)](https://www.openstreetmap.org/) :** Une base de données mondiale, ouverte et collaborative, couvrant une vaste gamme d'informations géographiques.

<br>

---

## Flux de données géographiques

**Ces données produites par les sources sont placées sur des serveurs et mise à disposition via des flux de données géographiques.**

Les flux fonctionnent selon le modèle client-serveur, où le client (votre application ou site internet) envoie une requête au serveur pour obtenir une partie de la carte ou une information géographique spécifique. Le serveur répond en fournissant les données demandées, qui peuvent être sous forme de tuiles raster ou vectorielles.

Voici différents types de flux géographiques : 

* **WMS :** Chaque requête génère et renvoie une image correspondant à une portion spécifique de la carte.
* **WMTS :** Optimisé pour les applications web, les images sont disponibles sous forme de tuiles pré-générées. Cela permet un rendu plus rapide des cartes à différents niveaux de zoom.
* **WFS :** Fournit des données vectorielles géographiques. Contrairement aux services raster, les données sont envoyées sous forme de vecteurs qui peuvent être stylisés et manipulés dynamiquement par le client.
* **XYZ :** Les cartes sont disponibles sous forme de tuiles pré-générées, de la même manière que pour le format WMTS, avec dans l'URL les coordonnées de la tuile demandée (par exemple `http://server/tiles/{z}/{x}/{y}.png`).

Une fois les données géographiques reçues dans son application ou site internet via ces flux, il est possible de les styliser grâce à des styles de cartes.

<br>

---

## Styles de cartes


**Un style de carte est un ensemble de règles qui déterminent l'apparence des éléments cartographiques.**

Ces règles peuvent être rassemblées dans des fichiers de style en format JSON. Les règles de styles permettent de combiner différentes sources de données, à la fois vectorielles et raster, pour créer des cartes multicouches et ainsi s'adapter à divers besoins.

Nos services vous propose des styles de cartes prêtes à l'emploi, vous permettent de ne pas avoir à gérer le détail des données sous-jacentes. [Voir les cartes disponibles](/fr/cartes).

Ainsi vous aurez uniquement besoin de charger le style de carte de votre choix dans votre page web pour afficher la carte, en suivant ce tutoriel : [Utiliser les cartes](/fr/documentation/prise-en-main).