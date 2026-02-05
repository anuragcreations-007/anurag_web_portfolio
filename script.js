function toggleMobileMenu() {
    const ul = document.getElementById('navUl');
    const hamburger = document.querySelector('.hamburger');
    ul.classList.toggle('active');
    hamburger.classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navUl').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('open');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});

// Active navigation highlighting & animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let current = 'home';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Trigger card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.top > -100 && !card.style.animation) {
            card.style.animation = `cardReveal 0.9s ${index * 0.1}s forwards`;
        }
    });
});


