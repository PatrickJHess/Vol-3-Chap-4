// _static/open_new_tab.js
(function() {
    "use strict";
    window.addEventListener('load', function() {
        // Grab the repo name (e.g., "Financial_Python")
        var currentRepo = window.location.pathname.split('/').filter(Boolean)[0];

        document.querySelectorAll('a').forEach(function(link) {
            if (link.hostname && link.hostname === window.location.hostname) {
                var linkRepo = link.pathname.split('/').filter(Boolean)[0];
                // New tab if the repo name in the URL is different
                if (linkRepo && linkRepo !== currentRepo) {
                    link.target = '_blank';
                }
            } else if (link.hostname && link.hostname !== window.location.hostname) {
                // External links (Google, etc)
                link.target = '_blank';
            }
        });
    });
})();
