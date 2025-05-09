/**
 * Top Notch Renovations - Wilmer Theme Adaptation
 * Based on https://wilmer.qodeinteractive.com/
 */

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('.site-header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Initialize
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initAnimations();
    initPortfolioFilters();
    
    // Header Scroll Effect
    function initHeaderScroll() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
            
            // Show/hide scroll to top button
            if (scrollToTopBtn) {
                if (window.scrollY > 500) {
                    scrollToTopBtn.classList.add('active');
                } else {
                    scrollToTopBtn.classList.remove('active');
                }
            }
            
            // Animate elements when scrolled into view
            animateOnScroll();
        });
    }
    
    // Mobile Menu
    function initMobileMenu() {
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function() {
                mainNavigation.classList.toggle('active');
                this.classList.toggle('active');
                
                // Toggle aria-expanded attribute for accessibility
                const expanded = this.getAttribute('aria-expanded') === 'true' || false;
                this.setAttribute('aria-expanded', !expanded);
                
                // Prevent body scrolling when menu is open
                document.body.classList.toggle('menu-open');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (mainNavigation.classList.contains('active') && 
                    !mainNavigation.contains(e.target) && 
                    !mobileMenuToggle.contains(e.target)) {
                    mainNavigation.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            });
            
            // Close menu when escape key is pressed
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mainNavigation.classList.contains('active')) {
                    mainNavigation.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }
    
    // Smooth Scroll for internal links
    function initSmoothScroll() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mainNavigation.classList.contains('active')) {
                        mainNavigation.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            });
        });
        
        // Scroll to top
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // Scroll Animations
    function initAnimations() {
        // Initially hide all animated elements
        animatedElements.forEach(element => {
            element.classList.add('hidden');
        });
        
        // Check if elements are in viewport on page load
        setTimeout(function() {
            animateOnScroll();
        }, 100);
    }
    
    function animateOnScroll() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
                element.classList.remove('hidden');
            }
        });
    }
    
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Portfolio Filters
    function initPortfolioFilters() {
        const filters = document.querySelectorAll('.portfolio-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Initialize portfolio hover effects
        initPortfolioHoverEffects();
        
        if (filters.length && portfolioItems.length) {
            filters.forEach(filter => {
                filter.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get the parent if it's an <a> inside a span
                    const filterEl = this.tagName.toLowerCase() === 'a' ? this.parentElement : this;
                    
                    // Remove active class from all filters
                    document.querySelectorAll('.portfolio-filter').forEach(f => {
                        f.classList.remove('active');
                    });
                    document.querySelectorAll('.portfolio-filter a').forEach(a => {
                        a.classList.remove('active');
                    });
                    
                    // Add active class to clicked filter
                    filterEl.classList.add('active');
                    if (this.tagName.toLowerCase() === 'a') {
                        this.classList.add('active');
                    }
                    
                    // Get category from data-filter attribute
                    const category = this.getAttribute('data-filter') || (this.tagName.toLowerCase() === 'a' ? this.getAttribute('data-filter') : 'all');
                    
                    // Filter items with animation
                    portfolioItems.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        
                        if (category === 'all' || itemCategory === category) {
                            // Show item with fade-in animation
                            item.style.opacity = '0';
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            // Hide item with fade-out animation
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }
    }
    
    // Initialize hover effects for portfolio items
    function initPortfolioHoverEffects() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            // Set initial state for proper transitions
            const overlay = item.querySelector('.portfolio-overlay');
            const content = item.querySelector('.portfolio-content');
            
            if (overlay && content) {
                // Mouse enter event
                item.addEventListener('mouseenter', () => {
                    overlay.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                });
                
                // Mouse leave event
                item.addEventListener('mouseleave', () => {
                    overlay.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                });
            }
        });
    }
    
    // Add Scroll To Top Button to the DOM
    function addScrollToTopButton() {
        if (!scrollToTopBtn) {
            const button = document.createElement('button');
            button.className = 'scroll-to-top';
            button.innerHTML = '<i class="fas fa-chevron-up"></i>';
            document.body.appendChild(button);
            
            button.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // Call this function to add the button
    addScrollToTopButton();
});

// Image loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

/**
 * Initialize Sliders
 * This function will be called after the page is fully loaded
 * to initialize any sliders on the page.
 */
function initSliders() {
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        new Swiper(heroSlider, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        new Swiper(testimonialSlider, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

// Call initSliders if Swiper is available
if (typeof Swiper !== 'undefined') {
    initSliders();
} else {
    // If Swiper is not loaded yet, wait for it to load
    window.addEventListener('load', function() {
        if (typeof Swiper !== 'undefined') {
            initSliders();
        }
    });
}
