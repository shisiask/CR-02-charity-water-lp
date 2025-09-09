/**
 * Charity Water Landing Page JavaScript
 * Handles interactive elements and user feedback
 */

/**
 * Shows a thank you message when the donate button is clicked
 * @param {Event} event - The click event from the donate button
 */
function showThankYou(event) {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Show a thank you message
    alert("Thank you for supporting our mission! 💧\n\nYour donation will help bring clean water to communities in need.");
    
    // Get the button element that was clicked
    const button = event.target;
    const originalText = button.textContent;
    
    // Change button appearance to show confirmation
    button.textContent = "Thank You! 🙏";
    button.style.background = "linear-gradient(135deg, #4FCB53, #2E9DF7)";
    
    // Reset the button back to original state after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "linear-gradient(135deg, #4FCB53, #159A48)";
    }, 3000);
}

/**
 * Optional: Add smooth scrolling behavior for any internal links
 * This function can be expanded for additional page interactions
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization code here
    console.log('Charity Water page loaded successfully! 💧');
    
    // Optional: Add fade-in effect for sections when page loads
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations
    });
});

/**
 * Optional: Track donation button clicks for analytics
 * In a real application, you would send this data to your analytics service
 */
function trackDonationClick() {
    // Example analytics tracking
    console.log('Donation button clicked - tracking event');
    
    // In a real app, you might use:
    // gtag('event', 'click', { 'event_category': 'donation', 'event_label': 'header_button' });
    // or similar analytics tracking code
}