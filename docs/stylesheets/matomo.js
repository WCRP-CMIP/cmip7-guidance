
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // WEBSITE CONFIGURATION — EDIT THESE VALUES
    // ==========================================

    const SITE_ID = "1"; // Matomo website ID for this site
    const TRACKER_URL = "https://webstats.wcrp-cmip.org/matomo.php";
    const PRIVACY_URL = "https://www.wcrp-cmip.org/privacy-policy/";

    // Unique storage keys for each Matomo site
    const ACCEPT = "matomo_cookie_accepted_" + SITE_ID;
    const DENY = "matomo_cookie_denied_" + SITE_ID;

    // ==========================================
    // MATOMO TRACKER
    // ==========================================

    // Find the tracker configured for this site.
    // Your normal Matomo tracking code should load first.
    const tracker = window.Matomo?.getAsyncTracker?.();

    function matomo(command) {
        if (tracker) {
            tracker.pushConsentRequest = tracker.pushConsentRequest || null;
        }

        if (window._paq) {
            window._paq.push(command);
        }
    }

    // ==========================================
    // COOKIE BANNER
    // ==========================================

    function showBanner() {
        document.getElementById("matomo-cookie-banner")?.remove();
        document.getElementById("matomo-withdraw")?.remove();

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
            box-shadow: 0 2px 8px #0002;
        `;

        banner.innerHTML = `
            <div>
                We use cookies for analytics.
                <a href="${PRIVACY_URL}"
                   style="color:#2563eb;text-decoration:underline">
                   Privacy Policy
                </a>.
            </div>
            <div style="display:flex;justify-content:flex-end;gap:4px;margin-top:6px">
                <button id="cookie-deny" type="button">Deny</button>
                <button id="cookie-accept" type="button">Accept</button>
            </div>
        `;

        banner.querySelectorAll("button").forEach(button => {
            button.style.cssText =
                "padding:2px 6px;font-size:10px;cursor:pointer";
        });

        banner.querySelector("#cookie-accept").style.cssText +=
            ";background:#2563eb;color:white;border:0";

        document.body.appendChild(banner);

        // Accept cookies
        banner.querySelector("#cookie-accept").onclick = function () {
            localStorage.setItem(ACCEPT, "true");
            localStorage.removeItem(DENY);

            matomo(["rememberCookieConsentGiven"]);
            showWithdraw();
        };

        // Deny until the next calendar day
        banner.querySelector("#cookie-deny").onclick = function () {
            localStorage.removeItem(ACCEPT);
            localStorage.setItem(DENY, new Date().toDateString());

            matomo(["rememberCookieConsentDismissed"]);
            showWithdraw();
        };
    }

    // ==========================================
    // WITHDRAW CONSENT LINK
    // ==========================================

    function showWithdraw() {
        document.getElementById("matomo-cookie-banner")?.remove();
        document.getElementById("matomo-withdraw")?.remove();

        const link = document.createElement("a");
        link.id = "matomo-withdraw";
        link.href = "#";
        link.textContent = "Withdraw cookie consent";

        link.style.cssText = `
            position: fixed;
            bottom: 12px;
            right: 12px;
            z-index: 999998;
            font: 11px system-ui, sans-serif;
            color: #2563eb;
            text-decoration: underline;
        `;

        link.onclick = function (event) {
            event.preventDefault();

            localStorage.removeItem(ACCEPT);
            localStorage.removeItem(DENY);

            matomo(["forgetCookieConsentGiven"]);
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

    if (accepted || deniedToday) {
        showWithdraw();
    } else {
        showBanner();
    }
});
