/*
 * fallback-banner.js
 * ==================
 * Shows a warning banner when this site is served from a hostname that is not
 * on the approved list. Same idea as the cmip-fallback WordPress plugin.
 *
 * Settings are the SETTINGS block just below (the same convention as matomo.js),
 * not mkdocs.yml:
 *   enabled    true/false
 *   hostnames  approved hostnames; "*.example.org" matches any subdomain
 *   text       the warning message
 *   url        optional link to the official site
 *   link_text  optional text for that link
 *
 * An empty hostname (a page opened straight from disk) never shows the banner.
 */
(function () {
  // ==========================================
  // SETTINGS — EDIT THESE VALUES
  // ==========================================
  var cfg = {
    enabled: true,   // false turns the banner off
    hostnames: ["localhost", "127.0.0.1", "wcrp-cmip.github.io"],
    text: "This is not the official version of this site.",
    url: "https://wcrp-cmip.github.io/cmip7-guidance/",
    link_text: "Go to the official site"
  };

  if (cfg.enabled === false) return;

  var host = (location.hostname || '').toLowerCase();
  if (!host) return;

  var approved = (cfg.hostnames || []).map(function (h) {
    return String(h).toLowerCase();
  });

  function isApproved(h) {
    return approved.some(function (a) {
      if (a.indexOf('*.') === 0) {
        var suffix = a.slice(1);              // "*.example.org" -> ".example.org"
        return h.length > suffix.length &&
               h.slice(-suffix.length) === suffix;
      }
      return h === a;
    });
  }

  if (isApproved(host)) return;
  if (document.querySelector('.cmip-fallback-banner')) return;

  var banner = document.createElement('div');
  banner.className = 'cmip-fallback-banner';
  banner.setAttribute('role', 'alert');

  var text = document.createElement('span');
  text.textContent = cfg.text || 'This is not the official version of this site.';
  banner.appendChild(text);

  if (cfg.url) {
    var link = document.createElement('a');
    link.href = cfg.url;
    link.textContent = cfg.link_text || 'Go to the official site';
    banner.appendChild(document.createTextNode(' '));
    banner.appendChild(link);
  }

  document.body.insertBefore(banner, document.body.firstChild);
})();
