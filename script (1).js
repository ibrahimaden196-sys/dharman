/* ============================================================
   DHARMAN HANDBAGS — script.js
   Reads live data saved by the Admin Dashboard.
   Falls back to default data if nothing has been saved yet.
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────
   DEFAULT DATA (used only when admin has never saved anything)
   ──────────────────────────────────────────────────────────── */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Amira Signature Tote',
    price: 89,
    category: 'Tote Bags',
    badge: 'Bestseller',
    badgeClass: '',
    desc: 'A refined everyday tote in supple full-grain leather. Structured silhouette, polished gold hardware, and generous interior space — designed for the modern woman who commands every room.',
    stars: 5,
    reviews: 48,
    colors: ['#1E1E1E', '#6D071A', '#D4AF37', '#B76E79'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    stock: 42, sold: 48,
  },
  {
    id: 2,
    name: 'Ruby Crossbody',
    price: 65,
    category: 'Crossbody',
    badge: 'New',
    badgeClass: 'new',
    desc: 'A compact, versatile crossbody with adjustable strap and secure zip closure. Ideal for evenings out or effortless day-to-night transitions.',
    stars: 5,
    reviews: 31,
    colors: ['#6D071A', '#1E1E1E', '#E9DDCF'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    stock: 28, sold: 31,
  },
  {
    id: 3,
    name: 'Midnight Luxe',
    price: 110,
    category: 'Evening Bags',
    badge: 'Premium',
    badgeClass: '',
    desc: 'Our crown jewel — an evening clutch of exceptional refinement. Pleated satin exterior with hand-stitched gold trim, magnetic closure, and silk-lined interior.',
    stars: 5,
    reviews: 22,
    colors: ['#1E1E1E', '#6D071A', '#D4AF37'],
    image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    stock: 15, sold: 22,
  },
  {
    id: 4,
    name: 'Scarlet Muse',
    price: 95,
    category: 'Tote Bags',
    badge: 'Bestseller',
    badgeClass: '',
    desc: 'Bold, structured, unapologetically feminine. The Scarlet Muse tote brings Italian-inspired design together with contemporary practicality.',
    stars: 5,
    reviews: 39,
    colors: ['#6D071A', '#B76E79', '#1E1E1E'],
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80',
    ],
    stock: 33, sold: 39,
  },
  {
    id: 5,
    name: 'Luna Carry',
    price: 78,
    category: 'Everyday Essentials',
    badge: 'New',
    badgeClass: 'new',
    desc: 'Thoughtfully designed for daily life. The Luna Carry features a soft pebbled exterior, internal organisation pockets, and a detachable coin purse.',
    stars: 5,
    reviews: 27,
    colors: ['#E9DDCF', '#D4AF37', '#6D071A'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    ],
    stock: 5, sold: 27,
  },
  {
    id: 6,
    name: 'Noir Grace',
    price: 99,
    category: 'Crossbody',
    badge: 'Premium',
    badgeClass: '',
    desc: 'Where minimalism meets luxury. The Noir Grace crossbody is crafted in nappa leather with a brushed silver chain — sleek, timeless, effortlessly elegant.',
    stars: 5,
    reviews: 34,
    colors: ['#1E1E1E', '#B76E79', '#D4AF37'],
    image: 'https://images.unsplash.com/photo-1600493572824-56cfcbfaf5f3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600493572824-56cfcbfaf5f3?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    stock: 20, sold: 34,
  },
];

