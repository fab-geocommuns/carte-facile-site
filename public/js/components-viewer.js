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

    const renderResultUI = (result) => {
        const container = document.getElementById('components-search-result-ui');
        container.innerHTML = '';
        const props = result.data.properties;

        const badge = document.createElement('span');
        badge.className = 'fr-badge fr-badge--sm';
        badge.textContent = result.type;
        container.appendChild(badge);

        const label = document.createElement('p');
        label.className = 'fr-text--bold fr-my-1w';
        label.textContent = result.label;
        container.appendChild(label);

        const dl = document.createElement('dl');
        dl.className = 'components-info-panel__dl';
        for (const [key, value] of Object.entries(props)) {
            const isObject = typeof value === 'object' && !Array.isArray(value);
            if (value == null || isObject || key.toLowerCase().includes('geometry')) continue;
            const item = document.createElement('div');
            item.className = 'components-info-panel__dl-item';
            const dt = document.createElement('dt');
            dt.textContent = key;
            const dd = document.createElement('dd');
            dd.textContent = Array.isArray(value) ? value.join(', ') : value;
            item.append(dt, dd);
            dl.appendChild(item);
        }
        container.appendChild(dl);
    };

    map.addControl(new CarteFacile.SearchControl({
        onSelect: (result) => {
            document.getElementById('components-search-result').hidden = false;
            renderResultUI(result);
            document.getElementById('components-search-result-json').textContent = JSON.stringify(result.data.properties, null, 2);
        },
    }));

    map.addControl(new CarteFacile.MapSelectorControl());

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