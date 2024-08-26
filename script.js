// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.style.opacity = '1';
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(function(section) {
    sectionObserver.observe(section);
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
});

// Dynamic Year in Footer
const yearElement = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} Gujarat Innovation & Research Platform. All rights reserved.`;

// Loading Animation for Images
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});
