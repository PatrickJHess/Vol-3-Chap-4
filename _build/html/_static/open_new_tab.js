// _static/open_new_tab.js
(function() {
    "use strict";
    var fixLinks = function() {
        // Identify which book we are currently in
        var currentRepo = window.location.pathname.split('/').filter(Boolean)[0];
        
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.hostname) {
                var linkRepo = link.pathname.split('/').filter(Boolean)[0];
                
                // NEW TAB IF: Different domain OR different repo folder
                if (link.hostname !== window.location.hostname || (linkRepo && linkRepo !== currentRepo)) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            }
        }
    };

    // Execute immediately as the script loads
    fixLinks();
    
    // Backup: Execute when the DOM is fully parsed
    document.addEventListener("DOMContentLoaded", fixLinks);
})();
