(() => {
    // Initialize map
    const map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyle.simple,
        maxZoom: 18.9,
    });
    map.addControl(new maplibregl.NavigationControl(), 'bottom-right');

    // Listen for map style changes
    document.addEventListener('mapStyleChange', (event) => {
        const { styleData } = event.detail;
        map.setStyle(styleData);
    });

    // Update the URL hash based on map state
    setInterval(() => {
        const currentHash = window.location.hash;
        const newHash = `#map=${map.getZoom().toFixed(1)}/${map.getCenter().lat.toFixed(6)}/${map.getCenter().lng.toFixed(6)}`;
        if (currentHash !== newHash) {
            window.location.hash = newHash;
        }
    }, 100);
})();