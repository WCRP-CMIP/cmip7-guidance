/**
 * Embed.js - Embedded view system for shadcn MkDocs theme
 * 
 * USAGE:
 * 1. Add ?embed=true to any page URL for embed mode
 * 2. Click floating expand button (⤢) in bottom-right corner  
 * 3. Use F11 or ESC keyboard shortcuts
 * 4. Tables automatically get search/filter functionality in expanded view
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Embed.js v9 (shadcn) loaded...');
    
    // Initialize
    cleanupOldButtons();
    addFloatingExpandButton();
    addKeyboardShortcuts();
    enhanceTables();
    setupTableFooterControls();
    
    // Check for embed parameter
    const urlParams = new URLSearchParams(window.location.search);
    const embedMode = urlParams.get('embed') === 'true' || 
                     urlParams.get('embed') === '1' ||
                     urlParams.get('fullscreen') === 'true';
    
    if (embedMode) {
        console.log('Auto-entering embed mode');
        setTimeout(enterEmbedMode, 300);
    }
});

/**
 * Clean up any old button systems
 */
function cleanupOldButtons() {
    const oldButtons = document.querySelectorAll(
        '.minimize-maximize-btn, .fullscreen-btn, .table-maximize-btn, .page-maximize-btn'
    );
    oldButtons.forEach(btn => btn.remove());
    
    document.body.classList.remove('fullscreen-mode');
}

/**
 * Add floating expand button
 */
function addFloatingExpandButton() {
    if (document.querySelector('.floating-expand-btn')) return;
    
    const button = document.createElement('button');
    button.className = 'floating-expand-btn';
    button.innerHTML = '⤢';
    button.title = 'Toggle Fullscreen (F11)';
    button.setAttribute('aria-label', 'Toggle fullscreen');
    
    // Inline styles to ensure visibility regardless of CSS loading
    Object.assign(button.style, {
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '50px',
        height: '50px',
        background: 'var(--guidance-primary, #3b82f6)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        fontSize: '1.5rem',
        cursor: 'pointer',
        zIndex: '9999',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
        if (document.body.classList.contains('embed-mode')) {
            exitEmbedMode();
        } else {
            enterEmbedMode();
        }
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    console.log('Floating button added');
}

/**
 * Enter embed mode - shows only article content
 */
function enterEmbedMode() {
    console.log('Entering embed mode');
    
    document.body.classList.add('embed-mode');
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('embed', 'true');
    window.history.replaceState({}, '', url);
    
    // Get the article element
    const article = document.querySelector('article');
    if (!article) {
        console.error('No article found');
        return;
    }
    
    // Create fullscreen overlay with article content
    const overlay = document.createElement('div');
    overlay.id = 'embed-overlay';
    overlay.className = 'embed-overlay';
    
    // Clone article content
    const articleClone = article.cloneNode(true);
    articleClone.style.cssText = `
        max-width: 100%;
        width: 100%;
        margin: 5px;
        padding: 0;
    `;
    
    overlay.appendChild(articleClone);
    document.body.appendChild(overlay);
    
    // Re-enhance tables in the cloned content
    const tables = overlay.querySelectorAll('table');
    tables.forEach((table, index) => {
        if (table.dataset.enhanced !== 'true') {
            addTableControls(table, index + 1000); // Offset index to avoid conflicts
            addTableSorting(table);
        }
    });
    
    // Show table controls in overlay
    overlay.querySelectorAll('.table-controls').forEach(controls => {
        controls.style.display = 'flex';
    });
    
    // Convert button to close button
    const btn = document.querySelector('.floating-expand-btn');
    if (btn) {
        btn.innerHTML = '×';
        btn.title = 'Close Fullscreen (ESC)';
        Object.assign(btn.style, {
            position: 'fixed',
            top: '15px',
            right: '15px',
            bottom: 'auto',
            width: '36px',
            height: '36px',
            background: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '6px',
            fontSize: '20px',
            fontWeight: 'bold',
            zIndex: '10001'
        });
    }
    
    console.log('Embed mode activated');
}

/**
 * Exit embed mode
 */
function exitEmbedMode() {
    console.log('Exiting embed mode');
    
    document.body.classList.remove('embed-mode');
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.delete('embed');
    url.searchParams.delete('fullscreen');
    window.history.replaceState({}, '', url);
    
    // Remove overlay
    const overlay = document.getElementById('embed-overlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Restore button
    const btn = document.querySelector('.floating-expand-btn');
    if (btn) {
        btn.innerHTML = '⤢';
        btn.title = 'Toggle Fullscreen (F11)';
        Object.assign(btn.style, {
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            top: 'auto',
            width: '50px',
            height: '50px',
            background: 'var(--guidance-primary, #3b82f6)',
            borderRadius: '50%',
            fontSize: '1.5rem',
            fontWeight: 'normal',
            zIndex: '9999'
        });
    }
    
    console.log('Embed mode deactivated');
}

/**
 * Keyboard shortcuts
 */
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.classList.contains('embed-mode')) {
            exitEmbedMode();
            e.preventDefault();
        }
        
        if (e.key === 'F11') {
            e.preventDefault();
            if (document.body.classList.contains('embed-mode')) {
                exitEmbedMode();
            } else {
                enterEmbedMode();
            }
        }
    });
}

