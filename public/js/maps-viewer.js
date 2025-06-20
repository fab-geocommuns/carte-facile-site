(() => {
    // Initialize map
    let map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyle.simple,
        //minZoom: 1.8 // Attention : depuis la version 5 de MapLibre et la visualisation en globe, ajouter un minZoom ici empêche le centrage initial de la carte prévu par défaut dans les styles (cf. https://github.com/maplibre/maplibre-gl-js/issues/5932).
        maxZoom: 18.9,
    });
    
    // Add zoom level control
    map.addControl(new CarteFacile.ZoomLevelControl(), 'top-right');
    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

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