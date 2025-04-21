---
title: API Découpage administratif
description: L'API Découpage Administratif permet d'interroger les référentiels géographiques.
layout: layouts/docs.njk
eleventyNavigation:
  key: API Découpage administratif
  parent: Aller plus loin
  order: 3
  nav: docs
---

L'API Découpage adminnistratif vous permet d'obtenir des données administratives françaises à différentes échelles et selon différentes années (millésimes).
Vous pouvez par exemple rechercher une commune par nom ou code postal dans un formulaire, ou encore rechercher des EPCI, des départements et des régions.

*Concernant les régions et départements, leur nombre étant limité et leurs noms étant relativement stables, il est également possible de gérer ces informations côté client.*

{% from "components/component.njk" import component with context %}
{{ component("callout", {
    title: "Documentation officielle",
    description: "Le site de l'API présente plus de détails sur les paramètres et points de terminaison de l'API Découpage administratif. 
    Des démos sont disponibles afin de tester et explorer son fonctionnement.",
    link: {
        url: "https://geo.api.gouv.fr/decoupage-administratif",
        title: "Consulter la documentation"
    }
}) }}

## Fonctionnalités principales de l’API

- **Recherche :**  par nom, code postal ou Insee, pour des communes, communes associées et déléguées, EPCI, départements et régions.
- **Obtenir des informations générales et géométries :** comme le SIREN d'une EPCI, les contours d'une communes, l'emplacement de la mairie sur la commune, etc.

<br/>

## Cas d'usages

Dans un site web, l’API est très utile pour permettre de faire l'auto-complétion, qu’il s’agisse d’un formulaire ou pour permettre de zoomer sur une commune trouvée dans un contexte web.

En voici un exemple : https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/index.html

*Ici, la partie importante se base sur un simple [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API).*

Un autre exemple d'utilisation est le remplissage de coordonnées dansun tableaur. Voici un exemple sur Libre Office : [API et géocodage dans Libre Office Calc](https://medium.com/@ThomasG77/api-et-g%C3%A9ocodage-dans-libre-office-calc-488ab78dc360)

<br/>

---

## En savoir plus

### Exemples d'appels API

????accordionsgroup

??? Pour récupérer des communes

