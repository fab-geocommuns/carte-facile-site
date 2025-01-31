module.exports = async function() {
    const styles = [
        {
            id: "standard_ign",
            url: "https://betagouv.github.io/styles-de-cartes/maps/standard_ign.json",
            isDefault: true
        },
        {
            id: "light_ign",
            url: "https://betagouv.github.io/styles-de-cartes/maps/light_ign.json"
        }
    ];

    // Fetch metadata for each style
    const enrichedStyles = await Promise.all(
        styles.map(async (style) => {
            return await fetchStyleMetadata(style);
        })
    );

    return {
        styles: enrichedStyles
    };
};

async function fetchStyleMetadata(style) {
    try {
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(style.url, { 
            signal: controller.signal,
            headers: {
                'Accept': 'application/json'
            }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const styleJson = await response.json();
        
        // Validate that we have the expected data structure
        if (!styleJson.metadata?.fr) {
            throw new Error('Invalid style file format: missing French metadata');
        }

        return {
            ...style,
            title: styleJson.metadata.fr?.name || style.id,
            description: styleJson.metadata.fr?.description || '',
            use: styleJson.metadata.fr?.use || '',
            accessibility: styleJson.metadata.fr?.accessibility || '',
            source: styleJson.metadata?.source || '',
            thumbnail: styleJson.metadata?.thumbnail || `/img/thumbnails/map-${style.id}.jpg`,
            version: styleJson.metadata?.version,
            attribution: styleJson.metadata?.attribution || '',
            isFromSource: true
        };
    } catch (error) {
        // Handle specific types of errors
        let errorMessage = 'Description non disponible';
        if (error.name === 'AbortError') {
            errorMessage = 'Le chargement a pris trop de temps';
            console.warn(`Timeout fetching style ${style.id}`);
        } else if (error.message.startsWith('HTTP')) {
            errorMessage = 'Style temporairement indisponible';
            console.warn(`HTTP error for style ${style.id}: ${error.message}`);
        } else {
            console.error(`Error fetching style ${style.id}:`, error);
        }

        // Return fallback data
        return {
            ...style,
            title: style.id,
            description: errorMessage,
            use: '',
            accessibility: '',
            source: '',
            thumbnail: `/img/thumbnails/map-${style.id}.jpg`,
            isFromSource: false,
            error: error.message
        };
    }
} 