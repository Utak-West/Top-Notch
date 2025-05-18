/**
 * Top Notch Renovations - Consolidated JavaScript
 * This file combines all JavaScript functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== SCROLL FIXES =====
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
    
    // ===== MOBILE MENU =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // ===== SCROLL ANIMATIONS =====
    const animateOnScroll = function() {
        // Handle .animate-on-scroll elements
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isElementVisible = elementTop < window.innerHeight && elementBottom > 0;

            if (isElementVisible && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
        
        // Handle animation classes (.fade-in, .slide-up, .scale-in)
        const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // ===== SMOOTH SCROLLING =====
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
            
            // If mobile menu is open, close it
            if (mainNavigation && mainNavigation.classList.contains('active')) {
                mainNavigation.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // ===== PORTFOLIO FILTER =====
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
    
    // ===== TESTIMONIAL SLIDER =====
    const setupTestimonialSlider = function() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const prevButton = document.querySelector('.prev-btn');
        const nextButton = document.querySelector('.next-btn');
        
        if (testimonialSlider && prevButton && nextButton) {
            const testimonials = testimonialSlider.querySelectorAll('.testimonial');
            let currentSlide = 0;
            
            // Hide all testimonials except the first one
            testimonials.forEach((testimonial, index) => {
                if (index !== 0) {
                    testimonial.style.display = 'none';
                }
            });
            
            // Function to show a specific testimonial
            const showTestimonial = function(index) {
                testimonials.forEach((testimonial, i) => {
                    testimonial.style.display = i === index ? 'block' : 'none';
                    
                    if (i === index) {
                        testimonial.classList.add('scale-in');
                        setTimeout(() => {
                            testimonial.classList.add('active');
                        }, 10);
                    } else {
                        testimonial.classList.remove('active');
                    }
                });
            };
            
            // Event listeners for next and previous buttons
            prevButton.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentSlide);
            });
            
            nextButton.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % testimonials.length;
                showTestimonial(currentSlide);
            });
            
            // Auto play testimonials every 5 seconds
            setInterval(function() {
                currentSlide = (currentSlide + 1) % testimonials.length;
                showTestimonial(currentSlide);
            }, 5000);
        }
    };
    
    setupTestimonialSlider();
    
    // ===== FORM VALIDATION =====
    const contactForm = document.querySelector('form.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    const errorMessage = field.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        const message = document.createElement('span');
                        message.className = 'error-message';
                        message.textContent = 'This field is required';
                        field.parentNode.appendChild(message);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMessage = field.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    const errorMessage = emailField.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        const message = document.createElement('span');
                        message.className = 'error-message';
                        message.textContent = 'Please enter a valid email address';
                        emailField.parentNode.appendChild(message);
                    }
                }
            }
            
            // If form is valid, show success message or submit
            if (isValid) {
                // For demo purposes - show success message instead of actual submission
                const formContent = contactForm.innerHTML;
                contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Thank you! Your message has been sent. We will get back to you shortly.</div>';
                
                // Restore form after 5 seconds - remove this in production
                setTimeout(function() {
                    contactForm.innerHTML = formContent;
                    contactForm.reset();
                }, 5000);
                
                // In production, uncomment this line to submit the form
                // contactForm.submit();
            }
        });
        
        // Real-time validation feedback
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            input.addEventListener('focus', function() {
                input.classList.remove('error');
                const errorMessage = input.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
    
    // ===== LAZY LOADING =====
    const lazyLoadImages = function() {
        const images = document.querySelectorAll('.lazy');
        const config = {
            rootMargin: '50px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        img.src = dataSrc;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        }, config);
        
        images.forEach(img => observer.observe(img));
    };
    
    lazyLoadImages();
    
    console.log('All scripts initialized successfully');
});
