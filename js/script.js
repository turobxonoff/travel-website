const menuBtn = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Scroll Reveal 
const sr = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1000,
    reset: true
})

sr.reveal("footer .box a, .gallery .gallery-item, .header-section__home h1, .header-section__home p, .services-cards .services-item, .blog-row .blog-item, .contact-section .box .flex, .facts-row .facts-item ",{
  interval: 200,
});