const DEFAULT_CONTENT = {
  heroLine1:        'Carry Confidence.',
  heroLine2:        'Define Elegance.',
  heroSub:          'Luxury handbags crafted for women who move with purpose.',
  heroBtnPrimary:   'Shop Collection',
  heroBtnSecondary: 'Discover New Arrivals',
  heroImage:        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85',
  aboutTitle:       'Where Purpose Meets Beauty',
  aboutPara1:       'DHARMAN HANDBAGS was created to redefine elegance through timeless craftsmanship. Born from a deep admiration for women who lead with intention, every stitch and contour is deliberate.',
  aboutPara2:       'Each design reflects confidence, ambition, and modern femininity — qualities that transcend seasons and trends.',
  aboutClosing:     'We create handbags that carry more than essentials — they carry presence.',
  newsletterTitle:  'Join the Collection',
  newsletterSub:    'Receive exclusive launches and 10% off your first order.',
  contactEmail:     'hello@dharmanhandbags.com',
  contactPhone:     '+1 (800) 000-0000',
  contactHours:     'Mon–Fri, 9am–6pm EST',
  socialIG:         '#',
  socialTT:         '#',
  socialPT:         '#',
  marqueeText:      'Free Shipping on Orders Over $100 · New Season Collection · Crafted with Premium Leather · Limited Edition Styles · Free Returns Within 30 Days',
  reviews: [
    { text: 'The craftsmanship is exceptional. Every detail speaks to genuine quality. My Amira Tote gets compliments every single day.', author: 'Sarah M.', product: 'Amira Signature Tote' },
    { text: 'Elegant, functional, and beautifully designed — transitions from office to dinner seamlessly.', author: 'Layla A.', product: 'Ruby Crossbody' },
    { text: 'Looks and feels truly luxurious. I wore it to a gala and everyone wanted to know where it was from.', author: 'Amira K.', product: 'Midnight Luxe' },
  ],
};

/* ────────────────────────────────────────────────────────────
   LIVE DATA — reads from admin localStorage, falls back to defaults
   ──────────────────────────────────────────────────────────── */
function getLiveData() {
  // Try to read the full DB saved by admin dashboard first
  try {
    const adminDB = localStorage.getItem('dharman_admin_db');
    if (adminDB) {
      const parsed = JSON.parse(adminDB);
      return {
        products: parsed.products && parsed.products.length ? parsed.products : DEFAULT_PRODUCTS,
        content:  parsed.content  ? { ...DEFAULT_CONTENT, ...parsed.content } : DEFAULT_CONTENT,
      };
    }
  } catch (e) {}

  // Fallback: try individual keys
  try {
    const p = localStorage.getItem('dharman_products');
    const c = localStorage.getItem('dharman_content');
    return {
      products: p ? JSON.parse(p) : DEFAULT_PRODUCTS,
      content:  c ? { ...DEFAULT_CONTENT, ...JSON.parse(c) } : DEFAULT_CONTENT,
    };
  } catch (e) {}

  return { products: DEFAULT_PRODUCTS, content: DEFAULT_CONTENT };
}

// Active live data — all public pages read from this
const { products: PRODUCTS, content: SITE_CONTENT } = getLiveData();

/* ────────────────────────────────────────────────────────────
   APPLY LIVE CONTENT TO THE PAGE
   Runs on every page load — updates text, images, links from admin
   ──────────────────────────────────────────────────────────── */
