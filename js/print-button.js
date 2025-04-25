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
    
    // Create a more professional printer icon using SVG, matching the image provided
    const iconSVG = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/>
        </svg>
        <span style="font-size: 12px; margin-top: 2px; letter-spacing: 0.5px;">PDF</span>
    </div>
    `;
    
    printButton.innerHTML = iconSVG;
    printButton.style.cursor = 'pointer';
    
    // Style the button to match the image provided
    printButton.style.backgroundColor = '#2B2842'; // Carbon color
    printButton.style.color = 'white';
    printButton.style.border = '2px solid #FF0026'; // Outlaw Red border
    printButton.style.borderRadius = '50%'; // Make it circular
    printButton.style.width = '50px';
    printButton.style.height = '50px';
    printButton.style.display = 'flex';
    printButton.style.alignItems = 'center';
    printButton.style.justifyContent = 'center';
    printButton.style.fontFamily = "'ADAM.CG PRO', Arial, sans-serif";
    printButton.style.padding = '0';
    printButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'; // Add subtle shadow
    
    // Add hover and active effects to match the image
    printButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#3B3852'; // Slightly lighter Carbon color
        this.style.borderColor = '#FF0026'; // Keep Outlaw Red border
        this.style.transform = 'scale(1.05)'; // Slight scale effect
    });
    
    printButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#2B2842'; // Carbon color
        this.style.borderColor = '#FF0026'; // Outlaw Red
        this.style.transform = 'scale(1)'; // Reset scale
    });
    
    printButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)'; // Scale down slightly when pressed
    });
    
    printButton.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.05)'; // Return to hover scale
    });
    
    // Add click functionality
    printButton.addEventListener('click', function() {
        printAllSlides();
    });
    
    // Create a container for the print button that will be positioned on the far right
    const printButtonContainer = document.createElement('div');
    printButtonContainer.id = 'print-button-container';
    printButtonContainer.style.position = 'absolute';
    printButtonContainer.style.right = '20px';
    printButtonContainer.style.top = '20px';
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