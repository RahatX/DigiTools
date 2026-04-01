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
const navCartCount = document.getElementById('nav-cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const tabCartCount = document.getElementById('tab-cart-count');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

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
        class="mt-6 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brandDark"
      >
        Buy Now
      </button>
    `;

    productsGrid.appendChild(card);
  });
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
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

navCartCount.textContent = 0;
mobileCartCount.textContent = 0;
tabCartCount.textContent = 0;

renderProducts();
showProducts();