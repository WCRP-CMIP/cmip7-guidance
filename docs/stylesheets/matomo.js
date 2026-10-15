
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // WEBSITE CONFIGURATION — EDIT THESE VALUES
    // ==========================================

    const SITE_ID = "3"; // Matomo website ID
    const TRACKER_URL = "https://webstats.wcrp-cmip.org/matomo.php";
    const PRIVACY_URL = "https://www.wcrp-cmip.org/privacy-policy/";

    // Separate banner preferences for each site
    const ACCEPT = "matomo_cookie_accepted_" + SITE_ID;
    const DENY = "matomo_cookie_denied_" + SITE_ID;

    // ==========================================
    // MATOMO TRACKER
    // ==========================================

    // Use an existing Matomo tracker if available.
    // Otherwise, create a tracker for this website.
    let tracker;

    if (window.Matomo && typeof window.Matomo.getTracker === "function") {
        tracker = window.Matomo.getTracker(TRACKER_URL, SITE_ID);
    }

    function matomo(command) {
        if (!tracker) return;

        switch (command) {
            case "rememberCookieConsentGiven":
                tracker.rememberCookieConsentGiven();
                break;
            case "rememberCookieConsentDismissed":
                tracker.rememberCookieConsentGiven(); 
                break;
            case "forgetCookieConsentGiven":
                tracker.forgetCookieConsentGiven();
                break;
        }
    }

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
                We use cookies for analytics.
                <a href="${PRIVACY_URL}"
                   style="color:#2563eb;text-decoration:underline">
                    Privacy Policy
                </a>.
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

        // ACCEPT
        banner.querySelector("#cookie-accept").onclick = function () {
            localStorage.setItem(ACCEPT, "true");
            localStorage.removeItem(DENY);

            matomo("rememberCookieConsentGiven");
            showStatus("Withdraw cookie consent");
        };

        // DENY: remember until the next calendar day
        banner.querySelector("#cookie-deny").onclick = function () {
            localStorage.removeItem(ACCEPT);
            localStorage.setItem(DENY, new Date().toDateString());

            matomo("rememberCookieConsentDismissed");
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

    const accepted = localStorage.getItem(ACCEPT) === "true";
    const deniedToday =
        localStorage.getItem(DENY) === new Date().toDateString();

    if (accepted) {
        showStatus("Withdraw cookie consent");
    } else if (deniedToday) {
        showStatus("Cookies Blocked");
    } else {
        showBanner();
    }

});
