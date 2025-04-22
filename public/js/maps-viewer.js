(() => {
    // Initialize map
    let map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyle.simple,
        maxZoom: 18.9,
    });
    
    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'bottom-right');

    // Update zoom display
    const updateZoom = () => {
        document.getElementById('map-zoom-level-value').textContent = map.getZoom().toFixed(1);
    };
    // Update URL
    const updateUrl = () => {
        const zoom = map.getZoom().toFixed(1);
        const center = map.getCenter();
        window.location.hash = `#map=${zoom}/${center.lat.toFixed(6)}/${center.lng.toFixed(6)}`;
    };

    // Update zoom during zoom (throttled by MapLibre GL)
    map.on('zoom', updateZoom);
    // Update URL when movement is complete
    map.on('moveend', updateUrl);
    // Initial update
    map.once('load', () => {
        updateZoom();
        updateUrl();
    });

    // Listen for map style changes
    document.addEventListener('mapStyleChange', (event) => {
        const { styleData } = event.detail;
        map.setStyle(styleData);
    });

})();