const navIcon = document.querySelector('.nav-icon');
const nav__mobile = document.querySelector('.nav__mobile');
const overlay = document.querySelector('#overlay');


navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav__mobile.classList.toggle('nav__mobile--active');
    overlay.classList.toggle('active')
    
})