function applyLiveContent() {
  const c = SITE_CONTENT;

  // ── Hero ──────────────────────────────────────────────────
  const heroLine1 = document.querySelector('.hero-title');
  if (heroLine1) {
    heroLine1.innerHTML = `${c.heroLine1}<em>${c.heroLine2}</em>`;
  }
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = c.heroSub;

  const heroCtas = document.querySelectorAll('.hero-ctas a');
  if (heroCtas[0]) heroCtas[0].textContent = c.heroBtnPrimary;
  if (heroCtas[1]) heroCtas[1].textContent = c.heroBtnSecondary;

  const heroImg = document.querySelector('.hero-image-wrap img');
  if (heroImg && c.heroImage) heroImg.src = c.heroImage;

  // ── Brand Story ───────────────────────────────────────────
  const aboutTitle = document.querySelector('.story-content .section-title');
  if (aboutTitle && c.aboutTitle) {
    // Split on last word to keep the <em> style
    const words = c.aboutTitle.split(' ');
    const last  = words.pop();
    aboutTitle.innerHTML = `${words.join(' ')}<br><em>${last}</em>`;
  }
  const storyParas = document.querySelectorAll('.story-content p');
  if (storyParas[0] && c.aboutPara1) storyParas[0].innerHTML = c.aboutPara1;
  if (storyParas[1] && c.aboutPara2) storyParas[1].textContent = c.aboutPara2;
  if (storyParas[2] && c.aboutClosing) storyParas[2].innerHTML = c.aboutClosing;

  // ── Newsletter ────────────────────────────────────────────
  const nlTitle = document.querySelector('.newsletter-title');
  if (nlTitle && c.newsletterTitle) nlTitle.textContent = c.newsletterTitle;
  const nlSub = document.querySelector('.newsletter-sub');
  if (nlSub && c.newsletterSub) nlSub.textContent = c.newsletterSub;

  // ── Contact ───────────────────────────────────────────────
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
    if (c.contactEmail) el.href = 'mailto:' + c.contactEmail;
    if (c.contactEmail) el.textContent = c.contactEmail;
  });

  // ── Socials ───────────────────────────────────────────────
  const igLinks = document.querySelectorAll('.social-link[aria-label="Instagram"]');
  const ttLinks = document.querySelectorAll('.social-link[aria-label="TikTok"]');
  const ptLinks = document.querySelectorAll('.social-link[aria-label="Pinterest"]');
  igLinks.forEach(el => { if (c.socialIG && c.socialIG !== '#') el.href = c.socialIG; });
  ttLinks.forEach(el => { if (c.socialTT && c.socialTT !== '#') el.href = c.socialTT; });
  ptLinks.forEach(el => { if (c.socialPT && c.socialPT !== '#') el.href = c.socialPT; });

  // ── Marquee ───────────────────────────────────────────────
  const marqueeInner = document.querySelector('.marquee-inner');
  if (marqueeInner && c.marqueeText) {
    const items = c.marqueeText.split('·').map(s => s.trim()).filter(Boolean);
    const html  = items.map(t => `<span>${t}</span><span class="dot">✦</span>`).join('');
    marqueeInner.innerHTML = html + html; // duplicate for seamless loop
  }

  // ── Reviews ───────────────────────────────────────────────
  const reviewsGrid = document.querySelector('.reviews-grid');
  if (reviewsGrid && c.reviews && c.reviews.length) {
    const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
    reviewsGrid.innerHTML = c.reviews.map(r => `
      <div class="review-card fade-in">
        <div class="review-quote">"</div>
        <div class="review-stars">★★★★★</div>
        <p class="review-text">${r.text}</p>
        <div class="review-author">
          <div class="review-avatar">${initials(r.author || 'A')}</div>
          <div>
            <div class="review-author-name">${r.author}</div>
            <div class="review-verified">✦ Verified Purchase${r.product ? ' · ' + r.product : ''}</div>
          </div>
        </div>
      </div>`).join('');
  }
}

/* ────────────────────────────────────────────────────────────
   CART STATE
   ──────────────────────────────────────────────────────────── */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('dharman_cart') || '[]'); } catch(e) { cart = []; }

function saveCart() {
  try { localStorage.setItem('dharman_cart', JSON.stringify(cart)); } catch(e) {}
}

function addToCart(productId, qty, color) {
  qty = qty || 1;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenColor = color || (product.colors && product.colors[0]) || '#1E1E1E';
  const existing    = cart.find(i => i.id === productId && i.color === chosenColor);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty, color: chosenColor });
  }

  saveCart();
  updateCartUI();
  showToast('<i class="fas fa-check-circle"></i> ' + product.name + ' added to cart');
}

function removeFromCart(productId, color) {
  cart = cart.filter(i => !(i.id === productId && i.color === color));
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, color, delta) {
  const item = cart.find(i => i.id === productId && i.color === color);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce(function(sum, item) {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce(function(sum, i) { return sum + i.qty; }, 0);
}

/* ────────────────────────────────────────────────────────────
   CART UI
   ──────────────────────────────────────────────────────────── */
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCartItems() {
  const itemsEl = document.querySelector('.cart-items');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛍️</div><h3>Your cart is empty</h3><p>Add some beautiful pieces to get started.</p></div>';
    updateCartTotals();
    return;
  }

  itemsEl.innerHTML = cart.map(function(item) {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return '<div class="cart-item">' +
      '<div class="cart-item-img"><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"></div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + product.name + '</div>' +
        '<div class="cart-item-color" style="display:flex;align-items:center;gap:6px;">' +
          '<span style="width:10px;height:10px;border-radius:50%;background:' + item.color + ';display:inline-block;border:1px solid rgba(0,0,0,0.15)"></span>' +
          'Color selected' +
        '</div>' +
        '<div class="cart-item-qty">' +
          '<button class="qty-btn" onclick="updateCartQty(' + item.id + ', \'' + item.color + '\', -1)">−</button>' +
          '<span class="qty-num">' + item.qty + '</span>' +
          '<button class="qty-btn" onclick="updateCartQty(' + item.id + ', \'' + item.color + '\', 1)">+</button>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">' +
        '<div class="cart-item-price">$' + (product.price * item.qty).toFixed(2) + '</div>' +
        '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ', \'' + item.color + '\')"><i class="fas fa-times"></i> Remove</button>' +
      '</div>' +
    '</div>';
  }).join('');

  updateCartTotals();
}

function updateCartTotals() {
  const total    = getCartTotal();
  const shipping = total > 0 ? (total >= 100 ? 0 : 9.99) : 0;
  const grand    = total + shipping;
  document.querySelectorAll('.cart-subtotal-val').forEach(function(el) { el.textContent = '$' + total.toFixed(2); });
  document.querySelectorAll('.cart-shipping-val').forEach(function(el) { el.textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2); });
  document.querySelectorAll('.cart-total-val').forEach(function(el)    { el.textContent = '$' + grand.toFixed(2); });
}

