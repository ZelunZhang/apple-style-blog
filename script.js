// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (you can replace this with a more elegant solution)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animations as content scrolls into view
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.post-card, .about-content, .about-image, .contact-form');
    elements.forEach(element => {
        element.classList.add('animate-ready');
        observer.observe(element);
    });
};

// Initialize animations once the page is loaded
window.addEventListener('load', observeElements);

// Add some Apple-like subtle animations
document.querySelectorAll('.apple-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.97)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});