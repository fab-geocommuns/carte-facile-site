---
title: Structure du Plan IGN (⚠️ en cours)
description: Description à compléter.
layout: layouts/docs.njk
eleventyNavigation:
  key: Structure du Plan IGN (⚠️ en cours)
  parent: Références
  order: 3
  nav: docs
---

Ce fichier JSON contient les métadonnées pour un ensemble de tuiles vectorielles nommé "PLAN.IGN", produit par l'Institut National de l'Information Géographique et Forestière (IGN) en France.

https://data.geopf.fr/tms/1.0.0/PLAN.IGN/metadata.json

Style standard :&#x20;

https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json

Le tableau récapitulatif ci-dessous fournit une vue d'ensemble structurée des différentes couches du Plan IGN, organisées par thématiques. Il inclut le nom de chaque couche, son rôle, son numéro dans le fichier JSON, des exemples de valeurs possibles (lorsque disponibles), ainsi que les niveaux de zoom minimum et maximum pour chaque couche.

Cette présentation permet de mieux comprendre la structure et le contenu du jeu de données, facilitant ainsi son utilisation dans divers projets cartographiques ou d'analyse spatiale.

Ce tableau est également disponible sous la forme d'un fichier téléchargeable, en Markdown :&#x20;

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Tableau des couches du Plan IGN",
    headers: ["Thématique", "Nom de la couche", "Rôle", "N°", "Valeurs possibles (exemples)", "Zoom min", "Zoom max"],
    data: [
        ["Réseau routier et transport", "routier_surf", "Surfaces routières", 1, "DALLE_URBAINE, PARKING_SURF, CARREFOUR, SURF_PEAGE, ESCALIER_SURF, DALLE_DE_PROTECTION", 14, 19],
        ["Réseau routier et transport", "routier_route", "Réseau routier principal", 12, "AUTOROU_PEAGE, REGIONALE_2, NON_CLASSEE, PRINCIPALE_2, PRINCIPALE_CONSTR, BRET_AUTO_PEAGE_1, LOCALE_CONSTR, AUTOROU_LIBRE, NON_REVETUE_CARRO, REGIONALE_3, BRET_AUTO_PEAGE_2, AUTOROU_CONSTR, LOCALE_3, REGIONALE_1, LOCALE_1, BRET_AUTO_PEAGE_3, BRET_AUTO_LIBRE_1, REGIONALE_CONSTR, PRINCIPALE_1, NON_CLASSEE_RESTREINT, PRINCIPALE_3, LOCALE_2", 4, 19],
        ["Réseau routier et transport", "routier_chemin", "Chemins, sentiers et pistes cyclables", 30, "SENTIER, PISTE_CYSENTIER_FICTIF, PISTE_CYCLABLE, ESCALIER, CHEMIN, RUE_PIETONNE, SENTIERCLABLE", 12, 19],
        ["Réseau routier et transport", "routier_liaison", "Infrastructures de liaison", 26, "GUE_CHEMIN, PONT_TRANSBORDEUR, LIAISON_MARITIME, GUE_ROUTE, VIADUC, PONT_MOBILE_LIN, PONT_LIN, PONT_PASSERELLE, AQUEDUC", 8, 19],
        ["Réseau routier et transport", "routier_ponc", "Éléments ponctuels routiers", 21, "BARRIERE", 8, 19],
        ["Réseau routier et transport", "ferre", "Réseau ferroviaire", 22, "VF_1, VF_ELEC_2", 8, 19],
        ["Réseau routier et transport", "ferre_sup", "Réseau ferroviaire surélevé", 10, "VF_ELEC_4_SUP, VF_2_SUP", 11, 19],
        ["Réseau routier et transport", "ferre_sou", "Réseau ferroviaire souterrain", 41, "VF_1_SOU, TRANSPORT_URBAIN_SOU", 11, 18],
        ["Réseau routier et transport", "toponyme_routier_odonyme_lin", "Noms des rues", 3, "-", 16, 19],
        ["Réseau routier et transport", "toponyme_routier_numero_lin", "Numéros des routes", 38, "Nationale, Départementale", 8, 18],
        ["Réseau routier et transport", "toponyme_routier_borne", "Bornes kilométriques", 37, "-", 18, 18],
        ["Hydrographie", "hydro_surf", "Surfaces d'eau", 2, "ZONE_MARAIS, ZONE_MARINE, SURFACE_D_EAU, ZONE_D_ESTRAN, BASSIN, SURFACE_D_EAU_TEMP, SURFACE_D_EAU_SOU", 0, 19],
        ["Hydrographie", "hydro_reseau", "Cours d'eau", 9, "COURS_D_EAU, CANAL", 0, 19],
        ["Hydrographie", "hydro_reseau_sup", "Cours d'eau surélevés", 11, "AQUEDUC_SUP, CANAL_SUP", 11, 19],
        ["Hydrographie", "hydro_reseau_sou", "Cours d'eau souterrains", 27, "COURS_D_EAU_SOU, AQUEDUC_SOU", 11, 19],
        ["Hydrographie", "hydro_ponc", "Éléments ponctuels hydrographiques", 20, "SOURCE, CASCADE", 11, 19],
        ["Hydrographie", "hydro_laisse", "Lignes de laisse", 39, "LAISSE_BASSES_MERS, LAISSE_HAUTES_MERS", 13, 18],
        ["Hydrographie", "toponyme_hydro_lin", "Noms des cours d'eau", 18, "-", 8, 19],
        ["Hydrographie", "toponyme_hydro_ponc", "Noms des éléments hydrographiques ponctuels", 34, "PLAN_D_EAU, BAIE", 0, 19],
        ["Bâtiments et zones urbaines", "bati_surf", "Emprises des bâtiments", 16, "BATI_INDUSTRIEL, BATI_COMMERCIAL", 13, 19],
        ["Bâtiments et zones urbaines", "bati_ponc", "Bâtiments représentés par des points", 4, "-", 4, 19],
        ["Bâtiments et zones urbaines", "bati_lin", "Éléments linéaires bâtis", 32, "MUR, REMONTEE_MEC", 11, 19],
        ["Bâtiments et zones urbaines", "bati_zai", "Zones d'activité et d'intérêt", 29, "Préfecture, Hôpital", 14, 19],
        ["Bâtiments et zones urbaines", "bati_zone_surf", "Zones bâties (petite échelle)", 42, "ZONE_BATI", 4, 15],
        ["Bâtiments et zones urbaines", "toponyme_bati_ponc", "Noms des bâtiments remarquables", 21, "CATHEDRALE, AEROPORT", 11, 19],
        ["Occupation des sols et végétation", "ocs_nature_sol_surf", "Nature des sols", 6, "ZONE_SABLE_SEC, ZONE_ROCHEUSE", 11, 19],
        ["Occupation des sols et végétation", "ocs_vegetation_surf", "Types de végétation", 28, "ZONE_FORET_FERMEE_FEUIL, ZONE_VIGNE", 8, 19],
        ["Occupation des sols et végétation", "ocs_lin", "Éléments linéaires d'occupation du sol", 31, "CREVASSE, COULEE_EBOULIS", 14, 18],
        ["Occupation des sols et végétation", "toponyme_ocs_ponc", "Noms liés à l'occupation du sol (ponctuel)", 29, "BOIS, LIEU-DIT_NON_HABITE", 11, 19],
        ["Occupation des sols et végétation", "toponyme_ocs_lin", "Noms liés à l'occupation du sol (linéaire)", 45, "OCS_FORET_1, OCS_FORET_2", 11, 13],
        ["Relief et orographie", "oro_ponc", "Éléments ponctuels du relief", 30, "POINT_COTE, GROTTE", 11, 19],
        ["Relief et orographie", "oro_lin", "Éléments linéaires du relief", 35, "TALUS, LEVEE", 14, 18],
        ["Relief et orographie", "oro_courbe", "Courbes de niveau", 36, "CNV_NORMALE, CNV_MAITRESSE", 11, 18],
        ["Relief et orographie", "oro_relief", "Représentation du relief à petite échelle", 47, "HYPSO_1000, GLACIER", 0, 7],
        ["Relief et orographie", "toponyme_oro_ponc", "Noms liés au relief (ponctuel)", 17, "-", 4, 19],
        ["Relief et orographie", "toponyme_oro_lin", "Noms liés au relief (linéaire)", 44, "ORO_RELIEF_3, ORO_RELIEF_4", 11, 13],
        ["Limites administratives et zones spéciales", "limite_lin", "Limites administratives et autres", 15, "LIM_COMMUNE, LIM_PARC_NATUREL", 0, 19],
        ["Limites administratives et zones spéciales", "limite_ponc", "Points particuliers des limites", 46, "RESERVE_NATURELLE", 11, 13],
        ["Limites administratives et zones spéciales", "toponyme_limite_ponc", "Noms liés aux limites et zones spéciales", 46, "LIM_PARC_4, LIM_MILI_1", 8, 13],
        ["Parcellaire", "parcellaire_parcelle", "Limites des parcelles cadastrales", 25, "PARCELLE", 19, 19],
        ["Parcellaire", "parcellaire_section", "Limites des sections cadastrales", 8, "SECTION", 19, 19],
        ["Parcellaire", "toponyme_parcellaire_parcelle", "Numéros des parcelles", 7, "-", 19, 19],
        ["Parcellaire", "toponyme_parcellaire_section", "Identifiants des sections cadastrales", 31, "-", 19, 19],
        ["Parcellaire", "toponyme_parcellaire_adresse_ponc", "Adresses postales", 5, "-", 19, 19],
        ["Toponymes et localités", "toponyme_localite_ponc", "Noms des localités", 38, "LIEU-DIT-HABITE, COMMUNE_CHEF_LIEU", 0, 18],
        ["Autres", "fond_opaque", "Fond de carte opaque", 33, "-", 0, 19]
    ]
}) }}



