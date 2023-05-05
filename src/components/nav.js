// script.js
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function toggleSidebar() {
  sidebar.style.left = sidebar.style.left === '0px' ? '-100%' : '0px';
  
  line1.classList.toggle('rotate-line-1');
  line2.classList.toggle('hide-line-2');
  line3.classList.toggle('rotate-line-3');
}

hamburger.addEventListener('click', toggleSidebar);

sidebarLinks.forEach(link => {
  link.addEventListener('click', toggleSidebar);
});
