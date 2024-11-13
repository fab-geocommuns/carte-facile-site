module.exports = {
    footer_content_description: `Cartes faciles est un service développé par La Fabrique des géocommuns, incubateur de communs à l’IGN. Le code source de ce site web et les ressources proposées par le service sont disponible en licence libre.`,

    // Menu tree for documentation side menu
    sidemenu: [
        {
            title: "Concepts fondamentaux",
            url: "/",
            children: [
                { title: "Données géographiques", url: "/docs/donnees-geographiques" },
                { title: "Flux de données", url: "/docs/flux-de-donnes" },
                { title: "Styles de cartes", url: "/docs/styles-de-carte" },
            ]
        },
        {
            title: "Utiliser les cartes",
            url: "/utiliser-les-cartes",
        },
        {
            title: "API géographiques",
            url: "/api-geographiques",
            children: [
                { title: "Adresses", url: "/api-geographiques/adresses" },
                { title: "Découpage administratif", url: "/api-geographiques/decoupage-administratif" }
            ]
        },
        {
            title: "Pour aller plus loin",
            url: "/techniques-avancees",
            children: [
                { title: "Styliser une carte", url: "/techniques-avancees/stylisation" },
                { title: "Générer une carte", url: "/techniques-avancees/generation" },
                { title: "Auto-héberger une carte", url: "/techniques-avancees/auto-hebergement" }
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