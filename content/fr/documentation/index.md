---
title: Documentation
layout: layouts/docs.njk
description: Documentation et tutoriels pour l'utilisation des cartes.
eleventyNavigation:
  key: Documentation
  order: 2
  nav: main
---

Bienvenue dans la documentation officielle de Carte Facile, une bibliothèque JavaScript/TypeScript pour la gestion simplifiée des styles de cartes.

## 🚀 Pour commencer

Si vous débutez avec Carte Facile, commencez par ces guides :

1. [Installation](getting-started/installation.md)
2. [Guide de démarrage rapide](getting-started/quick-start.md)

## 📖 Documentation de l'API

- [Références de l'API](api/references.md)

<!-- ## 📚 Guides par bibliothèque

Choisissez votre bibliothèque de cartographie préférée :

- [MapLibre GL JS](guides/maplibre.md) (Recommandé)
- Leaflet (À venir)
- OpenLayers (À venir) -->

## 💡 Exemples

*Exemples à venir*

## 🤝 Contribution

Nous accueillons toutes les contributions ! Voici comment vous pouvez nous aider :

1. Signaler des bugs
2. Proposer des améliorations
3. Contribuer au code
4. Améliorer la documentation

Pour plus d'informations, consultez notre [guide de contribution](CONTRIBUTING.md).

## 📋 Compatibilité

| Bibliothèque | Version minimale | Statut |
|--------------|------------------|---------|
| MapLibre GL | 3.x | ✅ Supporté |
| Leaflet | 1.9.x | 🛠️ En développement |
| OpenLayers | 7.x | 🛠️ En développement |

## ❓ FAQ

### Quelle bibliothèque de cartographie choisir ?

- **MapLibre GL** : Recommandé pour les applications modernes nécessitant des cartes vectorielles et des performances optimales.
- **Leaflet** : Idéal pour les cas d'utilisation simples et la compatibilité avec les navigateurs plus anciens.
- **OpenLayers** : Adapté aux projets nécessitant des fonctionnalités SIG avancées.

### Comment obtenir de l'aide ?

1. Consultez d'abord la documentation pertinente
2. Vérifiez les [exemples](examples/basic-usage.md)
3. Recherchez dans les [issues GitHub](https://github.com/votre-username/carte-facile/issues)
4. Ouvrez une nouvelle issue si nécessaire

## 📅 Feuille de route

- [x]  Support de MapLibre GL
- [ ]  Support d'OpenLayers
- [ ]  Support de Leaflet


<div class="fr-container--fluid">
  <div class="fr-grid-row fr-my-2w">
    <div class="fr-col">
      {% from "components/component.njk" import component with context %}
      {{ component("card", {
          url: "/documentation/prise-en-main/",
          title: "Prise en main",
          description: "Un tutoriel pour ajouter rapidement une carte dans un site web."
      }) }}
    </div>
  </div>
  <div class="fr-grid-row fr-my-2w">
    <div class="fr-col">
      {{ component("card", {
          url: "/documentation/concepts-fondamentaux/",
          title: "Concepts fondamentaux",
          description: "Un aperçu des concepts fondamentaux dans l'utilisation des cartes dans un site web."
      }) }}
    </div>
  </div>
  <div class="fr-grid-row fr-my-2w">
    <div class="fr-col">
      {{ component("card", {
          url: "/documentation/api-geographiques/api-adresse",
          title: "API géographiques",
          description: "Quelques bases explicatives pour l'utilisation des API géographiques, par exemple pour la recherche d'adresse et de communes."
      }) }}
    </div>
  </div>
</div>