// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // Fade-in sections on scroll
    // ==========================
    const sections = document.querySelectorAll('section');

    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight / 1.2;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < triggerBottom) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load in case sections are already visible

    // ==========================
    // Pop up and turn gold on click
    // ==========================
    const lis = document.querySelectorAll('li');
    const h3s = document.querySelectorAll('h3');

    const toggleActive = (element, activeClass) => {
        element.classList.toggle(activeClass);
        // Remove the class after animation duration (optional, keeps it toggleable)
        setTimeout(() => {
            element.classList.remove(activeClass);
        }, 300); // matches your CSS transition
    }

    lis.forEach(li => {
        li.addEventListener('click', () => toggleActive(li, 'active-li'));
    });

    h3s.forEach(h3 => {
        h3.addEventListener('click', () => toggleActive(h3, 'active-h3'));
    });

});