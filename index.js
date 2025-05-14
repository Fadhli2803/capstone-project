// const closeButton = document.getElementById('close-button');
// const navbarContainer = document.getElementById("navbar-container");
// const navElement = document.getElementById('nav-element');

// hamburgerButton.addEventListener("click", () => {
//     navElement.style.transform = 'translateY(-200%)';
//     navElement.classList.add("sidebar");
// })


const hamburgerButton = document.getElementById('hamburger-button');
let navMenu = document.getElementById('nav-menu');
navMenu.style.maxHeight = '0px';

hamburgerButton.addEventListener('click', () => {
    if (navMenu.style.maxHeight === '0px') {
        navMenu.style.maxHeight = '800px';
    } else {
        navMenu.style.maxHeight = '0px';
    }
});

