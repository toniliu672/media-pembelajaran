const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar a');

function setActiveSection() {
    let currentActive = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight / 2) {
            currentActive = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentActive) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveSection);
