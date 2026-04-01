const products = [
  {
    id: 1,
    name: 'AI Writing Pro',
    description: 'Generate blog posts, product copy, emails, and social captions in seconds with a polished AI writing workflow.',
    price: 29,
    period: 'mo',
    tag: 'Best Seller',
    tagType: 'amber',
    features: ['Unlimited AI generations', '50+ writing templates', 'Grammar checker'],
    icon: 'assets/products/writing_2327400 1.png'
  },
  {
    id: 2,
    name: 'Design Templates Pack',
    description: 'Get editable templates for presentations, marketing posts, brand kits, pitch decks, and product launch assets.',
    price: 49,
    period: 'one-time',
    tag: 'Popular',
    tagType: 'indigo',
    features: ['2000+ templates', 'Monthly updates', 'Commercial license'],
    icon: 'assets/products/design-tool.png'
  },
  {
    id: 3,
    name: 'Premium Stock Assets',
    description: 'Access royalty-free photos, videos, mockups, and illustrations to elevate campaigns and content creation.',
    price: 19,
    period: 'mo',
    tag: 'New',
    tagType: 'emerald',
    features: ['10M+ assets', 'Commercial use', 'No attribution'],
    icon: 'assets/products/social-media.png'
  },
  {
    id: 4,
    name: 'Automation Toolkit',
    description: 'Automate repetitive tasks, connect workflows, and streamline operations with ready-made digital automations.',
    price: 79,
    period: 'mo',
    tag: 'Popular',
    tagType: 'indigo',
    features: ['50+ automations', 'API access', 'Custom workflows'],
    icon: 'assets/products/operation.png'
  },
  {
    id: 5,
    name: 'Resume Builder Pro',
    description: 'Create ATS-friendly resumes and cover letters that are easier to customize, export, and send quickly.',
    price: 15,
    period: 'one-time',
    tag: 'New',
    tagType: 'emerald',
    features: ['100+ templates', 'ATS optimization', 'Export to PDF'],
    icon: 'assets/products/portfolio.png'
  },
  {
    id: 6,
    name: 'Social Media Content Kit',
    description: 'Plan, design, and manage social campaigns with reusable content packs, calendars, and publishing helpers.',
    price: 39,
    period: 'mo',
    tag: 'Best Seller',
    tagType: 'amber',
    features: ['5000+ assets', 'Scheduler included', 'Analytics dashboard'],
    icon: 'assets/products/shopping-cart.png'
  }
];

const cart = [];

const productsGrid = document.getElementById('products-grid');
const productsView = document.getElementById('products-view');
const cartView = document.getElementById('cart-view');
const productsTab = document.getElementById('products-tab');
const cartTab = document.getElementById('cart-tab');
const cartItems = document.getElementById('cart-items');
const emptyCartMessage = document.getElementById('empty-cart-message');
const cartTotal = document.getElementById('cart-total');
const navCartCount = document.getElementById('nav-cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const tabCartCount = document.getElementById('tab-cart-count');
const checkoutButton = document.getElementById('checkout-button');
const navCartButton = document.getElementById('nav-cart-button');
const mobileCartButton = document.getElementById('mobile-cart-button');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 1800);
}

function getTagClasses(type) {
  if (type === 'amber') return 'bg-amber-50 text-amber-600';
  if (type === 'emerald') return 'bg-emerald-50 text-emerald-600';
  return 'bg-indigo-50 text-indigo-600';
}

function formatPrice(price, period) {
  if (period === 'one-time') return `$${price}/one-time`;
  return `$${price}/${period}`;
}

function renderProducts() {
  productsGrid.innerHTML = '';

  products.forEach((product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    const card = document.createElement('article');
    card.className = 'rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg';

    card.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
          <img src="${product.icon}" alt="${product.name}" class="h-7 w-7 object-contain" />
        </div>
        <span class="rounded-full px-3 py-1 text-xs font-semibold ${getTagClasses(product.tagType)}">${product.tag}</span>
      </div>

      <h3 class="mt-5 text-xl font-bold text-textDark">${product.name}</h3>
      <p class="mt-3 min-h-[84px] text-sm leading-7 text-softGray">${product.description}</p>

      <div class="mt-4 text-3xl font-extrabold text-textDark">
        ${formatPrice(product.price, product.period)}
      </div>

      <ul class="mt-5 space-y-3 text-sm text-gray-700">
        ${product.features
          .map(
            (feature) =>
              `<li class="flex items-center gap-2"><span class="text-emerald-500">✓</span><span>${feature}</span></li>`
          )
          .join('')}
      </ul>

      <button
        data-id="${product.id}"
        class="buy-btn mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
          isInCart ? 'bg-violet-100 text-brand' : 'bg-brand text-white hover:bg-brandDark'
        }"
      >
        ${isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    `;

    productsGrid.appendChild(card);
  });

  document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.id)));
  });
}

function renderCart() {
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    emptyCartMessage.classList.remove('hidden');
    cartItems.classList.add('hidden');
  } else {
    emptyCartMessage.classList.add('hidden');
    cartItems.classList.remove('hidden');
  }

  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className =
      'flex items-center justify-between gap-4 rounded-2xl border border-[#f3f4f6] bg-white px-5 py-4';

    row.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <img src="${item.icon}" alt="${item.name}" class="h-7 w-7 object-contain" />
        </div>
        <div>
          <h4 class="text-base font-bold text-textDark">${item.name}</h4>
          <p class="mt-1 text-sm text-softGray">$${item.price}</p>
        </div>
      </div>

      <button
        data-id="${item.id}"
        class="remove-btn text-sm font-semibold text-pink-500 transition hover:text-pink-600"
      >
        Remove
      </button>
    `;

    cartItems.appendChild(row);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `$${total}`;
  navCartCount.textContent = cart.length;
  mobileCartCount.textContent = cart.length;
  tabCartCount.textContent = cart.length;

  document.querySelectorAll('.remove-btn').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.id)));
  });
}

function addToCart(id) {
  const selectedProduct = products.find((product) => product.id === id);
  const alreadyAdded = cart.some((item) => item.id === id);

  if (alreadyAdded) {
    showToast('Already added to cart');
    return;
  }

  if (selectedProduct) {
    cart.push(selectedProduct);
    renderCart();
    renderProducts();
    showToast('Added to cart');
  }
}

function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);

  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
    renderProducts();
    showToast('Removed from cart');
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast('Cart is empty');
    return;
  }

  cart.length = 0;
  renderCart();
  renderProducts();
  showToast('Proceed to checkout successful');
}

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
navCartButton.addEventListener('click', showCart);

mobileCartButton.addEventListener('click', () => {
  showCart();
  mobileMenu.classList.add('hidden');
});

checkoutButton.addEventListener('click', proceedToCheckout);
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

renderProducts();
renderCart();
showProducts();