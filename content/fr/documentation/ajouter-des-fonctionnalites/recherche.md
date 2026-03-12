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

*Le barre de recherche est disponible à partir de la version 0.9.0 de la librairie Carte Facile.*

Carte Facile propose un composant de barre de recherche basé sur l'API Géoplateforme, permettant de rechercher des adresses, des points d'intérêt et des limites administratives, avec un affichage du résultat cohérent avec le type d'élément recherché.

La documentation de l'API Géoplateforme est disponible sur le site de l'IGN : [API Géoplateforme - Géocodage](https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage?ref=nsbaseadresselocalesz26ouit-ghost-adresse-data-gouv.functions.fnc.fr-par.scw.cloud).

L'API expose trois index de recherche :

- **Adresses** (`address`) : numéros de rue, voies, lieux-dits, communes
- **Points d'intérêt** (`poi`) : limites administratives, mairies, hôpitaux, gares, monuments, éléments topographiques, ...
- **Parcelles cadastrales** (`parcel`) : recherche par référence cadastrale. (ℹ️ Pas encore disponible dans la barre de recherche Carte Facile).

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

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/ajouter-des-fonctionnalites/selecteur-de-cartes" | locale_url }}>
  Ajouter un sélecteur de carte
</a>
