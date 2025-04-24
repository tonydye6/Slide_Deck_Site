document.addEventListener('DOMContentLoaded', function() {
    // Get all slide footer elements
    const slideFooters = document.querySelectorAll('.slide-footer');
    
    // Loop through each footer and update it
    slideFooters.forEach(footer => {
        // Get the existing SVG element and slide number text
        const svgElement = footer.querySelector('.logo-skull-small');
        const slideNumberText = footer.querySelector('.slide-footer-text').textContent;
        
        // Create new image element for the white skull logo
        const imgElement = document.createElement('img');
        imgElement.src = 'attached_assets/Logo_Skull(White).png';
        imgElement.alt = 'Sparq Skull Logo';
        imgElement.className = 'footer-logo-img';
        
        // Insert the image before the SVG (which is hidden by CSS)
        footer.insertBefore(imgElement, svgElement);
    });
});