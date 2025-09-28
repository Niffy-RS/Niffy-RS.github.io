console.log("Hello, World!");

function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-menu');

    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    }
    else {
        mobileNav.style.display = 'block';
    }
    console.log("Menu toggled");
}