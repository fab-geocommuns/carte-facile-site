(() => {
    // add the PMTiles plugin to the maplibregl global
    let protocol = new pmtiles.Protocol({metadata: true});
    maplibregl.addProtocol("pmtiles", protocol.tile);

    // Map initialization with default style
    const defaultStyle = 'https://betagouv.github.io/styles-de-cartes/maps/map_simplified_colored_ign.json';
    const map = new maplibregl.Map({
        container: 'map',
        style: window.defaultMapStyle || defaultStyle,
        maxZoom: 18.9,
    });

    map.addControl(new maplibregl.NavigationControl());

    // Logic for open and close the side panel
    const controlPanel = document.getElementById('map-selection');
    const closeButton = controlPanel.querySelector('.fr-btn--close');
    const openButton = document.getElementById('open-panel-btn');

    function togglePanel(isOpen) {
        controlPanel.setAttribute('aria-expanded', isOpen);
        openButton.setAttribute('aria-expanded', !isOpen);
    }

    closeButton.addEventListener('click', () => togglePanel(false));
    openButton.addEventListener('click', () => togglePanel(true));

    const stylesList = controlPanel.querySelector('.map-panel__styles-list');
    const styleDetails = controlPanel.querySelector('.map-panel__style-details');
    const backButton = document.getElementById('back-to-list');
    const applyStyleButton = document.getElementById('apply-style');
    let selectedStyleUrl = null;

    function showStyleDetails(card) {
        const styleUrl = card.dataset.styleUrl;
        const styleTitle = card.dataset.styleTitle;
        const styleDescription = card.dataset.styleDescription;
        const styleAttribution = card.dataset.styleAttribution;
        const styleVersion = card.dataset.styleVersion;
        const styleThumbnail = card.querySelector('img').src;
        const styleUse = card.dataset.styleUse;
        const styleAccessibility = card.dataset.styleAccessibility;
        const styleSource = card.dataset.styleSource;

        selectedStyleUrl = styleUrl;
        document.getElementById('style-title').textContent = styleTitle;
        document.getElementById('style-version').textContent = styleVersion || 'Non spécifiée';
        document.getElementById('style-description').textContent = styleDescription;
        document.getElementById('style-thumbnail').src = styleThumbnail;
        document.getElementById('style-thumbnail').alt = `Aperçu de ${styleTitle}`;
        document.getElementById('style-use').textContent = styleUse || 'Non spécifié';
        document.getElementById('style-accessibility').textContent = styleAccessibility || 'Non spécifié';
        document.getElementById('style-source').textContent = styleSource || 'Non spécifiée';

        // Mise à jour du lien vers le fichier de style
        document.getElementById('style-url-link').href = styleUrl;

        stylesList.style.display = 'none';
        styleDetails.style.display = 'flex';
    }

    function showStylesList() {
        stylesList.style.display = 'flex';
        styleDetails.style.display = 'none';
        selectedStyleUrl = null;
    }

    // Modify click handlers for style cards
    document.querySelectorAll('.map-card').forEach(card => {
        card.addEventListener('click', () => {
            showStyleDetails(card);
        });

        // Keep keyboard navigation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Add back button handler
    backButton.addEventListener('click', showStylesList);

    // Add apply style button handler
    applyStyleButton.addEventListener('click', () => {
        if (selectedStyleUrl) {
            map.setStyle(selectedStyleUrl);
            
            // Update ARIA states
            document.querySelectorAll('.map-card').forEach(card => {
                const isCurrent = card.dataset.styleUrl === selectedStyleUrl;
                card.setAttribute('aria-current', isCurrent);
            });

            showStylesList();
        }
    });
})();