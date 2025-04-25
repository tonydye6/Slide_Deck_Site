/**
 * AI Hub and Spoke Layout
 * This script creates and maintains the dynamic hub-and-spoke layout for Slide 10
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the hub layout
    initAIHubLayout();
    
    // Re-initialize the layout on window resize
    window.addEventListener('resize', function() {
        initAIHubLayout();
    });
});

function initAIHubLayout() {
    const hubContainer = document.querySelector('#slide-10 .ai-hub-container');
    
    if (!hubContainer) {
        return; // Exit if the hub container doesn't exist
    }
    
    const aiCore = hubContainer.querySelector('.ai-core');
    const aiPoints = hubContainer.querySelectorAll('.ai-point');
    
    if (!aiCore || aiPoints.length === 0) {
        return; // Exit if core or points don't exist
    }
    
    // Clear existing connectors
    const existingConnectors = hubContainer.querySelectorAll('.ai-connector');
    existingConnectors.forEach(connector => connector.remove());
    
    // Get the position of the AI core center
    const coreRect = aiCore.getBoundingClientRect();
    const hubRect = hubContainer.getBoundingClientRect();
    
    const coreCenter = {
        x: coreRect.left - hubRect.left + coreRect.width / 2,
        y: coreRect.top - hubRect.top + coreRect.height / 2
    };
    
    // Create connectors from core to each point
    aiPoints.forEach(point => {
        const pointRect = point.getBoundingClientRect();
        
        // Calculate the center of the point relative to the hub container
        const pointCenter = {
            x: pointRect.left - hubRect.left + pointRect.width / 2,
            y: pointRect.top - hubRect.top + pointRect.height / 2
        };
        
        // Create a connector line
        const connector = document.createElement('div');
        connector.classList.add('ai-connector');
        
        // Calculate angle between core and point
        const angle = Math.atan2(pointCenter.y - coreCenter.y, pointCenter.x - coreCenter.x);
        
        // Calculate distance between core and point
        const distance = Math.sqrt(
            Math.pow(pointCenter.x - coreCenter.x, 2) + 
            Math.pow(pointCenter.y - coreCenter.y, 2)
        );
        
        // Adjust the start and end points to connect to the borders of the circles
        const coreRadius = coreRect.width / 2;
        const pointRadiusX = pointRect.width / 2;
        const pointRadiusY = pointRect.height / 2;
        
        // Start point (on the core circle)
        const startX = coreCenter.x + Math.cos(angle) * coreRadius;
        const startY = coreCenter.y + Math.sin(angle) * coreRadius;
        
        // End point (on the point border)
        const endX = pointCenter.x - Math.cos(angle) * pointRadiusX;
        const endY = pointCenter.y - Math.sin(angle) * pointRadiusY;
        
        // Calculate new distance
        const newDistance = Math.sqrt(
            Math.pow(endX - startX, 2) + 
            Math.pow(endY - startY, 2)
        );
        
        // Position and size the connector
        connector.style.width = `${newDistance}px`;
        connector.style.left = `${startX}px`;
        connector.style.top = `${startY}px`;
        connector.style.transform = `rotate(${angle}rad)`;
        connector.style.transformOrigin = '0 0';
        
        // Add the connector to the hub container
        hubContainer.appendChild(connector);
    });
}

// Update the layout when slide becomes visible
document.addEventListener('slide-change', function(e) {
    if (e.detail === 10) { // Slide 10
        setTimeout(function() {
            initAIHubLayout();
        }, 100);
    }
});