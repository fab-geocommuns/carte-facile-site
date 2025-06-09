(() => {
    // State
    const state = {
        selectedStyle: null
    };

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
        styleUse: document.getElementById('map-picker-style-use'),
        styleAccessibility: document.getElementById('map-picker-style-accessibility'),
        styleThumbnail: document.getElementById('map-picker-style-thumbnail'),
        styleSourceLink: document.getElementById('map-picker-style-source')
    };

    // UI Functions
    function updateActiveIcon(style) {
        document.querySelectorAll('.map-picker-card').forEach(card => {
            const cardStyle = card.dataset.styleUrl;
            const icon = card.querySelector('.map-picker-card__active-icon');
            icon.style.display = cardStyle === style ? 'block' : 'none';
        });
    }

    function updateStyleDetails(style) {
        const styleData = CarteFacile.mapStyle[style];
        const metadata = styleData.metadata?.fr || {};

        // Update UI elements
        elements.styleThumbnail.src = CarteFacile.mapThumbnails[style];
        elements.styleThumbnail.alt = `Aperçu de ${metadata.name || style}`;
        elements.styleTitle.textContent = metadata.name || style;
        elements.styleDescription.textContent = metadata.description || '';
        elements.styleUse.textContent = metadata.use || '';
        elements.styleAccessibility.textContent = metadata.accessibility || '';
        elements.styleSourceLink.href = `https://github.com/fab-geocommuns/carte-facile/blob/main/src/map/${styleData.id}.json`;

        // Update toggle button thumbnail
        const toggleThumbnail = elements.openButton.querySelector('.map-picker-toggle__thumbnail');
        const isAerial = style.includes('aerial');
        const thumbnailStyle = isAerial ? 'simple' : 'aerial';
        toggleThumbnail.style.backgroundImage = `url(${CarteFacile.mapThumbnails[thumbnailStyle]})`;
    }

    function showStyleDetails(card) {
        const style = card.dataset.styleUrl;
        state.selectedStyle = style;

        // Mettre à jour l'icône du style sélectionné
        document.querySelectorAll('.map-picker-card[data-style-url]').forEach(card => {
            const icon = card.querySelector('.map-picker-card__active-icon');
            icon.style.display = card.dataset.styleUrl === style ? 'block' : 'none';
        });

        updateStyleDetails(style);

        // Appliquer directement le style à la carte
        map.setStyle(CarteFacile.mapStyle[style]);

        // Réappliquer les surcouches actives après le changement de style
        map.once('style.load', () => {
            document.querySelectorAll('.map-picker-card[data-overlay-id]').forEach(card => {
                const icon = card.querySelector('.map-picker-card__active-icon');
                if (icon.style.display === 'block') {
                    CarteFacile.addOverlay(map, card.dataset.overlayId);
                }
            });
        });

        elements.stylesList.style.display = 'none';
        elements.styleDetails.style.display = 'flex';
    }

    function toggleOverlay(card) {
        const overlayId = card.dataset.overlayId;
        const icon = card.querySelector('.map-picker-card__active-icon');
        const isActive = icon.style.display === 'block';

        if (isActive) {
            CarteFacile.removeOverlay(map, overlayId);
            icon.style.display = 'none';
        } else {
            CarteFacile.addOverlay(map, overlayId);
            icon.style.display = 'block';
        }
    }

    function showStylesList() {
        elements.stylesList.style.display = 'flex';
        elements.styleDetails.style.display = 'none';
        state.selectedStyle = null;
    }

    function togglePanel(isOpen) {
        elements.controlPanel.setAttribute('aria-expanded', isOpen);
        elements.openButton.setAttribute('aria-expanded', !isOpen);
    }

    // Card generation
    function createMapCard(style, data, index) {
        const template = document.getElementById('map-picker-card-template');
        const card = template.content.cloneNode(true).firstElementChild;
        
        card.dataset.styleUrl = style;
        if (index === 0) card.setAttribute('aria-current', 'true');

        const metadata = data.metadata?.fr || {};
        const name = metadata.name || style;

        const img = card.querySelector('img');
        img.src = CarteFacile.mapThumbnails[style];
        img.alt = `Aperçu de carte ${name}`;

        const title = card.querySelector('.map-picker-card__title');
        title.textContent = name;
        title.dataset.style = style;

        card.addEventListener('click', () => showStyleDetails(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showStyleDetails(card);
            }
        });

        return card;
    }

    function createOverlayCard(overlayId) {
        const template = document.getElementById('map-picker-overlay-template');
        const card = template.content.cloneNode(true).firstElementChild;
        
        card.dataset.overlayId = overlayId;
        
        const overlay = CarteFacile.mapOverlays[overlayId].neutral;
        const name = overlay.metadata?.fr?.name || overlayId;

        const img = card.querySelector('img');
        const thumbnailId = overlay.metadata?.fr?.thumbnailId || overlayId;
        if (CarteFacile.mapThumbnails[thumbnailId]) {
            img.src = CarteFacile.mapThumbnails[thumbnailId];
        } else {
            console.warn(`Thumbnail non trouvé pour la surcouche ${overlayId}, utilisation d'une image par défaut`);
            img.src = '/img/placeholder.1x1.png';
        }
        img.alt = `Aperçu de surcouche ${name}`;

        const title = card.querySelector('.map-picker-card__title');
        title.textContent = name;

        card.addEventListener('click', () => toggleOverlay(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOverlay(card);
            }
        });

        return card;
    }

    function generateMapCards() {
        Object.entries(CarteFacile.mapStyle).forEach(([style, data], index) => {
            const card = createMapCard(style, data, index);
            elements.mapStylesList.appendChild(card);
        });
    }

    function generateOverlayCards() {
        if (!CarteFacile.mapOverlays) {
            console.warn('Les surcouches ne sont pas disponibles dans cette version de Carte Facile');
            return;
        }
        Object.keys(CarteFacile.mapOverlays).forEach(overlayId => {
            const card = createOverlayCard(overlayId);
            elements.overlaysList.appendChild(card);
        });
    }

    // Event Listeners
    function initializeEventListeners() {
        elements.closeButton.addEventListener('click', () => togglePanel(false));
        elements.openButton.addEventListener('click', () => togglePanel(true));
        elements.backButton.addEventListener('click', showStylesList);
    }

    // Initialize
    function init() {
        generateMapCards();
        generateOverlayCards();
        initializeEventListeners();
        // Set initial style
        const firstStyle = Object.keys(CarteFacile.mapStyle)[0];
        updateStyleDetails(firstStyle);
    }

    init();
})(); 