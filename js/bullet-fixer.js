// Function to replace all bullet points with skull images
document.addEventListener('DOMContentLoaded', function() {
    // Fix for any bare li elements without the custom bullet styling
    fixBulletPoints();
    
    // Run again after a slight delay to catch any dynamically loaded elements
    setTimeout(fixBulletPoints, 500);
});

function fixBulletPoints() {
    // First handle any plain li without our custom bullet
    const allLiElements = document.querySelectorAll('li');
    
    allLiElements.forEach(function(liElement) {
        // Skip if this li already has our custom bullet
        if (liElement.querySelector('img[src*="Bulletpoint_Logo_Skull(Red) copy.png"]')) {
            return;
        }
        
        // Skip if this is within a nested sub-list that might have different styling needs
        const parentUl = liElement.parentElement;
        if (parentUl && parentUl.parentElement && parentUl.parentElement.tagName === 'LI') {
            if (parentUl.classList.contains('preserve-bullets')) {
                return;
            }
        }
        
        // Store original HTML to preserve any nested elements and formatting
        const originalHTML = liElement.innerHTML;
        
        // Set inline styles directly
        liElement.style.position = 'relative';
        liElement.style.paddingLeft = '28px';
        liElement.style.marginBottom = '8px';
        liElement.style.listStyle = 'none';
        
        // Add our custom bullet but preserve the original HTML content
        liElement.innerHTML = `
            <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" 
                 style="width: 16px; height: 16px; position: absolute; left: 0; top: 4px;">
            ${originalHTML}
        `;
    });
    
    // Find all ul elements with sparq-bullet-list class or in specific containers
    const specificSelectors = [
        'ul.sparq-bullet-list',
        '.section ul',
        '.feature-list',
        '.business-section ul',
        '.milestone ul', 
        '.market-intro ul',
        '.traction-milestones ul',
        '.economic-factors ul',
        '.media-outlets ul',
        '.playbook-steps ul',
        '.ai-applications-list',
        '.ecosystem-text ul',
        '.locker-room-content ul',
        '.platform-features ul',
        '.investment-bullet ul',
        '.solution-content ul',
        '.team-section ul',
        '.game-mechanics ul',
        '.game-features ul',
        '.monetization-model ul',
        '.marketing-strategy ul',
        '.use-cases ul',
        '.platform-benefits ul',
        '.ai-benefits ul',
        '.strategy-content ul',
        '.core-values ul',
        '.tokenomics-list ul',
        '.benefits-list ul',
        '.investor-benefits ul',
        '.roadmap-milestone ul'
    ];
    
    specificSelectors.forEach(function(selector) {
        const listElements = document.querySelectorAll(selector);
        
        listElements.forEach(function(ulElement) {
            // Set styles for the ul element
            ulElement.style.listStyle = 'none';
            ulElement.style.paddingLeft = '0';
            
            // Add the sparq-bullet-list class if it doesn't have it
            if (!ulElement.classList.contains('sparq-bullet-list')) {
                ulElement.classList.add('sparq-bullet-list');
            }
        });
    });
    
    console.log("Bullet points have been replaced with skull images");
}