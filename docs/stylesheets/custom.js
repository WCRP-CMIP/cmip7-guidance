// Guidance and Documentation - Custom Scripts for shadcn theme

// Configuration
const CONFIG = {
  repoUrl: 'https://github.com/WCRP-CMIP/cmip7-guidance',
  repoName: 'WCRP-CMIP/cmip7-guidance',
  customLinks: []
};

// Load custom links from links.yml
async function loadCustomLinks() {
  try {
    // Use MkDocs base_url to get correct path from any page depth
    const baseUrl = typeof base_url !== 'undefined' ? base_url : 'guidance';
    const paths = [
      baseUrl + 'links.yml',
      baseUrl + '/links.yml',
      './links.yml',
      '/links.yml'
    ];
    let text = null;
    
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          text = await response.text();
          break;
        }
      } catch (e) {}
    }
    
    if (!text) return;
    
    const links = [];
    const lines = text.split('\n');
    let currentLink = null;
    
    for (const line of lines) {
      const titleMatch = line.match(/^\s*-?\s*title:\s*["']?(.+?)["']?\s*$/);
      const urlMatch = line.match(/^\s*url:\s*["']?(.+?)["']?\s*$/);
      
      if (titleMatch) {
        if (currentLink && currentLink.url) links.push(currentLink);
        currentLink = { title: titleMatch[1] };
      } else if (urlMatch && currentLink) {
        currentLink.url = urlMatch[1];
      }
    }
    if (currentLink && currentLink.url) links.push(currentLink);
    
    CONFIG.customLinks = links;
    addCustomLinks();
  } catch (e) {}
}

// Run on load and after delay
document.addEventListener('DOMContentLoaded', function() {
  init();
  loadCustomLinks();
  initMermaid();
  setTimeout(init, 300);
  setTimeout(init, 1000);
});

function init() {
  setupHeaderControls();
  setupCollapsibleNav();
  buildNestedNavigation();
  addCustomLinks();
  updateFooter();
  addVersionSelector();
  setupHeaderAnchors();
  setupTabbedContent();
  processDetailsMarkdown();
}

// ============================================
// PROCESS MARKDOWN IN DETAILS (fallback for unprocessed content)
// ============================================

function processDetailsMarkdown() {
  document.querySelectorAll('details').forEach(details => {
    // Skip if already processed
    if (details.dataset.mdProcessed) return;
    details.dataset.mdProcessed = 'true';
    
    // Get all text nodes that aren't already in proper elements
    const walker = document.createTreeWalker(
      details,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Skip summary and already processed content
          if (node.parentNode.tagName === 'SUMMARY') return NodeFilter.FILTER_REJECT;
          if (node.parentNode.tagName === 'PRE') return NodeFilter.FILTER_REJECT;
          if (node.parentNode.tagName === 'CODE') return NodeFilter.FILTER_REJECT;
          // Only process if parent is details itself (raw text)
          if (node.parentNode.tagName === 'DETAILS' && node.textContent.trim()) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );
    
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    
    textNodes.forEach(node => {
      const text = node.textContent;
      if (!text.trim()) return;
      
      // Create a wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'details-content';
      wrapper.style.padding = '0 1rem 1rem 1rem';
      
      // Basic markdown processing
      let html = text
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.+?)__/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        // Inline code
        .replace(/`(.+?)`/g, '<code>$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Line breaks to paragraphs
        .split(/\n\n+/)
        .filter(p => p.trim())
        .map(p => {
          // Check if it's a list
          if (p.trim().match(/^[-*]\s/m)) {
            const items = p.split(/\n/).filter(l => l.trim());
            return '<ul>' + items.map(i => '<li>' + i.replace(/^[-*]\s+/, '') + '</li>').join('') + '</ul>';
          }
          return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        })
        .join('');
      
      wrapper.innerHTML = html;
      node.parentNode.replaceChild(wrapper, node);
    });
  });
}

// ============================================
// COPY HANDLER (intercepts copy events)
// ============================================

function appendCopyFooter(content) {
  const currentUrl = window.location.href.split('?')[0];
  const embedUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'embed=true';
  const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0] + ' UTC';
  
  return content + `

---
This content was copied from ${currentUrl} at ${timestamp}.
Use of content is protected by a CC-BY-4.0 licence and external use is allowed at your own risk.

If you wish to embed a live version of this page please use: ${embedUrl}

Iframe example:
<iframe src="${embedUrl}" width="100%" height="600" frameborder="0"></iframe>
`;
}

function setupGlobalCopyHandler() {
  if (window.copyHandlerSetup) return;
  window.copyHandlerSetup = true;
  
  document.addEventListener('copy', function(e) {
    const selection = window.getSelection().toString();
    if (selection && selection.length > 100) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', appendCopyFooter(selection));
    }
  }, true);
}

