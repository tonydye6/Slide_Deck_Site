/**
 * Print-to-PDF functionality for Sparq Games Pitch Deck
 * This script enables users to print the entire pitch deck to PDF
 * with proper styling and formatting for all 44 slides.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create print button and add it to the navigation controls
    setupPrintButton();
});

/**
 * Creates and adds the print button to the navigation controls
 */
function setupPrintButton() {
    // Create print button element
    const printButton = document.createElement('button');
    printButton.id = 'print-button';
    printButton.className = 'nav-btn print-control';
    printButton.innerHTML = '<span class="print-icon">🖨️</span> PDF';
    printButton.title = 'Print to PDF';
    
    // Find the navigation area - in this deck it's the nav-controls div
    const navControls = document.querySelector('.nav-controls');
    if (navControls) {
        // Add it after the slide counter
        const slideCounter = document.getElementById('slide-counter');
        if (slideCounter) {
            // Insert after slide counter
            slideCounter.insertAdjacentElement('afterend', printButton);
        } else {
            // Fallback - insert at the end of nav controls
            navControls.appendChild(printButton);
        }
        
        // Add click event listener
        printButton.addEventListener('click', function() {
            preparePrintLayout();
        });
        console.log("Print button added successfully");
    } else {
        // Alternative approach - try to add it next to the jump menu
        const jumpMenu = document.querySelector('.jump-to-menu');
        if (jumpMenu) {
            jumpMenu.insertAdjacentElement('beforebegin', printButton);
            // Add click event listener
            printButton.addEventListener('click', function() {
                preparePrintLayout();
            });
            console.log("Print button added next to jump menu");
        } else {
            console.error('Navigation controls and jump menu not found');
        }
    }
}

/**
 * Prepares the layout for printing
 * - Shows all slides
 * - Adjusts CSS for print media
 * - Triggers the print dialog
 */
function preparePrintLayout() {
    console.log('Preparing for print...');
    
    // Create a clone of the entire presentation for printing
    const originalContent = document.querySelector('.presentation-container');
    if (!originalContent) {
        console.error('Presentation container not found');
        return;
    }
    
    // Clean up any existing print container
    const existingPrintContainer = document.getElementById('print-container');
    if (existingPrintContainer) {
        document.body.removeChild(existingPrintContainer);
    }
    
    const printContainer = originalContent.cloneNode(true);
    printContainer.id = 'print-container';
    
    // Apply print-specific styling to container
    printContainer.style.position = 'absolute';
    printContainer.style.left = '-9999px';
    printContainer.style.top = '0';
    printContainer.style.width = '100%';
    printContainer.style.height = 'auto';
    printContainer.style.zIndex = '-1';
    
    // Add to the document body
    document.body.appendChild(printContainer);
    
    // Show all slides in the print container
    const slides = printContainer.querySelectorAll('.slide');
    console.log(`Preparing ${slides.length} slides for printing`);
    
    slides.forEach(slide => {
        slide.classList.add('slide-print');
        slide.classList.remove('slide-active');
        slide.style.display = 'block';
        slide.style.pageBreakAfter = 'always';
        slide.style.height = '100vh';
        slide.style.width = '100%';
        slide.style.position = 'relative';
        slide.style.overflow = 'hidden';
    });
    
    // Hide navigation elements in print version
    const navControls = printContainer.querySelector('.nav-controls');
    if (navControls) {
        navControls.style.display = 'none';
    }
    
    const jumpMenu = printContainer.querySelector('.jump-to-menu');
    if (jumpMenu) {
        jumpMenu.style.display = 'none';
    }
    
    // Remove any existing print stylesheet
    const existingPrintStyle = document.getElementById('print-styles');
    if (existingPrintStyle) {
        document.head.removeChild(existingPrintStyle);
    }
    
    // Create print-specific stylesheet
    injectPrintStyles();
    
    // Alert user that print is being prepared
    alert('Preparing all 44 slides for printing. The print dialog will open shortly...');
    
    // Wait a bit for styles to apply, then trigger print dialog
    setTimeout(function() {
        window.print();
        
        // Clean up after printing
        setTimeout(function() {
            document.body.removeChild(printContainer);
            const printStylesheet = document.getElementById('print-styles');
            if (printStylesheet) {
                document.head.removeChild(printStylesheet);
            }
            console.log('Print process completed');
        }, 1000);
    }, 500);
}

/**
 * Injects print-specific styles into the document head
 */
function injectPrintStyles() {
    // Create a style element
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.type = 'text/css';
    style.media = 'print';
    
    // Add print-specific CSS rules
    const css = `
        @media print {
            /* Hide original presentation container while keeping the print container */
            .presentation-container:not(#print-container) {
                display: none !important;
            }
            
            /* Hide all non-essential elements */
            .nav-controls, .jump-to-menu, #jumpMenuContent, #print-button {
                display: none !important;
            }
            
            /* Format slides for printing */
            .slide-print {
                display: block !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
                height: 100vh !important;
                width: 100% !important;
                box-sizing: border-box !important;
                padding: 20px !important;
                margin: 0 !important;
                transform: none !important;
                opacity: 1 !important;
                position: relative !important;
                overflow: hidden !important;
                break-after: page !important;
            }
            
            /* Fix fonts and sizes for better printing */
            body {
                font-size: 12pt !important;
                color: black !important;
                background: white !important;
            }
            
            /* Ensure headings don't break */
            h1, h2, h3, h4, h5, h6 {
                page-break-after: avoid !important;
                page-break-inside: avoid !important;
            }
            
            /* Ensure images print properly */
            img, svg {
                max-width: 100% !important;
                max-height: 90vh !important;
                page-break-inside: avoid !important;
            }
            
            /* Ensure lists print properly */
            ul, ol, li {
                page-break-inside: avoid !important;
            }
            
            /* Ensure tables print properly */
            table, tr, td, th {
                page-break-inside: avoid !important;
            }
            
            /* Ensure all backgrounds and colors print */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            /* Print each slide on its own page */
            #print-container .slide {
                display: block !important;
                page-break-after: always !important;
                break-after: page !important;
            }
        }
    `;
    
    // Add the CSS to the style element
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    
    // Add the style element to the head
    document.head.appendChild(style);
}