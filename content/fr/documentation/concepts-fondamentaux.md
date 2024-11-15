---
title: Concepts fondamentaux
layout: layouts/docs.njk
description: Description à compléter.
eleventyNavigation:
  key: Concepts fondamentaux
  order: 1
  nav: docs
---

Schéma de synthèse de slien entre données géographiques, flux et serveurs, styles de cartes.

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


---


Pour construire des cartes interactives, les données géographiques peuvent être fournies de différentes manières, notamment via des flux de données géographiques.

Ces flux permettent de fournir des cartes dynamiques et interactives qui se mettent à jour en temps réel. Ce service utilise principalement les protocoles WMS (Web Map Service) et WMTS (Web Map Tile Service) pour servir les cartes.

**Fonctionnement des Flux :**

* **WMS :** Sert des images géoréférencées. Chaque requête renvoie une image correspondant à une portion spécifique de la carte.
* **WMTS :** Optimisé pour les applications web, il fournit des tuiles de carte prédéfinies, ce qui permet un rendu plus rapide des cartes à différents niveaux de zoom.

**Avantages des Flux :**

* **Données Actualisées :** Les cartes sont automatiquement mises à jour avec les dernières informations disponibles.
* **Réduction des Coûts :** Pas besoin de stocker localement des données volumineuses. Accédez uniquement aux informations nécessaires.
* **Flexibilité :** Combinez des flux raster et vectoriels pour créer des cartes complexes et informatives.

***

#### 1. Qu'est-ce qu'un Flux de Données Géographiques ?

**Définition :**\
Un flux de données géographiques est un service qui permet de récupérer des informations cartographiques ou géographiques de manière continue et dynamique via Internet. Ces flux sont utilisés pour afficher des cartes, des images satellites, des couches d'information spécifiques, ou des données géospatiales.

**Principe :**\
Les flux fonctionnent selon le modèle client-serveur, où le client (votre application) envoie une requête au serveur pour obtenir une partie de la carte ou une information géographique spécifique. Le serveur répond en fournissant les données demandées, qui peuvent être sous forme de tuiles raster, de vecteurs, ou d'autres formats.

**Types de Flux :**

* **Flux Raster (WMS, WMTS) :** Envoient des images pré-rendues sous forme de tuiles.
* **Flux Vectoriels (WFS, TMS, vecteurs bruts) :** Envoient des données géographiques en format vectoriel (points, lignes, polygones).
* **Flux de Tuiles (TMS, XYZ) :** Fournissent des tuiles de carte spécifique pour différents niveaux de zoom.

***

#### 2. Les Flux de Cartes de l'IGN

L'IGN (Institut national de l'information géographique et forestière) est une source majeure de données géographiques en France. L'IGN propose différents flux pour accéder à ses données.

**Types de Flux Fournis par l'IGN :**

1. **Flux WMS (Web Map Service) :**
   * **Principe :** Permet de récupérer des images géoréférencées de cartes sous forme de tuiles raster. Chaque tuile correspond à une portion spécifique de la carte à un certain niveau de zoom.
   * **Utilisation :** Idéal pour afficher des cartes topographiques, des orthophotos, ou d'autres images géographiques.
   *   **Exemple de Requête :**

       ```url
       https://wxs.ign.fr/cleapi/geoportail/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=-5.0,41.0,9.7,51.2&CRS=EPSG:4326&WIDTH=800&HEIGHT=600&LAYERS=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD&STYLES=&FORMAT=image/png&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi:96
       ```
2. **Flux WMTS (Web Map Tile Service) :**
   * **Principe :** Similaire au WMS, mais optimise la gestion des tuiles en les servant selon une grille de tuiles prédéfinie. C'est plus efficace pour les applications nécessitant de nombreuses requêtes, comme les applications web interactives.
   * **Utilisation :** Recommandé pour les cartes à haute disponibilité avec un besoin de performance élevé.
   *   **Exemple de Requête :**

       ```url
       https://wxs.ign.fr/cleapi/geoportail/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=10&TILEROW=383&TILECOL=535&FORMAT=image/png
       ```
