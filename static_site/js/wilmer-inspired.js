/**
 * Top Notch Renovations - Wilmer-Inspired Animations and Interactions
 * Implements animations and interactions inspired by the Wilmer theme
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for various elements
    initAnimations();
    
    // Initialize counters for statistics sections
    initCounters();
    
    // Initialize parallax effects
    initParallax();
    
    // Initialize testimonial sliders
    initTestimonialSliders();
});

/**
 * Initialize animations for various elements using intersection observer
 */
function initAnimations() {
    // Elements to observe for animations
    const animatedElements = document.querySelectorAll(
        '.section-title, .service-card, .portfolio-item, .team-member, .testimonial-card, .icon-circle'
    );
    
    // Configure the intersection observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the appropriate animation class based on element type
                const element = entry.target;
                
                if (element.classList.contains('section-title')) {
                    element.classList.add('animate-fade-in-up');
                } else if (element.classList.contains('service-card')) {
                    element.classList.add('animate-fade-in-up');
                    // Add delay for staggered effect
                    const delay = Array.from(element.parentNode.children).indexOf(element) * 0.1;
                    element.style.animationDelay = `${delay}s`;
                } else if (element.classList.contains('portfolio-item')) {
                    element.classList.add('animate-fade-in-up');
                    // Add delay for staggered effect
                    const delay = Array.from(element.parentNode.children).indexOf(element) * 0.1;
                    element.style.animationDelay = `${delay}s`;
                } else if (element.classList.contains('team-member')) {
                    element.classList.add('animate-fade-in-up');
                } else if (element.classList.contains('testimonial-card')) {
                    element.classList.add('animate-fade-in');
                } else if (element.classList.contains('icon-circle')) {
                    element.classList.add('animate-scale-in');
                }
                
                // Stop observing the element after animation is triggered
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Start observing elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize number counters for statistics sections
 */
function initCounters() {
    const counterElements = document.querySelectorAll('.counter-value');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'), 10);
                const duration = 2000; // 2 seconds
                const increment = Math.ceil(target / (duration / 16)); // Update every 16ms (60fps)
                
                let current = 0;
                const counterInterval = setInterval(() => {
                    current += increment;
                    
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        clearInterval(counterInterval);
                    } else {
                        element.textContent = current.toLocaleString();
                    }
                }, 16);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    counterElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize parallax effects for background elements
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/**
 * Initialize testimonial sliders
 */
function initTestimonialSliders() {
    const testimonialSliders = document.querySelectorAll('.testimonial-slider');
    
    testimonialSliders.forEach(slider => {
        // Find related elements
        const testimonialsContainer = slider.querySelector('.testimonials-container');
        const prevButton = slider.querySelector('.testimonial-prev');
        const nextButton = slider.querySelector('.testimonial-next');
        const testimonials = slider.querySelectorAll('.testimonial-card');
        const dotsContainer = slider.querySelector('.testimonial-dots');
        
        if (!testimonialsContainer || testimonials.length === 0) return;
        
        // Initialize state
        let currentIndex = 0;
        const totalSlides = testimonials.length;
        
        // Create dots if dotsContainer exists
        if (dotsContainer) {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('testimonial-dot');
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
                
                dotsContainer.appendChild(dot);
            }
        }
        
        // Set up click handlers for buttons
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                goToSlide((currentIndex + 1) % totalSlides);
            });
        }
        
        // Go to a specific slide
        function goToSlide(index) {
            // Update current index
            currentIndex = index;
            
            // Update slide positions
            testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots if they exist
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.testimonial-dot');
                dots.forEach((dot, i) => {
                    if (i === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }
        
        // Add swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum swipe distance
            
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe left, go to next slide
                goToSlide((currentIndex + 1) % totalSlides);
            } else if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe right, go to previous slide
                goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
            }
        }
        
        // Auto play if enabled
        const autoPlay = slider.getAttribute('data-autoplay') === 'true';
        const autoPlayDelay = parseInt(slider.getAttribute('data-delay') || '5000', 10);
        
        if (autoPlay) {
            setInterval(() => {
                goToSlide((currentIndex + 1) % totalSlides);
            }, autoPlayDelay);
        }
    });
}

/**
 * Add additional Wilmer-inspired scroll effects
 */
window.addEventListener('scroll', function() {
    // Sticky header effect
    const header = document.querySelector('.header-wrapper');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
        }
    }
    
    // Reveal elements on scroll
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75) {
            element.classList.add('revealed');
        }
    });
});
