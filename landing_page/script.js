document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menu-toggle');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
});