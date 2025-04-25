// Array of slide titles for the jump menu
const newSlideTitles = [
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
    "Retention/Engagement", // Slide 38b
    "Trojan Horse", // Slide 39
    "The Locker Room (1)", // Slide 40
    "The Locker Room (2)", // Slide 41
    "The Locker Room (3)", // Slide 42
    "Athlete Comp", // Slide 43
    "R.T.F.", // Slide 44
];

// When the document is loaded, initialize the jump menu
document.addEventListener('DOMContentLoaded', function() {
    console.log("NEW Jump menu loading with updated titles...");
    // Wait a bit to override any other script
    setTimeout(function() {
        populateNewJumpMenu();
    }, 500);
});

// Function to populate the jump menu with slide titles
function populateNewJumpMenu() {
    const jumpMenuContent = document.getElementById('jumpMenuContent');
    
    // If the element doesn't exist, try again later
    if (!jumpMenuContent) {
        console.log("Jump menu content element not found, retrying...");
        setTimeout(populateNewJumpMenu, 500);
        return;
    }
    
    console.log("Populating jump menu with new titles");
    
    // Clear any existing content
    jumpMenuContent.innerHTML = '';
    
    // Add each slide title as a link
    for (let i = 0; i < newSlideTitles.length; i++) {
        const slideLink = document.createElement('a');
        slideLink.href = '#';
        slideLink.textContent = `${i+1}. ${newSlideTitles[i]}`;
        slideLink.dataset.slideIndex = i + 1; // Store the slide index
        
        // Add click event to jump to the slide
        slideLink.addEventListener('click', function(e) {
            e.preventDefault();
            const slideIndex = parseInt(this.dataset.slideIndex);
            newJumpToSlide(slideIndex);
            toggleJumpMenu(); // Close the menu after selection
        });
        
        jumpMenuContent.appendChild(slideLink);
    }
}

// Function to jump to a specific slide
function newJumpToSlide(slideIndex) {
    // Handle special case for slide 38b (Allocation Cont.)
    if (slideIndex === 39) { // 39 is the index in the array for "Retention/Engagement", but we want to show slide-38b
        // Target the slide-38b element instead
        const targetSlide = document.getElementById('slide-38b');
        if (targetSlide) {
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('slide-active');
            });
            targetSlide.classList.add('slide-active');
            // Update currentSlide variable in the main script
            window.currentSlide = 39;
            updateSlideCounter();
            // Dispatch a slide change event
            document.dispatchEvent(new CustomEvent('slide-change', { detail: 39 }));
            return;
        }
    }
    
    // Handle special case for slide 43a (Retention/Engagement)
    if (slideIndex === 40) { // 40 is the index for "Trojan Horse", but we want to show slide-43a
        // Target the slide-43a element instead
        const targetSlide = document.getElementById('slide-43a');
        if (targetSlide) {
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('slide-active');
            });
            targetSlide.classList.add('slide-active');
            // Update currentSlide variable in the main script
            window.currentSlide = 40;
            updateSlideCounter();
            // Dispatch a slide change event
            document.dispatchEvent(new CustomEvent('slide-change', { detail: 40 }));
            return;
        }
    }
    
    // For other slides, use the existing showSlide function
    if (window.showSlide) {
        window.showSlide(slideIndex);
    } else {
        console.error("showSlide function not found");
    }
}

// Function to toggle the jump menu visibility
function toggleJumpMenu() {
    const jumpMenuContent = document.getElementById('jumpMenuContent');
    if (jumpMenuContent) {
        jumpMenuContent.classList.toggle('show');
    }
}