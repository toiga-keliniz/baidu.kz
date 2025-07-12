
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.section-title, .about-text, .about-image, .service-card, .client-logo, .step, .case-item');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('section-title')) {
                            entry.target.style.animation = 'fadeInUp 1s forwards';
                        } else if (entry.target.classList.contains('about-text')) {
                            entry.target.style.animation = 'fadeInLeft 1s forwards';
                        } else if (entry.target.classList.contains('about-image')) {
                            entry.target.style.animation = 'fadeInRight 1s forwards';
                        } else if (entry.target.classList.contains('service-card')) {
                            entry.target.style.animation = 'fadeInUp 1s forwards';
                            // Stagger the animations
                            const index = Array.from(document.querySelectorAll('.service-card')).indexOf(entry.target);
                            entry.target.style.animationDelay = `${index * 0.1}s`;
                        } else if (entry.target.classList.contains('client-logo')) {
                            entry.target.style.animation = 'fadeInUp 1s forwards';
                            // Stagger the animations
                            const index = Array.from(document.querySelectorAll('.client-logo')).indexOf(entry.target);
                            entry.target.style.animationDelay = `${index * 0.1}s`;
                       } else if (entry.target.classList.contains('step')) {
    entry.target.style.animation = 'fadeInLeft 1s forwards';
    const index = Array.from(document.querySelectorAll('.step')).indexOf(entry.target);
    entry.target.style.animationDelay = `${index * 0.2}s`;
} else if (entry.target.classList.contains('case-item')) { // <-- ДОБАВЬТЕ ЭТОТ БЛОК
    entry.target.style.animation = 'fadeInUp 1s forwards';
    const index = Array.from(document.querySelectorAll('.case-item')).indexOf(entry.target);
    entry.target.style.animationDelay = `${index * 0.15}s`;
}
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(element => {
                observer.observe(element);
            });
        };

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            animateOnScroll();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