- **Rechercher par code postal :** [https://geo.api.gouv.fr/communes?codePostal=78000](https://geo.api.gouv.fr/communes?codePostal=78000)
- **Rechercher par code INSEE :** [https://geo.api.gouv.fr/communes?code=44109](https://geo.api.gouv.fr/communes?code=44109)
- **Rechercher par nom :** [https://geo.api.gouv.fr/communes?nom=Nantes&boost=population&limit=5](https://geo.api.gouv.fr/communes?nom=Nantes&boost=population&limit=5) (on ajoute un boost par population pour que la plus grande commune soit privilégiée)
- **Rechercher par coordonnées :** [https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568](https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568)
- **Filtrer par département** pour éviter les problèmes liés à l'homonymie de commune, par exemple la commune de Saint-Aubin existe dans les départements 10, 21, 36, 39, 40, 47, 59, 62, 91 et 02 : [https://geo.api.gouv.fr/communes?nom=Saint-Aubin&codeDepartement=21](https://geo.api.gouv.fr/communes?nom=Saint-Aubin&codeDepartement=21)
- **Obtenir toutes les communes d'un département :** [https://geo.api.gouv.fr/departements/44/communes](https://geo.api.gouv.fr/departements/44/communes)
- **Obtenir toutes les communes d'une région :** [https://geo.api.gouv.fr/communes?codeRegion=84](https://geo.api.gouv.fr/communes?codeRegion=84)

Ces exemples ne filtrent pas les champs, ne permettent pas d'obtenir les géométries pour les communes. La meilleure manière de comprendre comment cela fonctionne est d'utiliser la démo [recherche avancée de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif/communes#advanced). Elle permet, en cochant, de voir comment l'URL d'appel change en particulier l'option fields pour ne retourner que les colonnes/champs nécessaires.

???

??? Pour récupérer des régions et départements

Le principal intérêt est la correspondance entre un nom et un code. Par exemple si on veut obtenir le code :
- **pour la région :** [https://geo.api.gouv.fr/regions?nom=Auvergne](https://geo.api.gouv.fr/regions?nom=Auvergne)
- **pour le département :** [https://geo.api.gouv.fr/departements?nom=Ain](https://geo.api.gouv.fr/departements?nom=Ain)

Comme les départements et régions changent très rarement, il est envisageable d'avoir les fichiers globaux JSON plutôt que passer par des appels API. On a ainsi sous forme JSON (sans géométrie) :
- **[Les départements](https://unpkg.com/@etalab/decoupage-administratif@4.1.0/data/departements.json)**
- **[Les régions](https://unpkg.com/@etalab/decoupage-administratif@4.1.0/data/regions.json)**

???

????

<br/>

### Informations pratiques

????accordionsgroup

??? Concernant les informations des communes

- La longueur des noms de commune peut être problématique.
- Il existe une normalisation des noms de communes.
- Il existe des communes homonymes, le nom n'est donc pas un identifiant fiable.
- Le code postal ne correspond pas à toujours à une seule commune.
- Certaines communes ont plusieurs codes postaux.
- Le code postal peut contenir le code d'un autre département que son département réel.

???

??? Concernant les géométries des communes

- Si vous souhaitez les GeoJSON avec **le centre de la commune :** rajoutez aux URLs de la première partie `&format=geojson&geometry=centre` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=centre`
- Si vous souhaitez les GeoJSON avec **le contour de la commune :** rajoutez aux URLs de la première partie `&format=geojson&geometry=contour` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=contour`

<br/>

**Un exemple pour illustrer :**

L'appel initial est : [https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568](https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568)

<br/>

Il devient :
- Si l’on souhaite le centre de la commune : [https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=centre](https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=centre)
- Si l’on souhaite le contour de la commune : [https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=contour](https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=contour)

<br/>

Il faut également penser à mettre en cache quand on a des appels lourds qui ne changent pas ou qu'on retourne des contours. Ainsi :
- Sans contour, la réponse fait 480Ko [https://geo.api.gouv.fr/communes?codeRegion=84](https://geo.api.gouv.fr/communes?codeRegion=84)
- Avec contour, la réponse fait 34Mo [https://geo.api.gouv.fr/communes?codeRegion=84&format=geojson&geometry=contour](https://geo.api.gouv.fr/communes?codeRegion=84&format=geojson&geometry=contour)

<br/>

Vous pouvez très bien sauvegarder dans un fichier le résultat des URLs ci-dessus : le résultat ne va pas changer en permanence car ce n'est pas de l'autocomplétion.

???

??? Bonnes pratiques à adopter

Partout où vous le pouvez, utilisez le code INSEE du COG ([Code Officiel Géographique](https://www.data.gouv.fr/fr/datasets/code-officiel-geographique-cog/)) plutôt qu'un code postal ou un nom. Celui-ci est le plus fiable dans le temps même si des cas particuliers emergent parfois suite aux évolutions des communes (fusions ou séparation).

Avec l'API Découpage Administratif, cette complexité du COG est cachée. Si vous avez des besoins avancés, vous pouvez utiliser soit [les fichiers du COG](https://www.insee.fr/fr/information/2560452) soit pour une recherche ponctuel, passer par [l'interface de recherche de commune](https://www.insee.fr/fr/recherche/recherche-geographique?debut=0).

???

????

<br/>

### Sources alternatives pour les communes

????accordionsgroup

??? Utiliser le WFS de l'IGN

Un [WFS](https://fr.wikipedia.org/wiki/Web_Feature_Service) (Web Feature Service) est un service web d’inspiration SOAP. Il est basé sur une approche en [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language).

Le WFS de l’IGN existe en version 1.0.0, 1.1.0 et 2.0.0. Cette dernière rajoute des facilités en particulier pour paginer les appels. Généralement, sauf si le serveur est très ancien, c'est la version 2.0.0 qu'il faut privilégier.

Même s'il est possible de retrouver comment fonctionne le WFS en regardant le [standard WFS](https://www.ogc.org/standards/wfs), nous vous recommandons plutôt d'aller sur [la page WFS du site GeoRezo.net](https://georezo.net/wiki/main/standards/wfs). Ce n'est pas un prérequis ici mais pourra vous aider à approfondir le sujet si vous devez utiliser ce standard plus régulièrement.

Si vous avez besoin de récupérer toutes les communes, il est plutôt recommandé de récupérer les données brutes depuis [Admin Express](https://geoservices.ign.fr/adminexpress), documenté aussi sur cette page. Nous vous recommandons d'avoir installé [GDAL](https://gdal.org/en/stable/), un utilitaire en ligne de commande.

Son principal intérêt est de pallier à certains scénarios que n'adresse pas l'API Découpage administratif. Il nécessite de comprendre quelques préalables.

#### Lister les couches d'un endpoint WFS

On doit pouvoir lister les couches du service fournissant les communes.

*Dans le navigateur c'est peu lisible, car c'est un XML avec un "GetCapabilities".*

Avec GDAL :

```bash
ogrinfo -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs
```

Astuce : recommencez avec l'option `--DEBUG ON` comme ci-dessous :

```bash
ogrinfo --DEBUG ON -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs
```

L'intérêt de la manoeuvre est de pouvoir comprendre les appels HTTP utilisés lors de l'usage du WFS plutôt que devoir apprendre la spécification WFS.

#### Trouver la structure du WFS

Trouver la structure du WFS est important, car pour pouvoir filtrer vous pouvez utiliser des filtres qui jouent soit sur les attributs, soit sur des propriétés spatiales. Il s’agit donc de connaître le nom des champs, et potentiellement le nom de la colonne contenant la géométrie pour pouvoir effectuer les requêtes spatiales.

On part dans cet exemple de la couche `ADMINEXPRESS-COG.LATEST:commune`

Avec GDAL, en ligne de commande :

```bash
ogrinfo -so -noextent WFS:https://wxs.ign.fr/administratif/geoportail/wfs "ADMINEXPRESS-COG.LATEST:commune"
```

Dans les deux cas, on sait quelles sont les colonnes disponibles. On pourra réutiliser leur nom pour faire des filtres ou choisir les colonnes qui seront retournées.


#### Usages du WFS

Nous avons appris quelles couches contiennent un WFS et quelle est la structure d'une couche comme ses noms de champs. Maintenant nous allons pouvoir consommer la couche pour la filtrer.

Il est possible de le faire via un appel à une URL ou en passant pas des utilitaires associés à GDAL, utiles pour notre besoin :
- le premier `ogrinfo` permet d'inspecter le contenu d'une source de données, dans ce cas particulier, un WFS.
- le second `ogr2ogr` permet de consommer le WFS en utilisant si nécessaire la pagination et surtout de transformer le GML dans d'autres formats géographiques comme le SHP (Shapefile), le GPKG (Geopackage), le GeoJSON, le CSV parmi les formats géospatiaux les plus courants.

Parmi les cas régulièrement demandés, il nous est demandé de répondre à des besoins de multi-filtrage. Par exemple, si on veut les communes de plusieurs régions ou départements :

```bash
# Filtrer les communes pour plusieurs départements en retournant un GeoJSON
ogr2ogr -f GeoJSON communes-44-35.geojson \
        --config OGR_WFS_PAGING_ALLOWED ON \
        --config OGR_WFS_PAGE_SIZE 250 \
        WFS:https://wxs.ign.fr/administratif/geoportail/wfs \
        -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_dep IN ('44', '35')" \
        -lco RFC7946=YES
```

Nous vous proposons des recettes ci-dessous. La majorité n'utilise que les communes mais nous employons ponctuellement les EPCI, ayant parfois des demandes pour adresser comment les récupérer ou récupérer leurs communes.

On peut dans un premier temps récupérer la commune qui a un code INSEE car elle contient aussi le SIRET de l'EPCI :

```bash
# Obtenir la commune par code commune INSEE sous forme CSV
ogr2ogr -f CSV commune-44109.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_com = '44109'"
```

En inspectant le fichier `epci-with-44109-from-geom.csv`, on voit que le code SIREN est `244400404`. On peut ainsi retourner les communes qui sont membres de l'EPCI :

```bash
# Obtenir les communes de l'EPCI grâce au code Siren de l'EPCI
ogr2ogr -f GeoJSON communes-epci-with-44109.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE siren_epci = '244400404'"
```

On pourrait aussi obtenir la commune qui contient le point de longitude -1.54241 et latitude 47.21791 sous forme CSV puis depuis le code SIREN, faire la même opération que ci-dessus :

```bash
ogr2ogr -f CSV commune-44109-from-geom.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)" -lco RFC7946=YES
```

Il est possible aussi d'obtenir l'EPCI lui-même :

- depuis un code SIREN :
```bash
ogr2ogr -f GeoJSON epci-with-44109-from-siren.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE code_siren = '244400404'"
```
- depuis un point qui est est contenu dans l'EPCI :
```bash
ogr2ogr -f GeoJSON epci-with-44109-from-geom.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)"
```

#### Pourquoi ne pas passer par le WFS pour de l'autocomplétion ? 

Cela demeure nettement plus lent qu'une API dédiée car il n'y a pas d'index spécifiques pour cet usage.

???

??? Passer par le fichier Admin Express

Il s'agit de la solution à privilégier lorsque l'on a besoin de travailler avec les données France entière et qu'on dispose d'un back-end.

#### Contexte

Historiquement, il existait un produit nommé Geofla pour avoir les communes, qui depuis a été remplacé par un nouveau jeu de données dit **Admin Express** qui contient les données suivantes :

- DEPARTEMENT (Polygon)
- COMMUNE_ASSOCIEE_OU_DELEGUEE (Polygon)
- COMMUNE (Polygon)
- COLLECTIVITE_TERRITORIALE (Polygon)
- ARRONDISSEMENT_MUNICIPAL (Polygon)  
- EPCI (Polygon)
- REGION (Polygon)
- CANTON (Polygon)
- CHFLIEU_COMMUNE_ASSOCIEE_OU_DELEGUEE (Point)
- CHFLIEU_COMMUNE (Point)
- CHFLIEU_ARRONDISSEMENT_MUNICIPAL (Point)
- ARRONDISSEMENT (Polygon)

Le jeu de données et la documentation officielle sont disponibles [la page officielle Admin Express](https://geoservices.ign.fr/adminexpress).

#### Choisir entre les différents produits Admin Express

Il existe des **différences entre les produits Admin Express** et nous vous invitons à consulter [cet article qui résume ces différences](https://geoservices.ign.fr/admin-express-passe-la-grande-echelle).

Ce qu'il faut retenir pour choisir les produits :
- Si vous avez besoin de suivre l'évolution des communes par mois --> prenez "Admin Express" simple.
- Si vous voulez faire des cartes thématiques qui utilisent les données INSEE --> prenez les données "Admin Express COG Carto" qui sont généralisées c'est-à-dire avec moins de points pour les contours.
- Si vous avez besoin de compter par exemple les commerces qui sont dans une commune mais aussi de faire des cartes thématiques --> prenez "Admin Express COG" car les coordonnées sont plus précises.

<br/>

#### Eviter le "piège" des projections

L'autre difficulté lors de la récupération de ces données est de prendre les données dans les "bonnes projections" : il existe des jeux de données dont la description mentionne "par territoire" et "France entière".

Pour comprendre (en empruntant des raccourcis), il faut savoir que la France utilise "des systèmes de projection officiels" qui définissent comment "bien placer les coordonnées mesurées".

Ces systèmes sont choisis pour pouvoir garder une grande précision de mesure qui permettent ensuite d'être sûr de l'emplacement de votre maison au centimètre près. L'inconvénient est qu'ils fonctionnent sur des étendues faibles : ils sont différents sur la métropole et sur les DOM.
- Si vous prenez les données "par territoire", vous récupérerez les données pour chaque territoire séparément avec chacun sa projection officielle.
- Si vous prenez France entière, vous aurez les données assemblées dans une projection mondiale indépendamment des territoires.

Ainsi :
- Si vous devez travailler sur France métropolitaine et DOM --> vous pouvez prendre les données "France entière".
- Si vous travaillez uniquement sur un DOM ou uniquement la métropole --> vous pourrez travailler tant avec les données "par territoire" que "France entière".

???

????