<table data-full-width="true"><thead><tr><th width="242">Thématique</th><th width="208">Nom de la couche</th><th width="287">Rôle</th><th width="70">N°</th><th width="461">Valeurs possibles (exemples)</th><th width="100">Zoom min</th><th width="100">Zoom max</th></tr></thead><tbody><tr><td><strong>Réseau routier et transport</strong></td><td>routier_surf</td><td>Surfaces routières</td><td>1</td><td>DALLE_URBAINE, PARKING_SURF, CARREFOUR, SURF_PEAGE, ESCALIER_SURF, DALLE_DE_PROTECTION</td><td>14</td><td>19</td></tr><tr><td></td><td>routier_route</td><td>Réseau routier principal</td><td>12</td><td>AUTOROU_PEAGE, REGIONALE_2, NON_CLASSEE, PRINCIPALE_2, PRINCIPALE_CONSTR, BRET_AUTO_PEAGE_1, LOCALE_CONSTR, AUTOROU_LIBRE, NON_REVETUE_CARRO, REGIONALE_3, BRET_AUTO_PEAGE_2, AUTOROU_CONSTR, LOCALE_3, REGIONALE_1, LOCALE_1, BRET_AUTO_PEAGE_3, BRET_AUTO_LIBRE_1, REGIONALE_CONSTR, PRINCIPALE_1, NON_CLASSEE_RESTREINT, PRINCIPALE_3, LOCALE_2</td><td>4</td><td>19</td></tr><tr><td></td><td>routier_chemin</td><td>Chemins, sentiers et pistes cyclables</td><td>30</td><td>SENTIER, PISTE_CYSENTIER_FICTIF, PISTE_CYCLABLE, ESCALIER, CHEMIN, RUE_PIETONNE, SENTIERCLABLE</td><td>12</td><td>19</td></tr><tr><td></td><td>routier_liaison</td><td>Infrastructures de liaison</td><td>26</td><td>GUE_CHEMIN, PONT_TRANSBORDEUR, LIAISON_MARITIME, GUE_ROUTE, VIADUC, PONT_MOBILE_LIN, PONT_LIN, PONT_PASSERELLE, AQUEDUC</td><td>8</td><td>19</td></tr><tr><td></td><td>routier_ponc</td><td>Éléments ponctuels routiers</td><td>21</td><td>BARRIERE</td><td>8</td><td>19</td></tr><tr><td></td><td>ferre</td><td>Réseau ferroviaire</td><td>22</td><td>VF_1, VF_ELEC_2</td><td>8</td><td>19</td></tr><tr><td></td><td>ferre_sup</td><td>Réseau ferroviaire surélevé</td><td>10</td><td>VF_ELEC_4_SUP, VF_2_SUP</td><td>11</td><td>19</td></tr><tr><td></td><td>ferre_sou</td><td>Réseau ferroviaire souterrain</td><td>41</td><td>VF_1_SOU, TRANSPORT_URBAIN_SOU</td><td>11</td><td>18</td></tr><tr><td></td><td>toponyme_routier_odonyme_lin</td><td>Noms des rues</td><td>3</td><td>-</td><td>16</td><td>19</td></tr><tr><td></td><td>toponyme_routier_numero_lin</td><td>Numéros des routes</td><td>38</td><td>Nationale, Départementale</td><td>8</td><td>18</td></tr><tr><td></td><td>toponyme_routier_borne</td><td>Bornes kilométriques</td><td>37</td><td>-</td><td>18</td><td>18</td></tr><tr><td><strong>Hydrographie</strong></td><td>hydro_surf</td><td>Surfaces d'eau</td><td>2</td><td>ZONE_MARAIS, ZONE_MARINE, SURFACE_D_EAU, ZONE_D_ESTRAN, BASSIN, SURFACE_D_EAU_TEMP, SURFACE_D_EAU_SOU</td><td>0</td><td>19</td></tr><tr><td></td><td>hydro_reseau</td><td>Cours d'eau</td><td>9</td><td>COURS_D_EAU, CANAL</td><td>0</td><td>19</td></tr><tr><td></td><td>hydro_reseau_sup</td><td>Cours d'eau surélevés</td><td>11</td><td>AQUEDUC_SUP, CANAL_SUP</td><td>11</td><td>19</td></tr><tr><td></td><td>hydro_reseau_sou</td><td>Cours d'eau souterrains</td><td>27</td><td>COURS_D_EAU_SOU, AQUEDUC_SOU</td><td>11</td><td>19</td></tr><tr><td></td><td>hydro_ponc</td><td>Éléments ponctuels hydrographiques</td><td>20</td><td>SOURCE, CASCADE</td><td>11</td><td>19</td></tr><tr><td></td><td>hydro_laisse</td><td>Lignes de laisse</td><td>39</td><td>LAISSE_BASSES_MERS, LAISSE_HAUTES_MERS</td><td>13</td><td>18</td></tr><tr><td></td><td>toponyme_hydro_lin</td><td>Noms des cours d'eau</td><td>18</td><td>-</td><td>8</td><td>19</td></tr><tr><td></td><td>toponyme_hydro_ponc</td><td>Noms des éléments hydrographiques ponctuels</td><td>34</td><td>PLAN_D_EAU, BAIE</td><td>0</td><td>19</td></tr><tr><td><strong>Bâtiments et zones urbaines</strong></td><td>bati_surf</td><td>Emprises des bâtiments</td><td>16</td><td>BATI_INDUSTRIEL, BATI_COMMERCIAL</td><td>13</td><td>19</td></tr><tr><td></td><td>bati_ponc</td><td>Bâtiments représentés par des points</td><td>4</td><td>-</td><td>4</td><td>19</td></tr><tr><td></td><td>bati_lin</td><td>Éléments linéaires bâtis</td><td>32</td><td>MUR, REMONTEE_MEC</td><td>11</td><td>19</td></tr><tr><td></td><td>bati_zai</td><td>Zones d'activité et d'intérêt</td><td>29</td><td>Préfecture, Hôpital</td><td>14</td><td>19</td></tr><tr><td></td><td>bati_zone_surf</td><td>Zones bâties (petite échelle)</td><td>42</td><td>ZONE_BATI</td><td>4</td><td>15</td></tr><tr><td></td><td>toponyme_bati_ponc</td><td>Noms des bâtiments remarquables</td><td>21</td><td>CATHEDRALE, AEROPORT</td><td>11</td><td>19</td></tr><tr><td><strong>Occupation des sols et végétation</strong></td><td>ocs_nature_sol_surf</td><td>Nature des sols</td><td>6</td><td>ZONE_SABLE_SEC, ZONE_ROCHEUSE</td><td>11</td><td>19</td></tr><tr><td></td><td>ocs_vegetation_surf</td><td>Types de végétation</td><td>28</td><td>ZONE_FORET_FERMEE_FEUIL, ZONE_VIGNE</td><td>8</td><td>19</td></tr><tr><td></td><td>ocs_lin</td><td>Éléments linéaires d'occupation du sol</td><td>31</td><td>CREVASSE, COULEE_EBOULIS</td><td>14</td><td>18</td></tr><tr><td></td><td>toponyme_ocs_ponc</td><td>Noms liés à l'occupation du sol (ponctuel)</td><td>29</td><td>BOIS, LIEU-DIT_NON_HABITE</td><td>11</td><td>19</td></tr><tr><td></td><td>toponyme_ocs_lin</td><td>Noms liés à l'occupation du sol (linéaire)</td><td>45</td><td>OCS_FORET_1, OCS_FORET_2</td><td>11</td><td>13</td></tr><tr><td><strong>Relief et orographie</strong></td><td>oro_ponc</td><td>Éléments ponctuels du relief</td><td>30</td><td>POINT_COTE, GROTTE</td><td>11</td><td>19</td></tr><tr><td></td><td>oro_lin</td><td>Éléments linéaires du relief</td><td>35</td><td>TALUS, LEVEE</td><td>14</td><td>18</td></tr><tr><td></td><td>oro_courbe</td><td>Courbes de niveau</td><td>36</td><td>CNV_NORMALE, CNV_MAITRESSE</td><td>11</td><td>18</td></tr><tr><td></td><td>oro_relief</td><td>Représentation du relief à petite échelle</td><td>47</td><td>HYPSO_1000, GLACIER</td><td>0</td><td>7</td></tr><tr><td></td><td>toponyme_oro_ponc</td><td>Noms liés au relief (ponctuel)</td><td>17</td><td>-</td><td>4</td><td>19</td></tr><tr><td></td><td>toponyme_oro_lin</td><td>Noms liés au relief (linéaire)</td><td>44</td><td>ORO_RELIEF_3, ORO_RELIEF_4</td><td>11</td><td>13</td></tr><tr><td><strong>Limites administratives et zones spéciales</strong></td><td>limite_lin</td><td>Limites administratives et autres</td><td>15</td><td>LIM_COMMUNE, LIM_PARC_NATUREL</td><td>0</td><td>19</td></tr><tr><td></td><td>limite_ponc</td><td>Points particuliers des limites</td><td>46</td><td>RESERVE_NATURELLE</td><td>11</td><td>13</td></tr><tr><td></td><td>toponyme_limite_ponc</td><td>Noms liés aux limites et zones spéciales</td><td>46</td><td>LIM_PARC_4, LIM_MILI_1</td><td>8</td><td>13</td></tr><tr><td><strong>Parcellaire</strong></td><td>parcellaire_parcelle</td><td>Limites des parcelles cadastrales</td><td>25</td><td>PARCELLE</td><td>19</td><td>19</td></tr><tr><td></td><td>parcellaire_section</td><td>Limites des sections cadastrales</td><td>8</td><td>SECTION</td><td>19</td><td>19</td></tr><tr><td></td><td>toponyme_parcellaire_parcelle</td><td>Numéros des parcelles</td><td>7</td><td>-</td><td>19</td><td>19</td></tr><tr><td></td><td>toponyme_parcellaire_section</td><td>Identifiants des sections cadastrales</td><td>31</td><td>-</td><td>19</td><td>19</td></tr><tr><td></td><td>toponyme_parcellaire_adresse_ponc</td><td>Adresses postales</td><td>5</td><td>-</td><td>19</td><td>19</td></tr><tr><td><strong>Toponymes et localités</strong></td><td>toponyme_localite_ponc</td><td>Noms des localités</td><td>38</td><td>LIEU-DIT-HABITE, COMMUNE_CHEF_LIEU</td><td>0</td><td>18</td></tr><tr><td><strong>Autres</strong></td><td>fond_opaque</td><td>Fond de carte opaque</td><td>33</td><td>-</td><td>0</td><td>19</td></tr></tbody></table>
