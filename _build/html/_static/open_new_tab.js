// _static/open_new_tab.js
(function() {
    "use strict";

    var fixLinks = function() {
        // 1. Handle Main Content Links
        var currentRepo = window.location.pathname.split('/').filter(Boolean)[0];
        var links = document.getElementsByTagName('a');
        
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.hostname) {
                var linkRepo = link.pathname.split('/').filter(Boolean)[0];
                
                if (link.hostname !== window.location.hostname || (linkRepo && linkRepo !== currentRepo)) {
                    if (!link.target || !link.target.startsWith('_blank_')) {
                        link.target = "_blank_" + Math.random().toString(36).substring(2, 9);
                        link.rel = 'noopener noreferrer';
                        link.title = "Opens in a new tab"; // Added here
                    }
                }
            }
        }

        // 2. Handle Sidebar External Links
        var sidebarLinks = document.querySelectorAll('.bd-sidebar .nav-link[href^="http"]');
        sidebarLinks.forEach(function(sLink) {
            if (!sLink.getAttribute('target')) {
                sLink.setAttribute('target', '_blank_' + Math.random().toString(36).substring(2, 9));
                sLink.setAttribute('rel', 'noopener noreferrer');
                sLink.setAttribute('title', 'Opens in a new tab'); // Added here
            }
        });
    };

    // Initial Execution
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fixLinks);
    } else {
        fixLinks();
    }

    // Check periodically for late-loading elements (like sidebar updates)
    var attempts = 0;
    var checkExist = setInterval(function() {
        fixLinks();
        attempts++;
        if (attempts > 10) clearInterval(checkExist); 
    }, 500);

})(); // This is the closure you assumed—it wraps everything above.