3. **Flux WFS (Web Feature Service) :**
   * **Principe :** Fournit des données vectorielles géographiques. Contrairement aux services raster, les données sont envoyées sous forme de vecteurs qui peuvent être stylisés et manipulés dynamiquement par le client.
   * **Utilisation :** Utile pour obtenir des données géographiques brutes (comme des parcelles cadastrales, des routes, etc.) qui peuvent être personnalisées dans votre application.
   *   **Exemple de Requête :**

       ```url
       https://wxs.ign.fr/cleapi/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAME=BDTOPO_BDD_CARTO_L&OUTPUTFORMAT=application/json
       ```

***

#### 3. Les Flux de Données d'OpenStreetMap (OSM)

OpenStreetMap est une carte collaborative et ouverte, dont les données sont disponibles gratuitement. Les flux de données OSM sont utilisés pour accéder à ces informations en temps réel.

**Types de Flux Fournis par OSM :**

1. **Flux de Tuiles Raster (TMS, XYZ) :**
   * **Principe :** OSM propose des tuiles de cartes raster en utilisant le format TMS (Tile Map Service) ou XYZ. Ces tuiles sont précalculées et stockées sur des serveurs pour un accès rapide.
   * **Utilisation :** Parfait pour afficher des cartes OSM classiques sur votre site ou application.
   *   **Exemple d’URL de Tuiles :**

       ```url
       https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
       ```

       Où `{s}` représente le sous-domaine, `{z}` le niveau de zoom, `{x}` et `{y}` les coordonnées des tuiles.
2. **Flux de Données Brutes (API OSM Overpass) :**
   * **Principe :** Accède aux données brutes d'OSM via l'API Overpass. Permet de récupérer des éléments spécifiques (points d'intérêt, routes, bâtiments, etc.) sous forme de données vectorielles.
   * **Utilisation :** Utile pour les applications nécessitant des données OSM spécifiques et manipulables, comme la création de cartes thématiques ou d'applications de navigation personnalisées.
   *   **Exemple de Requête Overpass :**

       ```url
       https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:1000,48.8566,2.3522);out;
       ```

***

#### 4. Avantages de l'Utilisation des Flux de Données Géographiques

**1. Mise à Jour en Temps Réel :**\
Les flux permettent d'obtenir des données actualisées en permanence, ce qui est essentiel pour les applications de navigation ou de gestion en temps réel.

**2. Flexibilité et Personnalisation :**\
L'utilisation de différents formats et types de flux (raster, vectoriels) permet de personnaliser les cartes selon les besoins spécifiques de l'application. Par exemple, superposer des tuiles raster de l'IGN avec des données vectorielles d'OSM pour afficher des routes sur un fond topographique.

**3. Économie de Ressources :**\
En utilisant des flux, vous n'avez pas besoin de stocker localement d'énormes volumes de données géographiques. Vous accédez uniquement aux informations nécessaires au moment où elles sont requises.

**4. Intégration Facile :**\
Les flux sont faciles à intégrer dans des applications web grâce à des standards ouverts comme WMS, WMTS, et les tuiles XYZ, ce qui permet de créer rapidement des cartes interactives.

***

#### Conclusion

Les flux de données géographiques, comme ceux fournis par l'IGN et OpenStreetMap, sont des outils puissants pour intégrer des cartes et des informations géographiques dans des applications web ou mobiles. En comprenant les différents formats et types de flux, vous pouvez choisir les meilleures options pour vos besoins spécifiques, qu'il s'agisse d'afficher des cartes simples ou de créer des solutions géospatiales complexes et dynamiques. Utiliser ces flux vous permet d'accéder à des données de haute qualité et de les personnaliser pour une large gamme d'applications.


---


**Un style de carte est un ensemble de règles qui déterminent l'apparence des éléments cartographiques.**&#x20;

Ces règles sont généralement rassemblées dans des fichiers de style en format JSON. Les règles de styles permettent de combiner différentes sources de données — à la fois vectorielles (lignes, polygones, points) et raster (images, tuiles pré-rendues) — pour créer des cartes multicouches. Cette flexibilité est utile pour créer des cartes simples ou riches en informations, et adaptées à divers besoins.

Nos cartes prêtes à l'emploi vous permettent de ne pas avoir à gérer le détail des données sous-jacentes.

(Lien)

Vous pouvez également modifier ces styles ou en créer un nouveau en partant d'une page blanche. Pour en savoir plus, consultez la page :

(Lien)
