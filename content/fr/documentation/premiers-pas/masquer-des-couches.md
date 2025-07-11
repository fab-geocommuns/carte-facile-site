---
title: Masquer des couches
description: Masquer et afficher des couches de votre carte avec Carte Facile.
layout: layouts/docs.njk
eleventyNavigation:
  key: Masquer des couches
  parent: Premiers pas
  order: 4
  nav: docs 
---

Carte Facile vous permet de masquer ou d'afficher des couches spécifiques de la carte selon vos besoins. Cette fonctionnalité est particulièrement utile lorsque vous souhaitez afficher vos propres données plutôt que celles disponibles par défaut, ou lorsque vous voulez personnaliser l'affichage d'une surcouche de carte.

Pour faciliter la gestion de la visibilité des couches, Carte Facile utilise un système de groupes logiques. Cette organisation est utile car un même type d'information peut nécessiter plusieurs couches distinctes.

Pour masquer ou afficher des groupes de couches spécifiques :

```typescript
import { showLayer, hideLayer, LayerGroup } from 'carte-facile';

// Masquer uniquement les bâtiments
hideLayer(map, LayerGroup.buildings);

// Masquer les rues et leurs labels
hideLayer(map, [LayerGroup.streets, LayerGroup.street_labels]);


// Utiliser showLayers pour afficher des couches qui auraient été masquées
showLayer(map, [LayerGroup.cadastral_sections, LayerGroup.buildings]);
```

:::info Si vous utilisez les liens CDN
Ajoutez `CarteFacile` avant les fonctions `hideLayer` et `showLayer`, et supprimez les lignes d'import. Vous pouvez utiliser directement les noms des groupes de couches entre guillemets au lieu de `CarteFacile.LayerGroup.nomGroupeDeCouches` :
```typescript
CarteFacile.hideLayer(map, ['buildings', 'street_labels']);
```
:::

<br><br>

## Groupes de couches disponibles

{% from "components/component.njk" import component with context %}
{{ component("table", {
    headers: ["Groupes de couches", "Description"],
    data: [
        ["cadastral_sections", "Les sections du cadastre français."],
        ["cadastral_parcels", "Les parcelles du cadastre français."],
        ["boundaries_communes", "Les délimitations des communes dans le découpage administratif français."],
        ["boundaries_epcis", "Les délimitations des EPCIs dans le découpage administratif français."],
        ["boundaries_departments", "Les délimitations des départements dans le découpage administratif français."],
        ["boundaries_regions", "Les délimitations des régions dans le découpage administratif français."],
        ["boundaries", "Les délimitations des pays."],
        ["buildings", "Tous les bâtiments."],
        ["streets", "Tout les réseaux de transport terrestres (routier, ferrés, pédestre, etc)."],
        ["street_labels", "Les noms correspondants aux réseaux de transports (odonymes)."]
    ]
}) }}

*Le nommage des groupes de couches se base autant que possible sur le schéma de données [Shortbread](https://shortbread-tiles.org/schema/1.0/).*


Pour afficher tous les groupes de couches disponibles, servez-vous de l’autocomplétion de votre IDE avec `LayerGroup.`, ou utilisez la méthode suivante pour afficher la liste dans la console du navigateur :

```typescript
import { LayerGroup } from 'carte-facile';

console.log(LayerGroup);

```

Si vous utilisez les liens CDN :
```typescript
console.log(CarteFacile.LayerGroup);
```

<br>

## Prochaine étape

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-arrow-right-line"
  href={{ "/documentation/ajouter-des-fonctionnalites/selecteur-de-cartes" | locale_url }}>
  Ajouter un sélecteur de carte
</a>