// Install copy handler immediately
setupGlobalCopyHandler();

// ============================================
// HEADER CONTROLS
// ============================================

function setupHeaderControls() {
  // Disabled - was interfering with sidebar Home link
  return;
}

// ============================================
// COLLAPSIBLE NAVIGATION (shadcn structure)
// ============================================

function setupCollapsibleNav() {
  const groups = document.querySelectorAll('[data-slot="sidebar-group"]');
  const currentPath = window.location.pathname;
  
  // Check if we're on the home/index page
  const baseUrl = typeof base_url !== 'undefined' ? base_url : 'guidance';
  const isHomePage = currentPath === baseUrl || 
                     currentPath === baseUrl.replace(/\/$/, '') ||
                     currentPath.endsWith('/index.html') ||
                     currentPath === '/' + baseUrl.split('/').filter(Boolean)[0] + '/';
  
  groups.forEach((group, index) => {
    const label = group.querySelector('[data-slot="sidebar-group-label"]');
    const content = group.querySelector('[data-slot="sidebar-group-content"]');
    
    // If there's no label, this is the root group (Home, Contributors) - keep it expanded always
    if (!label) {
      if (content) {
        content.style.display = 'block';
        content.style.visibility = 'visible';
        content.style.opacity = '1';
        content.style.maxHeight = 'none';
      }
      return;
    }
    
    if (!content) return;
    
    // Add classes for styling
    label.classList.add('nav-collapsible');
    content.classList.add('nav-children');
    
    // Check if any link in this group is active (current page)
    let hasActivePage = content.querySelector('a[data-active="true"]') !== null;
    
    // Fallback: check if current URL matches any link in this group
    if (!hasActivePage) {
      const links = content.querySelectorAll('a[href]');
      for (const link of links) {
        const href = link.getAttribute('href');
        const normalizedHref = href.replace(/\/$/, '').replace(/^\.\//, '').replace(/^\//, '');
        const normalizedPath = currentPath.replace(/\/$/, '').replace(/^\//, '');
        if (normalizedPath.endsWith(normalizedHref) || 
            normalizedPath === normalizedHref ||
            normalizedPath.includes('/' + normalizedHref)) {
          hasActivePage = true;
          break;
        }
      }
    }
    
    // On first run: set initial state
    // If group contains active page, always expand it
    if (!label.dataset.collapsibleSetup) {
      label.classList.remove('expanded');
      if (hasActivePage) {
        label.classList.add('expanded');
      }
    }
    
    // Only add click handler once
    if (label.dataset.collapsibleSetup === 'done') return;
    label.dataset.collapsibleSetup = 'done';
    
    // Click handler for toggle
    label.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      label.classList.toggle('expanded');
    });
  });
  
  // Ensure root-level menu items stay visible
  const rootMenuItems = document.querySelectorAll('[data-slot="sidebar-menu"] > [data-slot="sidebar-menu-item"]');
  rootMenuItems.forEach(item => {
    item.style.display = 'block';
    item.style.visibility = 'visible';
    item.style.opacity = '1';
  });
}

// ============================================
// CUSTOM LINKS
// ============================================

function addCustomLinks() {
  if (!CONFIG.customLinks || CONFIG.customLinks.length === 0) return;
  if (document.querySelector('.custom-links-section')) return;
  
  // Find sidebar content area
  const sidebarContent = document.querySelector('[data-slot="sidebar-content"]');
  
  
  if (!sidebarContent) return;
  
  const section = document.createElement('div');
  section.className = 'custom-links-section';
  section.innerHTML = `
    <div class="custom-links-title">Additional Resources</div>
    <div class="custom-links-list">
      ${CONFIG.customLinks.map(link => `
        <a href="${link.url}" class="custom-link" target="_blank" rel="noopener">
          <span>${link.title}</span>
        </a>
      `).join('')}
    </div>
  `;
  
  sidebarContent.appendChild(section);
}

// ============================================
// HEADER ANCHORS
// ============================================

function setupHeaderAnchors() {
  const content = document.querySelector('article, main, .content');
  if (!content) return;
  
  content.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(header => {
    if (header.dataset.anchorSetup) return;
    header.dataset.anchorSetup = 'true';
    
    header.style.cursor = 'pointer';
    header.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') return;
      window.location.hash = header.id;
      navigator.clipboard?.writeText(window.location.href.split('#')[0] + '#' + header.id);
    });
  });
}

