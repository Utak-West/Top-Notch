/**
 * Top Notch Renovations - Performance Improvements
 * Implements performance enhancements like lazy loading images
 */

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load all images that aren't already loaded
    lazyLoadImages();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
});

/**
 * Adds lazy loading attributes to images
 */
function lazyLoadImages() {
    // Select all images without the loading attribute already set
    const images = document.querySelectorAll('img:not([loading])');
    
    images.forEach(img => {
        // Skip small images that are likely icons or logos
        if (img.height < 50) return;
        
        // Add loading lazy attribute
        img.setAttribute('loading', 'lazy');
        
        // Add a basic placeholder if there's no alt text
        if (!img.getAttribute('alt')) {
            img.setAttribute('alt', 'Top Notch Renovations Image');
        }
    });
    
    // Handle background images by converting them to regular images where appropriate
    const bgElements = document.querySelectorAll('.hero-background, .portfolio-item-bg, .service-image');
    
    bgElements.forEach(el => {
        const style = getComputedStyle(el);
        const bgImage = style.backgroundImage;
        
        if (bgImage && bgImage !== 'none') {
            // Extract URL from backgroundImage
            const url = bgImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            
            if (url) {
                // Add a data attribute to track the original background image
                el.setAttribute('data-bg-url', url);
                
                // Create a new image element
                const img = document.createElement('img');
                img.src = url;
                img.setAttribute('loading', 'lazy');
                img.setAttribute('alt', el.getAttribute('data-alt') || 'Top Notch Renovations Background');
                img.style.position = 'absolute';
                img.style.top = '0';
                img.style.left = '0';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.zIndex = '-1';
                
                // Make sure the container is positioned relatively if not already
                if (style.position === 'static') {
                    el.style.position = 'relative';
                }
                
                // Remove background image
                el.style.backgroundImage = 'none';
                
                // Append image
                el.appendChild(img);
            }
        }
    });
}

/**
 * Implements smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to the element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Detect if images fail to load and apply fallback styling
 */
window.addEventListener('load', function() {
    // Find all images and check if they loaded properly
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            // Image failed to load
            handleImageLoadError(img);
        }
        
        // Also add an error handler for future failures
        img.addEventListener('error', function() {
            handleImageLoadError(this);
        });
    });
});

/**
 * Handle image load errors with proper fallbacks
 */
function handleImageLoadError(img) {
    // Is this a logo?
    if (img.closest('.site-logo') || img.closest('.logo-container')) {
        // For logos, add a text fallback
        const logoContainer = img.closest('.site-logo') || img.closest('.logo-container');
        const logoText = document.createElement('span');
        logoText.classList.add('logo-text');
        logoText.textContent = 'Top Notch Renovations';
        logoContainer.appendChild(logoText);
        
        // Hide the failed image
        img.style.display = 'none';
    } else {
        // For regular images, show a placeholder
        img.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1890d7573ac%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A%22Open%20Sans%22%2C%20sans-serif%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder%22%3E%3Crect%20width%3D%22500%22%20height%3D%22300%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22175%22%20y%3D%22161%22%3ETop%20Notch%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        img.setAttribute('alt', img.getAttribute('alt') || 'Image could not be loaded');
    }
}
