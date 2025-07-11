---
title: Sélecteur de carte
description: Ajouter un sélecteur de carte avec Carte Facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Sélecteur de carte
  parent: Ajouter des fonctionnalités
  order: 1
  nav: docs
---

Carte Facile propose un composant de sélecteur de carte, qui permet de basculer entre différentes cartes et surcouches directement depuis l'interface.
Il est construit afin de s'intégrer avec les autres contrôleurs de la librairie Maplibre, vous permettant d'avoir une utilisation cohérente avec les autres composants.

## Ajouter le sélecteur de carte

Pour ajouter le sélecteur de carte par défaut :

```typescript
import { MapSelectorControl } from 'carte-facile';

map.addControl(new MapSelectorControl);
```

:::info Si vous utilisez les liens CDN
Ajoutez `CarteFacile` avant `MapSelectorControl` et supprimez la ligne d'import :
```typescript
map.addControl(new CarteFacile.MapSelectorControl);
```
:::

<br>
<br>

## Personnaliser le sélecteur de carte

Pour préciser les cartes et surcouches que vous voulez afficher et préciser sa position : 

```typescript
import { MapSelectorControl } from 'carte-facile';

map.addControl(new MapSelectorControl({
  styles: ['simple', 'aerial'],
  overlays: ['administrativeBoundaries', 'cadastre']
}), 'bottom-left');
```

Les positions disponibles sont : `top-left`, `top-right`, `bottom-left`, `bottom-right`.

Les cartes et surcouches disponibles sont précisées dans les pages dédiées :
- [Les cartes]({{ "/documentation/premiers-pas/ajouter-une-carte" | locale_url }})
- [Les surcouches]({{ "/documentation/premiers-pas/ajouter-des-surcouches" | locale_url }})

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/ajouter-des-fonctionnalites/echelle" | locale_url }}>
  Ajouter une échelle
</a>