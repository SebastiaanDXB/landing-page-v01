function classToggle() {
    const navs = document.querySelectorAll('.navbar-menu')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
}
  
document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);
