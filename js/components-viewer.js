(() => {
    // Initialize map
    let map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyles.simple,
        //minZoom: 1.8 // Attention : depuis la version 5 de MapLibre et la visualisation en globe, ajouter un minZoom ici empêche le centrage initial de la carte prévu par défaut dans les styles (cf. https://github.com/maplibre/maplibre-gl-js/issues/5932).
        maxZoom: 18.9,
    });
    
    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.addControl(new CarteFacile.SearchControl({
        onSelect: (result) => {
            document.getElementById('components-search-result').hidden = false;
            document.getElementById('components-search-result-label').textContent = result.label;
            document.getElementById('components-search-result-json').textContent = JSON.stringify(result.data.properties, null, 2);
        },
    }));

    map.addControl(new maplibregl.GeolocateControl);

    map.addControl(new CarteFacile.MapSelectorControl());

    // Toggle info panel
    const panel = document.getElementById('components-info-panel');
    panel.querySelector('.fr-btn--close').addEventListener('click', () => panel.setAttribute('aria-expanded', 'false'));
    document.getElementById('components-info-panel-toggle').addEventListener('click', () => panel.setAttribute('aria-expanded', 'true'));

    // Update URL
    const updateUrl = () => {
        const zoom = map.getZoom().toFixed(1);
        const center = map.getCenter();
        window.location.hash = `#map=${zoom}/${center.lat.toFixed(6)}/${center.lng.toFixed(6)}`;
    };

    // Update URL when movement is complete
    map.on('moveend', updateUrl);
    // Initial update
    map.once('load', () => {
        updateUrl();
    });

    // Rendre la carte accessible globalement
    window.map = map;
})();