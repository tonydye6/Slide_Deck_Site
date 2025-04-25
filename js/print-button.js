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
    
    // Create a simple PDF icon matching the reference image
    const iconSVG = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <span style="font-size: 12px; font-weight: bold; color: white; letter-spacing: 0.5px;">PDF</span>
    </div>
    `;
    
    printButton.innerHTML = iconSVG;
    printButton.style.cursor = 'pointer';
    
    // Style the button to exactly match the image provided
    printButton.style.backgroundColor = '#FF0026'; // Outlaw Red background
    printButton.style.color = 'white';
    printButton.style.border = 'none'; 
    printButton.style.borderRadius = '4px'; // Slightly rounded corners
    printButton.style.width = '36px';
    printButton.style.height = '36px';
    printButton.style.display = 'flex';
    printButton.style.alignItems = 'center';
    printButton.style.justifyContent = 'center';
    printButton.style.fontFamily = "'ADAM.CG PRO', Arial, sans-serif";
    printButton.style.padding = '0';
    printButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)'; // Add subtle shadow
    printButton.style.position = 'relative'; // For accurate positioning
    
    // Add hover and active effects that match the red button style
    printButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#D10020'; // Slightly darker Outlaw Red
        this.style.transform = 'scale(1.05)'; // Slight scale effect
    });
    
    printButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#FF0026'; // Outlaw Red
        this.style.transform = 'scale(1)'; // Reset scale
    });
    
    printButton.addEventListener('mousedown', function() {
        this.style.backgroundColor = '#B5001C'; // Even darker Outlaw Red
        this.style.transform = 'scale(0.95)'; // Scale down slightly when pressed
    });
    
    printButton.addEventListener('mouseup', function() {
        this.style.backgroundColor = '#D10020'; // Return to hover color
        this.style.transform = 'scale(1.05)'; // Return to hover scale
    });
    
    // Add click functionality
    printButton.addEventListener('click', function() {
        printAllSlides();
    });
    
    // Create a container for the print button that will be positioned in the top right
    const printButtonContainer = document.createElement('div');
    printButtonContainer.id = 'print-button-container';
    printButtonContainer.style.position = 'absolute';
    printButtonContainer.style.right = '10px';
    printButtonContainer.style.top = '10px';
    printButtonContainer.style.zIndex = '1000';
    
    // Add the button to this container
    printButtonContainer.appendChild(printButton);
    
    // Add the container to the presentation container
    const presentationContainer = document.querySelector('.presentation-container');
    if (presentationContainer) {
        presentationContainer.appendChild(printButtonContainer);
        console.log('Print button added to far right of presentation');
    } else {
        // Fallback method: try to add near the navigation controls
        const navControls = document.querySelector('.nav-controls');
        if (navControls) {
            // Position after the next slide button, which is typically the last element
            navControls.appendChild(printButton);
            console.log('Print button added to nav controls (fallback)');
        } else {
            // Last resort: try adding near jump menu
            const jumpMenu = document.querySelector('.jump-to-menu');
            if (jumpMenu) {
                jumpMenu.parentNode.insertBefore(printButtonContainer, jumpMenu.nextSibling);
                console.log('Print button added after jump menu (last resort)');
            } else {
                console.error('Could not find suitable location for print button');
            }
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