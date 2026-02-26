---
title: Barre de recherche
description: Ajouter une barre de recherche avec Carte Facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Barre de recherche
  parent: Ajouter des fonctionnalités
  order: 1
  nav: docs
---

Carte Facile propose un composant de barre de recherche basé sur l'API Géoplateforme, permettant de rechercher des adresses, des points d'intérêt et des limites administratives directement depuis la carte. La documentation est disponible sur le site de l'IGN : [API Géoplateforme - Géocodage](https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage?ref=nsbaseadresselocalesz26ouit-ghost-adresse-data-gouv.functions.fnc.fr-par.scw.cloud)

:::info
La barre de recherche Carte Facile ne permet pas encore la recherche de parcelles cadastrales.
::: 

<br>

L'API expose trois index de recherche :

- **Adresses** (`address`) : numéros de rue, voies, lieux-dits, communes
- **Points d'intérêt** (`poi`) : limites administratives, mairies, hôpitaux, gares, monuments, éléments topographiques, ...
- **Parcelles cadastrales** (`parcel`) : recherche par référence cadastrale. 

<br>

## Ajouter la barre de recherche

```typescript
import { SearchControl } from 'carte-facile';

map.addControl(new SearchControl());
```

:::info Si vous utilisez les liens CDN
Ajoutez `CarteFacile` avant `SearchControl` et supprimez la ligne d'import :

```typescript
map.addControl(new CarteFacile.SearchControl());
```

:::

<br>
<br>

## Personnaliser la barre de recherche

Pour préciser les options telles que le délai et le nombre minimum de caractères minimum avant le déclenchement de la recherche, ou le nombre de résultats affichés.

```typescript
import { SearchControl } from 'carte-facile';

map.addControl(new SearchControl({
  placeholder: 'Rechercher une adresse…',
  debounceMs: 300,    // Délai avant déclenchement (ms)
  minChars: 3,        // Nombre minimum de caractères
  maxResults: 5,      // Nombre maximum de résultats affichés
}), 'top-right');
```

Les positions disponibles sont : `top-left`, `top-right`, `bottom-left`, `bottom-right`.

<br>

## Exploiter les résultats

Utilisez le callback `onSelect` pour réagir à la sélection d'un résultat. Il reçoit un objet `SearchResult` :

```typescript
map.addControl(new SearchControl({
  onSelect: (result) => {
    console.log(result.label);   // Libellé affiché
    console.log(result.type);    // Type : 'address', 'city', 'region', 'poi'…
    console.log(result.center);  // [longitude, latitude]
    console.log(result.bbox);    // [ouest, sud, est, nord]
  },
}));
```

Pour accéder aux données brutes de l'API Géoplateforme (code INSEE, code postal, contour géographique…) :

```typescript
import type { GeopfResultData } from 'carte-facile/src/components/SearchControl/providers/GeopfGeocoder';

map.addControl(new SearchControl({
  onSelect: (result) => {
    const data = result.data as GeopfResultData;

    data.citycode;   // Code INSEE (ex : "75056")
    data.postcode;   // Code postal
    data.cityName;   // Nom de la commune
    data.geometry;   // Contour GeoJSON si disponible
  },
}));
```

<br>

## Utiliser le géocodeur sans la barre de recherche

Si votre site dispose déjà d'une barre de recherche (par exemple un champ DSFR), vous pouvez utiliser `GeopfGeocoder` directement sans afficher le composant `SearchControl`.

`GeopfGeocoder` expose trois méthodes utilisables indépendamment :

| Méthode | Rôle |
| --- | --- |
| `.search(query)` | Interroge l'API, retourne les résultats |
| `.onSelect(result, map)` | Déplace la carte, affiche le contour / le marqueur |
| `.onClear(map)` | Nettoie la carte (supprime contour et marqueur) |

```typescript
import { GeopfGeocoder } from 'carte-facile';

// Lancer une recherche
const results = await GeopfGeocoder.search('Lyon');

// Quand l'utilisateur sélectionne un résultat
await GeopfGeocoder.onSelect(results[0], map);
// → déplace la carte, affiche le contour ou le marqueur

// Quand l'utilisateur efface la recherche
GeopfGeocoder.onClear(map);
// → supprime contour et marqueur
```

Exemple avec un `<input>` natif :

```typescript
import { GeopfGeocoder } from 'carte-facile';

const input = document.querySelector<HTMLInputElement>('#search');
const list  = document.querySelector<HTMLUListElement>('#results');

let debounce: ReturnType<typeof setTimeout>;

input.addEventListener('input', () => {
  clearTimeout(debounce);
  const query = input.value.trim();

  if (query.length < 3) {
    list.innerHTML = '';
    GeopfGeocoder.onClear(map);
    return;
  }

  debounce = setTimeout(async () => {
    const results = await GeopfGeocoder.search(query);

    list.innerHTML = '';
    for (const result of results) {
      const li = document.createElement('li');
      li.textContent = result.label;
      li.addEventListener('click', () => {
        GeopfGeocoder.onSelect(result, map);
        list.innerHTML = '';
        input.value = result.label;
      });
      list.appendChild(li);
    }
  }, 300);
});
```

:::info
`GeopfGeocoder` est un singleton — cette approche fonctionne sans problème pour une seule barre de recherche par carte, ce qui est le cas standard.
:::

<br>

## Brancher ses propres APIs

Vous pouvez créer un provider personnalisé en implémentant l'interface `SearchProvider` :

```typescript
import type { SearchProvider, SearchResult } from 'carte-facile';
import type { Map } from 'maplibre-gl';

const MonProvider: SearchProvider = {
  name: 'mon-provider',
  placeholder: 'Rechercher dans mon référentiel…',

  async search(query: string): Promise<SearchResult[]> {
    const res = await fetch(`/api/search?q=${query}`);
    const items = await res.json();
    return items.map(item => ({
      id: item.id,
      label: item.nom,
      center: [item.lng, item.lat],
      bbox: item.bbox,
      data: item,
    }));
  },

  onSelect(result: SearchResult, map: Map) {
    if (result.bbox) {
      map.fitBounds(result.bbox as [number, number, number, number]);
    } else if (result.center) {
      map.flyTo({ center: result.center, zoom: 14 });
    }
  },
};

map.addControl(new SearchControl({ providers: MonProvider }));
```

Il est possible de combiner plusieurs providers, leurs résultats seront fusionnés :

```typescript
map.addControl(new SearchControl({
  providers: [GeopfGeocoder, MonProvider],
  maxResults: 5,
}));
```

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/ajouter-des-fonctionnalites/selecteur-de-cartes" | locale_url }}>
  Ajouter un sélecteur de carte
</a>
