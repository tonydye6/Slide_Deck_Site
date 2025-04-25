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
    console.log('Preparing all slides for printing...');
    
    // Create a print-specific stylesheet
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.media = 'print';
    
    // Add print-specific CSS
    style.textContent = `
        @media print {
            /* Hide navigation elements */
            .nav-controls, .jump-to-menu, #print-button {
                display: none !important;
            }
            
            /* Show all slides */
            .slide {
                display: block !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
                height: 100vh !important;
                width: 100% !important;
                box-sizing: border-box !important;
                margin: 0 !important;
                padding: 20px !important;
            }
            
            /* Ensure backgrounds print */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    `;
    
    // Add the style to the head
    document.head.appendChild(style);
    
    // Show preparing message to user
    alert('Preparing all 44 slides for printing. The print dialog will open shortly...');
    
    // Delay slightly to let the alert be shown
    setTimeout(function() {
        // Save current slide for later
        const currentSlideNumber = window.currentSlide;
        
        // Make all slides visible for printing
        const slides = document.querySelectorAll('.slide');
        
        slides.forEach(slide => {
            // Add a class to mark for printing
            slide.classList.add('print-visible');
            
            // Make sure it's visible but keep track of active status
            if (slide.classList.contains('slide-active')) {
                slide.dataset.wasActive = 'true';
            } else {
                slide.dataset.wasActive = 'false';
                // Make visible for printing
                slide.style.display = 'block';
            }
        });
        
        // Trigger print dialog
        window.print();
        
        // Clean up after printing (or after dialog is closed)
        setTimeout(function() {
            // Restore slide visibility
            slides.forEach(slide => {
                slide.classList.remove('print-visible');
                
                // Restore previous visibility state
                if (slide.dataset.wasActive === 'false') {
                    slide.style.display = '';
                    slide.classList.remove('slide-active');
                } else {
                    slide.classList.add('slide-active');
                }
                
                // Clean up data attribute
                slide.removeAttribute('data-was-active');
            });
            
            // Remove print stylesheet
            document.head.removeChild(style);
            
            // Show the correct slide again
            if (window.showSlide) {
                window.showSlide(currentSlideNumber);
            }
            
            console.log('Print cleanup completed');
        }, 1000);
    }, 100);
}