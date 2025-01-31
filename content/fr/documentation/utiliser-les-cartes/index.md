---
title: Utiliser les cartes sur son site
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Utiliser les cartes
  order: 2
  nav: docs
---

{% from "components/tab.njk" import tabs %}
{{ tabs({
    ariaLabel: "Nom du système d'onglet",
    items: [
        {
            id: 'tab1',
            label: 'Description',
            content: '<p>This is the description content</p>'
        },
        {
            id: 'tab2',
            label: 'Specifications',
            content: '<ul><li>Spec 1</li><li>Spec 2</li></ul>'
        }
    ]
}) }}