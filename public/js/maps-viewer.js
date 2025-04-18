(() => {
    // Initialize map
    const map = new maplibregl.Map({
        container: 'map',
        style: CarteFacile.mapStyle.simple,
        maxZoom: 18.9,
    });
    map.addControl(new maplibregl.NavigationControl());

    // Listen for map style changes from the picker
    document.addEventListener('mapStyleChange', (event) => {
        const { styleData } = event.detail;
        map.setStyle(styleData);
    });
})();

