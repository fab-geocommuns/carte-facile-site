---
title: Schéma de données OpenMapTiles
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Schéma de données OpenMapTiles
  parent: Références
  order: 2
  nav: docs
---

:::callout 🛠️ Page en cours de rédaction
Le contenu n'est pas représentatif du contenu final.
:::

## Description du schéma

https://openmaptiles.org/schema/

### Pour inspecter les contenus du schéma

https://openmaptiles.org/inspect/#0.54/0/0

## Utilisation dans les styles de cartes

Voici le tableau récapitulatif des couches de données disponibles dans le schéma Open vector tile et leur utilisation dans les styles proposés sur notre service :&#x20;

<table data-full-width="true"><thead><tr><th width="211">Nom de la couche</th><th width="330">Description</th><th width="397">Champs</th><th width="323">Style épuré (OSM)</th><th width="311">Carte aérienne (OSM)</th><th width="284">Carte enrichie (OSM)</th></tr></thead><tbody><tr><td><a href="https://openmaptiles.org/schema/#aerodrome_label">aerodrome_label</a></td><td>Étiquettes pour les aérodromes.</td><td>Contient les noms, la classification des aérodromes (international, régional, etc), codes IATA/ICAO et élévations.</td><td>❌</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#aeroway">aeroway</a></td><td>Polygones liés aux infrastructures aéroportuaires.</td><td>Référence les pistes, héliports, voies de circulation, et autres installations aéroportuaires. Les bâtiments des aéroports sont contenus dans la couche <code>building</code>.</td><td>✅<br>Tous les polygones sans distinction et une couleur identique au calque pour la couche <code>landuse</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#boundary">boundary</a></td><td>Lignes des frontières administratives et polygones des terres aborigènes.</td><td>Identifie les niveaux administratifs, noms de régions et statuts de frontières (disputées, maritimes).</td><td>✅ <br>Un calque avec lignes des pays (<code>admin_level==4</code>).<br>Un calque avec lignes des pays (<code>admin_level&#x3C;=3</code>).<br>Pour ces deux calques, exclusion de l'affichage des frontières maritimes (<code>maritime==0</code>).</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#building">building</a></td><td>Polygones de tous les bâtiments d'OpenStreetMap.</td><td>Précision sur la hauteur pour le rendu 3D, la couleur et les parties à masquer en 3D.</td><td>✅<br>Tous les polygones sans distinction.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#housenumber">housenumber</a></td><td>Numéros des bâtiments pour les étiqueter sur la carte.</td><td>Fournit les numéros d'adresse des bâtiments ou zones.</td><td>❌</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#landcover">landcover</a></td><td>Couverture terrestre (forêts, prairies, zones rocheuses, etc.). <br><em>À faible zoom, les données proviennent de Natural Earth pour les glaciers et les banquises. À zoom élevé, la couverture terrestre est dérivée des balises OSM.</em></td><td>Permet de préciser la <code>class</code> pour attribuer des couleurs naturelles à la couverture terrestre. : <code>farmland</code>, <code>ice</code>, <code>wood</code>, <code>rock</code>, <code>grass</code>, <code>wetland</code>, <code>sand</code>.<br>Des <code>subclass</code> permettent de spécifier certaines couches (jardins, mangroves, parcs, etc). <a href="https://openmaptiles.org/schema/#landcover">Voir la liste complète</a></td><td>✅<br>Un calque pour afficher les glaciers <code>class==ice</code>, un calque pour les forêts<code>class==wood</code> et un calque pour les zones d'herbes <code>class==grass</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#landuse">landuse</a></td><td>Utilisation des terres par les humains.<br><em>À faible zoom, les données proviennent de Natural Earth pour les zones urbaines. À zoom élevé, les données proviennent des balises OSM.</em></td><td>Utiliser la <code>class</code> pour attribuer des couleurs aux zones. <a href="https://openmaptiles.org/schema/#landuse">Voir la liste complète</a></td><td>✅<br>Tous les polygones sans distinction.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#mountain_peak">mountain_peak</a></td><td>Sommets de collines ou montagnes.</td><td>Contient les noms des sommets, la <code>class</code> (<code>peak</code>, <code>volcano</code>, <a href="https://openmaptiles.org/schema/#mountain_peak">etc</a>), leur élévation et leur importance relative.</td><td>✅<br>Affichage des point et noms associés pour <code>class==peak</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#park">park</a></td><td>Zones naturelles et protégées.</td><td>Regroupe les parcs, réserves naturelles, et zones protégées avec leurs noms et classifications.</td><td>✅<br>Tous les polygones sans distinction.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#place">place</a></td><td>Lieux comme les pays, états, villes, et îles.</td><td>Indique les noms des lieux, leur importance, s'ils sont des capitales et le type de lieux (<code>country</code>, <code>city</code>, <a href="https://openmaptiles.org/schema/#place">etc</a>).</td><td>✅<br>Différentiation et affichage progressif des noms des lieux pour les <code>class</code> : <code>country</code>, <code>state</code>,  <code>city</code>, <code>village</code>, <code>town</code>, <code>suburb</code> et <code>hamlet</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#poi">poi</a></td><td>Points d'intérêt (commodités, sports, magasins, attractions touristiques, etc).</td><td>Recense les points d'intérêt avec leurs noms, <a href="https://openmaptiles.org/schema/#poi">types et autres spécificités</a>.</td><td>❌</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#transportation">transportation</a></td><td>Infrastructures de transport (routes, chemins de fer, pistes cyclables, etc.).</td><td>Classes et sous-classes qui identifient les types de routes, infrastructures de transports et des statuts spécifiques (tunnels, sens uniques, services, etc).</td><td>✅<br>Plusieurs calques affichent progressivement les routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>minor</code>, <code>service</code>, <code>path</code>, <code>track</code>.<br>Différenciation des voies ferroviaires avec <code>class==rail</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#transportation_name">transportation_name</a></td><td>Noms des infrastructures de transport.</td><td>Fournit les noms et les types des routes et infrastructures de transport.</td><td>✅<br>Plusieurs calques affichent progressivement les noms des routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>minor</code>, <code>service</code>, <code>path</code>, <code>track</code>.<br>Plusieurs calques affichent petit à petit les codes des routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#water">water</a></td><td>Polygones des masses d'eau (rivières, lacs, mers, océans).</td><td>Spécifie les types de plans d'eau comme les rivières, lacs, océans, etc.</td><td>✅<br>Tous les polygones, sauf les piscines (<code>class==swimming_pool</code>).</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#water_name">water_name</a></td><td>Nom et lignes médianes des masses d'eau pour l'étiquetage.</td><td>Fournit les noms des lacs, mers, et autres masses d'eau. Concernant les lacs, seulement les plus grands ont un label. </td><td>✅<br>Tous les noms sans distinction.</td><td></td><td></td></tr><tr><td><a href="https://openmaptiles.org/schema/#waterway">waterway</a></td><td>Voies d'eau comme les rivières, canaux, ruisseaux et lignes centrales des rivières et des lacs pour les niveaux de zoom faibles.</td><td>Spécifie les noms pour l'étiquetage et les types des voies navigables.</td><td>✅<br>Toutes les lignes sans distinction.</td><td></td><td></td></tr></tbody></table>

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Tableau des couches de données d'Openmaptiles",
    headers: [
        "Nom de la couche",
        "Description",
        "Champs",
        "Carte épurée (OSM)",
        "Carte enrichie (OSM)"
    ],
    data: [
        [
            "<a href='https://openmaptiles.org/schema/#aerodrome_label'>aerodrome_label</a>",
            "Étiquettes pour les aérodromes.",
            "Contient les noms, la classification des aérodromes (international, régional, etc), codes IATA/ICAO et élévations.",
            "❌",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#aeroway'>aeroway</a>",
            "Polygones liés aux infrastructures aéroportuaires.",
            "Référence les pistes, héliports, voies de circulation, et autres installations aéroportuaires. Les bâtiments des aéroports sont contenus dans la couche <code>building</code>.",
            "✅<br>Tous les polygones sans distinction et une couleur identique au calque pour la couche <code>landuse</code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#boundary'>boundary</a>",
            "Lignes des frontières administratives et polygones des terres aborigènes.",
            "Identifie les niveaux administratifs, noms de régions et statuts de frontières (disputées, maritimes).",
            "✅ <br>Un calque avec lignes des pays (<code>admin_level==4</code>).<br>Un calque avec lignes des pays (<code>admin_level<=3</code>).<br>Pour ces deux calques, exclusion de l'affichage des frontières maritimes (<code>maritime==0</code>).",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#building'>building</a>",
            "Polygones de tous les bâtiments d'OpenStreetMap.",
            "Précision sur la hauteur pour le rendu 3D, la couleur et les parties à masquer en 3D.",
            "✅<br>Tous les polygones sans distinction.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#housenumber'>housenumber</a>",
            "Numéros des bâtiments pour les étiqueter sur la carte.",
            "Fournit les numéros d'adresse des bâtiments ou zones.",
            "❌",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#landcover'>landcover</a>",
            "Couverture terrestre (forêts, prairies, zones rocheuses, etc.). <br><em>À faible zoom, les données proviennent de Natural Earth pour les glaciers et les banquises. À zoom élevé, la couverture terrestre est dérivée des balises OSM.</em>",
            "Permet de préciser la <code>class</code> pour attribuer des couleurs naturelles à la couverture terrestre : <code>farmland</code>, <code>ice</code>, <code>wood</code>, <code>rock</code>, <code>grass</code>, <code>wetland</code>, <code>sand</code>.<br>Des <code>subclass</code> permettent de spécifier certaines couches (jardins, mangroves, parcs, etc). <a href='https://openmaptiles.org/schema/#landcover'>Voir la liste complète</a>",
            "✅<br>Un calque pour afficher les glaciers <code>class==ice</code>, un calque pour les forêts <code>class==wood</code> et un calque pour les zones d'herbes <code>class==grass</code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#landuse'>landuse</a>",
            "Utilisation des terres par les humains.<br><em>À faible zoom, les données proviennent de Natural Earth pour les zones urbaines. À zoom élevé, les données proviennent des balises OSM.</em>",
            "Utiliser la <code>class</code> pour attribuer des couleurs aux zones. <a href='https://openmaptiles.org/schema/#landuse'>Voir la liste complète</a>",
            "✅<br>Tous les polygones sans distinction.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#mountain_peak'>mountain_peak</a>",
            "Sommets de collines ou montagnes.",
            "Contient les noms des sommets, la <code>class</code> (<code>peak</code>, <code>volcano</code>, <a href='https://openmaptiles.org/schema/#mountain_peak'>etc</a>), leur élévation et leur importance relative.",
            "✅<br>Affichage des points et noms associés pour <code>class==peak</code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#park'>park</a>",
            "Zones naturelles et protégées.",
            "Regroupe les parcs, réserves naturelles, et zones protégées avec leurs noms et classifications.",
            "✅<br>Tous les polygones sans distinction.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#place'>place</a>",
            "Lieux comme les pays, états, villes, et îles.",
            "Indique les noms des lieux, leur importance, s'ils sont des capitales et le type de lieux (<code>country</code>, <code>city</code>, <a href='https://openmaptiles.org/schema/#place'>etc</a>).",
            "✅<br>Différentiation et affichage progressif des noms des lieux pour les <code>class</code> : <code>country</code>, <code>state</code>, <code>city</code>, <code>village</code>, <code>town</code>, <code>suburb</code> et <>hamlet</ code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#poi'>poi</a>",
            "Points d'intérêt (commodités, sports, magasins, attractions touristiques, etc).",
            "Recense les points d'intérêt avec leurs noms, <a href='https://openmaptiles.org/schema/#poi'>types et autres spécificités</a>.",
            "❌",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#transportation'>transportation</a>",
            "Infrastructures de transport (routes, chemins de fer, pistes cyclables, etc.).",
            "Classes et sous-classes qui identifient les types de routes, infrastructures de transports et des statuts spécifiques (tunnels, sens uniques, services, etc).",
            "✅<br>Plusieurs calques affichent progressivement les routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>minor</code>, <code>service</code>, <code>path</code>, <code>track</code>.<br>Différenciation des voies ferroviaires avec <code>class==rail</code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#transportation_name'>transportation_name</a>",
            "Noms des infrastructures de transport.",
            "Fournit les noms et les types des routes et infrastructures de transport.",
            "✅<br>Plusieurs calques affichent progressivement les noms des routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>minor</code>, <code>service</code>, <code>path</code>, <code>track</code>.<br>Plusieurs calques affichent petit à petit les codes des routes selon le niveau de zoom, pour les <code>class</code> : <code>motorway</code>, <code>trunk</code>, <code>primary</code>, <code>secondary</code>, <code>tertiary</code>.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#water'>water</a>",
            "Polygones des masses d'eau (rivières, lacs, mers, océans).",
            "Spécifie les types de plans d'eau comme les rivières, lacs, océans, etc.",
            "✅<br>Tous les polygones, sauf les piscines (<code>class==swimming_pool</code>).",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#water_name'>water_name</a>",
            "Noms des masses d'eau.",
            "Affiche les noms des rivières, lacs, mers, et autres masses d'eau.",
            "✅<br>Affichage des noms des plans d'eau, avec des tailles adaptées selon le niveau de zoom.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#building'>building</a>",
            "Polygones de tous les bâtiments d'OpenStreetMap.",
            "Précision sur la hauteur pour le rendu 3D, la couleur et les parties à masquer en 3D.",
            "✅<br>Tous les polygones sans distinction.",
            ""
        ],
        [
            "<a href='https://openmaptiles.org/schema/#housenumber'>housenumber</a>",
            "Numéros des bâtiments pour les étiqueter sur la carte.",
            "Fournit les numéros d'adresse des bâtiments ou zones.",
            "❌",
            ""
        ]
    ]
}) }}
