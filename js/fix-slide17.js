// Special JavaScript fix for slide 17
document.addEventListener('DOMContentLoaded', function() {
    console.log("Loading slide 17 extreme emergency fix script");
    
    // Function to check if slide 17 is active and redirect to standalone page
    function checkAndRedirectToSlide17() {
        console.log("Running slide 17 redirect check");
        
        // Get the current slide number from the counter
        const counterText = document.getElementById('slide-counter').textContent;
        const currentSlideNum = parseInt(counterText.split(' / ')[0]);
        
        if (currentSlideNum === 17) {
            console.log("Slide 17 is active, redirecting to standalone page");
            window.location.href = 'slide17.html';
        }
    }
    
    // Function to handle direct slide 17 link
    function handleDirectSlide17Link() {
        if (window.location.hash === '#slide-17') {
            console.log("Direct link to slide 17 detected, redirecting");
            window.location.href = 'slide17.html';
        }
    }
    
    // Run the redirect when slides change
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            setTimeout(checkAndRedirectToSlide17, 100); // Brief delay to let slide change first
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            setTimeout(checkAndRedirectToSlide17, 100); // Brief delay to let slide change first
        });
    }
    
    // Hook into the jump menu
    const jumpMenuItems = document.querySelectorAll('.jump-menu-item');
    jumpMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (item.textContent.includes('CEO')) {
                console.log("Jump to CEO slide detected, redirecting");
                setTimeout(function() {
                    window.location.href = 'slide17.html';
                }, 100);
            }
        });
    });
    
    // Also monitor for hash changes
    window.addEventListener('hashchange', function() {
        handleDirectSlide17Link();
    });
    
    // Run immediately in case slide 17 is already active
    checkAndRedirectToSlide17();
    handleDirectSlide17Link();
    
    // Modify all links to slide 17 in the jump menu
    setTimeout(function() {
        const jumpMenuContent = document.getElementById('jumpMenuContent');
        if (jumpMenuContent) {
            const links = jumpMenuContent.querySelectorAll('a');
            links.forEach(link => {
                if (link.getAttribute('href') === '#slide-17') {
                    link.setAttribute('href', 'slide17.html');
                    console.log("Modified jump menu link to slide17.html");
                }
            });
        }
    }, 500);
    
    console.log("Slide 17 standalone redirect script loaded");
});