// Special JavaScript fix for slide 17
document.addEventListener('DOMContentLoaded', function() {
    console.log("Loading slide 17 emergency fix script");
    
    // Function to check if slide 17 is active and fix it
    function checkAndFixSlide17() {
        console.log("Running slide 17 fix check");
        
        // Get the current slide number from the counter
        const counterText = document.getElementById('slide-counter').textContent;
        const currentSlideNum = parseInt(counterText.split(' / ')[0]);
        
        if (currentSlideNum === 17) {
            console.log("Slide 17 is active, applying fix");
            
            // Get slide 17
            const slide17 = document.getElementById('slide-17');
            
            // Clear any existing content
            slide17.innerHTML = '';
            
            // Create new content with inline styles
            const newContent = `
                <div style="padding: 20px; height: 100%; width: 100%; box-sizing: border-box; background-color: #2B2842; color: white; font-family: Arial, sans-serif;">
                    <!-- Super Simple Header -->
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #00A19C; font-size: 32px; margin: 0; text-transform: uppercase; font-weight: bold;">GAME EXPERIENCED CEO</h1>
                        <h2 style="color: #FF0026; font-size: 28px; margin: 5px 0 0; text-transform: uppercase; font-weight: bold;">JAN HORSFALL</h2>
                    </div>
                    
                    <!-- Simple 2-column grid for content -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                        <!-- Experience items -->
                        <div style="background-color: rgba(0,0,0,0.3); padding: 15px; border-radius: 6px; border-left: 3px solid #FF0026;">
                            <h3 style="color: #00A19C; margin: 0 0 8px; font-size: 18px;">Valvoline & Lycos</h3>
                            <p style="margin: 0; font-size: 14px; line-height: 1.4; color: white;">Marketing at Valvoline, then Lycos (fastest IPO in NASDAQ history, 3,100% stock surge, sold for $4.5B)</p>
                        </div>
                        
                        <div style="background-color: rgba(0,0,0,0.3); padding: 15px; border-radius: 6px; border-left: 3px solid #FF0026;">
                            <h3 style="color: #00A19C; margin: 0 0 8px; font-size: 18px;">Turbine Games Turnaround</h3>
                            <p style="margin: 0; font-size: 14px; line-height: 1.4; color: white;">Led 380-person company from $16M loss to $55M/year. Introduced first F2P premium game in NA/EU. Sold to Warner Bros.</p>
                        </div>
                        
                        <div style="background-color: rgba(0,0,0,0.3); padding: 15px; border-radius: 6px; border-left: 3px solid #FF0026;">
                            <h3 style="color: #00A19C; margin: 0 0 8px; font-size: 18px;">CEO Leadership</h3>
                            <p style="margin: 0; font-size: 14px; line-height: 1.4; color: white;">CEO: Gemini Voice (acquired), Gelazzi (acquired), Universal Energy (acquired). Board: NorthWestern Energy (NASDAQ: NWE)</p>
                        </div>
                        
                        <div style="background-color: rgba(0,0,0,0.3); padding: 15px; border-radius: 6px; border-left: 3px solid #FF0026;">
                            <h3 style="color: #00A19C; margin: 0 0 8px; font-size: 18px;">AI & Strategy</h3>
                            <p style="margin: 0; font-size: 14px; line-height: 1.4; color: white;">MIT Sloan CSAIL study: "AI: Implications for Business Strategy"</p>
                        </div>
                    </div>
                    
                    <!-- Career highlights grid -->
                    <div style="background-color: rgba(0,0,0,0.3); padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                        <h3 style="color: #00A19C; margin: 0 0 10px; font-size: 18px; text-align: center;">Career Highlights</h3>
                        <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px;">
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">VALVOLINE</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">LYCOS</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">TURBINE</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">WB GAMES</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">GEMINI</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">NOVO</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">GELAZZI</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">BIG FREEZE</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">UNIVERSAL</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">PETRO</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">NWE</span>
                            <span style="background-color: rgba(255,255,255,0.1); border: 1px solid #FF0026; border-radius: 4px; padding: 5px; font-size: 9px; text-align: center; font-weight: bold; color: white;">MIT</span>
                        </div>
                    </div>
                    
                    <!-- Slide Footer with Skull Logo -->
                    <div style="text-align: center; margin-top: auto;">
                        <img src="attached_assets/Footer_Logo_Skull(White).png" alt="Sparq Skull Logo" style="height: 30px;">
                    </div>
                </div>
            `;
            
            // Set the new content
            slide17.innerHTML = newContent;
            
            console.log("Slide 17 fix applied successfully");
        }
    }
    
    // Run the fix when slides change
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            setTimeout(checkAndFixSlide17, 100); // Brief delay to let slide change first
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            setTimeout(checkAndFixSlide17, 100); // Brief delay to let slide change first
        });
    }
    
    // Also hook into the jump menu
    const jumpMenuItems = document.querySelectorAll('.jump-menu-item');
    jumpMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            setTimeout(checkAndFixSlide17, 100); // Brief delay to let slide change first
        });
    });
    
    // Run immediately in case slide 17 is already active
    checkAndFixSlide17();
    
    // Also monitor for "jump to" clicks
    const jumpToBtn = document.querySelector('.jump-to-btn');
    if (jumpToBtn) {
        jumpToBtn.addEventListener('click', function() {
            // After menu opens, attach listeners to all menu items
            setTimeout(function() {
                const menuItems = document.querySelectorAll('.jump-menu-item');
                menuItems.forEach(item => {
                    item.addEventListener('click', function() {
                        setTimeout(checkAndFixSlide17, 200);
                    });
                });
            }, 100);
        });
    }
    
    // Set up a MutationObserver to watch for class changes on slides
    const slidesContainer = document.querySelector('.slides-container');
    if (slidesContainer) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    checkAndFixSlide17();
                }
            });
        });
        
        const slides = slidesContainer.querySelectorAll('.slide');
        slides.forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    console.log("Slide 17 emergency fix script loaded");
});