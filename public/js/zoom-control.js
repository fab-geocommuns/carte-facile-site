class ZoomLevelControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl maplibregl-ctrl-group maplibregl-ctrl-zoom-level';
        this._container.innerHTML = 'Zoom : <span></span>';
        this._span = this._container.querySelector('span');
        this._span.textContent = map.getZoom().toFixed(1);
        
        map.on('zoom', () => {
            this._span.textContent = map.getZoom().toFixed(1);
        });
        
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
} 