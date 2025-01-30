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
            
            // Update badges
            document.querySelectorAll('.fr-badge--success').forEach(badge => badge.remove());
            const badgeGroup = card.querySelector('.fr-badges-group');
            const newBadge = document.createElement('p');
            newBadge.className = 'fr-badge fr-badge--sm fr-badge--success';
            newBadge.textContent = 'Affichée actuellement';
            badgeGroup.querySelector('li').appendChild(newBadge);
        });
    });
})();