// ============================================
// FOOTER
// ============================================

function updateFooter() {
  // Hide the shadcn footer entirely
  const shadcnFooter = document.querySelector('footer');
  if (shadcnFooter) {
    shadcnFooter.style.display = 'none';
  }
  
  // Check if we already added our footer
  if (document.querySelector('.md-footer')) return;
  
  // Find the bottom navigation (prev/next links)
  const bottomNav = document.querySelector('.mx-auto.flex.flex-wrap.h-16');
  
  // Create Material-style footer
  const footer = document.createElement('footer');
  footer.className = 'md-footer';
  
  // Get prev/next info from existing links
  const prevLink = bottomNav?.querySelector('a:first-of-type');
  const nextLink = bottomNav?.querySelector('a:last-of-type');
  
  let footerHTML = '<nav class="md-footer__inner">';
  
  if (prevLink && prevLink !== nextLink) {
    const prevTitle = prevLink.querySelector('span')?.textContent || prevLink.textContent.trim();
    const prevHref = prevLink.getAttribute('href');
    footerHTML += `
      <a href="${prevHref}" class="md-footer__link md-footer__link--prev" aria-label="Previous: ${prevTitle}">
        <div class="md-footer__button md-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z"></path>
          </svg>
        </div>
        <div class="md-footer__title">
          <span class="md-footer__direction">Previous</span>
          <div class="md-ellipsis">${prevTitle}</div>
        </div>
      </a>
    `;
  }
  
  if (nextLink) {
    const nextTitle = nextLink.querySelector('span')?.textContent || nextLink.textContent.trim();
    const nextHref = nextLink.getAttribute('href');
    footerHTML += `
      <a href="${nextHref}" class="md-footer__link md-footer__link--next" aria-label="Next: ${nextTitle}">
        <div class="md-footer__title">
          <span class="md-footer__direction">Next</span>
          <div class="md-ellipsis">${nextTitle}</div>
        </div>
        <div class="md-footer__button md-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11z"></path>
          </svg>
        </div>
      </a>
    `;
  }
  
  footerHTML += '</nav>';
  footer.innerHTML = footerHTML;
  
  // Hide the original bottom nav
  if (bottomNav) {
    bottomNav.style.display = 'none';
  }
  
  // Insert footer before the shadcn footer or at end of main
  const main = document.querySelector('main');
  if (main) {
    main.appendChild(footer);
  }
  
  // Add attribution
  if (!document.querySelector('.footer-attribution')) {
    const attribution = document.createElement('div');
    attribution.className = 'footer-attribution';
    attribution.innerHTML = `
      <p>
        Built by <a href="https://github.com/wolfiex">Daniel Ellis</a>
        for <a href="https://wcrp-cmip.org">WCRP-CMIP</a>
        using the <a href="https://github.com/asiffer/mkdocs-shadcn">shadcn</a> theme.
      </p>
    `;
    document.body.appendChild(attribution);
  }
}

// ============================================
// VERSION SELECTOR
// ============================================

function addVersionSelector() {
  if (document.querySelector('.version-selector')) return;
  
  const baseUrl = typeof base_url !== 'undefined' 
    ? base_url 
    : window.location.pathname.split('/').slice(0, -2).join('/') + '/';
  
  fetch(baseUrl + '../versions.json')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(versions => {
      if (!versions?.length) return;

      const pathParts = window.location.pathname.split('/').filter(p => p);
      const current = versions.find(v => 
        pathParts.includes(v.version) || v.aliases?.some(a => pathParts.includes(a))
      );

      const dropdown = document.createElement('div');
      dropdown.className = 'version-selector';
      dropdown.innerHTML = `
        <select id="version-select">
          ${versions.map(v => `
            <option value="${v.version}" ${current?.version === v.version ? 'selected' : ''}>
              ${v.aliases?.includes('latest') ? `${v.version} (latest)` : v.version}
            </option>
          `).join('')}
        </select>
      `;

      const header = document.querySelector('header');
      const target = header?.querySelector('.ml-auto') || header;
      target?.insertBefore(dropdown, target.firstChild);

      dropdown.querySelector('select').addEventListener('change', e => {
        const path = window.location.pathname;
        const pattern = current ? `(${current.version}|${current.aliases?.join('|') || ''})` : '';
        window.location.href = pattern 
          ? path.replace(new RegExp(`/${pattern}/`), `/${e.target.value}/`)
          : baseUrl + e.target.value + '/';
      });
    })
    .catch(() => {});
}

// Export for debugging
window.EMDCustom = { init, CONFIG };

