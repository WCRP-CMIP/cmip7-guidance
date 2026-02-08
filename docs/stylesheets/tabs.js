/**
 * Tabbed Content Handler - minimal version
 */
(function() {
  function initTabs() {
    document.querySelectorAll('.tabbed-set').forEach(function(set) {
      if (set.dataset.init) return;
      set.dataset.init = '1';
      
      const inputs = set.querySelectorAll(':scope > input[type="radio"]');
      const contents = set.querySelectorAll(':scope > .tabbed-content');
      const labels = set.querySelectorAll('.tabbed-labels > label');
      
      function update() {
        const idx = Array.from(inputs).findIndex(i => i.checked);
        contents.forEach((c, i) => {
          c.style.display = i === idx ? 'block' : 'none';
        });
        labels.forEach((l, i) => {
          l.setAttribute('data-active', i === idx ? 'true' : 'false');
        });
      }
      
      inputs.forEach(i => i.addEventListener('change', update));
      labels.forEach((l, i) => {
        l.style.cursor = 'pointer';
        l.addEventListener('click', () => {
          if (inputs[i]) {
            inputs[i].checked = true;
            update();
          }
        });
      });
      
      update();
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();
