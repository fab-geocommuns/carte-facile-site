---
title: API Adresse
description: L'API Adresse permet d'interroger la Base Adresse Nationale (BAN), la base de données de référence de l'État français sur les adresses.
layout: layouts/docs.njk
eleventyNavigation:
  key: API Adresse
  parent: API géographiques
  order: 1
  nav: docs
---


En intégrant l'API dans votre système d'information, vous pouvez facilement rechercher une adresse et notamment faire de l'autocomplétion et de la vérification d'adresse, géolocaliser une adresse sur une carte ou encore faire une recherche géographique inversée (trouver la rue la plus proche de coordonnées géographiques).

La documentation des entrées possibles pour l'API est disponible ici :&#x20;

"https://adresse.data.gouv.fr/api-doc/adresse"

***

## En savoir plus

### D'où viennent les données ? <a href="#comment-les-donnees-d-adresses-sont-elles-constituees" id="comment-les-donnees-d-adresses-sont-elles-constituees"></a>

L'API Adresse permet d'interroger la Base Adresse Nationale (BAN), qui est constituée de données provenant d’acteurs historiques de l’adresse (IGN, Cadastre, etc.) et de données provenant des inventaires d'adresses créées par les communes via l'outil [Bases Adresses Locales (BAL)](https://adresse.data.gouv.fr/bases-locales).&#x20;

Petit à petit, ces bases d'adresses locales, créées et certifiées par les communes, remplacent les données des acteurs historiques. Ci-dessous un schéma décrivant la construction des données de cette base :&#x20;

<figure><img src="../../.gitbook/assets/Schema_BAN.svg" alt="Schéma explicatif de la consolidation des données d&#x27;adresses"><figcaption></figcaption></figure>

### Qu'est-ce que le géocodage ? <a href="#quest-ce-que-le-geocodage" id="quest-ce-que-le-geocodage"></a>

Le **géocodage** consiste à associer des coordonnées géographiques (longitude et latitude) à une adresse postale. Cela permet par exemple de localiser des adresses sur une carte ou de calculer des itinéraires de voyages.

Pour effectuer un géocodage, il faut :

* des **données de référence** (numéro de rue, nom de rue,  [code INSEE](https://www.data.gouv.fr/en/datasets/code-officiel-geographique-cog/), code postal, commune, etc.);
* des **coordonnées géographiques** (généralement la longitude(x) et la latitude(y) );
* l’**adresse** à géocoder.

### Comment fonctionne un géocodeur ? <a href="#quest-ce-que-le-geocodage" id="quest-ce-que-le-geocodage"></a>

Par le biais d'algorithmes, un géocodeur analyse une adresse en la découpant en mots ou groupes de mots, puis compare ces éléments à des données de référence. Les résultats sont ensuite triés, souvent selon la proximité des coordonnées ou d’autres critères comme la taille de la population ou le pays. Certains géocodeurs permettent aussi de rechercher des lieux d’intérêt (POIs) et pas seulement des adresses.

Le géocodage peut aussi être inversé : à partir de coordonnées géographiques, on peut retrouver une adresse en cherchant la donnée de référence la plus proche.

### Les limites du géocodage <a href="#les-limites-du-geocodage" id="les-limites-du-geocodage"></a>

Ici, nous nous focalisons sur les cas liés aux adresses, car le géocodeur d’[adresse.data.gouv.fr](http://adresse.data.gouv.fr/) (utilisé par l'API Adresse) est conçu spécialement pour cela.

<details>

<summary>Les données textuelles de l’adresse de référence ne sont pas uniformes.</summary>

Il s’agit en premier lieu d’uniformiser les différentes manières de décrire le type de voie dans la base de donnée des adresses.

_**Exemple :** "rue" peut être représenté par les lettres "r" ou "R" ou "rue" ou "Rue"._

Il s’agit également d’omettre les articles lors d’une comparaison.

_**Exemple :** chercher "rue métanies" au lieu de "rue des métanies"._

D’un autre côté, les coordonnées géographiques qui servent à localiser une zone peuvent manquer de précision. Dans certains cas, il arrive de disposer uniquement du centroïde de la commune, de la voie ou du lieu dit. Ce centroïde étant le centre de la surface du territoire, il peut ne pas être pertinent.

_**Exemple :** le centre-ville d'une commune est très éloigné du centroïde de la surface de la commune_.

Dans d’autres cas, les coordonnées peuvent avoir été interpolées : les adresses ont été positionnées en fonction du nombre de numéros dans une voie et la longueur de celle-ci.

</details>

<details>

<summary>Plusieurs communes pour un code postal.</summary>

Cette problématique se pose par exemple lorsqu’on met le nom de la commune dans une adresse. En effet, 68,9% des codes postaux sont associés à plus d’une commune et jusqu’à 46 communes sont rattachées à un même code postal.

</details>

<details>

<summary>Plusieurs codes postaux pour une commune.</summary>

1,5% des communes ont plus d’un seul code postal sur leur territoire. On compte même jusqu’à 9 codes postaux pour une même commune pour le cas extrême !

</details>

<details>

<summary>Des communes ont des noms identiques.</summary>

10,6% des communes ont une ou plusieurs communes homonymes.

</details>

<details>

<summary>Des codes postaux n'ont pas le même code que celui du département.</summary>

Ces cas de figure sont très rares (quelques dizaines).

</details>

<details>

<summary>Plusieurs noms de voie avec un nom identique sont situés à différents endroits pour une même commune.</summary>

Cette situation s’explique en particulier avec la création des communes nouvelles qui a encouragé le regroupement de communes. Ce problème peut être réglé en ajoutant le nom de la commune déléguée dans l’adresse postale, en renumérotant les rues ou en les renommant. Or les géocodeurs ne gèrent pas forcément bien (voir pas du tout) l’ajout d’adresse de la commune déléguée.

</details>

<details>

<summary>Plusieurs coordonnées pour une même adresse.</summary>

* Il peut exister des différences liées à la vision sur la position du numéro de l’adresse (entrée principale, boîte aux lettres, bâtiment, cage d’escalier, logement, parcelle, position dérivée du segment de la voie de rattachement, point d’accès technique, etc.) ;
* Des données provenant de référentiels différents selon les acteurs, comme la Poste, l’IGN, le cadastre ou les opérateurs de réseaux (fibre, etc.).\
  Toutefois, la Base Adresse Nationale (BAN) et les Bases Adresses Locales (BAL) permettent d'harmoniser et d'améliorer ces référentiels.

</details>

***

## Cas pratiques

### Comment faire de l’**autocomplétion d’adresse ?** <a href="#comment-faire-de-l-autocompletion-d-adresse" id="comment-faire-de-l-autocompletion-d-adresse"></a>

Il existe plusieurs solutions pour faire de l’autocomplétion dans un outil web. Vous pouvez vous appuyer sur de nombreuses bibliothèques, celles-ci étant généralement liées à des bibliothèques cartographiques :


**Solutions indépendantes de bibliothèques cartographiques**

* [https://github.com/webgeodatavore/photon-geocoder-autocomplete](https://github.com/webgeodatavore/photon-geocoder-autocomplete)

**Exemples :**

* [Exemple avec Maplibre, mais non lié à Maplibre](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-maplibre.html)
* [Exemple avec OpenLayers, mais non lié à OpenLayers](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-openlayers.html)
* [Formulaire exemple 1](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-no-map.html)
* [Formulaire exemple 2](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-form-only-alternate.html)



**Solutions basées sur Leaflet**

* [https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban](https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban)
* [https://github.com/komoot/leaflet.photon](https://github.com/komoot/leaflet.photon)

**Exemples :**

* [https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo\_control.html](https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo\_control.html)
* [https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo\_search\_bar.html](https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo\_search\_bar.html)
* [https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-leaflet-photon.html](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-leaflet-photon.html)


**Solutions basées sur OpenLayers**

* [https://github.com/webgeodatavore/photon-geocoder-autocomplete](https://github.com/webgeodatavore/photon-geocoder-autocomplete)
* [https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html](https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html)

**Exemples :**

* [https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-ol.html](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-ol.html)



### Comment faire du **géocodage par adresse unitaire ?** <a href="#comment-faire-du-geocodage-par-adresse-unitaire" id="comment-faire-du-geocodage-par-adresse-unitaire"></a>

Avec Python, pour faire des appels unitaires, vous pouvez :

* **utiliser** [**le code de ce script**](https://gist.githubusercontent.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/raw/9bd7883be31d2c9758d4393d72e9dc1ae4c5bed3/geocode-addok-unit-call.py) ;
* **passer par** [**Geopy**](https://geopy.readthedocs.io/en/stable/#installation) : il existe une [classe `BANFrance` pour ce besoin](https://geopy.readthedocs.io/en/stable/#banfrance).

En JavaScript, vous pouvez utiliser [ces exemples](https://addok.readthedocs.io/en/latest/examples/#using-javascript-client-side) que ce soit pour un usage côté navigateur ou côté serveur (Node.js/deno).

### Comment réaliser un géocodage massif ? <a href="#geocodage-massif" id="geocodage-massif"></a>

Lorsqu'on choisit cette option, on privilégie l'appel par le endpoint CSV de l'API.

Il faut préalablement s'assurer que son CSV est bien formaté : il s'avère que le géocodage peut ponctuellement dysfonctionner si le CSV n'est pas bien formaté.


Il existe une interface graphique pour envoyer des fichiers CSV sur [https://adresse.data.gouv.fr/csv](https://adresse.data.gouv.fr/csv) dont la taille maximum est de 50Mo.

Pour tester, téléchargeons [le fichier exemple](https://gist.githubusercontent.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/raw/9bd7883be31d2c9758d4393d72e9dc1ae4c5bed3/annuaire-des-debits-de-tabac-2018-utf8-20lines.csv) puis suivez l'exemple en utilisant le GIF animé ci-dessous.

<figure><img src="https://guides.data.gouv.fr/~gitbook/image?url=https%3A%2F%2F3786092575-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnSrS1oz2N9yTlykjBxxZ%252Fuploads%252Fgit-blob-7746ff39bba4456f2ab38875d97d9cf34005e964%252Fgeocodage-csv-manuel.gif%3Falt%3Dmedia&#x26;width=300&#x26;dpr=4&#x26;quality=100&#x26;sign=3114f75&#x26;sv=1" alt=""><figcaption></figcaption></figure>

Pour réaliser un géocodage massif, il faut généralement vérifier le formatage de votre CSV.


Géocodage massif avec une solution en ligne de commande utilisant Node.js : [https://github.com/jdesboeufs/addok-geocode-stream](https://github.com/jdesboeufs/addok-geocode-stream)


* Solution partant d'appels unitaires plutôt que des appels CSV : [https://github.com/MTES-MCT/bulk-geocoding-python-client](https://github.com/MTES-MCT/bulk-geocoding-python-client)
* Solution partant d'appels à l'API CSV. Il suffit de récupérer [le zip](https://gist.github.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/archive/9bd7883be31d2c9758d4393d72e9dc1ae4c5bed3.zip), de décompresser le fichier. Ensuite, il vous suffit de lancer le script Python avec `python chunk-csv-python.py`. Cela permettra de faire l'appel vers l'API CSV soit en une fois, soit en plusieurs phases. On obtiendra ainsi le fichier `annuaire-des-debits-de-tabac-2018-utf8-20lines.geocoded.csv` qui est la version géocodée par l'API CSV d'un fichier de 20 lignes ainsi que `myresults.csv` qui est une version qui résulte d'une phase de découpage d'un gros fichier en plusieurs morceaux, d'appels à l'API CSV à partir de chacun de ces fichiers, puis du réassemblage des fichiers ainsi retournés. Vous n'avez plus qu'à adapter le code du fichier `chunk-csv-python.py`.
* [https://github.com/MTES-MCT/bulk-geocoding-python-client](https://github.com/MTES-MCT/bulk-geocoding-python-client) (attention, la solution fait des appels unitaires plutôt que des appels CSV)

### QGIS
* Recherchez des adresses : [https://oslandia.gitlab.io/qgis/french\_locator\_filter/](https://oslandia.gitlab.io/qgis/french\_locator\_filter/)
* Géocodez des tables depuis une table dans QGIS QBano : [https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/](https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/). À ce jour, le plug-in est mal maintenu, il vaut mieux récupérer [ce zip](https://labs.webgeodatavore.com/partage/QBano.zip) puis installer le plug-in depuis celui-ci.
* Avec PyQGIS, vous pouvez aussi géocoder en partant de : [https://gis.stackexchange.com/a/395415/638](https://gis.stackexchange.com/a/395415/638)

### Autres outils
* Vous faites du R ? [https://cran.r-project.org/web/packages/banR/index.html](https://cran.r-project.org/web/packages/banR/index.html)
* Vous souhaitez intégrer la recherche dans le CMS SPIP ? [http://plugins.spip.net/gisban.html](http://plugins.spip.net/gisban.html)


***

## Questions fréquentes

### Comment faire si une recherche d’adresse ne fonctionne pas ? <a href="#comment-faire-si-une-recherche-d-adresse-ne-fonctionne-pas" id="comment-faire-si-une-recherche-d-adresse-ne-fonctionne-pas"></a>

Vérifier en utilisant l’[autocomplétion](https://adresse.data.gouv.fr/base-adresse-nationale#4.4/46.9/1.7) :

* Tapez votre adresse. Par exemple, "20 avenue de Ségur". Si le numéro est bien proposé et que la commune est la bonne pour le premier résultat, c’est la manière dont vous avez récupéré l’adresse qui est en cause. Si vous êtes en mode "batch", la première adresse retournée peut être mauvaise et c’est la 2ème ou 3ème adresse que vous attendiez.
* Imaginons que vous pensiez que le numéro existe, mais ne le trouvez pas dans votre résultat de géocodage. Essayez alors de trouver la rue. Essayons "87 avenue de Ségur". On ne voit que des rues qui sont retournées suite à la recherche. Cliquez sur la rue qui semble correspondre à votre recherche. Cela va zoomer. Vous allez pouvoir voir s’il y a des adresses et lesquelles sont inventoriées.
* La donnée de référence n’est pas présente : c’est un oubli ou personne ne l’a encore produite.
* Le résultat est une adresse BAL. Votre commune est entrée dans une démarche de recensement et valorisation de ces adresses.
  * Vous pouvez confirmer si l'adresse existe en allant sur [https://adresse.data.gouv.fr/deploiement-bal](https://adresse.data.gouv.fr/deploiement-bal).
    * Zoomez sur la carte pour trouver votre commune ou l'organisme qui porte votre BAL, par exemple un intercommunalité.
    * Cliquez sur le polygone. Allons par exemple à [la communauté d'agglomération Arles Crau Camargue Montagnette](https://adresse.data.gouv.fr/bases-locales/jeux-de-donnees/601402f5818a575b16081fe3).
    * Descendons et recherchons une commune puis cliquons dessus, par exemple [Arles](https://adresse.data.gouv.fr/base-adresse-nationale/13004).
    * On peut maintenant chercher par nom de voie ou lieu dit pour vérifier que la voie existe. Prenons [l'allée des Manades](https://adresse.data.gouv.fr/base-adresse-nationale/13004\_2865#15.05/43.66235/4.6205).
    * Nous pouvons ensuite vérifier dans la liste l'existence du numéro.
* Adresse IGN vs adresse cadastre vs adresse BAL.
* La donnée est présente, mais les termes de recherche ne permettent pas de la trouver.

Vous êtes un particulier ? Vous pouvez récupérer les coordonnées de votre commune pour lui faire part de vos retours en passant par [https://adresse.data.gouv.fr/contribuer](https://adresse.data.gouv.fr/contribuer) puis en cherchant votre commune.

### Que faire lorsqu'on est un gros consommateur de l’API [api-adresse.data.gouv.fr](http://api-adresse.data.gouv.fr/) ? <a href="#gros-consommateurs-de-l-api-api-adresse-data-gouv-fr" id="gros-consommateurs-de-l-api-api-adresse-data-gouv-fr"></a>

Si vous êtes un organisme public, vous pouvez faire une demande pour augmenter les quotas par défaut sur l’API publique [api-adresse.data.gouv.fr](http://api-adresse.data.gouv.fr/).

Si ce n’est pas le cas, vous pouvez vous autohéberger. Dans ce cas, le plus simple est de passer par l’utilisation de Docker : [https://github.com/etalab/addok-docker#readme](https://github.com/etalab/addok-docker#readme).

Il est également possible de regarder du côté de Addok, le logiciel open source derrière l’API Adresse si vous avez des besoins plus spécifiques au niveau de votre installation ou de la personnalisation de la recherche : [https://github.com/addok/addok](https://github.com/addok/addok).

### Quels autres géocodeurs est-il possible d'utiliser ? <a href="#geocodeurs-alternatifs" id="geocodeurs-alternatifs"></a>

Même si nous avons abordé l’usage du géocodeur Addok, utilisé par adresse.data.gouv.fr, il existe d'autres possibilités pour géocoder. Leurs principaux intérêts sont de pouvoir chercher des POIs (un centre commercial, une enseigne, etc.) ainsi que de marcher sur des données internationales, contrairement à [l'instance publique de Addok](https://adresse.data.gouv.fr/api-doc/adresse).

Il est ainsi possible d'installer des solutions OpenSource comme :

* [Pelias](https://github.com/pelias/pelias)
* [Photon](https://github.com/komoot/photon)
* [Nominatim](https://github.com/osm-search/Nominatim)

Il est aussi possible de détourner Addok pour lui faire effectuer d’autres types de recherche, par exemple des POIs en utilisant le projet [https://github.com/osm-fr/osmpoi4addok](https://github.com/osm-fr/osmpoi4addok).

Une instance alternative d'Addok (http://demo.addok.xyz) est mise à disposition et contient des données venant de la BANO, des POIs d'OpenStreetMap ainsi que des intersections de rues/routes.

Vous pouvez aussi vous appuyer sur les services mis à disposition par l’IGN pour le géocodage : [https://geoservices.ign.fr/services-web-experts-calcul](https://geoservices.ign.fr/services-web-experts-calcul) (voir les sections "Services de géocodage" et "Service de recherche Look4"). Vous pouvez aussi regarder [leur nouveau service de géocodage.](https://geoservices.ign.fr/documentation/services/services-beta/nouveau-service-de-geocodage-demonstrateur)
