/**
 * Print button implementation for Sparq Games pitch deck
 * This script adds a print button directly to the DOM
 * that allows users to print the entire pitch deck to PDF
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the print button
    const printButton = document.createElement('button');
    printButton.id = 'print-button';
    printButton.className = 'nav-btn';
    printButton.textContent = '🖨️ PDF';
    printButton.style.marginLeft = '10px';
    printButton.style.cursor = 'pointer';
    
    // Style the button to match the presentation
    printButton.style.backgroundColor = '#2B2842'; // Carbon color
    printButton.style.color = 'white';
    printButton.style.border = '1px solid #00A19C'; // Grit Teal
    printButton.style.borderRadius = '4px';
    printButton.style.padding = '5px 10px';
    printButton.style.fontFamily = "'ADAM.CG PRO', Arial, sans-serif";
    
    // Add hover effects
    printButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#00A19C'; // Grit Teal
        this.style.borderColor = '#FFD700'; // Victory Gold
    });
    
    printButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#2B2842'; // Carbon color
        this.style.borderColor = '#00A19C'; // Grit Teal
    });
    
    // Add click functionality
    printButton.addEventListener('click', function() {
        printAllSlides();
    });
    
    // Find the right place to insert the button
    const navControls = document.querySelector('.nav-controls');
    
    if (navControls) {
        // Try to insert after the slide counter
        const slideCounter = document.getElementById('slide-counter');
        
        if (slideCounter) {
            slideCounter.insertAdjacentElement('afterend', printButton);
            console.log('Print button added after slide counter');
        } else {
            // Fallback to appending to nav controls
            navControls.appendChild(printButton);
            console.log('Print button added to nav controls');
        }
    } else {
        // If nav controls not found, try adding near jump menu
        const jumpMenu = document.querySelector('.jump-to-menu');
        
        if (jumpMenu) {
            // Create a wrapper for the print button
            const wrapper = document.createElement('div');
            wrapper.style.display = 'inline-block';
            wrapper.style.marginRight = '10px';
            
            // Add the print button to the wrapper
            wrapper.appendChild(printButton);
            
            // Insert before the jump menu
            jumpMenu.parentNode.insertBefore(wrapper, jumpMenu);
            console.log('Print button added before jump menu');
        } else {
            // Last resort - add to the body
            console.error('Could not find suitable location for print button');
        }
    }
});

/**
 * Print all slides in the presentation
 */
function printAllSlides() {
    console.log('Preparing all 44 slides for printing...');
    
    // First, remove any existing print styles
    const existingStyle = document.getElementById('print-styles');
    if (existingStyle) {
        document.head.removeChild(existingStyle);
    }
    
    // Create a print-specific stylesheet
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.media = 'print';
    
    // Much more comprehensive print styles to ensure all slides are visible
    style.textContent = `
        @media print {
            @page {
                size: auto;
                margin: 0mm;
            }

            /* Hide navigation elements */
            .nav-controls, .jump-to-menu, #print-button, #jumpMenuContent {
                display: none !important;
            }
            
            /* Make ALL slides visible and properly formatted for printing */
            .slides-container .slide {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: relative !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
                break-after: page !important;
                height: 100vh !important;
                width: 100% !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
                margin: 0 !important;
                padding: 20px !important;
                overflow: visible !important;
            }
            
            /* Hide any "display: none" that might be applied dynamically */
            .slides-container .slide[style*="display: none"] {
                display: block !important;
            }
            
            /* Special handling for active slides */
            .slide-active {
                display: block !important;
            }
            
            /* Ensure all content is visible */
            .slides-container {
                height: auto !important;
                overflow: visible !important;
                display: block !important;
            }
            
            /* Ensure backgrounds and colors print */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            /* Make sure images print */
            img, svg {
                max-width: 100% !important;
                page-break-inside: avoid !important;
            }
            
            /* Ensure text doesn't break */
            p, h1, h2, h3, h4, h5, h6, li {
                page-break-inside: avoid !important;
            }
            
            /* Hide any non-essential elements */
            body > *:not(.presentation-container),
            .presentation-container > *:not(.slides-container),
            .presentation-container > *:not(.nav-controls):not(.jump-to-menu):not(.slides-container) {
                display: none !important;
            }
            
            /* Ensure font colors print */
            body {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            /* Give each slide a minimum height */
            .slide {
                min-height: 100vh !important;
            }
        }
    `;
    
    // Add the style to the head
    document.head.appendChild(style);
    
    // Create a print-only container where we'll place all slides for printing
    const printContainer = document.createElement('div');
    printContainer.id = 'print-all-slides-container';
    printContainer.style.position = 'absolute';
    printContainer.style.left = '-9999px';
    printContainer.style.top = '-9999px';
    printContainer.style.width = '100%';
    printContainer.style.height = 'auto';
    
    // Clone all slides and add them to the print container
    const slidesContainer = document.querySelector('.slides-container');
    
    // Clone all slides
    const allSlides = Array.from(document.querySelectorAll('.slide'));
    
    console.log(`Found ${allSlides.length} total slides to print`);
    
    // Remember current active slide
    const currentSlideNumber = window.currentSlide || 1;
    
    // Store original display states
    const originalDisplayStates = {};
    
    // Make all slides visible for printing (in the original DOM)
    allSlides.forEach((slide, index) => {
        // Save original display state
        originalDisplayStates[slide.id] = {
            display: slide.style.display,
            wasActive: slide.classList.contains('slide-active')
        };
        
        // Temporarily make all slides visible
        slide.style.display = 'block';
        slide.classList.remove('slide-active');
        slide.setAttribute('data-print-index', index + 1);
    });
    
    // Show preparing message
    alert('Preparing all 44 slides for printing. When the print dialog opens, make sure to select "Print Background Colors" in your browser print settings for best results.');
    
    // Delay to let the DOM update
    setTimeout(function() {
        // Open print dialog
        window.print();
        
        // Clean up after printing
        setTimeout(function() {
            // Restore original slide visibility
            allSlides.forEach(slide => {
                const originalState = originalDisplayStates[slide.id];
                
                if (originalState) {
                    // Restore original display state
                    slide.style.display = originalState.display;
                    
                    // Restore active class if it was active
                    if (originalState.wasActive) {
                        slide.classList.add('slide-active');
                    } else {
                        slide.classList.remove('slide-active');
                    }
                }
                
                // Remove print attribute
                slide.removeAttribute('data-print-index');
            });
            
            // Remove print stylesheet
            document.head.removeChild(style);
            
            // Show the original active slide again
            if (window.showSlide) {
                window.showSlide(currentSlideNumber);
            }
            
            console.log('Print cleanup completed, restored to slide', currentSlideNumber);
        }, 1000);
    }, 500);
}