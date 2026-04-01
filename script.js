const navCartCount = document.getElementById('nav-cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

navCartCount.textContent = 0;
mobileCartCount.textContent = 0;