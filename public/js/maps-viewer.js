(() => {
    // Map initialization with default style
    const defaultStyle = getMap('standard', 'ign');

    // Créer la carte
    const map = new maplibregl.Map({
        container: 'map',
        style: defaultStyle,
        hash: true,
        maxZoom: 18.9,
    });

    map.addControl(new maplibregl.NavigationControl());

    // Set an interval to update the url hash in a map overlay
    const urlHash = document.getElementById('urlHash');
    setInterval(() => {
        urlHash.textContent = `URL hash: ${window.location.hash}`;
    }, 100);

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

    const stylesList = controlPanel.querySelector('.map-panel__styles-list');
    const styleDetails = controlPanel.querySelector('.map-panel__style-details');
    const backButton = document.getElementById('back-to-list');
    const applyStyleButton = document.getElementById('apply-style');
    let selectedStyle = null;

    function showStyleDetails(card) {
        const [style, provider] = card.dataset.styleUrl.split('|');
        const mapStyle = getMap(style, provider);
        const metadata = mapStyle.metadata;
        
        selectedStyle = { style, provider };
        document.getElementById('style-title').textContent = metadata.fr?.name || `${style}_${provider}`;
        document.getElementById('style-version').textContent = metadata?.version || 'Non spécifiée';
        document.getElementById('style-description').textContent = metadata.fr?.description || '';
        document.getElementById('style-thumbnail').src = `/img/thumbnails/${style}_${provider}.jpg`;
        document.getElementById('style-thumbnail').alt = `Aperçu de ${metadata.fr?.name || `${style}_${provider}`}`;
        document.getElementById('style-use').textContent = metadata.fr?.use || 'Non spécifié';
        document.getElementById('style-accessibility').textContent = metadata.fr?.accessibility || 'Non spécifié';
        document.getElementById('style-source').textContent = metadata?.source || 'Non spécifiée';
        document.getElementById('style-url-link').href = metadata?.url || '#';

        // Update success icon in details
        const isCurrentStyle = card.getAttribute('aria-current') === 'true';
        styleDetails.querySelector('.map-active-icon').style.display = isCurrentStyle ? 'block' : 'none';
        
        stylesList.style.display = 'none';
        styleDetails.style.display = 'flex';
    }

    function showStylesList() {
        stylesList.style.display = 'flex';
        styleDetails.style.display = 'none';
        selectedStyle = null;
    }

    // Modify click handlers for style cards
    document.querySelectorAll('.map-card').forEach(card => {
        card.addEventListener('click', () => {
            showStyleDetails(card);
        });

        // Keep keyboard navigation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Mettre à jour les titres des cartes avec les métadonnées
    document.querySelectorAll('.map-card__title').forEach(title => {
        const style = title.dataset.style;
        const provider = title.dataset.provider;
        const mapStyle = getMap(style, provider);
        title.textContent = mapStyle.metadata.fr?.name || `${style}_${provider}`;
    });

    // Add back button handler
    backButton.addEventListener('click', showStylesList);

    // Add apply style button handler
    applyStyleButton.addEventListener('click', () => {
        if (selectedStyle) {
            const newStyle = getMap(selectedStyle.style, selectedStyle.provider);
            map.setStyle(newStyle);
            
            // Update ARIA states and checkmarks
            document.querySelectorAll('.map-card, .map-panel__style-details .map-active-icon').forEach(element => {
                const isCurrent = element.closest('.map-card')?.dataset.styleUrl === `${selectedStyle.style}|${selectedStyle.provider}`;
                if (element.classList.contains('map-card')) {
                    element.setAttribute('aria-current', isCurrent);
                }
                // Pour l'icône dans les détails
                if (element.classList.contains('map-active-icon')) {
                    element.style.display = isCurrent ? 'block' : 'none';
                }
            });

            showStylesList();
        }
    });
})();