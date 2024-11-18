---
title: Schéma de données Plan IGN
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Schéma de données Plan IGN
  parent: Références
  order: 1
  nav: docs
---

## Description du schéma

(lien à venir)

## Utilisation dans les styles de cartes

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Hydro",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "hydro_surf",
            "Polygones des surfaces aquatiques.",
            "Types de zones (marines, marais, etc).",
            "✅ Tout",
            "❌",
            ""
        ],
        [
            "hydro_reseau",
            "Lignes des voies d'eau comme les rivières, canaux, etc.",
            "Types de voies d'eau (canal, aqueduc, etc) et territoires.",
            "✅ Tout",
            "❌",
            ""
        ],
        [
            "hydro_reseau_sup",
            "Lignes des voies d'eau aériennes.",
            "Types de voie (aqueduc, canaux) et territoires.",
            "✅ Tout",
            "❌",
            ""
        ],
        [
            "hydro_reseau_sou",
            "",
            "",
            "❌",
            "❌",
            ""
        ],
        [
            "hydro_ponc",
            "",
            "",
            "❌",
            "❌",
            ""
        ],
        [
            "hydro_laisse",
            "",
            "",
            "❌",
            "❌",
            ""
        ],
        [
            "toponyme_hydro_lin",
            "Nom des surfaces et réseau d'eau ( océans, rivières, etc)",
            "",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            ""
        ],
        [
            "toponyme_hydro_ponc",
            "",
            "",
            "❌",
            "❌",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Occupation du sol (OCS)",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "ocs_nature_sol_surf",
            "",
            "",
            "❌",
            "❌",
            ""
        ],
        [
            "ocs_vegetation_surf",
            "",
            "",
            "✅ Tout",
            "❌",
            ""
        ],
        [
            "ocs_lin",
            "",
            "",
            "❌",
            "❌",
            ""
        ],
        [
            "toponyme_ocs_lin",
            "Noms des forêts.",
            "",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            ""
        ],
        [
            "toponyme_ocs_ponc",
            "Noms des bois et lieux-dits non habités.",
            "",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            "⚠️ À afficher mais ne fonctionne pas (les tuiles restent bloquées à l'ajout de cette couche).",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Orographie",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "oro_relief",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "oro_courbe",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "oro_lin",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "toponyme_oro_lin",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "oro_ponc",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_oro_ponc",
            "",
            "",
            "",
            "",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Réseau ferré",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "ferre",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "ferre_sup",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "ferre_sou",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_ferre_lin",
            "",
            "",
            "",
            "",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Routier",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "routier_surf",
            "Polygones des surfaces routières",
            "Types de surfaces (parking, dalles, etc) et noms des territoires.",
            "",
            "Idem que pour la carte épurée (IGN)",
            ""
        ],
        [
            "routier_route",
            "Lignes du réseau routier",
            "Types de routes, territoires, sens de circulation et autres types informations.",
            "",
            "Idem que pour la carte épurée (IGN)",
            ""
        ],
        [
            "routier_chemin_sup",
            "Lignes du réseau routier",
            "",
            "",
            "Idem que pour la carte épurée (IGN)",
            ""
        ],
        [
            "routier_ponc",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "routier_route_sup",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "routier_liaison",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "routier_chemin",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "routier_chemin_sou",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "routier_route_sou",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_routier_odonyme_lin",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_routier_borne",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_routier_numero_lin",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "toponyme_routier_liaison_lin",
            "",
            "",
            "",
            "",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Bâtiments",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "bati_surf",
            "Polygones des bâtiments",
            "Types de bâtiments et territoires associés.",
            "",
            "❌",
            ""
        ],
        [
            "bati_zone_surf",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "bati_ponc",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "bati_zai",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "bati_lin",
            "",
            "",
            "",
            "❌",
            ""
        ],
        [
            "toponyme_bati_ponc",
            "",
            "",
            "",
            "❌",
            ""
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Localités",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "toponyme_localite_ponc",
            "Noms des communes, quartiers et lieux-dits",
            "Noms filtrables par types et par niveaux de représentation des localités",
            "✅",
            "✅",
            "✅"
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Délimitations",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "limite_lin",
            "Lignes des limites administratives (pays, régions, départements, communes, zones naturelles, forêts, zones militaires, etc)",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "limite_ponc",
            "",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "toponyme_limite_ponc",
            "",
            "",
            "❌",
            "❌",
            "❌"
        ]
    ]
}) }}

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Parcellaire",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (IGN)",
        "Carte aérienne (IGN)",
        "Carte enrichie (IGN)"
    ],
    data: [
        [
            "parcellaire_section",
            "Polygones des sections cadastrales",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "parcellaire_parcelle",
            "Polygones des parcelles cadastrales",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "toponyme_parcellaire_section",
            "Identifiants des sections cadastrales",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "toponyme_parcellaire_parcelle",
            "Identifiants des parcelles cadastrales",
            "",
            "❌",
            "❌",
            "❌"
        ],
        [
            "toponyme_parcellaire_adresse_ponc",
            "",
            "",
            "❌",
            "❌",
            "❌"
        ]
    ]
}) }}
