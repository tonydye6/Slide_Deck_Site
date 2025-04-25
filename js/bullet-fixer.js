// Function to fix all bullet points in the Sparq Games pitch deck
document.addEventListener('DOMContentLoaded', function() {
    // APPROACH 1: Completely disable all ::before pseudo-elements directly in CSS
    disableBeforePseudoElements();
    
    // APPROACH 2: Fix any bare li elements without the custom bullet styling
    fixBulletPoints();
    
    // Run again after a slight delay to catch any dynamically loaded elements
    setTimeout(fixBulletPoints, 500);
});

/**
 * This function adds an extra layer of security by injecting a style tag
 * that completely disables all ::before pseudo-elements for list items on
 * problematic slides. This ensures the red circle bullets won't appear
 * even if our CSS overrides are somehow not applied.
 */
function disableBeforePseudoElements() {
    // Problematic slides with red circle bullets
    const problemSlides = [2, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 31];
    
    // Create a style tag to inject our overrides
    const style = document.createElement('style');
    
    // Build a string of CSS rules for each problematic slide
    let css = `
        /* Nuclear option to disable all ::before pseudo-elements for bullets */
        li::before {
            display: none !important;
            content: none !important;
            background-image: none !important;
            background: none !important;
            color: transparent !important;
            border: none !important;
            width: 0 !important;
            height: 0 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
        }
    `;
    
    // Add specific overrides for each problematic slide
    problemSlides.forEach(slideNum => {
        css += `
            /* Force override for Slide ${slideNum} */
            #slide-${slideNum} li::before,
            .slide:nth-child(${slideNum}) li::before {
                display: none !important;
                content: none !important;
                background-image: none !important;
                background: none !important;
                color: transparent !important;
                opacity: 0 !important;
                visibility: hidden !important;
            }
        `;
    });
    
    // Add final overrides for specific class-based selectors
    css += `
        /* Class-specific overrides for known problem areas */
        .value-text li::before,
        .web-column li::before,
        .reason li::before,
        .recession-insights li::before,
        .section li::before,
        .ecosystem-text li::before,
        .ecosystem-text li li::before,
        .playbook-steps li::before,
        .ai-applications-list li::before {
            display: none !important;
            content: none !important;
            background-image: none !important;
        }
        
        /* Ensure our custom skull bullets are visible */
        li img[src*="Bulletpoint_Logo_Skull(Red) copy.png"] {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            z-index: 100 !important;
        }
    `;
    
    // Set the CSS content and append to head
    style.textContent = css;
    document.head.appendChild(style);
    
    console.log("All ::before pseudo-elements for bullets have been disabled");
}

/**
 * This function ensures every list item has our custom skull bullet
 * by directly manipulating the DOM.
 */
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
        
        // Set inline styles directly with !important flags to override any conflicting styles
        liElement.style.cssText = `
            position: relative !important;
            padding-left: 28px !important;
            margin-bottom: 8px !important;
            list-style: none !important;
        `;
        
        // Add our custom bullet but preserve the original HTML content
        liElement.innerHTML = `
            <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" 
                 style="width: 16px !important; height: 16px !important; position: absolute !important; left: 0 !important; top: 4px !important; z-index: 100 !important;">
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
            // Set styles for the ul element with !important flags
            ulElement.style.cssText = `
                list-style: none !important;
                padding-left: 0 !important;
            `;
            
            // Add the sparq-bullet-list class if it doesn't have it
            if (!ulElement.classList.contains('sparq-bullet-list')) {
                ulElement.classList.add('sparq-bullet-list');
            }
        });
    });
    
    console.log("Bullet points have been replaced with skull images");
}