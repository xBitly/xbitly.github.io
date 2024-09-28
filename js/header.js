window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('hamburger').addEventListener('click', function() {
    const mobileMenu = document.getElementById('navigation-mobile-items-div');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('navigation-mobile-items-div');
    const hamburger = document.getElementById('hamburger');

    if (!hamburger.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});