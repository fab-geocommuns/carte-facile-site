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
        elements.styleThumbnail.src = CarteFacile.mapThumbnails[style].src;
        elements.styleThumbnail.alt = `Aperçu de ${metadata.name || style}`;
        elements.styleTitle.textContent = metadata.name || style;
        elements.styleDescription.textContent = metadata.description || '';
        elements.styleUse.textContent = metadata.use || '';
        elements.styleAccessibility.textContent = metadata.accessibility || '';
        elements.styleSourceLink.href = `https://github.com/fab-geocommuns/carte-facile/blob/main/src/map/${styleData.id}.json`;
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

    function generateMapCards() {
        Object.entries(CarteFacile.mapStyle).forEach(([style, data], index) => {
            const card = createMapCard(style, data, index);
            elements.mapStylesList.appendChild(card);
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
        initializeEventListeners();
    }

    init();
})(); 