const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})
const day = new Date();
const year = day.getFullYear();
let cpYear = document.getElementById('year');
cpYear.innerHTML = year;