/**
 * Enhance all tables with sorting and filtering
 */
function enhanceTables() {
    // Target tables more broadly, including those in .table-wrapper
    const tables = document.querySelectorAll('article table, main table, .prose table, .typography table, .table-wrapper table');
    console.log(`Found ${tables.length} tables to enhance`);
    
    tables.forEach((table, index) => {
        addTableControls(table, index);
        addTableSorting(table);
        wrapTableForResponsive(table);
    });
}

/**
 * Add search controls above a table
 */
function addTableControls(table, index) {
    // Skip if already has controls
    if (table.dataset.enhanced === 'true') return;
    table.dataset.enhanced = 'true';
    
    const controls = document.createElement('div');
    controls.className = 'table-controls';
    controls.dataset.tableIndex = index;
    
    // Search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search table...';
    searchInput.className = 'table-search';
    
    Object.assign(searchInput.style, {
        padding: '8px 12px',
        border: '1px solid var(--guidance-border, #e2e8f0)',
        borderRadius: '6px',
        fontSize: '0.875rem',
        width: '250px',
        maxWidth: '100%',
        marginBottom: '10px',
        background: 'var(--guidance-bg, white)',
        color: 'var(--guidance-text, #1e293b)'
    });
    
    searchInput.addEventListener('input', () => filterTable(table, searchInput.value));
    
    // Expand button for individual table
    const expandBtn = document.createElement('button');
    expandBtn.className = 'table-expand-btn';
    expandBtn.innerHTML = '⤢';
    expandBtn.title = 'Expand table';
    
    Object.assign(expandBtn.style, {
        padding: '8px 12px',
        border: '1px solid var(--guidance-border, #e2e8f0)',
        borderRadius: '6px',
        background: 'var(--guidance-bg-secondary, #f8fafc)',
        cursor: 'pointer',
        marginLeft: '10px',
        fontSize: '1rem'
    });
    
    expandBtn.addEventListener('click', () => expandTable(table));
    
    controls.appendChild(searchInput);
    controls.appendChild(expandBtn);
    
    // Style controls container
    Object.assign(controls.style, {
        display: 'none', // Hidden by default, shown in embed mode
        alignItems: 'center',
        marginBottom: '10px',
        flexWrap: 'wrap',
        gap: '10px'
    });
    
    // Insert before the table or its wrapper
    const insertTarget = table.closest('.table-wrapper') || table;
    insertTarget.parentNode.insertBefore(controls, insertTarget);
}

/**
 * Wrap table for responsive scrolling
 */
function wrapTableForResponsive(table) {
    // Skip if already wrapped by theme or us
    if (table.parentElement.classList.contains('table-responsive') || 
        table.parentElement.classList.contains('table-wrapper')) {
        return;
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    Object.assign(wrapper.style, {
        overflowX: 'auto',
        maxWidth: '100%'
    });
    
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
}

/**
 * Add sorting to table headers
 */
function addTableSorting(table) {
    const headers = table.querySelectorAll('th');
    
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.title = 'Click to sort';
        
        // Add sort indicator
        const indicator = document.createElement('span');
        indicator.className = 'sort-indicator';
        indicator.style.marginLeft = '5px';
        indicator.style.opacity = '0.5';
        indicator.innerHTML = '↕';
        header.appendChild(indicator);
        
        header.addEventListener('click', () => sortTable(table, index, header));
    });
}

/**
 * Sort table by column
 */
