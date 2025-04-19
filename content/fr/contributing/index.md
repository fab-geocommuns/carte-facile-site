---
layout: layouts/page.njk
title: Guide de contribution
description: Ce service est construit en open source et toutes les contributions sont les bienvenues !
eleventyNavigation:
  key: Contribuer
  order: 3
  nav: main
slugOverride: contribuer
---

## Espaces de discussions

*Détails à venir*

<br>

---

## Améliorations des cartes

Pour suggérer des améliorations ou des correctifs sur les cartes, vous pouvez utiliser ce formulaire : 

<a class="fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-external-link-line" href="https://romainronflette.notion.site/19a72e1e272a803f8ee9e1d2189c18db?pvs=105"> Formulaire de demande d'amélioration des cartes </a>

L'ensemble des suggestions est répertorié sur ce tableau disponible en ligne, qui vous permet de suivre le traitement des demandes envoyées via le formulaire : 

<a class="fr-btn fr-btn--tertiary fr-btn--icon-right fr-icon-external-link-line" href="https://romainronflette.notion.site/Retours-et-suggestions-am-lioration-sur-les-styles-de-carte-du-services-Carte-facile-12172e1e272a80b5b9cac8ba0ca31fb8?pvs=4"> Tableau de suivi des demandes d'amélioration </a>

<br>

---

## Améliorations de ce site

Vous pouvez consulter le dépôt du site de ce service sur Github, proposer des modifications et améliorations en modifiant directement le code source ou en créant des tickets :

<a class="fr-btn fr-btn--tertiary fr-btn--icon-right fr-icon-external-link-line" href="{{ metadata.repository_url }}/blob/main"> Dépôt Github </a>  

Un bouton pour éditer chaque page de ce site directement sur Github est également disponible en pied de page, sous l'intitulé "Modifier cette page". Un bouton similaire est également disponible en haut à droite de chaque page de la documentation.

La description des composants disponibles pour créer du contenu dans les pages est disponible ici : 

<a class="fr-btn fr-btn--tertiary fr-btn--icon-right fr-icon-arrow-right-line" href="{{ "/blog" | locale_url }}"> Composants disponibles </a>


***
***

# Guide de contribution

Merci de votre intérêt pour contribuer à Carte Facile ! Ce document fournit les lignes directrices pour contribuer au projet.

## 🌟 Comment contribuer

Il existe plusieurs façons de contribuer à Carte Facile :

1. Signaler des bugs
2. Suggérer des améliorations
3. Contribuer au code
4. Améliorer la documentation
5. Partager des exemples d'utilisation

## 🐛 Signalement de bugs

1. Vérifiez d'abord si le bug n'a pas déjà été signalé dans les [issues](https://github.com/votre-username/carte-facile/issues)
2. Si ce n'est pas le cas, créez une nouvelle issue en utilisant le template "Bug Report"
3. Incluez :
   - Version de Carte Facile
   - Environnement (navigateur, OS)
   - Étapes pour reproduire
   - Comportement attendu vs observé
   - Code minimal reproduisant le problème

## 💡 Suggestions d'amélioration

1. Vérifiez si l'amélioration n'a pas déjà été suggérée
2. Créez une nouvelle issue en utilisant le template "Feature Request"
3. Décrivez clairement :
   - Le problème que résout votre suggestion
   - La solution proposée
   - Les alternatives considérées
   - Les cas d'utilisation

## 🔧 Contribution au code

### Prérequis

1. Node.js (version 14 ou supérieure)
2. npm ou yarn
3. Git

### Mise en place

1. Forkez le dépôt
2. Clonez votre fork :
   ```bash
   git clone https://github.com/fab-geocommuns/carte-facile.git
   cd carte-facile
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

### Processus de développement

1. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. Développez votre fonctionnalité en suivant les standards :
   - Utilisez TypeScript
   - Respectez le style de code existant
   - Ajoutez des tests unitaires
   - Mettez à jour la documentation

3. Testez vos changements :
   ```bash
   npm run test
   ```

4. Committez vos changements en suivant [Conventional Commits](https://www.conventionalcommits.org/) :
   ```bash
   git commit -m "feat: description de la fonctionnalité"
   ```

5. Poussez vers votre fork :
   ```bash
   git push origin feature/nom-de-la-fonctionnalite
   ```

6. Créez une Pull Request

### Standards de code

- **TypeScript** : Utilisez TypeScript pour tout nouveau code
- **Tests** : Ajoutez des tests pour toute nouvelle fonctionnalité
- **Documentation** : Mettez à jour la documentation si nécessaire
- **Commits** : Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/)
- **Code style** : Respectez la configuration ESLint et Prettier du projet

## 📚 Contribution à la documentation

1. La documentation se trouve dans le dossier `/docs`
2. Suivez la structure existante
3. Utilisez Markdown pour le formatage
4. Incluez des exemples de code si pertinent
5. Vérifiez les liens et références

## 🤝 Process de revue

1. Chaque Pull Request doit être revue par au moins un mainteneur
2. Les tests automatisés doivent passer
3. Le code doit suivre les standards du projet
4. La documentation doit être à jour

## 📝 Notes

- Pour les changements majeurs, ouvrez d'abord une issue pour discussion
- Testez vos changements sur différents navigateurs si pertinent
- Gardez vos Pull Requests focalisées sur une seule fonctionnalité

## ❓ Questions

Si vous avez des questions, n'hésitez pas à :
1. Consulter la [documentation](docs/index.md)
2. Ouvrir une issue pour discussion
3. Contacter les mainteneurs 