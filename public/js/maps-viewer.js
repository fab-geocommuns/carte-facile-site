(() => {
    // Map initialization with default style
    const defaultStyle = 'https://betagouv.github.io/styles-de-cartes/maps/map_simplified_colored_ign.json';

    const map = new maplibregl.Map({
        container: 'map',
        style: window.defaultMapStyle || defaultStyle,
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
    let selectedStyleUrl = null;

    function showStyleDetails(card) {
        const styleUrl = card.dataset.styleUrl;
        const styleTitle = card.dataset.styleTitle;
        const styleDescription = card.dataset.styleDescription;
        const styleAttribution = card.dataset.styleAttribution;
        const styleVersion = card.dataset.styleVersion;
        const styleThumbnail = card.querySelector('img').src;
        const styleUse = card.dataset.styleUse;
        const styleAccessibility = card.dataset.styleAccessibility;
        const styleSource = card.dataset.styleSource;

        selectedStyleUrl = styleUrl;
        document.getElementById('style-title').textContent = styleTitle;
        document.getElementById('style-version').textContent = styleVersion || 'Non spécifiée';
        document.getElementById('style-description').textContent = styleDescription;
        document.getElementById('style-thumbnail').src = styleThumbnail;
        document.getElementById('style-thumbnail').alt = `Aperçu de ${styleTitle}`;
        document.getElementById('style-use').textContent = styleUse || 'Non spécifié';
        document.getElementById('style-accessibility').textContent = styleAccessibility || 'Non spécifié';
        document.getElementById('style-source').textContent = styleSource || 'Non spécifiée';
        document.getElementById('style-url-link').href = styleUrl;

        // Update success icon in details
        const isCurrentStyle = card.getAttribute('aria-current') === 'true';
        styleDetails.querySelector('.map-active-icon').style.display = isCurrentStyle ? 'block' : 'none';
        
        stylesList.style.display = 'none';
        styleDetails.style.display = 'flex';
    }

    function showStylesList() {
        stylesList.style.display = 'flex';
        styleDetails.style.display = 'none';
        selectedStyleUrl = null;
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

    // Add back button handler
    backButton.addEventListener('click', showStylesList);

    // Add apply style button handler
    applyStyleButton.addEventListener('click', () => {
        if (selectedStyleUrl) {
            map.setStyle(selectedStyleUrl);
            
            // Update ARIA states and checkmarks
            document.querySelectorAll('.map-card, .map-panel__style-details .map-active-icon').forEach(element => {
                const isCurrent = element.closest('.map-card')?.dataset.styleUrl === selectedStyleUrl;
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