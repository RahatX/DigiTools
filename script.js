const navCartCount = document.getElementById('nav-cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

navCartCount.textContent = 0;
mobileCartCount.textContent = 0;


const productsView = document.getElementById('products-view');
const cartView = document.getElementById('cart-view');
const productsTab = document.getElementById('products-tab');
const cartTab = document.getElementById('cart-tab');
const navCartCount = document.getElementById('nav-cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const tabCartCount = document.getElementById('tab-cart-count');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function showProducts() {
  productsView.classList.remove('hidden');
  cartView.classList.add('hidden');
  productsTab.className = 'rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white';
  cartTab.className = 'rounded-full px-5 py-2 text-sm font-semibold text-gray-600 transition hover:text-brand';
}

function showCart() {
  productsView.classList.add('hidden');
  cartView.classList.remove('hidden');
  cartTab.className = 'rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white';
  productsTab.className = 'rounded-full px-5 py-2 text-sm font-semibold text-gray-600 transition hover:text-brand';
}

productsTab.addEventListener('click', showProducts);
cartTab.addEventListener('click', showCart);
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

navCartCount.textContent = 0;
mobileCartCount.textContent = 0;
tabCartCount.textContent = 0;

showProducts();