/* ────────────────────────────────────────────────────────────
   NAVBAR
   ──────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const hamburger  = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  const searchToggle = document.querySelector('.search-toggle');
  const searchBar    = document.querySelector('.search-bar');
  const searchClose  = document.querySelector('.search-close');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function() {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open')) {
        var inp = searchBar.querySelector('input');
        if (inp) inp.focus();
      }
    });
    if (searchClose) searchClose.addEventListener('click', function() { searchBar.classList.remove('open'); });
    var searchInput = searchBar.querySelector('input');
    if (searchInput) {
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') searchBar.classList.remove('open');
        if (e.key === 'Enter') {
          var q = e.target.value.trim();
          if (q) window.location.href = 'shop.html?q=' + encodeURIComponent(q);
        }
      });
    }
  }

  document.querySelectorAll('.cart-toggle').forEach(function(btn) {
    btn.addEventListener('click', toggleCart);
  });
  var cartOverlay = document.querySelector('.cart-overlay');
  var cartClose   = document.querySelector('.cart-close');
  var cartCont    = document.querySelector('.cart-continue');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartClose)   cartClose.addEventListener('click', closeCart);
  if (cartCont)    cartCont.addEventListener('click', closeCart);
}

function toggleCart() {
  var overlay = document.querySelector('.cart-overlay');
  var panel   = document.querySelector('.cart-panel');
  if (overlay) overlay.classList.toggle('open');
  if (panel)   panel.classList.toggle('open');
  document.body.style.overflow = (panel && panel.classList.contains('open')) ? 'hidden' : '';
  if (panel && panel.classList.contains('open')) renderCartItems();
}

function closeCart() {
  var overlay = document.querySelector('.cart-overlay');
  var panel   = document.querySelector('.cart-panel');
  if (overlay) overlay.classList.remove('open');
  if (panel)   panel.classList.remove('open');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────────────────────
   SCROLL ANIMATIONS
   ──────────────────────────────────────────────────────────── */
function initScrollAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });
}

/* ────────────────────────────────────────────────────────────
   TOAST
   ──────────────────────────────────────────────────────────── */