// ============================================
// MERMAID INITIALIZATION
// ============================================

function initMermaid() {
  if (typeof mermaid === 'undefined') {
    // Retry after mermaid loads
    setTimeout(initMermaid, 100);
    return;
  }
  
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis'
    }
  });
  
  // Find all mermaid code blocks and render them
  document.querySelectorAll('pre code.language-mermaid, .mermaid').forEach((el, index) => {
    if (el.dataset.mermaidRendered) return;
    el.dataset.mermaidRendered = 'true';
    
    const code = el.textContent;
    const container = document.createElement('div');
    container.className = 'mermaid-container';
    
    // Replace the pre/code with a div for mermaid
    const pre = el.closest('pre') || el;
    pre.parentNode.insertBefore(container, pre);
    pre.style.display = 'none';
    
    mermaid.render(`mermaid-${index}`, code).then(result => {
      container.innerHTML = result.svg;
      // Make SVG clickable links work
      container.querySelectorAll('a').forEach(a => {
        a.setAttribute('target', '_blank');
      });
    }).catch(err => {
      console.error('Mermaid render error:', err);
      pre.style.display = 'block';
    });
  });
}

// ============================================
// TABBED CONTENT SUPPORT
// ============================================

function setupTabbedContent() {
  const tabbedSets = document.querySelectorAll('.tabbed-set');
  
  tabbedSets.forEach(set => {
    // Skip if already set up
    if (set.dataset.tabbedSetup) return;
    set.dataset.tabbedSetup = 'true';
    
    const labels = set.querySelectorAll('.tabbed-labels > label');
    const inputs = set.querySelectorAll('input[type="radio"]');
    const blocks = set.querySelectorAll('.tabbed-content > .tabbed-block');
    
    // Function to update visible tab
    const updateTabs = () => {
      const checkedIndex = Array.from(inputs).findIndex(input => input.checked);
      
      // Update blocks
      blocks.forEach((block, index) => {
        if (index === checkedIndex) {
          block.style.display = 'block';
          block.style.visibility = 'visible';
          block.style.opacity = '1';
          block.setAttribute('data-active', 'true');
        } else {
          block.style.display = 'none';
          block.setAttribute('data-active', 'false');
        }
      });
      
      // Update labels
      labels.forEach((label, index) => {
        if (index === checkedIndex) {
          label.setAttribute('data-active', 'true');
        } else {
          label.setAttribute('data-active', 'false');
        }
      });
    };
    
    // Initial display
    updateTabs();
    
    // Add keyboard navigation and click handlers
    labels.forEach((label, index) => {
      label.setAttribute('tabindex', '0');
      label.setAttribute('role', 'tab');
      
      // Click handler
      label.addEventListener('click', () => {
        if (inputs[index]) {
          inputs[index].checked = true;
          updateTabs();
        }
      });
      
      // Keyboard handler
      label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (inputs[index]) {
            inputs[index].checked = true;
            updateTabs();
          }
        }
        
        // Arrow key navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const direction = e.key === 'ArrowLeft' ? -1 : 1;
          const newIndex = (index + direction + labels.length) % labels.length;
          labels[newIndex].focus();
          if (inputs[newIndex]) {
            inputs[newIndex].checked = true;
            updateTabs();
          }
        }
      });
      
      // Listen for radio button changes
      if (inputs[index]) {
        inputs[index].addEventListener('change', updateTabs);
      }
    });
    
  });
}


// ============================================
// BUILD NESTED NAVIGATION FROM SUMMARY.MD
// ============================================

async function buildNestedNavigation() {
  
  if (window.nestedNavBuilt) {
    return;
  }
  window.nestedNavBuilt = true;
  
  try {
    // MkDocs provides base_url as a relative path that works from any page
    const baseUrl = typeof base_url !== 'undefined' ? base_url : 'guidance';
    const response = await fetch(baseUrl + 'SUMMARY.md');
    
    if (!response.ok) {
      return;
    }
    
    const summaryText = await response.text();
    const navTree = parseSummary(summaryText);
    
    
    // Process each top-level group
    navTree.forEach(topItem => {
      if (topItem.type === 'group') {
        processGroupForNested(topItem, baseUrl);
      }
    });
    
  } catch (err) {
    console.error('Error building nested nav:', err);
  }
}

