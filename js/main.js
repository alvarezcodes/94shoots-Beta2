// console.log('LINKED');

// TARGET THE HAMBURGER MENU BUTTON
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay-show');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);


function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show-menu');

    // prevent page scroll when we toggle ON the menu
    document.body.classList.toggle('stop-scrolling');

    // mobiel menu
    menu.classList.toggle('show-menu');
}
