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

    // Add click handlers for style switching
    document.querySelectorAll('.map-card').forEach(card => {
        card.addEventListener('click', () => {
            const styleUrl = card.dataset.styleUrl;
            map.setStyle(styleUrl);
            
            // Update ARIA states
            document.querySelectorAll('.map-card').forEach(c => {
                c.setAttribute('aria-current', 'false');
            });
            card.setAttribute('aria-current', 'true');
        });

        // Ajout de la navigation au clavier
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
})();