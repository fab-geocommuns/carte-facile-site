module.exports = {
    footer_content_description: `Cartes faciles est un service développé par La Fabrique des géocommuns, incubateur de communs à l’IGN. Le code source de ce site web et les ressources proposées par le service sont disponible en licence libre.`
}

// Sidemenu for documentation
module.exports = function() {
    return {
      sidemenu2: [
        { title: "Introduction", url: "/documentation/introduction/" },
        { title: "Guide", url: "/documentation/guide/" }
      ]
    };
  };

// Sidemenu for docs
module.exports = function() {
    return {
      sidemenu: [
        {
          title: "Accueil",
          url: "/",
          children: []
        },
        {
          title: "Services",
          url: "/services",
          children: [
            { title: "Consultation", url: "/services/consultation" },
            { title: "Formation", url: "/services/formation" }
          ]
        },
        {
          title: "À propos",
          url: "/a-propos",
          children: [
            { title: "Notre équipe", url: "/a-propos/equipe" },
            { title: "Nos valeurs", url: "/a-propos/valeurs" }
          ]
        },
        {
          title: "Contact",
          url: "/contact",
          children: []
        }
      ]
    };
  };