function parseSummary(text) {
  const lines = text.split('\n').filter(l => l.trim());
  const result = [];
  const stack = [{children: result, level: -1}];
  
  lines.forEach(line => {
    const match = line.match(/^(\s*)-\s+(.+)$/);
    if (!match) return;
    
    const indent = match[1].length;
    const content = match[2];
    const level = Math.floor(indent / 2);
    
    const linkMatch = content.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const groupMatch = content.match(/^(.+):$/);
    
    let item;
    if (linkMatch) {
      item = {type: 'link', title: linkMatch[1], path: linkMatch[2], level};
    } else if (groupMatch) {
      item = {type: 'group', title: groupMatch[1], children: [], level};
    } else {
      return;
    }
    
    while (stack[stack.length - 1].level >= level) {
      stack.pop();
    }
    
    stack[stack.length - 1].children.push(item);
    
    if (item.type === 'group') {
      stack.push(item);
    }
  });
  
  return result;
}

function processGroupForNested(group, baseUrl) {
  const labels = document.querySelectorAll('[data-slot="sidebar-group-label"]');
  const matchingLabel = Array.from(labels).find(l => l.textContent.trim() === group.title + ':');
  
  if (!matchingLabel) return;
  
  const menu = matchingLabel.closest('[data-slot="sidebar-group"]')
    .querySelector('[data-slot="sidebar-menu"]');
  
  if (!menu) return;
  
  const nestedFolders = group.children.filter(c => c.type === 'group');
  
  
  nestedFolders.forEach(folder => {
    createNestedFolder(menu, folder, baseUrl);
  });
}

function createNestedFolder(parentMenu, folder, baseUrl) {
  const currentPath = window.location.pathname;
  
  const li = document.createElement('li');
  li.className = 'nested-folder-item';
  li.style.margin = '2px 0';
  
  // Folder header with arrow
  const header = document.createElement('div');
  header.className = 'nested-folder-toggle';
  header.innerHTML = `
    <span class="arrow" style="display: inline-block; width: 1rem; transition: transform 0.2s; font-size: 0.7rem;">▸</span>
    <span class="name">${folder.title}</span>
  `;
  header.style.cssText = `
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--guidance-text-secondary);
    border-radius: 6px;
    transition: background 0.15s, color 0.15s;
  `;
  
  // Nested items container
  const container = document.createElement('ul');
  container.className = 'nested-folder-items';
  container.style.cssText = `
    list-style: none;
    padding: 0 0 0 1.5rem;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.2s ease;
  `;
  
  let hasActive = false;
  
  // Add child links
  folder.children.forEach(child => {
    if (child.type !== 'link') return;
    
    const itemLi = document.createElement('li');
    itemLi.style.margin = '0';
    
    const link = document.createElement('a');
    link.href = baseUrl + child.path.replace('.md', '/');
    link.textContent = child.title;
    link.style.cssText = `
      display: block;
      padding: 0.4rem 0.5rem;
      font-size: 0.75rem;
      color: var(--guidance-text-secondary);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.15s;
    `;
    
    // Check if active
    const isActive = currentPath === link.href || currentPath.includes(link.href);
    if (isActive) {
      link.style.color = 'var(--guidance-primary)';
      link.style.fontWeight = '600';
      hasActive = true;
    }
    
    link.addEventListener('mouseenter', () => {
      link.style.background = 'var(--guidance-bg-secondary)';
      link.style.color = 'var(--guidance-text)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.background = 'transparent';
      link.style.color = isActive ? 'var(--guidance-primary)' : 'var(--guidance-text-secondary)';
    });
    
    itemLi.appendChild(link);
    container.appendChild(itemLi);
  });
  
  // Auto-expand if contains active page
  if (hasActive) {
    header.setAttribute('data-expanded', 'true');
    header.querySelector('.arrow').style.transform = 'rotate(90deg)';
    container.style.maxHeight = '1000px';
    container.style.opacity = '1';
  }
  
  // Toggle click handler
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('data-expanded') === 'true';
    const arrow = header.querySelector('.arrow');
    
    if (expanded) {
      header.setAttribute('data-expanded', 'false');
      arrow.style.transform = 'rotate(0deg)';
      container.style.maxHeight = '0';
      container.style.opacity = '0';
    } else {
      header.setAttribute('data-expanded', 'true');
      arrow.style.transform = 'rotate(90deg)';
      container.style.maxHeight = '1000px';
      container.style.opacity = '1';
    }
  });
  
  // Hover effect
  header.addEventListener('mouseenter', () => {
    header.style.background = 'var(--guidance-bg-secondary)';
    header.style.color = 'var(--guidance-text)';
  });
  
  header.addEventListener('mouseleave', () => {
    header.style.background = 'transparent';
    header.style.color = 'var(--guidance-text-secondary)';
  });
  
  li.appendChild(header);
  li.appendChild(container);
  parentMenu.appendChild(li);
  
}
