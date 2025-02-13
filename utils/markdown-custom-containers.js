module.exports = {
    callout: md => {
        const re = /^callout(\s+.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<div class="fr-callout">
    <h3 class="fr-callout__title">${md.utils.escapeHtml(params?.[1]) || ""}</h3>
    <div class="fr-callout__text">
`;
                } else {
                    // closing tag
                    return '</div></div>\n';
                }
            }
        }
    },
    quote: md => {
        const re = /^quote(\s+.*)?$/
        let params = undefined;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                params = tokens[idx].info.trim().match(re) || params;

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `
<figure class="fr-quote fr-quote--column">
  <blockquote>
`;
                } else {
                    // closing tag
                    const imageBlock = params && params[1] ? `
    <figcaption>
        <div class="fr-quote__image">
            <img src="${md.utils.escapeHtml(params[1]) || ""}" class="fr-responsive-img" alt="" />
        </div>
    </figcaption>` : undefined;
                    return `
    ${imageBlock || ""}
  </blockquote>
</figure>
<br>
\n`;
                }
            }
        }
    },
    alert: md => {
        const re = /^(info|warning|error|success)(\s+.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);
                const type = params?.[1];
                const title = md.utils.escapeHtml(params?.[2]) || '';

                if (tokens[idx].nesting === 1) {
                    title_elem = '';
                    small_class = 'fr-alert--sm';
                    if (title !== '') {
                        title_elem = `<h3 class="fr-alert__title">${title}</h3>`;
                        small_class = "";
                    }
                    // opening tag
                    return `
<div class="fr-alert fr-alert--${type} ${small_class}">
    ${title_elem}
`;
                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        }
    },
    accordion: md => {
        const re = /^(accordionsgroup|.*)?$/;
        return {
            validate: (params) => {
                return params.trim().match(re);
            },

            render: (tokens, idx) => {
                const params = tokens[idx].info.trim().match(re);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    if (params?.[1] === "accordionsgroup") {
                        return `<div class="fr-accordions-group">`;
                    } else {
                        return `
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-${idx}">
            ${md.utils.escapeHtml(params?.[1]) || ""}
        </button>
    </h3>
    <div class="fr-collapse" id="accordion-${idx}">
`;
                    }
                } else {
                    // closing tag
                    if (params?.[1] === "accordionsgroup") {
                        return `</div>`;
                    } else {
                        return '</div></section>\n';
                    }
                }
            },

            marker: "?"
        }
    },
    tabs: md => {
        const re = /^tabs\s*(.*)$/;
        let tabGroupCounter = 0;

        return {
            validate: function(params) {
                return params.trim().match(re);
            },

            render: function(tokens, idx, options, env) {
                if (tokens[idx].nesting === 1) {
                    // Incrémenter le compteur pour l'ID unique
                    tabGroupCounter++;
                    const tabGroupId = `tabs-group-${tabGroupCounter}`;
                    
                    // Récupérer le contenu des onglets
                    let content = '';
                    let i = idx + 1;
                    while (i < tokens.length && tokens[i].type !== 'container_tabs_close') {
                        if (tokens[i].type === 'inline') {
                            content += tokens[i].content + '\n';
                            tokens[i].content = '';
                            tokens[i].children = [];
                        }
                        i++;
                    }

                    // Extraire le titre des onglets
                    const m = tokens[idx].info.trim().match(re);
                    const title = md.utils.escapeHtml(m?.[1] || 'Onglets');
                    
                    // Parser le contenu des onglets
                    const tabs = content
                        .split('\n|')
                        .filter(part => part.trim())
                        .map((part, index) => {
                            const [label, ...contentLines] = part.trim().split('\n');
                            return {
                                id: `${tabGroupId}-tab-${index}`,
                                label: label.replace('|', '').trim(),
                                content: md.render(contentLines.join('\n').trim())
                            };
                        });

                    // Générer le HTML des onglets
                    return `<div class="fr-tabs" id="${tabGroupId}">
    <ul class="fr-tabs__list" role="tablist" aria-label="${title}">
        ${tabs.map((tab, index) => `
        <li role="presentation">
            <button id="tabpanel-${tab.id}"
                class="fr-tabs__tab"
                tabindex="${index}"
                role="tab"
                aria-selected="${index === 0 ? 'true' : 'false'}"
                aria-controls="tabpanel-${tab.id}-panel">
                ${tab.label}
            </button>
        </li>`).join('')}
    </ul>
    ${tabs.map((tab, index) => `
    <div id="tabpanel-${tab.id}-panel"
        class="fr-tabs__panel${index === 0 ? ' fr-tabs__panel--selected' : ''}"
        role="tabpanel"
        aria-labelledby="tabpanel-${tab.id}"
        tabindex="0">
        ${tab.content}
    </div>`).join('')}
</div>`;
                } else {
                    return '';
                }
            }
        };
    }
}