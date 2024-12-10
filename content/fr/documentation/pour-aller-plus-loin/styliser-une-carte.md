---
title: Styliser une carte
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Styliser une carte
  parent: Pour aller plus loin
  order: 3
  nav: docs
---

:::callout 🛠️ Page en cours de rédaction
Le contenu n'est pas représentatif du contenu final.
:::

_Nous vous proposons des styles près à l'emploi, mais vous pouvez également créer le votre. Deux méthodes_

* Dev fichier JSON
* Outil comme Maputnik, qui permet d'exporter un json ou un html prêt à l'emploi

_Précise comment on peut utiliser des cartes vectorielle dans Figma ? (si besoin, faire des fichiers svg à importer directement dans figma) -> sinon voir s'il y a des plugins sur Figma ?_

## **Étapes pour configurer un style JSON :**&#x20;

### **1. Définir les sources de données**

Vous devez d'abord définir vos sources de données. Ces sources peuvent être soit vectorielles, soit raster, et chacune est référencée par un d'identifiant unique que l'on définit.




Créez un fichier JSON, nommé par exemple `style.JSON`.

Dans ce fichier, appelez et nommez les sources de données que voulez utiliser. Par exemple :

* Une source raster nommé `satellite`, qui est chargée depuis la Géoplateforme de l'IGN via l'URL ...
* Une source vectorielle nommée `streets`, qui est chargée depuis la Géoplateforme de l'IGN via l'URL ...
* Une source vectorielle appelée ... (données métier), qui une couche chargée depuis un serveur... (tuto générer une carte et auto-héberger une carte).


<pre class="language-json"><code class="lang-json">{
<strong>  "version": 8,
</strong>  "sources": {
    "satellite": {
      "type": "raster",
      "url": "mapbox://mapbox.satellite",
      "tileSize": 256
    },
    "streets": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-streets-v8"
    }
  },
}
</code></pre>




### 2. **Ajouter des couches basées sur ces sources**

Les couches (layers) utilisent ces sources pour afficher les données. Chaque couche est associée à une source et applique un style spécifique à ces données.

Pour cela, vous devez connaitre le schéma des différentes données disponibles dans vos sources. (lien vers schéma IGN, OpenMapTiles, et surtout lien vers un outil (qu'on héberge ?) qui permet de regarder le contenu d'un flux de données géographiques).


* La couche `"satellite-layer"` utilise la source raster "satellite" pour afficher l'image de fond.
* La couche `"road-layer"` utilise la source vectorielle "streets" pour styliser les routes en rouge avec une largeur de 2 pixels.



Nous ajoutons à la suite des sources,  la définition des couches et styles associés. Dans cet exemple :

* &#x20;La couche `"satellite-layer"` utilise la source raster "satellite" pour afficher l'image de fond.
* La couche `"road-layer"` utilise la source vectorielle "streets" pour styliser les routes en rouge avec une largeur de 2 pixels.

```json
{
  "version": 8,
  "sources": {
    "satellite": {
      "type": "raster",
      "url": "mapbox://mapbox.satellite",
      "tileSize": 256
    },
    "streets": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-streets-v8"
    }
  },
  "layers": [
    {
      "id": "satellite-layer",
      "type": "raster",
      "source": "satellite",
      "paint": {}
    },
    {
      "id": "road-layer",
      "type": "line",
      "source": "streets",
      "source-layer": "road",
      "paint": {
        "line-color": "#ff0000",
        "line-width": 2
      }
    }
  ]
}
```

1.  **Ajouter des Couches Basées sur ces Sources :**\


    **Détails du JSON :**


2.  **Intégrer et Visualiser la Carte :** Après avoir configuré le fichier JSON, utilisez une bibliothèque comme MapLibre GL JS pour charger et afficher la carte.

    **Exemple de Code d'Intégration :**

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

***

