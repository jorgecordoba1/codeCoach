let menuButton = document.querySelector(".menuButton");
let menuPop = document.querySelector('.menuPop');
let menuClose = document.querySelector('.menuClose');

menuButton.addEventListener("click", openMenu);

function openMenu() {
    menuPop.style.display = 'block';
}

menuClose.addEventListener("click", closeMenu);

function closeMenu() {
    menuPop.style.display = '';
}