function showToast(html) {
  var toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = html;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

/* ────────────────────────────────────────────────────────────
   PRODUCT CARD RENDERER
   ──────────────────────────────────────────────────────────── */
function renderProductCard(product, delay) {
  delay = delay || 0;
  var stars = '★★★★★'.slice(0, product.stars || 5);
  return '<div class="product-card fade-in fade-in-delay-' + delay + '" data-category="' + product.category + '" data-price="' + product.price + '" data-id="' + product.id + '">' +
    '<div class="product-image-wrap">' +
      '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      (product.badge ? '<span class="product-badge ' + (product.badgeClass || '') + '">' + product.badge + '</span>' : '') +
      '<div class="product-actions-float">' +
        '<button class="product-action-btn" title="Wishlist" onclick="showToast(\'<i class=\\\'fas fa-heart\\\'></i> Saved to wishlist\')"><i class="far fa-heart"></i></button>' +
        '<button class="product-action-btn" title="Quick view" onclick="window.location.href=\'product.html?id=' + product.id + '\'"><i class="far fa-eye"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="product-info">' +
      '<div class="product-category">' + product.category + '</div>' +
      '<div class="product-name">' + product.name + '</div>' +
      '<div class="product-desc">' + product.desc + '</div>' +
      '<div class="product-meta">' +
        '<div class="product-price">$' + product.price + '</div>' +
        '<div class="product-stars">' + stars + '</div>' +
      '</div>' +
      '<div class="product-card-ctas">' +
        '<a href="product.html?id=' + product.id + '" class="btn-view">View Product</a>' +
        '<button class="btn-cart" onclick="handleAddToCart(this, ' + product.id + ')">Add to Cart</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function handleAddToCart(btn, productId) {
  addToCart(productId, 1, null);
  btn.classList.add('added');
  btn.textContent = 'Added ✓';
  setTimeout(function() {
    btn.classList.remove('added');
    btn.textContent = 'Add to Cart';
  }, 2200);
}

/* ────────────────────────────────────────────────────────────
   BEST SELLERS CAROUSEL
   ──────────────────────────────────────────────────────────── */
function initCarousel() {
  var track         = document.querySelector('.carousel-track');
  var dotsContainer = document.querySelector('.carousel-dots');
  var prevBtn       = document.querySelector('.carousel-prev');
  var nextBtn       = document.querySelector('.carousel-next');
  if (!track) return;

  var bestSellers = PRODUCTS.slice().sort(function(a,b){ return (b.reviews||0)-(a.reviews||0); }).slice(0, 4);
  track.innerHTML = bestSellers.map(function(p) {
    return '<div class="carousel-slide">' +
      '<div class="carousel-img"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>' +
      '<div class="carousel-info">' +
        '<div class="carousel-name">' + p.name + '</div>' +
        '<div class="carousel-price">$' + p.price + '</div>' +
        '<button class="carousel-btn" onclick="addToCart(' + p.id + ', 1, null)">Add to Cart</button>' +
      '</div>' +
    '</div>';
  }).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = bestSellers.map(function(_, i) {
      return '<div class="carousel-dot ' + (i === 0 ? 'active' : '') + '" data-index="' + i + '"></div>';
    }).join('');
    dotsContainer.querySelectorAll('.carousel-dot').forEach(function(dot) {
      dot.addEventListener('click', function() { goToSlide(parseInt(dot.dataset.index)); });
    });
  }

  var current  = 0;
  var total    = bestSellers.length;
  var autoPlay = setInterval(function() { goToSlide((current + 1) % total); }, 4500);

  function goToSlide(idx) {
    current = idx;
    var slide = track.querySelector('.carousel-slide');
    if (!slide) return;
    var slideWidth = slide.offsetWidth + 24;
    track.style.transform = 'translateX(-' + (current * slideWidth) + 'px)';
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel-dot').forEach(function(d, i) {
        d.classList.toggle('active', i === current);
      });
    }
    clearInterval(autoPlay);
    autoPlay = setInterval(function() { goToSlide((current + 1) % total); }, 4500);
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide((current - 1 + total) % total); });
  if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide((current + 1) % total); });
  window.addEventListener('resize', function() { goToSlide(current); });
}

/* ────────────────────────────────────────────────────────────
   HOME PAGE
   ──────────────────────────────────────────────────────────── */
function initHomePage() {
  var grid = document.querySelector('.products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(function(p, i) {
    return renderProductCard(p, (i % 6) + 1);
  }).join('');
  initScrollAnimations();
  initCarousel();
}

/* ────────────────────────────────────────────────────────────
   SHOP PAGE
   ──────────────────────────────────────────────────────────── */
