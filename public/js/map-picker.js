(() => {
    // DOM Elements
    const elements = {
        controlPanel: document.getElementById('map-picker'),
        stylesList: document.getElementById('map-picker').querySelector('.map-picker__styles-list'),
        styleDetails: document.getElementById('map-picker').querySelector('.map-picker__style-details'),
        mapStylesList: document.getElementById('map-picker-grid'),
        overlaysList: document.getElementById('map-picker-overlays-grid'),
        closeButton: document.getElementById('map-picker').querySelector('.fr-btn--close'),
        openButton: document.getElementById('map-picker-toggle'),
        backButton: document.getElementById('map-picker-back'),
        styleTitle: document.getElementById('map-picker-style-title'),
        styleDescription: document.getElementById('map-picker-style-description'),
        styleThumbnail: document.getElementById('map-picker-style-thumbnail'),
        styleSourceLink: document.getElementById('map-picker-style-source')
    };

    // Génération des cartes de styles
    Object.entries(CarteFacile.mapStyles).forEach(([styleKey, styleObj]) => {
        const template = document.getElementById('map-picker-card-template');
        const card = template.content.cloneNode(true).firstElementChild;
        card.dataset.styleUrl = styleKey;
        const metadata = styleObj.metadata?.fr || {};
        card.querySelector('img').src = CarteFacile.mapThumbnails[styleKey];
        card.querySelector('img').alt = `Aperçu de carte ${metadata.name || styleKey}`;
        card.querySelector('.map-picker-card__title').textContent = metadata.name || styleKey;
        const icon = card.querySelector('.map-picker-card__active-icon');
        // Par défaut, le style simple est actif
        if (styleKey === 'simple') {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
        card.addEventListener('click', () => {
            map.setStyle(CarteFacile.mapStyles[styleKey]);
            elements.styleTitle.textContent = metadata.name || styleKey;
            elements.styleDescription.textContent = metadata.description || '';
            elements.styleThumbnail.src = CarteFacile.mapThumbnails[styleKey];
            elements.styleSourceLink.href = `https://github.com/fab-geocommuns/carte-facile/blob/main/src/map/${styleObj.id}.json`;
            elements.stylesList.style.display = 'none';
            elements.styleDetails.style.display = 'flex';
            // Met à jour l'icône active
            document.querySelectorAll('.map-picker-card[data-style-url]').forEach(c => {
                const i = c.querySelector('.map-picker-card__active-icon');
                i.style.display = c.dataset.styleUrl === styleKey ? 'block' : 'none';
            });
        });
        elements.mapStylesList.appendChild(card);
    });

    // Génération des cartes de surcouches
    Object.values(CarteFacile.Overlay).forEach(overlayId => {
        const template = document.getElementById('map-picker-overlay-template');
        const card = template.content.cloneNode(true).firstElementChild;
        card.dataset.overlayId = overlayId;
        const overlayMeta = CarteFacile.mapOverlays?.[overlayId]?.neutral?.metadata?.fr;
        card.querySelector('.map-picker-card__title').textContent = overlayMeta?.name || overlayId;
        const thumbnailId = overlayMeta?.thumbnailId || overlayId;
        const img = card.querySelector('img');
        if (CarteFacile.mapThumbnails[thumbnailId]) {
            img.src = CarteFacile.mapThumbnails[thumbnailId];
        } else {
            img.src = '/img/placeholder.1x1.png';
        }
        img.alt = `Aperçu de surcouche ${overlayMeta?.name || overlayId}`;
        const icon = card.querySelector('.map-picker-card__active-icon');
        icon.style.display = 'none';
        card.addEventListener('click', () => {
            // Toggle overlay
            if (card.classList.contains('active')) {
                CarteFacile.removeOverlay(map, overlayId);
                card.classList.remove('active');
                icon.style.display = 'none';
            } else {
                CarteFacile.addOverlay(map, overlayId);
                card.classList.add('active');
                icon.style.display = 'block';
            }
        });
        elements.overlaysList.appendChild(card);
    });

    // Gestion des boutons
    elements.closeButton.addEventListener('click', () => elements.controlPanel.setAttribute('aria-expanded', false));
    elements.openButton.addEventListener('click', () => elements.controlPanel.setAttribute('aria-expanded', true));
    elements.backButton.addEventListener('click', () => {
        elements.stylesList.style.display = 'flex';
        elements.styleDetails.style.display = 'none';
    });

    // Affichage initial
    elements.stylesList.style.display = 'flex';
    elements.styleDetails.style.display = 'none';

    console.log(CarteFacile.mapOverlays);
})(); 