//mobile menu

const burgerIcon = document.querySelector('#burger');
const navbarMenu = documen.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});