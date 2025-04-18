(() => {
    // DOM Elements
    const elements = {
        controlPanel: document.getElementById('map-selection'),
        stylesList: document.getElementById('map-selection').querySelector('.map-panel__styles-list'),
        styleDetails: document.getElementById('map-selection').querySelector('.map-panel__style-details'),
        mapStylesList: document.getElementById('map-styles-list'),
        closeButton: document.getElementById('map-selection').querySelector('.fr-btn--close'),
        openButton: document.getElementById('open-panel-btn'),
        backButton: document.getElementById('back-to-list')
    };

    // State
    let selectedStyle = null;

    // Generate map cards
    function generateMapCards() {
        const template = document.getElementById('map-card-template');
        
        Object.entries(CarteFacile.mapStyle).forEach(([style, data], index) => {
            const card = template.content.cloneNode(true).firstElementChild;
            card.dataset.styleUrl = style;
            if (index === 0) card.setAttribute('aria-current', 'true');

            const metadata = data.metadata?.fr || {};
            const name = metadata.name || style;
            const img = card.querySelector('img');
            img.src = CarteFacile.mapThumbnails[style].src;
            img.alt = `Aperçu de carte ${name}`;

            const title = card.querySelector('.map-card__title');
            title.textContent = name;
            title.dataset.style = style;

            card.addEventListener('click', () => showStyleDetails(card));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showStyleDetails(card);
                }
            });

            elements.mapStylesList.appendChild(card);
        });
    }

    // UI Functions
    function showStyleDetails(card) {
        const style = card.dataset.styleUrl;
        selectedStyle = style;
        
        const isCurrentStyle = card.getAttribute('aria-current') === 'true';
        elements.styleDetails.querySelector('.map-active-icon').style.display = 
            isCurrentStyle ? 'block' : 'none';
        
        // Update style details with metadata
        const styleData = CarteFacile.mapStyle[style];
        const metadata = styleData.metadata?.fr || {};
        
        // Update thumbnail
        const thumbnail = elements.styleDetails.querySelector('#style-thumbnail');
        thumbnail.src = CarteFacile.mapThumbnails[style].src;
        thumbnail.alt = `Aperçu de ${metadata.name || style}`;
        
        // Update title and description
        document.getElementById('style-title').textContent = metadata.name || style;
        document.getElementById('style-description').textContent = metadata.description || '';
        
        // Update usage and accessibility
        document.getElementById('style-use').textContent = metadata.use || '';
        document.getElementById('style-accessibility').textContent = metadata.accessibility || '';
        
        // Update source link
        const sourceLink = document.getElementById('style-source-link');
        sourceLink.href = `https://github.com/fab-geocommuns/carte-facile/blob/main/src/map/${styleData.id}.json`;
        
        // Dispatch event for map style change
        const event = new CustomEvent('mapStyleChange', { detail: { style, styleData } });
        document.dispatchEvent(event);
        
        elements.stylesList.style.display = 'none';
        elements.styleDetails.style.display = 'flex';
    }

    function showStylesList() {
        elements.stylesList.style.display = 'flex';
        elements.styleDetails.style.display = 'none';
        selectedStyle = null;
    }

    function updateActiveStates() {
        document.querySelectorAll('.map-card, .map-panel__style-details .map-active-icon').forEach(element => {
            const card = element.closest('.map-card');
            if (card) {
                const cardStyle = card.dataset.styleUrl;
                const isCurrent = cardStyle === selectedStyle;
                element.setAttribute('aria-current', isCurrent);
            }
            if (element.classList.contains('map-active-icon')) {
                const cardStyle = element.closest('.map-card')?.dataset.styleUrl;
                element.style.display = cardStyle === selectedStyle ? 'block' : 'none';
            }
        });
    }

    function togglePanel(isOpen) {
        elements.controlPanel.setAttribute('aria-expanded', isOpen);
        elements.openButton.setAttribute('aria-expanded', !isOpen);
    }

    // Event Listeners
    elements.closeButton.addEventListener('click', () => togglePanel(false));
    elements.openButton.addEventListener('click', () => togglePanel(true));
    elements.backButton.addEventListener('click', showStylesList);

    // Initialize
    generateMapCards();
})(); 