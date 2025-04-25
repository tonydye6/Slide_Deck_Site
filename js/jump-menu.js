// Array of slide titles for the jump menu - EXACT titles as provided by the user
const slideTitles = [
    "Cover", // Slide 1
    "Mission", // Slide 2
    "Web3 Simplified", // Slide 3
    "The Problem", // Slide 4
    "Web3 Failed", // Slide 5
    "Recession Proof", // Slide 6
    "NCAA Sports", // Slide 7
    "Gaming Ecosystem", // Slide 8
    "The Playbook", // Slide 9
    "AI Everywhere", // Slide 10
    "Media Coverage", // Slide 11
    "Go To Market", // Slide 12
    "Locker Room™", // Slide 13
    "Market Opportunity", // Slide 14
    "Business Model", // Slide 15
    "Traction", // Slide 16
    "CEO", // Slide 17
    "Game Leadership", // Slide 18
    "Sports Ties", // Slide 19
    "Advisory Board", // Slide 20
    "Board of Directors", // Slide 21
    "F.T.C.", // Slide 22
    "Fundraise", // Slide 23
    "Join the Future", // Slide 24
    "Disclaimer", // Slide 25
    "Appendix", // Slide 26
    "Web3 Matters", // Slide 27
    "CROWN U™", // Slide 28
    "Rollout", // Slide 29
    "Game Slate", // Slide 30
    "$Sparq Token", // Slide 31
    "TGE Strategy", // Slide 32
    "Bitcoin Halving", // Slide 33
    "Market Cycles", // Slide 34
    "Risk & Mitigation", // Slide 35
    "Deflationary Core", // Slide 36
    "Token Allocation", // Slide 37
    "Allocation Cont.", // Slide 38
    "Retention/Engagement", // Slide 39
    "Trojan Horse", // Slide 40
    "The Locker Room (1)", // Slide 41
    "The Locker Room (2)", // Slide 42
    "Athlete Comp", // Slide 43
    "R.T.F." // Slide 44
];

// When the document is loaded, initialize the jump menu
document.addEventListener('DOMContentLoaded', function() {
    console.log("Jump menu loading with new titles...");
    // Populate the jump menu with slide titles
    populateJumpMenu();
});

// Function to populate the jump menu with slide titles
function populateJumpMenu() {
    const jumpMenuContent = document.getElementById('jumpMenuContent');
    
    // Clear any existing content
    jumpMenuContent.innerHTML = '';
    
    // Add each slide title as a link
    for (let i = 0; i < slideTitles.length; i++) {
        const slideLink = document.createElement('a');
        slideLink.href = '#';
        slideLink.textContent = `${i+1}. ${slideTitles[i]}`;
        slideLink.dataset.slideIndex = i + 1; // Store the slide index
        
        // Add click event to jump to the slide
        slideLink.addEventListener('click', function(e) {
            e.preventDefault();
            const slideIndex = parseInt(this.dataset.slideIndex);
            jumpToSlide(slideIndex);
            toggleJumpMenu(); // Close the menu after selection
        });
        
        jumpMenuContent.appendChild(slideLink);
    }
}

// Function to toggle the jump menu visibility
function toggleJumpMenu() {
    const jumpMenuContent = document.getElementById('jumpMenuContent');
    jumpMenuContent.classList.toggle('show');
}

// Function to jump to a specific slide
function jumpToSlide(slideIndex) {
    console.log("Jumping to slide index:", slideIndex, "Title:", slideTitles[slideIndex-1]);
    
    // Handle special mappings based on the updated titles
    
    // Mapping for "Allocation Cont." (slide 38)
    if (slideIndex === 39) { // "Retention/Engagement" in the menu is slide 39
        // We want to show the slide-38b element
        const targetSlide = document.getElementById('slide-38b');
        if (targetSlide) {
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('slide-active');
            });
            targetSlide.classList.add('slide-active');
            // Update currentSlide variable
            window.currentSlide = 39;
            window.updateSlideCounter();
            // Dispatch event
            document.dispatchEvent(new CustomEvent('slide-change', { detail: 39 }));
            return;
        }
    }
    
    // Mapping for "Retention/Engagement" (slide 39)
    if (slideIndex === 40) { // "Trojan Horse" in the menu is slide 40
        // We want to show the slide-43a element for "Retention/Engagement"
        const targetSlide = document.getElementById('slide-43a');
        if (targetSlide) {
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('slide-active');
            });
            targetSlide.classList.add('slide-active');
            // Update currentSlide
            window.currentSlide = 40;
            window.updateSlideCounter();
            // Dispatch event
            document.dispatchEvent(new CustomEvent('slide-change', { detail: 40 }));
            return;
        }
    }
    
    // For standard slides, use the global showSlide function
    if (window.showSlide) {
        window.showSlide(slideIndex);
    } else {
        console.error("showSlide function not available globally");
    }
}

// Close the menu when clicking outside
window.addEventListener('click', function(e) {
    const jumpMenu = document.querySelector('.jump-to-menu');
    const jumpMenuContent = document.getElementById('jumpMenuContent');
    
    // If click is outside the menu and menu is open, close it
    if (jumpMenuContent.classList.contains('show') && 
        !jumpMenu.contains(e.target)) {
        jumpMenuContent.classList.remove('show');
    }
});