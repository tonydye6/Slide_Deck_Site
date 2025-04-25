// Function to replace all bullet points with skull images
document.addEventListener('DOMContentLoaded', function() {
    // Find all ul elements with sparq-bullet-list class
    const allListElements = document.querySelectorAll('ul.sparq-bullet-list');
    
    // Process each list
    allListElements.forEach(function(ulElement) {
        // Get all li elements inside this ul
        const liElements = ulElement.querySelectorAll('li');
        
        // Process each li element
        liElements.forEach(function(liElement) {
            // Store the original text content
            const originalText = liElement.textContent.trim();
            
            // Set inline styles directly
            liElement.style.position = 'relative';
            liElement.style.paddingLeft = '28px';
            liElement.style.marginBottom = '8px';
            liElement.style.listStyle = 'none';
            
            // Clear the content and add our custom bullet with the original text
            liElement.innerHTML = `
                <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" 
                     style="width: 16px; height: 16px; position: absolute; left: 0; top: 4px;">
                ${originalText}
            `;
        });
        
        // Set styles for the ul element
        ulElement.style.listStyle = 'none';
        ulElement.style.paddingLeft = '0';
    });
    
    // Also process any ul elements in specific containers that might not have the class
    const otherContainers = [
        '.feature-list',
        '.business-section ul',
        '.milestone ul', 
        '.market-intro ul',
        '.traction-milestones ul',
        '.economic-factors ul',
        '.media-outlets ul'
    ];
    
    otherContainers.forEach(function(selector) {
        const containers = document.querySelectorAll(selector);
        
        containers.forEach(function(container) {
            // Skip if it already has the sparq-bullet-list class (to avoid duplicating work)
            if (container.classList.contains('sparq-bullet-list')) {
                return;
            }
            
            const liElements = container.querySelectorAll('li');
            
            liElements.forEach(function(liElement) {
                const originalText = liElement.textContent.trim();
                
                liElement.style.position = 'relative';
                liElement.style.paddingLeft = '28px';
                liElement.style.marginBottom = '8px';
                liElement.style.listStyle = 'none';
                
                liElement.innerHTML = `
                    <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" 
                         style="width: 16px; height: 16px; position: absolute; left: 0; top: 4px;">
                    ${originalText}
                `;
            });
            
            container.style.listStyle = 'none';
            container.style.paddingLeft = '0';
        });
    });
    
    console.log("Bullet points have been replaced with skull images");
});