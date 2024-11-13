module.exports = {
    footer_content_description: `Cartes faciles est un service développé par La Fabrique des géocommuns, incubateur de communs à l’IGN. Le code source de ce site web et les ressources proposées par le service sont disponible en licence libre.`,

    // Menu tree for documentation side menu
    sidemenu: [
        {
            title: "Concepts fondamentaux",
            url: "/concepts-fondamentaux/",
            children: [
                { title: "Données géographiques", url: "donnees-geographiques" },
                { title: "Flux de données", url: "flux-de-donnes" },
                { title: "Styles de cartes", url: "styles-de-carte" },
            ]
        },
        {
            title: "Utiliser les cartes",
            url: "utiliser-les-cartes"
        },
        {
            title: "API géographiques",
            url: "/api-geographiques/",
            children: [
                { title: "Adresses", url: "adresses" },
                { title: "Découpage administratif", url: "decoupage-administratif" }
            ]
        },
        {
            title: "Pour aller plus loin",
            url: "/techniques-avancees/",
            children: [
                { title: "Styliser une carte", url: "stylisation" },
                { title: "Générer une carte", url: "generation" },
                { title: "Auto-héberger une carte", url: "auto-hebergement" }
            ]
        },
        {
            title: "Références",
            url: "/references",
            children: [
                { title: "Schémas de données", 
                    url: "/references/schemas-de-donnees",
                    children: [
                        { title: "Plan IGN", url: "/references/schemas-de-donnee/plan-ign" },
                        { title: "OpenMapTiles", url: "/references/schemas-de-donnee/openmaptiles" }
                    ]
                },
            ]
        },
    ],
};  