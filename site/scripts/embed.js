// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if the query parameter 'embed-true' is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('embed')) {
        // // If 'embed-true' is present, remove the specified DOM element
        // alert('embedded')

        const navElements = document.querySelectorAll('.md-sidebar');
        navElements.forEach(function(navElement) {
            navElement.remove();
        });

        const hElements = document.querySelectorAll('.md-header');
        hElements.forEach(function(hElement) {
            hElement.remove();
        });

        const Elements = document.querySelectorAll('.md-footer');
        Elements.forEach(function(Element) {
            Element.remove();
        });
  
    }
});
