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

    // Fix for smooth scrolling to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerOffset = 120; // Adjust based on header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Fix for portfolio filter functionality
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (portfolioFilters.length > 0 && portfolioItems.length > 0) {
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Remove active class from all filters
                portfolioFilters.forEach(f => f.classList.remove('active'));

                // Add active class to clicked filter
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // Show/hide portfolio items based on filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    console.log('Scroll fix applied successfully');
});
