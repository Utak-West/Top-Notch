/**
 * Top Notch Renovations - Main JavaScript
 * This file handles animations, interactions, and UI enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Scroll animations
    const animateOnScroll = function() {
        // Get all elements with animation classes
        const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
        
        animatedElements.forEach(element => {
            // Check if element is in viewport
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Testimonial slider (if exists)
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
    
    // Form validation for contact form
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
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // If mobile menu is open, close it
                if (mainNavigation && mainNavigation.classList.contains('active')) {
                    mainNavigation.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // Accessible focus states for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('keyboard-focus');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('keyboard-focus');
        });
        
        element.addEventListener('mousedown', function() {
            this.classList.remove('keyboard-focus');
        });
    });
    
    // Add animation classes to specific elements
    const addAnimationClasses = function() {
        // Section headers
        document.querySelectorAll('section h2').forEach((element, index) => {
            element.classList.add('slide-up');
            element.style.transitionDelay = `${0.1 * index}s`;
        });
        
        // Features
        document.querySelectorAll('.feature-item').forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${0.1 * index}s`;
        });
        
        // Team members
        document.querySelectorAll('.team-member').forEach((element, index) => {
            element.classList.add('scale-in');
            element.style.transitionDelay = `${0.1 * index}s`;
        });
        
        // Work images
        document.querySelectorAll('.work-image').forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${0.1 * index}s`;
        });
        
        // Call to action
        document.querySelectorAll('.cta').forEach(element => {
            element.classList.add('slide-up');
        });
    };
    
    addAnimationClasses();
    
    // Highlight current navigation item based on URL
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-navigation a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.parentElement.classList.add('current-menu-item');
        }
    });
});
