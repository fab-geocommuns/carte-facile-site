---
title: Onglet
description: Comment intégrer un système d'onglets dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemple d'utilisation

```njk
{% raw %}
{% from "components/tab.njk" import tabs %}
{{ tabs({
    ariaLabel: "Titre du système d'onglets",
    items: [
        {
            id: 'tab1',
            label: 'Label',
            content: '<p>Contenu 1</p>'
        },
        {
            id: 'tab2',
            label: 'Label',
            content: '<p>Contenu 2</p>'
        }
    ]
}) }}
{% endraw %}
```

## Rendu
{% from "components/tab.njk" import tabs %}
{{ tabs({
    ariaLabel: "Titre du système d'onglets",
    items: [
        {
            id: 'tab1',
            label: 'Label',
            content: '<p>Contenu 1</p>'
        },
        {
            id: 'tab2',
            label: 'Label',
            content: '<p>Contenu 2</p>'
        }
    ]
}) }}

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/onglet){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}