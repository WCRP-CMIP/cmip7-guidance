(function () {

function init() {

    // ==========================================
    // IFRAMES: NO BANNER AND NO TRACKING
    // ==========================================
    // A page shown inside an iframe (for example the Progress feed embedded on the home page) is
    // already counted as part of the page around it, and it has no room for a banner.
    try {
        if (window.self !== window.top) return;
    } catch (e) {
        return; // the browser blocked the check: that only happens when we are framed
    }

    // ==========================================
    // WEBSITE CONFIGURATION — EDIT THESE VALUES
    // ==========================================

    // The Matomo website ID for this site. If it is ever emptied the script does nothing at
    // all (no tracking and no cookie banner), so no visit is ever recorded against the wrong site.
    const SITE_ID = "3"; // Matomo website ID
    const TRACKER_URL = "https://webstats.wcrp-cmip.org/matomo.php";
    const MATOMO_JS = "https://webstats.wcrp-cmip.org/matomo.js";

    if (!SITE_ID) return;

    // Every visit is tracked, from every hostname (the live site, a local server, a preview
    // copy). There is deliberately no hostname list.
    const PRIVACY_URL = "https://www.wcrp-cmip.org/privacy-policy/";

    // Separate banner preferences for each site
    const ACCEPT = "matomo_cookie_accepted_" + SITE_ID;
    const DENY = "matomo_cookie_denied_" + SITE_ID;

    // ==========================================
    // MATOMO TRACKER
    // ==========================================

    // Every page visit is recorded. Only the COOKIES depend on the visitor's choice:
    // requireCookieConsent makes Matomo count the visit without setting any cookie until
    // consent is given, so Deny (or no answer yet) still records the visit, cookielessly.
    // Commands go through Matomo's own queue (_paq), so it does not matter whether Matomo's
    // script has finished loading when they are sent. Always look window._paq up afresh:
    // when Matomo's script loads it REPLACES the global with its own object, so a copy
    // kept from before would silently swallow every later command (such as the Accept button).
    function matomo(...command) {
        (window._paq = window._paq || []).push(command);
    }

    const accepted = localStorage.getItem(ACCEPT) === "true";
    const deniedToday = localStorage.getItem(DENY) === new Date().toDateString();

    matomo("requireCookieConsent");                    // must come before trackPageView
    matomo(accepted ? "rememberCookieConsentGiven" : "forgetCookieConsentGiven");
    matomo("setTrackerUrl", TRACKER_URL);
    matomo("setSiteId", SITE_ID);
    matomo("trackPageView");
    matomo("enableLinkTracking");

    const matomoScript = document.createElement("script");
    matomoScript.async = true;
    matomoScript.src = MATOMO_JS;
    document.head.appendChild(matomoScript);

    // ==========================================
    // COOKIE BANNER
    // ==========================================

    function showBanner() {
        document.getElementById("matomo-cookie-banner")?.remove();
        document.getElementById("matomo-status")?.remove();

        const banner = document.createElement("div");
        banner.id = "matomo-cookie-banner";

        banner.style.cssText = `
            position: fixed;
            bottom: 12px;
            right: 12px;
            z-index: 999999;
            max-width: 240px;
            padding: 8px 10px;
            background: #ffffff;
            color: #4b5563;
            font: 10px system-ui, sans-serif;
            border: 1px solid #e4e4e7;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
            display: flex;
            flex-direction: column;
            gap: 6px;
        `;

        banner.innerHTML = `
            <div>
                May we use cookies for CMIP analytics?
                <a href="${PRIVACY_URL}"
                   style="color:#2563eb;text-decoration:underline">
                    Privacy Policy
                </a>
            </div>

            <div style="display:flex;justify-content:flex-end;gap:4px">
                <button id="cookie-deny" type="button"
                    style="background:transparent;color:#6b7280;border:1px solid #d1d5db;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:2px">
                    Deny
                </button>

                <button id="cookie-accept" type="button"
                    style="background:#2563eb;color:white;border:0;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:2px">
                    Accept
                </button>
            </div>
        `;

        document.body.appendChild(banner);

        // ACCEPT: Enable cookies and remember consent
        banner.querySelector("#cookie-accept").onclick = function () {
            localStorage.setItem(ACCEPT, "true");
            localStorage.removeItem(DENY);

            matomo("rememberCookieConsentGiven");
            showStatus("Withdraw cookie consent");
        };

        // DENY: Block/remove cookies, but allow cookieless tracking to continue
        banner.querySelector("#cookie-deny").onclick = function () {
            localStorage.removeItem(ACCEPT);
            localStorage.setItem(DENY, new Date().toDateString());

            matomo("forgetCookieConsentGiven");
            showStatus("Cookies Blocked");
        };
    }

    // ==========================================
    // CLICKABLE STATUS LINK
    // ==========================================

    function showStatus(text) {
        document.getElementById("matomo-cookie-banner")?.remove();
        document.getElementById("matomo-status")?.remove();

        const link = document.createElement("a");
        link.id = "matomo-status";
        link.href = "#";
        link.textContent = text;

        link.style.cssText = `
            position: fixed;
            bottom: 12px;
            right: 12px;
            z-index: 999998;
            font: 11px system-ui, sans-serif;
            color: #2563eb;
            text-decoration: underline;
            cursor: pointer;
        `;

        link.onclick = function (event) {
            event.preventDefault();

            localStorage.removeItem(ACCEPT);
            localStorage.removeItem(DENY);

            matomo("forgetCookieConsentGiven");
            showBanner();
        };

        document.body.appendChild(link);
    }

    // ==========================================
    // INITIAL STATE
    // ==========================================

    if (accepted) {
        showStatus("Withdraw cookie consent");
    } else if (deniedToday) {
        showStatus("Cookies Blocked");
    } else {
        // No choice yet: cookies stay withheld (see above) while visits are still recorded
        showBanner();
    }

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

})();
