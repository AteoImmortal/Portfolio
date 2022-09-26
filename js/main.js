const navIcon = document.querySelector('.nav-icon');
const navMobile = document.querySelector('.nav__mobile');
const overlay = document.querySelector('#overlay');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    navMobile.classList.toggle('nav__mobile--active');
    overlay.classList.toggle('active');
})

const navLinks = document.querySelectorAll('.nav__mobile-list .nav__item a');

navLinks.forEach(function(item){
    item.addEventListener('click', function (){
        navIcon.classList.remove('nav-icon--active');
        navMobile.classList.remove('nav__mobile--active');
        overlay.classList.remove('active');
    });
})