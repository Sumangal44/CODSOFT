function initNavigation() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    for (const link of document.querySelectorAll('.nav-links a')) {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    }
}

initNavigation();