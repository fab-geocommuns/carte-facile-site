---
title: Données géographiques
description: Les différents types de données géographiques et leurs avantages et inconvénients.
layout: layouts/docs.njk
---

Pour construire des cartes, nous avons besoin de sources de données géographiques. Elles existent sous deux formats principaux pour les cartes en ligne : les cartes **raster** et les cartes **vectorielles**.&#x20;

## Sources de données

Notre service s'appuie sur deux grandes sources de données géographiques :

* **OpenStreetMap (OSM) :** Une base de données mondiale, ouverte et collaborative, couvrant une vaste gamme d'informations géographiques telles que les routes, bâtiments, parcs, et plus encore.
* **Institut National de l'Information Géographique et Forestière (IGN) :** Fournit des données précises et détaillées sur le territoire français, y compris des cartes topographiques, des orthophotos, et d'autres données géospatiales.

***

## Formats de données

### Raster

#### Principe
Les cartes raster sont composées d'images matricielles (pixels). Chaque image (ou "tuile") est une petite portion de la carte à une résolution donnée.

#### Exemples d'utilisation :
Les images aériennes et vues satellites, les cartes topographiques.

#### Avantages :

* **Simplicité d'utilisation :** Les images raster sont largement supportées par les navigateurs web.
* **Compatibilité :** Fonctionne bien sur la majorité des appareils, sans besoin de technologies avancées.
* **Détails complexes :** Idéal pour afficher des images complexes comme des photos satellites.

**Inconvénients :**

* **Taille des fichiers :** Les images raster peuvent être volumineuses, surtout à haute résolution, ce qui ralentit le chargement des pages.
* **Perte de qualité au zoom :** En zoomant, l’image devient floue (pixelisée).
* **Pas d’interaction dynamique :** Les informations sont statiques, il est difficile de modifier ou d’ajouter des données dynamiques.

#### Exemple de carte raster :

_Lien vers une carte raster_

### Vectorielles

**Principe :**\
Les cartes vectorielles représentent les données géographiques par des vecteurs (points, lignes, polygones) plutôt que par des pixels. Ces vecteurs sont décrits mathématiquement, ce qui permet un rendu flexible et interactif.

**Exemples d'utilisation :**\
Les cartes de navigation, les applications interactives modernes.

**Avantages :**

* **Qualité au zoom :** Les cartes vectorielles restent nettes peu importe le niveau de zoom.
* **Interactivité :** Les objets sur la carte peuvent être cliqués, modifiés et animés.
* **Personnalisation :** Les styles peuvent être facilement modifiés (couleurs, épaisseurs de ligne, etc.).
* **Taille plus petite :** Les données vectorielles sont souvent plus légères que les images raster.

**Inconvénients :**

* **Complexité technique :** Nécessite plus de ressources pour le rendu, surtout pour des cartes très détaillées.
* **Compatibilité :** Certains vieux navigateurs ou appareils peuvent ne pas bien supporter les cartes vectorielles.
* **Performance :** Peut être plus lent sur des appareils avec des ressources limitées.

**Exemple de carte vectorielle :**&#x20;

https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/?vector=#1/0/0
Lien vers une carte vectorielle

### Comparaison des deux formats

| Critère                 | Cartes Raster                                                 | Cartes Vectorielles                                            |
| ----------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| **Qualité au zoom**     | Perd en qualité (pixellisation), changement de zoom "saccadé" | Qualité constante, changement de zoom lisse                    |
| **Taille des fichiers** | Lourde à haute résolution                                     | Généralement plus légère                                       |
| **Interactivité**       | Limitée, statique                                             | Hautement interactive : modifications possibles en temps réel. |
| **Personnalisation**    | Difficile (images fixes)                                      | Facile (styles modifiables)                                    |
| **Compatibilité**       | Excellente sur tous les appareils                             | Peut être limitée sur certains appareils                       |

***

Les formats raster et vectoriel peuvent être associés et ainsi offrir une grande flexibilité pour la création de cartes interactives : [styles-de-carte.md](styles-de-carte.md "mention")
