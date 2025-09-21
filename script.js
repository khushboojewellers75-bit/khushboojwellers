document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Active link logic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to the clicked link
            link.classList.add('active');
            
            // Close mobile menu after clicking a link
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
        });
    });

    // Set initial active link based on current page URL
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.nav-menu a[href="index.html"]').classList.add('active');
    } else {
        const currentLink = document.querySelector(`.nav-menu a[href="${currentPath}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});