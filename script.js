const navbarToggle = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar ul');

navbarToggle.addEventListener('click', function() {
  navbarList.classList.toggle('show');
});