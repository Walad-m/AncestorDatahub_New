
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-list');
const navLinks = document.querySelectorAll('.nav-menu-list li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


