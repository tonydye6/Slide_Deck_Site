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
    printButton.className = 'nav-control print-control';
    printButton.innerHTML = '<span class="print-icon">🖨️</span> PDF';
    printButton.title = 'Print to PDF';
    
    // Find navigation controls container
    const navControls = document.querySelector('.navigation-controls');
    if (navControls) {
        // Insert print button before the jump menu button
        const jumpMenu = document.querySelector('.jump-to-menu');
        if (jumpMenu) {
            navControls.insertBefore(printButton, jumpMenu);
        } else {
            navControls.appendChild(printButton);
        }
        
        // Add click event listener
        printButton.addEventListener('click', function() {
            preparePrintLayout();
        });
    } else {
        console.error('Navigation controls not found');
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
    
    // Hide navigation controls in print version
    const navControlsInPrint = printContainer.querySelector('.navigation-controls');
    if (navControlsInPrint) {
        navControlsInPrint.style.display = 'none';
    }
    
    // Create print-specific stylesheet
    injectPrintStyles();
    
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
            /* Hide main content */
            #presentation-container:not(#print-container) {
                display: none !important;
            }
            
            /* Hide all non-essential elements */
            .navigation-controls, .jump-to-menu, #jumpMenuContent {
                display: none !important;
            }
            
            /* Format slides for printing */
            .slide-print {
                display: block !important;
                page-break-after: always;
                height: 100vh !important;
                width: 100% !important;
                box-sizing: border-box !important;
                padding: 20px !important;
                margin: 0 !important;
                transform: none !important;
                opacity: 1 !important;
                position: relative !important;
                overflow: hidden !important;
            }
            
            /* Fix fonts and sizes for better printing */
            body {
                font-size: 12pt !important;
                color: #000 !important;
                background: #fff !important;
            }
            
            h1, h2, h3, h4, h5, h6 {
                page-break-after: avoid;
            }
            
            /* Ensure images print properly */
            img, svg {
                max-width: 100% !important;
                page-break-inside: avoid;
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