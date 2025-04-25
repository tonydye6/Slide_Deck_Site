// Array of slide titles for the jump menu
const slideTitles = [
    "SPARQ", // Slide 1
    "Mission", // Slide 2
    "Web3 Simplified", // Slide 3
    "The Problem", // Slide 4
    "Why is Web3 Hard to Adopt?", // Slide 5
    "The Solution", // Slide 6
    "Sports & Web3: Perfect Match", // Slide 7
    "Our Approach", // Slide 8
    "Market Opportunity", // Slide 9
    "Games Distribution", // Slide 10
    "Game Genres", // Slide 11
    "Game Studio Partners", // Slide 12
    "Crown U", // Slide 13
    "Crown U: College Football Rivalry", // Slide 14
    "Crown U Vision", // Slide 15
    "Games Roadmap", // Slide 16
    "Athlete IP Strategy", // Slide 17
    "Athlete Partnerships", // Slide 18
    "Athlete Testimonials", // Slide 19
    "AI-Powered Pipeline", // Slide 20
    "Play-to-Own Overview", // Slide 21
    "NFT Strategy", // Slide 22
    "IP Portfolio", // Slide 23
    "Fantasy Sports", // Slide 24
    "User Experience Flow", // Slide 25
    "Athlete & Partner Benefits", // Slide 26
    "Web3 for Sports Fans", // Slide 27
    "Web3 Blockchain Integration", // Slide 28
    "Token Economy", // Slide 29
    "Competitive Analysis", // Slide 30
    "Marketing Strategy", // Slide 31
    "Go-to-Market Strategy", // Slide 32
    "Revenue Model", // Slide 33
    "Revenue Projections", // Slide 34
    "Raising Round", // Slide 35
    "Use of Funds", // Slide 36
    "Trusted by Athletes", // Slide 37
    "Leadership Team", // Slide 38
    "Game Studio Team", // Slide 39
    "Advisors", // Slide 40
    "Experienced CEO", // Slide 41
    "Highlights & Milestones", // Slide 42
    "Next Steps", // Slide 43
    "Contact", // Slide 44
];

// When the document is loaded, initialize the jump menu
document.addEventListener('DOMContentLoaded', function() {
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
    // Use the existing showSlide function from the main navigation script
    showSlide(slideIndex);
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