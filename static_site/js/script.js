document.addEventListener("DOMContentLoaded", function() {
    console.log("Top Notch Renovations site script loaded.");

    // Mobile menu toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mainNav = document.querySelector(".main-navigation");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function() {
            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonials.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Show the selected testimonial
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            testimonials[index].style.display = 'block';
            testimonials[index].classList.add('fade-in');
        }
        
        // Previous button click
        prevBtn.addEventListener('click', function() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = testimonials.length - 1;
            }
            showTestimonial(currentSlide);
        });
        
        // Next button click
        nextBtn.addEventListener('click', function() {
            currentSlide++;
            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }
            showTestimonial(currentSlide);
        });
        
        // Auto-rotate testimonials every 8 seconds
        setInterval(function() {
            currentSlide++;
            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }
            showTestimonial(currentSlide);
        }, 8000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-navigation a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Simple form validation (if form exists)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!valid) {
                e.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }
});