function sortTable(table, columnIndex, header) {
    const tbody = table.querySelector('tbody') || table;
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(row => row.querySelector('td'));
    
    if (rows.length === 0) return;
    
    // Determine sort direction
    const currentSort = header.dataset.sort || 'none';
    const newSort = currentSort === 'asc' ? 'desc' : 'asc';
    
    // Reset all headers
    table.querySelectorAll('th').forEach(th => {
        th.dataset.sort = 'none';
        const ind = th.querySelector('.sort-indicator');
        if (ind) ind.innerHTML = '↕';
    });
    
    // Set current header
    header.dataset.sort = newSort;
    const indicator = header.querySelector('.sort-indicator');
    if (indicator) indicator.innerHTML = newSort === 'asc' ? '↑' : '↓';
    
    // Sort rows
    rows.sort((a, b) => {
        const aCell = a.cells[columnIndex];
        const bCell = b.cells[columnIndex];
        if (!aCell || !bCell) return 0;
        
        const aText = aCell.textContent.trim();
        const bText = bCell.textContent.trim();
        
        // Try numeric sort
        const aNum = parseFloat(aText.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bText.replace(/[^0-9.-]/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return newSort === 'asc' ? aNum - bNum : bNum - aNum;
        }
        
        // Text sort
        return newSort === 'asc' ? 
            aText.localeCompare(bText) : 
            bText.localeCompare(aText);
    });
    
    // Reorder
    rows.forEach(row => tbody.appendChild(row));
}

/**
 * Filter table rows
 */
function filterTable(table, term) {
    const tbody = table.querySelector('tbody') || table;
    const rows = tbody.querySelectorAll('tr');
    const searchTerm = term.toLowerCase();
    
    rows.forEach(row => {
        if (row.querySelector('th')) return; // Skip header rows
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

/**
 * Expand individual table to fullscreen
 */
function expandTable(table) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'table-fullscreen-overlay';
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'var(--guidance-bg, white)',
        zIndex: '10000',
        overflow: 'auto',
        padding: '10px'
    });
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Close (ESC)';
    Object.assign(closeBtn.style, {
        position: 'fixed',
        top: '10px',
        right: '10px',
        width: '36px',
        height: '36px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: '10001'
    });
    
    // Search for expanded table
    const searchContainer = document.createElement('div');
    Object.assign(searchContainer.style, {
        marginBottom: '10px',
        position: 'sticky',
        top: '0',
        background: 'var(--guidance-bg, white)',
        padding: '5px 0',
        zIndex: '1',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    });
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search table...';
    Object.assign(searchInput.style, {
        padding: '8px 12px',
        border: '1px solid var(--guidance-primary, #3b82f6)',
        borderRadius: '6px',
        fontSize: '0.875rem',
        width: '250px',
        maxWidth: '100%',
        outline: 'none'
    });
    
    searchContainer.appendChild(searchInput);
    
    // Clone table and set full width
    const tableClone = table.cloneNode(true);
    Object.assign(tableClone.style, {
        width: '100%',
        maxWidth: '100%',
        tableLayout: 'auto'
    });
    
    // Wire up search
    searchInput.addEventListener('input', () => filterTable(tableClone, searchInput.value));
    
    // Re-wire sorting on the cloned table (don't add new indicators, just event listeners)
    const headers = tableClone.querySelectorAll('th');
    headers.forEach((header, index) => {
        // Remove existing click handlers by cloning
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
        
        // Add click handler for sorting
        newHeader.addEventListener('click', () => sortTable(tableClone, index, newHeader));
    });
    
    overlay.appendChild(closeBtn);
    overlay.appendChild(searchContainer);
    overlay.appendChild(tableClone);
    document.body.appendChild(overlay);
    
    // Focus search
    searchInput.focus();
    
    // Close handlers
    const closeOverlay = () => {
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
    };
    
    const escHandler = (e) => {
        if (e.key === 'Escape') closeOverlay();
    };
    
    closeBtn.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', escHandler);
}

/**
 * Update table controls visibility
 */
function updateTableControlsVisibility(show) {
    document.querySelectorAll('.table-controls').forEach(controls => {
        controls.style.display = show ? 'flex' : 'none';
    });
}

/**
 * Setup table footer controls (search and expand buttons)
 */
function setupTableFooterControls() {
    // Find all table footers and wire up their controls
    document.querySelectorAll('.table-footer').forEach(footer => {
        // Find the preceding table-wrapper sibling
        let sibling = footer.previousElementSibling;
        let table = null;
        
        // Walk back to find the table
        while (sibling && !table) {
            if (sibling.classList.contains('table-wrapper')) {
                table = sibling.querySelector('table');
            } else if (sibling.tagName === 'TABLE') {
                table = sibling;
            }
            sibling = sibling.previousElementSibling;
        }
        
        if (table) {
            wireUpFooterControls(footer, table);
        } else {
            console.warn('Could not find table for footer:', footer);
        }
    });
}

/**
 * Wire up footer controls to a specific table
 */
function wireUpFooterControls(footer, table) {
    const searchInput = footer.querySelector('[data-table-search]');
    const expandBtn = footer.querySelector('[data-table-expand]');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterTable(table, searchInput.value);
        });
    }
    
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            expandTable(table);
        });
    }
}

// Export for external use
window.embedUtils = {
    enterEmbedMode,
    exitEmbedMode,
    expandTable,
    filterTable,
    sortTable,
    enhanceTables,
    setupTableFooterControls
};