function initShopPage() {
  var grid = document.querySelector('.shop-products-grid');
  if (!grid) return;

  var currentCategory = 'All';
  var currentSearch   = '';
  var currentSort     = 'featured';

  var params = new URLSearchParams(window.location.search);
  if (params.get('q'))   currentSearch   = params.get('q');
  if (params.get('cat')) currentCategory = params.get('cat');
  var searchInput = document.querySelector('.shop-search input');
  if (searchInput && currentSearch) searchInput.value = currentSearch;

  // Populate category filters dynamically from live data
  var categories = Array.from(new Set(PRODUCTS.map(function(p){ return p.category; })));
  var filterContainer = document.querySelector('.shop-filters');
  if (filterContainer) {
    // Keep "All" button, rebuild the rest
    var existingBtns = filterContainer.querySelectorAll('.filter-btn:not([data-filter="All"])');
    existingBtns.forEach(function(b){ b.remove(); });
    categories.forEach(function(cat) {
      var btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = cat;
      btn.textContent = cat;
      filterContainer.appendChild(btn);
    });
    filterContainer.querySelectorAll('.filter-btn').forEach(function(btn) {
      if (currentCategory === btn.dataset.filter) btn.classList.add('active');
      btn.addEventListener('click', function() {
        filterContainer.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        currentCategory = btn.dataset.filter;
        renderShop();
      });
    });
  }

  function renderShop() {
    var filtered = PRODUCTS.slice();
    if (currentCategory !== 'All') {
      filtered = filtered.filter(function(p){ return p.category === currentCategory; });
    }
    if (currentSearch) {
      var q = currentSearch.toLowerCase();
      filtered = filtered.filter(function(p){
        return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      });
    }
    if (currentSort === 'price-asc')  filtered.sort(function(a,b){ return a.price - b.price; });
    if (currentSort === 'price-desc') filtered.sort(function(a,b){ return b.price - a.price; });
    if (currentSort === 'popular')    filtered.sort(function(a,b){ return (b.reviews||0)-(a.reviews||0); });

    var resultsEl = document.querySelector('.shop-results');
    if (resultsEl) resultsEl.textContent = filtered.length + ' products';

    grid.innerHTML = filtered.length === 0
      ? '<div class="no-results">No products found. <a href="shop.html" style="color:var(--burgundy)">Clear filters</a></div>'
      : filtered.map(function(p, i){ return renderProductCard(p, (i % 6) + 1); }).join('');

    initScrollAnimations();
  }

  var shopSearch = document.querySelector('.shop-search input');
  if (shopSearch) shopSearch.addEventListener('input', function(e){ currentSearch = e.target.value; renderShop(); });

  var sortEl = document.querySelector('.shop-sort');
  if (sortEl) sortEl.addEventListener('change', function(e){ currentSort = e.target.value; renderShop(); });

  renderShop();
}

/* ────────────────────────────────────────────────────────────
   PRODUCT PAGE
   ──────────────────────────────────────────────────────────── */
