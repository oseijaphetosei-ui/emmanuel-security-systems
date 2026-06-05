document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.site-header');

    hamburger.addEventListener('click', function () {
        const isOpen = header.classList.toggle('nav-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function (e) {
        if (!header.contains(e.target)) {
            header.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});
