(() => {
    // Initialize map
    let map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyle.simple,
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

    // Listen for map style changes
    document.addEventListener('mapStyleChange', (event) => {
        const { styleData } = event.detail;
        map.setStyle(styleData);
    });

    // Listen for overlay changes
    document.addEventListener('overlayChange', (event) => {
        const { type, action } = event.detail;
        if (action === 'add') {
            CarteFacile.addOverlay(map, type);
        } else if (action === 'remove') {
            CarteFacile.removeOverlay(map, type);
        }
    });

})();