# Fonds de cartes

## À propos
Le service Fonds de cartes propose des cartes rapidement intégrables à son site internet ou son application. Le projet est porté par la Fabrique des géocommuns à l'IGN. 
Ce dépot contient le site du service, qui permet de présenter les cartes disponibles et la documentation associée.

## Technologies utilisées
Un dépôt pour démarrer un site statique au [DSFR](https://www.systeme-de-design.gouv.fr/) avec le
générateur [Eleventy](https://www.11ty.dev/), déployé pour démonstration sur [GitHub Pages](https://codegouvfr.github.io/eleventy-dsfr/fr/).
    
## Prise en main
### Installation

Dans un terminal, dans le dossier où vous voulez installer le projet :

**Cloner le dépôt** :

```bash
git clone https://github.com/betagouv/fonds-de-cartes.git
```

**Naviguer dans le dossier** :

```bash
cd my-site-name
```

**Installer les dépendances** :

```bash
npm install
```

**Exécuter Eleventy** :

Construire un livrable, indexé avec pagefind pour la recherche :

```bash
npm run build
```

L'exécuter sur le serveur de développement local :

```bash
npm start
```

Ou exécuter un [mode de débogage](https://www.11ty.dev/docs/debugging/).

### Ajout de contenu

_[Voir la documentation des fonctionnalités et du Markdown](https://codegouvfr.github.io/eleventy-dsfr/fr/blog/tags/contenu/)_

### Déploiement

- Voir un [exemple de worklow de déploiement sur GitHub Pages](https://github.com/codegouvfr/eleventy-dsfr/blob/gh-pages/.github/workflows/11ty-gh-pages.yml) sur la branche `gh-pages`.

En cas d'erreur lors du build :
```bash
Error: Get Pages site failed
Error: HttpError: Not Found
```
Essayer [cette configuration](https://stackoverflow.com/a/73967433).
- _[OPTIONNEL]_ [Configurer la redirection](https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language)
  de toutes les URLs des pages dont la langue est celle par défaut.

## Documentation

La description des composants disponibles pour créer du contenu dans les pages est disponible dans [`content/fr/blog/posts`](content/fr/blog/posts).

## Licence

Le dépôt est publié sous licence MIT pour le code et sous licence
Etalab 2.0 pour les autres contenus.