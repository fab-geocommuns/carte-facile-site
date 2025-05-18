(() => {
    // State
    const state = {
        selectedStyle: null,
        activeOverlays: new Set()
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

    function updateOverlayActiveIcon(overlayId) {
        const card = document.querySelector(`[data-overlay-id="${overlayId}"]`);
        if (card) {
            const icon = card.querySelector('.map-picker-card__active-icon');
            icon.style.display = state.activeOverlays.has(overlayId) ? 'block' : 'none';
        }
    }

    function updateStyleDetails(style) {
        const styleData = CarteFacile.mapStyle[style];
        const metadata = styleData.metadata?.fr || {};

        // Update UI elements
        elements.styleThumbnail.src = CarteFacile.mapThumbnails[style].src;
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
        toggleThumbnail.style.backgroundImage = `url(${CarteFacile.mapThumbnails[thumbnailStyle].src})`;
    }

    function showStyleDetails(card) {
        const style = card.dataset.styleUrl;
        state.selectedStyle = style;

        updateActiveIcon(style);
        updateStyleDetails(style);

        // Dispatch event for map style change
        const event = new CustomEvent('mapStyleChange', { 
            detail: { styleData: CarteFacile.mapStyle[style] } 
        });
        document.dispatchEvent(event);

        elements.stylesList.style.display = 'none';
        elements.styleDetails.style.display = 'flex';
    }

    function toggleOverlay(overlayId) {
        if (state.activeOverlays.has(overlayId)) {
            state.activeOverlays.delete(overlayId);
            document.dispatchEvent(new CustomEvent('overlayChange', {
                detail: { type: overlayId, action: 'remove' }
            }));
        } else {
            state.activeOverlays.add(overlayId);
            document.dispatchEvent(new CustomEvent('overlayChange', {
                detail: { type: overlayId, action: 'add' }
            }));
        }
        updateOverlayActiveIcon(overlayId);
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
        img.src = CarteFacile.mapThumbnails[style].src;
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
        
        // Utiliser les métadonnées de la surcouche
        const overlay = CarteFacile.mapOverlays[overlayId].neutral;
        const name = overlay.metadata?.fr?.name || overlayId;

        const img = card.querySelector('img');
        img.src = CarteFacile.mapThumbnails[overlayId].src; // Utiliser une image par défaut
        img.alt = `Aperçu de surcouche ${name}`;

        const title = card.querySelector('.map-picker-card__title');
        title.textContent = name;

        card.addEventListener('click', () => toggleOverlay(overlayId));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOverlay(overlayId);
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