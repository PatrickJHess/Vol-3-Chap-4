// _static/open_new_tab.js
document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname;
    
    // Grab the repo name from the URL if we are on the web
    // On local 'file:///', this might be different, but that's okay!
    var currentRepo = currentPath.split('/').filter(Boolean)[0];

    document.querySelectorAll('a').forEach(function(link) {
        if (link.hostname) {
            var isExternal = link.hostname !== window.location.hostname;
            
            // On GitHub, check if the link's repo matches our current repo
            var linkRepo = link.pathname.split('/').filter(Boolean)[0];
            var isDifferentRepo = (linkRepo !== currentRepo);

            // If we are on 'file:///', hostname is empty, so everything with a hostname is "external"
            if (isExternal || (window.location.protocol !== 'file:' && isDifferentRepo)) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        }
    });
});
