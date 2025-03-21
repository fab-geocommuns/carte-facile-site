(() => {
    // URL Hash Management
    function updateHashDisplay() {
        const urlHash = document.getElementById('urlHash');
        if (urlHash) {
            urlHash.textContent = `URL hash: ${window.location.hash}`;
        }
    }

    // Update hash display periodically
    setInterval(updateHashDisplay, 100);

    const controlPanel = document.getElementById('map-selection');
    const stylesList = controlPanel.querySelector('.map-panel__styles-list');
    const styleDetails = controlPanel.querySelector('.map-panel__style-details');

    // UI Controls
    const closeButton = controlPanel.querySelector('.fr-btn--close');
    const openButton = document.getElementById('open-panel-btn');
    const backButton = document.getElementById('back-to-list');
    const applyStyleButton = document.getElementById('apply-style');

    // State
    let selectedStyle = null;

    // UI Functions
    function togglePanel(isOpen) {
        controlPanel.setAttribute('aria-expanded', isOpen);
        openButton.setAttribute('aria-expanded', !isOpen);
    }

    function updateStyleDetails(style, provider) {
        const styleData = mapStyle[provider][style];
        const metadata = styleData.metadata;
        
        // Update all detail elements
        const elements = {
            'style-title': metadata.fr.name || `${style}_${provider}`,
            'style-description': metadata.fr.description || '',
            'style-use': metadata.fr.use || 'Non spécifié',
            'style-accessibility': metadata.fr.accessibility || 'Non spécifié',
        };

        Object.entries(elements).forEach(([id, value]) => {
            document.getElementById(id).textContent = value;
        });

        // Update thumbnail
        const thumbnail = document.getElementById('style-thumbnail');
        thumbnail.src = `/img/thumbnails/${style}_${provider}.jpg`;
        thumbnail.alt = `Aperçu de ${metadata.fr?.name || `${style}_${provider}`}`;

        // Update URL link
        document.getElementById('style-url-link').href = metadata?.url || '#';
    }

    function showStyleDetails(card) {
        const [style, provider] = card.dataset.styleUrl.split('|');
        
        selectedStyle = { style, provider };
        updateStyleDetails(style, provider);

        // Update active state
        const isCurrentStyle = card.getAttribute('aria-current') === 'true';
        styleDetails.querySelector('.map-active-icon').style.display = isCurrentStyle ? 'block' : 'none';
        
        // Show details panel
        stylesList.style.display = 'none';
        styleDetails.style.display = 'flex';
    }

    function showStylesList() {
        stylesList.style.display = 'flex';
        styleDetails.style.display = 'none';
        selectedStyle = null;
    }

    function updateCardTitles() {
        document.querySelectorAll('.map-card__title').forEach(title => {
            const [style, provider] = title.closest('.map-card').dataset.styleUrl.split('|');
            const styleData = mapStyle[provider][style];
            title.textContent = styleData.metadata.fr?.name || `${style}_${provider}`;
        });
    }

    function updateActiveStates() {
        document.querySelectorAll('.map-card, .map-panel__style-details .map-active-icon').forEach(element => {
            const card = element.closest('.map-card');
            if (card) {
                const [cardStyle, cardProvider] = card.dataset.styleUrl.split('|');
                const isCurrent = cardStyle === selectedStyle.style && 
                                cardProvider === selectedStyle.provider;
                element.setAttribute('aria-current', isCurrent);
            }
            if (element.classList.contains('map-active-icon')) {
                const [cardStyle] = element.closest('.map-card')?.dataset.styleUrl.split('|') || [];
                element.style.display = cardStyle === selectedStyle.style ? 'block' : 'none';
            }
        });
    }

    // Event Listeners
    closeButton.addEventListener('click', () => togglePanel(false));
    openButton.addEventListener('click', () => togglePanel(true));
    backButton.addEventListener('click', showStylesList);

    document.querySelectorAll('.map-card').forEach(card => {
        card.addEventListener('click', () => showStyleDetails(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    applyStyleButton.addEventListener('click', () => {
        if (selectedStyle) {
            const newStyle = mapStyle[selectedStyle.provider][selectedStyle.style];
            map.setStyle(newStyle);
            updateActiveStates();
            showStylesList();
        }
    });

    // Initialize
    const map = new maplibregl.Map({
        container: 'map',
        style: mapStyle.ign.simple,
        hash: true,
        maxZoom: 18.9,
    });
    map.addControl(new maplibregl.NavigationControl());
    updateCardTitles();
    updateHashDisplay(); // Initial hash display
})();