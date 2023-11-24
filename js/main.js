const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

// Funktion för att visa menyn om innerWidth är över 768px
function showMenuIfWide() {
    if (window.innerWidth > 600) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

// Anropa funktionen när sidan laddas
window.addEventListener('load', showMenuIfWide);

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

// Lyssna på ändringar i fönstrets storlek och visa menyn om innerWidth är över 768px
window.addEventListener('resize', showMenuIfWide);

// const inputLabel = document.getElementsByClassName("input__label");
// const inputField = document.querySelector("input");
// inputLabel.addEventListener("click", (e) => {
//     e.target.parentElement.focus();
    

// })
const inputField = document.querySelectorAll('input');
inputField.classList.add('input');

document.addEventListener("DOMContentLoaded", (e) => {
    const inputLabel = document.querySelectorAll(".input__label");
  
    inputLabel.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        e.target.closest(".input").classList.add("hovered");
      });
      el.addEventListener("mouseout", (e) => {
        e.target.closest(".input").classList.remove("hovered");
      });
    });
  });
  console.log("inputLabel")