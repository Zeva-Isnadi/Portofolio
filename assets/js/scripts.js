document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const skillCards = document.querySelectorAll('.skill-card');
    const portfolioItems = document.querySelectorAll('.portfolio-carousel div');

    // Initialize Slick Carousel for Portfolio Section
    $('.portfolio-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="carousel-prev">←</button>',
        nextArrow: '<button class="carousel-next">→</button>',
    });

    // Toggle between light and dark themes
    themeToggle.addEventListener('click', () => {
        const isLightTheme = document.body.classList.contains('light-theme');
        
        // Switch themes
        document.body.classList.toggle('light-theme', !isLightTheme);
        document.body.classList.toggle('dark-theme', isLightTheme);
        
        // Change icon based on theme
        themeToggle.textContent = isLightTheme ? '🌙' : '☀️';
        
        // Optional: Adjust navbar and header styles here if needed
    });

    // Navbar animation on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add animation on scroll for skills and portfolio cards
    const animateCards = (cards) => {
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) {
                card.classList.add('animate-in');
            }
        });
    };

    window.addEventListener('scroll', () => {
        animateCards(skillCards);
        animateCards(portfolioItems);
    });

    // Initial animation check
    animateCards(skillCards);
    animateCards(portfolioItems);
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-animate');
    
    // Scroll Smooth Function
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add Animation on Scroll
    function checkSectionVisibility() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    // Initial check
    checkSectionVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkSectionVisibility);
});
