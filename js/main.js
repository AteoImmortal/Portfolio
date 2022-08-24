const navIcon = document.querySelector('.nav-icon');
const nav__mobile = document.querySelector('.nav__mobile');


navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav__mobile.classList.toggle('nav__mobile--active');
})