function initProductPage() {
  var params  = new URLSearchParams(window.location.search);
  var id      = parseInt(params.get('id')) || 1;
  var product = PRODUCTS.find(function(p){ return p.id === id; }) || PRODUCTS[0];

  document.title = product.name + ' — DHARMAN HANDBAGS';

  // Images — use product.images array if available, otherwise repeat main image
  var imgs = product.images || [product.image, product.image, product.image, product.image];

  var mainImg = document.querySelector('.gallery-main-img');
  if (mainImg) mainImg.src = imgs[0];

  var thumbsContainer = document.querySelector('.gallery-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = imgs.map(function(img, i) {
      return '<div class="gallery-thumb ' + (i === 0 ? 'active' : '') + '" data-src="' + img + '">' +
        '<img src="' + img + '" alt="' + product.name + ' view ' + (i+1) + '" loading="lazy">' +
      '</div>';
    }).join('');
    thumbsContainer.querySelectorAll('.gallery-thumb').forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        thumbsContainer.querySelectorAll('.gallery-thumb').forEach(function(t){ t.classList.remove('active'); });
        thumb.classList.add('active');
        if (mainImg) mainImg.src = thumb.dataset.src;
      });
    });
  }

  // Lightbox
  var galleryWrap = document.querySelector('.gallery-img-wrap');
  var lightbox    = document.querySelector('.lightbox');
  var lightboxImg = document.querySelector('.lightbox img');
  if (galleryWrap) {
    galleryWrap.addEventListener('click', function() {
      if (lightbox && lightboxImg && mainImg) {
        lightboxImg.src = mainImg.src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }
  var lbClose = document.querySelector('.lightbox-close');
  if (lbClose) lbClose.addEventListener('click', function() { lightbox && lightbox.classList.remove('open'); document.body.style.overflow = ''; });
  if (lightbox) lightbox.addEventListener('click', function(e){ if(e.target===lightbox){ lightbox.classList.remove('open'); document.body.style.overflow=''; }});

  // Product info
  function setEl(sel, val, attr) {
    var el = document.querySelector(sel);
    if (el) el[attr || 'textContent'] = val;
  }
  setEl('.product-detail-name', product.name);
  setEl('.product-detail-category', product.category);
  setEl('.product-detail-price', '$' + product.price);
  setEl('.product-detail-desc', product.desc);
  setEl('.product-detail-stars', '★★★★★'.slice(0, product.stars || 5));
  setEl('.product-detail-rating-num', (product.reviews || 0) + ' reviews');

  // Color swatches
  var colorContainer = document.querySelector('.color-options');
  var selectedColor  = (product.colors && product.colors[0]) || '#1E1E1E';
  if (colorContainer && product.colors) {
    colorContainer.innerHTML = product.colors.map(function(c, i) {
      return '<div class="color-swatch ' + (i===0?'active':'') + '" data-color="' + c + '" style="background:' + c + ';" title="' + c + '"></div>';
    }).join('');
    colorContainer.querySelectorAll('.color-swatch').forEach(function(swatch) {
      swatch.addEventListener('click', function() {
        colorContainer.querySelectorAll('.color-swatch').forEach(function(s){ s.classList.remove('active'); });
        swatch.classList.add('active');
        selectedColor = swatch.dataset.color;
      });
    });
  }

  // Quantity
  var qtyInput = document.querySelector('.qty-selector input');
  var qtyMinus = document.querySelector('.qty-minus');
  var qtyPlus  = document.querySelector('.qty-plus');
  if (qtyMinus) qtyMinus.addEventListener('click', function(){ if(qtyInput) qtyInput.value = Math.max(1, parseInt(qtyInput.value)-1); });
  if (qtyPlus)  qtyPlus.addEventListener('click',  function(){ if(qtyInput) qtyInput.value = Math.min(10, parseInt(qtyInput.value)+1); });

  // Add to cart
  var addCartBtn = document.querySelector('.btn-add-cart');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', function() {
      var qty = parseInt((qtyInput && qtyInput.value) || 1);
      addToCart(product.id, qty, selectedColor);
      addCartBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
      setTimeout(function(){ addCartBtn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart'; }, 2200);
    });
  }

  // Buy now
  var buyNowBtn = document.querySelector('.btn-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', function() {
      var qty = parseInt((qtyInput && qtyInput.value) || 1);
      addToCart(product.id, qty, selectedColor);
      toggleCart();
    });
  }

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var item   = header.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(function(i){ i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ────────────────────────────────────────────────────────────
   NEWSLETTER
   ──────────────────────────────────────────────────────────── */
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input && input.value) {
        showToast('<i class="fas fa-envelope"></i> Welcome! 10% off coupon sent to your inbox.');
        input.value = '';
      }
    });
  });
}

/* ────────────────────────────────────────────────────────────
   MARQUEE
   ──────────────────────────────────────────────────────────── */
function initMarquee() {
  var inner = document.querySelector('.marquee-inner');
  if (!inner || inner.children.length === 0) return;
  // applyLiveContent already rebuilt it; just ensure it's doubled for seamless scroll
  if (!inner.dataset.doubled) {
    inner.innerHTML = inner.innerHTML + inner.innerHTML;
    inner.dataset.doubled = '1';
  }
}

/* ────────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  // 1. Apply admin content changes to page
  applyLiveContent();

  // 2. Common setup
  initNavbar();
  updateCartUI();
  initScrollAnimations();
  initNewsletter();
  initMarquee();

  // 3. Page-specific setup
  if (document.querySelector('.products-grid'))      initHomePage();
  if (document.querySelector('.shop-products-grid')) initShopPage();
  if (document.querySelector('.product-page'))       initProductPage();

  // 4. Expose globals for inline HTML onclick handlers
  window.PRODUCTS        = PRODUCTS;
  window.addToCart       = addToCart;
  window.handleAddToCart = handleAddToCart;
  window.updateCartQty   = updateCartQty;
  window.removeFromCart  = removeFromCart;
  window.toggleCart      = toggleCart;
  window.closeCart       = closeCart;
  window.showToast       = showToast;
  window.renderProductCard = renderProductCard;
  window.initScrollAnimations = initScrollAnimations;
});
