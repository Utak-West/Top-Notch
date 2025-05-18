/**
 * Scroll Fix for Top-Notch Renovations Website
 * This script applies essential fixes to ensure proper scrolling behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Force scrolling to be enabled
    document.documentElement.style.setProperty('overflow-y', 'auto', 'important');
    document.documentElement.style.setProperty('height', 'auto', 'important');
    
    document.body.style.setProperty('overflow-y', 'auto', 'important');
    document.body.style.setProperty('height', 'auto', 'important');
    document.body.style.setProperty('position', 'relative', 'important');
    document.body.style.setProperty('padding-top', '105px', 'important');
    
    // Ensure fixed header is positioned correctly
    const headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper) {
        headerWrapper.style.setProperty('position', 'fixed', 'important');
        headerWrapper.style.setProperty('top', '0', 'important');
        headerWrapper.style.setProperty('width', '100%', 'important');
        headerWrapper.style.setProperty('z-index', '9999', 'important');
    }
    
    // Fix any potential overflow issues
    const contentSections = document.querySelectorAll('section');
    contentSections.forEach(function(section) {
        section.style.setProperty('overflow', 'visible', 'important');
    });
    
    console.log('Scroll fix applied successfully');
});
