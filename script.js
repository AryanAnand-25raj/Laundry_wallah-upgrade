/**
 * ============================================================================
 * Laundry Wallah - Upgraded Interactive Application Script
 * Event-Driven Architecture, DOM Manipulation, Form Validation,
 * Live Computation, Order Tracking Simulator, and Animations.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Data Store: Services Catalog, Pricing & Initial Mock State
  // --------------------------------------------------------------------------
  const SERVICES_DATA = [
    // Wash & Fold
    {
      id: 'wf_shirt',
      name: 'Casual Shirt / T-Shirt',
      category: 'wash-fold',
      categoryName: 'Wash & Fold',
      price: 25,
      unit: 'piece',
      time: '24-48h',
      desc: 'Machine washed with eco-friendly liquid detergent and neatly folded.',
      icon: 'bi-tsunami'
    },
    {
      id: 'wf_trousers',
      name: 'Jeans / Trousers / Chinos',
      category: 'wash-fold',
      categoryName: 'Wash & Fold',
      price: 35,
      unit: 'piece',
      time: '24-48h',
      desc: 'Deep clean wash to remove dirt & odors, gentle spin to prevent shrinkage.',
      icon: 'bi-scissors'
    },
    {
      id: 'wf_kurta',
      name: 'Cotton Kurta / Pyjama',
      category: 'wash-fold',
      categoryName: 'Wash & Fold',
      price: 35,
      unit: 'piece',
      time: '24-48h',
      desc: 'Color-safe gentle wash cycle with fabric protector.',
      icon: 'bi-person-badge'
    },
    {
      id: 'wf_undergarments',
      name: 'Undergarments & Socks (Pack of 3)',
      category: 'wash-fold',
      categoryName: 'Wash & Fold',
      price: 30,
      unit: 'pack',
      time: '24h',
      desc: 'Hygienic anti-bacterial hot water wash with antiseptic rinse.',
      icon: 'bi-shield-check'
    },

    // Wash & Steam Iron
    {
      id: 'wi_formal_shirt',
      name: 'Formal Shirt (Wash + Press)',
      category: 'wash-iron',
      categoryName: 'Wash & Steam Iron',
      price: 45,
      unit: 'piece',
      time: '24-48h',
      desc: 'Cuff & collar pre-spotting, washed and finished with crisp steam pressing.',
      icon: 'bi-suit-club'
    },
    {
      id: 'wi_formal_trousers',
      name: 'Formal Trousers / Slacks',
      category: 'wash-iron',
      categoryName: 'Wash & Steam Iron',
      price: 50,
      unit: 'piece',
      time: '24-48h',
      desc: 'Crease-perfect steam pressing with fabric conditioning.',
      icon: 'bi-layers'
    },
    {
      id: 'wi_saree',
      name: 'Daily Cotton Saree',
      category: 'wash-iron',
      categoryName: 'Wash & Steam Iron',
      price: 110,
      unit: 'piece',
      time: '48h',
      desc: 'Gentle wash followed by high-reach roller steam press with starched finish if requested.',
      icon: 'bi-flower1'
    },
    {
      id: 'wi_kurta_suit',
      name: 'Kurta & Salwar Set',
      category: 'wash-iron',
      categoryName: 'Wash & Steam Iron',
      price: 85,
      unit: 'set',
      time: '48h',
      desc: 'Complete 2-piece ethnic set washed and hand steam finished on hanger.',
      icon: 'bi-stars'
    },

    // Premium Dry Cleaning
    {
      id: 'dc_suit',
      name: '2-Piece Men’s / Women’s Suit',
      category: 'dry-clean',
      categoryName: 'Dry Cleaning',
      price: 299,
      unit: 'set',
      time: '48-72h',
      desc: 'Non-toxic hydrocarbon solvent dry clean, shape retention & garment bag packaging.',
      icon: 'bi-award'
    },
    {
      id: 'dc_blazer',
      name: 'Formal Blazer / Coat',
      category: 'dry-clean',
      categoryName: 'Dry Cleaning',
      price: 220,
      unit: 'piece',
      time: '48h',
      desc: 'Lining stain removal, specialized shoulder mold pressing, breathable garment bag.',
      icon: 'bi-briefcase'
    },
    {
      id: 'dc_silk_saree',
      name: 'Pure Silk / Banarasi Saree',
      category: 'dry-clean',
      categoryName: 'Dry Cleaning',
      price: 249,
      unit: 'piece',
      time: '48-72h',
      desc: 'Zero-water dry cleaning preserving gold zari, delicate weaves & silk luster.',
      icon: 'bi-gem'
    },
    {
      id: 'dc_jacket',
      name: 'Heavy Winter Jacket / Parka',
      category: 'dry-clean',
      categoryName: 'Dry Cleaning',
      price: 349,
      unit: 'piece',
      time: '72h',
      desc: 'Down & feather restoration, water-repellent conditioning & thermal fluffing.',
      icon: 'bi-snow'
    },

    // Steam Pressing Only
    {
      id: 'sp_shirt',
      name: 'Shirt Steam Press',
      category: 'steam-press',
      categoryName: 'Steam Press Only',
      price: 18,
      unit: 'piece',
      time: '24h',
      desc: 'Industrial pressure steam iron for wrinkle-free crisp finish.',
      icon: 'bi-lightning'
    },
    {
      id: 'sp_trousers',
      name: 'Trousers / Jeans Steam Press',
      category: 'steam-press',
      categoryName: 'Steam Press Only',
      price: 22,
      unit: 'piece',
      time: '24h',
      desc: 'Sharp crease alignment without scorching or fabric shine.',
      icon: 'bi-align-center'
    },
    {
      id: 'sp_saree',
      name: 'Saree Roller Steam Press',
      category: 'steam-press',
      categoryName: 'Steam Press Only',
      price: 60,
      unit: 'piece',
      time: '24h',
      desc: 'Even tension roller pressing for 6-meter sarees, delivered on specialized hanger.',
      icon: 'bi-arrow-repeat'
    },

    // Bedding & Household
    {
      id: 'bd_bedsheet',
      name: 'Double Bedsheet + 2 Pillow Covers',
      category: 'bedding',
      categoryName: 'Bedding & Linen',
      price: 110,
      unit: 'set',
      time: '48h',
      desc: 'Disinfectant thermal wash to remove dust mites, folded into vacuum-packed bags.',
      icon: 'bi-grid-3x3'
    },
    {
      id: 'bd_blanket',
      name: 'Heavy Mink Blanket (Double)',
      category: 'bedding',
      categoryName: 'Bedding & Linen',
      price: 249,
      unit: 'piece',
      time: '72h',
      desc: 'Anti-bacterial deep drum cleansing, soft-air fluff cycle.',
      icon: 'bi-clouds'
    },
    {
      id: 'bd_curtain',
      name: 'Curtain Panel (Up to 9ft)',
      category: 'bedding',
      categoryName: 'Bedding & Linen',
      price: 129,
      unit: 'panel',
      time: '72h',
      desc: 'Dust barrier wash with vertical steam drape finishing.',
      icon: 'bi-border-style'
    },

    // Shoe & Leather Spa
    {
      id: 'sh_sneakers',
      name: 'Sneakers Deep Clean & Odor Spa',
      category: 'shoe-spa',
      categoryName: 'Shoe & Leather Spa',
      price: 299,
      unit: 'pair',
      time: '72h',
      desc: 'Sole scrubbing, mesh cleaning, lace washing, ozone UV odor disinfection.',
      icon: 'bi-circle-half'
    },
    {
      id: 'sh_leather',
      name: 'Leather Shoes Polish & Conditioning',
      category: 'shoe-spa',
      categoryName: 'Shoe & Leather Spa',
      price: 399,
      unit: 'pair',
      time: '48h',
      desc: 'Beeswax cream nourish, scuff removal, edge coloring and mirror shine buff.',
      icon: 'bi-shield-shaded'
    }
  ];

  // Verified Coupon Codes
  const COUPONS = {
    'FIRSTWASH': { code: 'FIRSTWASH', discountPercent: 20, maxDiscount: 150, minOrder: 0, desc: '20% OFF (Up to ₹150) on First Order' },
    'WALLAH50': { code: 'WALLAH50', discountFlat: 50, maxDiscount: 50, minOrder: 300, desc: 'Flat ₹50 OFF on orders above ₹300' },
    'EXPRESS99': { code: 'EXPRESS99', expressFree: true, minOrder: 500, desc: 'Free Express 24h Upgrade on orders above ₹500' }
  };

  // Mock initial Tracking Orders for realistic demo
  const INITIAL_MOCK_ORDERS = {
    'LW-8921': {
      orderId: 'LW-8921',
      customerName: 'Aditya Verma',
      phone: '9876543210',
      serviceType: 'Premium Dry Cleaning & Steam Press',
      pickupDate: 'Today, 10:00 AM',
      deliveryEstimate: 'Tomorrow, 06:00 PM',
      currentStage: 3, // 0: Booked, 1: Picked Up, 2: Sorting, 3: Washing & Care, 4: Steam Press & QC, 5: Delivered
      rider: 'Ramesh Kumar (Valet #42)',
      riderPhone: '+91 98765 11223',
      totalAmount: 519,
      items: [
        { name: '2-Piece Men’s Suit', qty: 1, price: 299 },
        { name: 'Formal Shirt (Wash + Press)', qty: 2, price: 45 },
        { name: 'Formal Trousers', qty: 1, price: 50 }
      ]
    },
    'LW-1045': {
      orderId: 'LW-1045',
      customerName: 'Priya Sharma',
      phone: '9123456780',
      serviceType: 'Daily Wash & Fold (Bulk 8kg)',
      pickupDate: 'Yesterday, 02:00 PM',
      deliveryEstimate: 'Today, 07:00 PM (Out for Delivery)',
      currentStage: 4,
      rider: 'Vikram Singh (Valet #18)',
      riderPhone: '+91 98111 22334',
      totalAmount: 681,
      items: [
        { name: 'Bulk Laundry (8 kg Wash & Fold)', qty: 1, price: 632 }
      ]
    }
  };

  // --------------------------------------------------------------------------
  // 2. Application State
  // --------------------------------------------------------------------------
  let state = {
    cart: {}, // key: itemId, value: { item, qty }
    activeCategory: 'all',
    searchQuery: '',
    deliverySpeed: 'standard', // 'standard' (48h) or 'express' (24h)
    appliedCoupon: null,
    addons: {
      fragrance: false, // +₹19
      antibacterial: false // +₹29
    },
    // Bulk Wash Calculator State
    bulkWeight: 7,
    bulkType: 'wash-fold', // 'wash-fold' (79/kg), 'wash-iron' (99/kg), 'premium-sanitize' (119/kg)
    orders: loadOrdersFromStorage()
  };

  function loadOrdersFromStorage() {
    try {
      const stored = localStorage.getItem('lw_orders');
      if (stored) {
        return { ...INITIAL_MOCK_ORDERS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return { ...INITIAL_MOCK_ORDERS };
  }

  function saveOrderToStorage(newOrder) {
    state.orders[newOrder.orderId] = newOrder;
    try {
      localStorage.setItem('lw_orders', JSON.stringify(state.orders));
    } catch (e) {
      console.warn('LocalStorage write error:', e);
    }
  }

  // --------------------------------------------------------------------------
  // 3. DOM Element References
  // --------------------------------------------------------------------------
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogSearchInput = document.getElementById('catalog-search');
  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  const cartBody = document.getElementById('cart-table-body');
  const cartCountNav = document.getElementById('cart-count-nav');
  const cartSubtotalNav = document.getElementById('cart-subtotal-nav');
  const cartSummaryList = document.getElementById('booking-summary-items');
  const mobileCartCount = document.getElementById('mobile-cart-count');
  const mobileCartTotal = document.getElementById('mobile-cart-total');

  // Pricing Elements
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryDelivery = document.getElementById('summary-delivery');
  const summaryAddons = document.getElementById('summary-addons');
  const summaryDiscountRow = document.getElementById('summary-discount-row');
  const summaryDiscount = document.getElementById('summary-discount');
  const summaryTax = document.getElementById('summary-tax');
  const summaryTotal = document.getElementById('summary-total');

  // Calculator Elements
  const weightSlider = document.getElementById('weight-range');
  const weightDisplay = document.getElementById('weight-display-val');
  const calcClothesEst = document.getElementById('calc-clothes-est');
  const calcPriceEst = document.getElementById('calc-price-est');
  const calcOptionCards = document.querySelectorAll('.calc-option-card');
  const btnAddBulkToCart = document.getElementById('btn-add-bulk');

  // Coupon Elements
  const couponInput = document.getElementById('coupon-code-input');
  const btnApplyCoupon = document.getElementById('btn-apply-coupon');
  const couponFeedback = document.getElementById('coupon-feedback');

  // Booking Form & Inputs
  const bookingForm = document.getElementById('laundry-booking-form');
  const dateInput = document.getElementById('pickup-date');
  const pincodeInput = document.getElementById('customer-pincode');
  const pincodeStatus = document.getElementById('pincode-status');

  // Tracking Elements
  const trackOrderIdInput = document.getElementById('track-order-id');
  const btnTrackOrder = document.getElementById('btn-track-order');
  const trackingResultContainer = document.getElementById('tracking-result-box');
  const sampleChipButtons = document.querySelectorAll('.sample-chip-btn');

  // --------------------------------------------------------------------------
  // 4. Initial Setup & Event Listeners Registration
  // --------------------------------------------------------------------------
  function init() {
    setupDateConstraints();
    renderCatalog();
    renderCart();
    updateBulkCalculator();
    setupEventListeners();
  }

  function setupDateConstraints() {
    if (!dateInput) return;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    dateInput.min = minDate;

    // Set max date to 10 days from today
    const maxDateObj = new Date();
    maxDateObj.setDate(today.getDate() + 10);
    const maxDate = `${maxDateObj.getFullYear()}-${String(maxDateObj.getMonth() + 1).padStart(2, '0')}-${String(maxDateObj.getDate()).padStart(2, '0')}`;
    dateInput.max = maxDate;
    
    // Default to today
    dateInput.value = minDate;
  }

  function setupEventListeners() {
    // Category Filter Buttons
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeCategory = btn.getAttribute('data-category');
        renderCatalog();
      });
    });

    // Live Catalog Search Filter
    if (catalogSearchInput) {
      catalogSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        renderCatalog();
      });
    }

    // Bulk Wash Calculator Slider & Radios
    if (weightSlider) {
      weightSlider.addEventListener('input', (e) => {
        state.bulkWeight = parseInt(e.target.value, 10);
        if (weightDisplay) weightDisplay.textContent = state.bulkWeight;
        updateBulkCalculator();
      });
    }

    calcOptionCards.forEach(card => {
      card.addEventListener('click', () => {
        calcOptionCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        state.bulkType = card.getAttribute('data-type');
        updateBulkCalculator();
      });
    });

    if (btnAddBulkToCart) {
      btnAddBulkToCart.addEventListener('click', handleAddBulkToCart);
    }

    // Delivery Speed Radio Toggles
    const speedRadios = document.querySelectorAll('input[name="deliverySpeed"]');
    speedRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.deliverySpeed = e.target.value;
        renderCart();
      });
    });

    // Addons Checkboxes
    const addonFragrance = document.getElementById('addon-fragrance');
    if (addonFragrance) {
      addonFragrance.addEventListener('change', (e) => {
        state.addons.fragrance = e.target.checked;
        renderCart();
      });
    }

    const addonSanitizer = document.getElementById('addon-sanitizer');
    if (addonSanitizer) {
      addonSanitizer.addEventListener('change', (e) => {
        state.addons.antibacterial = e.target.checked;
        renderCart();
      });
    }

    // Coupon Code Action
    if (btnApplyCoupon) {
      btnApplyCoupon.addEventListener('click', handleApplyCoupon);
    }

    if (couponInput) {
      couponInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleApplyCoupon();
        }
      });
    }

    // Pincode Serviceability Validation
    if (pincodeInput) {
      pincodeInput.addEventListener('input', handlePincodeCheck);
    }

    // Form Real-time Validation & Submission
    if (bookingForm) {
      setupFormValidation();
    }

    // Tracking Simulator
    if (btnTrackOrder) {
      btnTrackOrder.addEventListener('click', handleTrackOrder);
    }

    if (trackOrderIdInput) {
      trackOrderIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleTrackOrder();
        }
      });
    }

    sampleChipButtons.forEach(chip => {
      chip.addEventListener('click', () => {
        const orderId = chip.getAttribute('data-order-id');
        if (trackOrderIdInput) trackOrderIdInput.value = orderId;
        handleTrackOrder();
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.lw-navbar');
      if (navbar) {
        if (window.scrollY > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Service Catalog Rendering & Card Interactions (DOM Manipulation)
  // --------------------------------------------------------------------------
  function renderCatalog() {
    if (!catalogGrid) return;

    const filtered = SERVICES_DATA.filter(item => {
      const matchCategory = state.activeCategory === 'all' || item.category === state.activeCategory;
      const matchSearch = state.searchQuery === '' ||
        item.name.toLowerCase().includes(state.searchQuery) ||
        item.categoryName.toLowerCase().includes(state.searchQuery) ||
        item.desc.toLowerCase().includes(state.searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-4 bg-white rounded-4 border">
            <i class="bi bi-search text-muted display-4 mb-3 d-block"></i>
            <h5 class="fw-bold">No garments found for "${escapeHtml(state.searchQuery)}"</h5>
            <p class="text-muted mb-3">Try checking for different garment types, or switch category tabs above.</p>
            <button class="btn btn-lw-secondary btn-sm" id="btn-clear-search">Reset Filter</button>
          </div>
        </div>
      `;
      const btnClear = document.getElementById('btn-clear-search');
      if (btnClear) {
        btnClear.addEventListener('click', () => {
          state.searchQuery = '';
          state.activeCategory = 'all';
          if (catalogSearchInput) catalogSearchInput.value = '';
          categoryButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'all'));
          renderCatalog();
        });
      }
      return;
    }

    catalogGrid.innerHTML = filtered.map(item => {
      const inCart = state.cart[item.id];
      const qty = inCart ? inCart.qty : 0;
      const tagClass = getCategoryTagClass(item.category);

      return `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="garment-card">
            <div>
              <div class="garment-card-top">
                <div class="garment-icon-bubble">
                  <i class="bi ${item.icon}"></i>
                </div>
                <span class="garment-category-tag ${tagClass}">
                  ${item.categoryName}
                </span>
              </div>
              <h4 class="garment-title">${escapeHtml(item.name)}</h4>
              <p class="garment-desc">${escapeHtml(item.desc)}</p>
            </div>

            <div>
              <div class="garment-price-row">
                <span class="garment-price">₹${item.price}</span>
                <span class="garment-unit">/ ${item.unit}</span>
                <span class="badge bg-light text-secondary border ms-auto font-monospace" style="font-size:0.75rem;">
                  <i class="bi bi-clock me-1"></i>${item.time}
                </span>
              </div>

              <div class="card-action-box">
                ${qty === 0 ? `
                  <button class="btn-add-item" data-action="add" data-id="${item.id}">
                    <i class="bi bi-plus-circle"></i> Add to Bag
                  </button>
                ` : `
                  <div class="qty-control-box">
                    <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">
                      <i class="bi bi-dash"></i>
                    </button>
                    <span class="qty-display">${qty} in bag</span>
                    <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach event listeners to newly rendered card buttons
    catalogGrid.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.getAttribute('data-action');
        const id = btn.getAttribute('data-id');
        if (action === 'add' || action === 'increase') {
          updateCartItem(id, 1);
        } else if (action === 'decrease') {
          updateCartItem(id, -1);
        }
      });
    });
  }

  function getCategoryTagClass(cat) {
    switch (cat) {
      case 'wash-fold': return 'tag-wash';
      case 'wash-iron': return 'tag-iron';
      case 'dry-clean': return 'tag-dryclean';
      case 'steam-press': return 'tag-iron';
      case 'bedding': return 'tag-home';
      case 'shoe-spa': return 'tag-shoe';
      default: return 'tag-wash';
    }
  }

  // --------------------------------------------------------------------------
  // 6. Live Cart State & Computation Engine
  // --------------------------------------------------------------------------
  function updateCartItem(itemId, delta) {
    const item = SERVICES_DATA.find(i => i.id === itemId);
    if (!item) return;

    if (!state.cart[itemId]) {
      if (delta > 0) {
        state.cart[itemId] = {
          id: item.id,
          name: item.name,
          price: item.price,
          unit: item.unit,
          qty: delta,
          category: item.categoryName
        };
        showToast('Item Added', `${item.name} added to your bag`, 'success');
      }
    } else {
      state.cart[itemId].qty += delta;
      if (state.cart[itemId].qty <= 0) {
        delete state.cart[itemId];
        showToast('Item Removed', `${item.name} removed from your bag`, 'info');
      }
    }

    triggerBadgeAnimation();
    renderCatalog();
    renderCart();
  }

  function triggerBadgeAnimation() {
    if (cartCountNav) {
      cartCountNav.classList.remove('bump');
      void cartCountNav.offsetWidth; // trigger reflow
      cartCountNav.classList.add('bump');
    }
  }

  function computeCartTotals() {
    let subtotal = 0;
    let totalItems = 0;

    Object.values(state.cart).forEach(entry => {
      subtotal += entry.price * entry.qty;
      totalItems += entry.qty;
    });

    // Delivery Fee Logic:
    // Standard (48h): FREE if subtotal >= 299, else ₹49
    // Express (24h): flat +₹99 (or free if EXPRESS99 coupon applied)
    let deliveryFee = 0;
    let deliveryLabel = 'Free';

    if (state.deliverySpeed === 'express') {
      if (state.appliedCoupon && state.appliedCoupon.expressFree) {
        deliveryFee = 0;
        deliveryLabel = 'FREE (Coupon Applied)';
      } else {
        deliveryFee = 99;
        deliveryLabel = '₹99 (24h Express)';
      }
    } else {
      if (subtotal >= 299 || subtotal === 0) {
        deliveryFee = 0;
        deliveryLabel = subtotal === 0 ? '₹0' : 'FREE (Over ₹299)';
      } else {
        deliveryFee = 49;
        deliveryLabel = '₹49 (Standard)';
      }
    }

    // Addons Cost
    let addonsCost = 0;
    if (state.addons.fragrance && totalItems > 0) addonsCost += 19;
    if (state.addons.antibacterial && totalItems > 0) addonsCost += 29;

    // Discount Computation
    let discountAmount = 0;
    if (state.appliedCoupon && subtotal > 0) {
      const c = state.appliedCoupon;
      if (c.discountPercent) {
        discountAmount = Math.round((subtotal * c.discountPercent) / 100);
        if (c.maxDiscount && discountAmount > c.maxDiscount) {
          discountAmount = c.maxDiscount;
        }
      } else if (c.discountFlat) {
        discountAmount = c.discountFlat;
      }
      if (discountAmount > subtotal) {
        discountAmount = subtotal;
      }
    }

    // GST: 5% service tax on net services
    const taxableAmount = Math.max(0, subtotal - discountAmount + addonsCost);
    const tax = taxableAmount > 0 ? Math.round(taxableAmount * 0.05) : 0;

    // Final Total Payable
    const total = taxableAmount > 0 ? taxableAmount + deliveryFee + tax : 0;

    return {
      subtotal,
      totalItems,
      deliveryFee,
      deliveryLabel,
      addonsCost,
      discountAmount,
      tax,
      total
    };
  }

  function renderCart() {
    const totals = computeCartTotals();

    // 1. Update Navbar Badges & Mobile Bar
    if (cartCountNav) cartCountNav.textContent = totals.totalItems;
    if (cartSubtotalNav) cartSubtotalNav.textContent = `₹${totals.subtotal}`;
    if (mobileCartCount) mobileCartCount.textContent = totals.totalItems;
    if (mobileCartTotal) mobileCartTotal.textContent = `₹${totals.total}`;

    // 2. Render Offcanvas Table Body
    if (cartBody) {
      const cartKeys = Object.keys(state.cart);
      if (cartKeys.length === 0) {
        cartBody.innerHTML = `
          <tr>
            <td colspan="4">
              <div class="cart-empty-state">
                <i class="bi bi-bag-x cart-empty-icon"></i>
                <h5 class="fw-bold mb-1">Your Laundry Bag is Empty</h5>
                <p class="text-muted small mb-3">Add everyday clothes or try our bulk wash estimator.</p>
                <a href="#services" class="btn btn-lw-primary btn-sm" data-bs-dismiss="offcanvas">
                  Browse Garment Menu
                </a>
              </div>
            </td>
          </tr>
        `;
      } else {
        cartBody.innerHTML = cartKeys.map(key => {
          const item = state.cart[key];
          const lineTotal = item.price * item.qty;
          return `
            <tr>
              <td>
                <div class="fw-bold text-dark" style="font-size:0.9rem;">${escapeHtml(item.name)}</div>
                <small class="text-muted">${escapeHtml(item.category)} • ₹${item.price}/${item.unit}</small>
              </td>
              <td class="text-center" style="width: 110px;">
                <div class="d-flex align-items-center justify-content-center gap-1">
                  <button class="btn btn-sm btn-outline-secondary py-0 px-2" data-cart-action="dec" data-id="${item.id}">-</button>
                  <span class="fw-bold px-1" style="font-size:0.85rem;">${item.qty}</span>
                  <button class="btn btn-sm btn-outline-secondary py-0 px-2" data-cart-action="inc" data-id="${item.id}">+</button>
                </div>
              </td>
              <td class="text-end fw-bold text-dark font-monospace">₹${lineTotal}</td>
              <td class="text-end" style="width: 30px;">
                <button class="btn btn-link text-danger p-0" data-cart-action="del" data-id="${item.id}" title="Remove">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          `;
        }).join('');

        // Attach cart table actions
        cartBody.querySelectorAll('[data-cart-action]').forEach(btn => {
          btn.addEventListener('click', () => {
            const act = btn.getAttribute('data-cart-action');
            const id = btn.getAttribute('data-id');
            if (act === 'inc') updateCartItem(id, 1);
            if (act === 'dec') updateCartItem(id, -1);
            if (act === 'del') {
              if (state.cart[id]) {
                delete state.cart[id];
                renderCatalog();
                renderCart();
              }
            }
          });
        });
      }
    }

    // 3. Render Booking Order Summary List (Right column)
    if (cartSummaryList) {
      const cartKeys = Object.keys(state.cart);
      if (cartKeys.length === 0) {
        cartSummaryList.innerHTML = `
          <div class="text-center text-muted py-3">
            <i class="bi bi-basket me-1"></i> No items added yet. Choose garments from the rate card above.
          </div>
        `;
      } else {
        cartSummaryList.innerHTML = cartKeys.map(key => {
          const item = state.cart[key];
          return `
            <div class="summary-item-row">
              <div>
                <span class="fw-bold">${escapeHtml(item.name)}</span>
                <span class="text-muted ms-1 small">× ${item.qty}</span>
              </div>
              <span class="fw-bold text-dark font-monospace">₹${item.price * item.qty}</span>
            </div>
          `;
        }).join('');
      }
    }

    // 4. Update Summary Breakdown Values
    if (summarySubtotal) summarySubtotal.textContent = `₹${totals.subtotal}`;
    if (summaryDelivery) summaryDelivery.textContent = totals.deliveryLabel;
    if (summaryAddons) summaryAddons.textContent = `₹${totals.addonsCost}`;
    if (summaryTax) summaryTax.textContent = `₹${totals.tax}`;
    if (summaryTotal) summaryTotal.textContent = `₹${totals.total}`;

    // Offcanvas Summary Fields
    const offSubtotal = document.getElementById('offcanvas-subtotal');
    const offDelivery = document.getElementById('offcanvas-delivery');
    const offTotal = document.getElementById('offcanvas-total');
    if (offSubtotal) offSubtotal.textContent = `₹${totals.subtotal}`;
    if (offDelivery) offDelivery.textContent = totals.deliveryLabel;
    if (offTotal) offTotal.textContent = `₹${totals.total}`;

    // Discount Display
    if (summaryDiscountRow && summaryDiscount) {
      if (totals.discountAmount > 0) {
        summaryDiscountRow.classList.remove('d-none');
        summaryDiscount.textContent = `-₹${totals.discountAmount}`;
      } else {
        summaryDiscountRow.classList.add('d-none');
      }
    }

    // Check Coupon Validity Against New Subtotal
    if (state.appliedCoupon && totals.subtotal < (state.appliedCoupon.minOrder || 0)) {
      showToast('Coupon Removed', `Minimum order of ₹${state.appliedCoupon.minOrder} required for ${state.appliedCoupon.code}`, 'warning');
      state.appliedCoupon = null;
      if (couponFeedback) couponFeedback.innerHTML = '';
      renderCart();
    }
  }

  // --------------------------------------------------------------------------
  // 7. Bulk Laundry Estimator by Weight (Computation & DOM)
  // --------------------------------------------------------------------------
  function updateBulkCalculator() {
    const weight = state.bulkWeight;
    let ratePerKg = 79;
    let typeName = 'Wash & Fold';

    if (state.bulkType === 'wash-iron') {
      ratePerKg = 99;
      typeName = 'Wash & Steam Iron';
    } else if (state.bulkType === 'premium-sanitize') {
      ratePerKg = 119;
      typeName = 'Premium Anti-bacterial Wash & Iron';
    }

    const estimatedGarments = Math.round(weight * 4.5);
    const totalPrice = weight * ratePerKg;

    if (calcClothesEst) calcClothesEst.textContent = `~${estimatedGarments} garments`;
    if (calcPriceEst) calcPriceEst.textContent = `₹${totalPrice}`;

    const calcRateBadge = document.getElementById('calc-rate-badge');
    if (calcRateBadge) calcRateBadge.textContent = `₹${ratePerKg}/kg (${typeName})`;
  }

  function handleAddBulkToCart() {
    const weight = state.bulkWeight;
    let rate = 79;
    let title = 'Bulk Laundry - Wash & Fold';
    let id = `bulk_wf_${weight}kg`;

    if (state.bulkType === 'wash-iron') {
      rate = 99;
      title = 'Bulk Laundry - Wash & Steam Press';
      id = `bulk_wi_${weight}kg`;
    } else if (state.bulkType === 'premium-sanitize') {
      rate = 119;
      title = 'Bulk Laundry - Premium Sanitized';
      id = `bulk_ps_${weight}kg`;
    }

    const price = weight * rate;

    state.cart[id] = {
      id: id,
      name: `${title} (${weight} kg)`,
      price: price,
      unit: 'bundle',
      qty: 1,
      category: 'Bulk Wash by Weight'
    };

    triggerBadgeAnimation();
    renderCart();
    showToast('Bulk Wash Added', `${weight}kg package (₹${price}) added to your bag!`, 'success');

    // Smooth scroll down to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --------------------------------------------------------------------------
  // 8. Coupon Application System
  // --------------------------------------------------------------------------
  function handleApplyCoupon() {
    if (!couponInput) return;
    const rawCode = couponInput.value.trim().toUpperCase();

    if (!rawCode) {
      showCouponFeedback('Please enter a coupon code', false);
      return;
    }

    const coupon = COUPONS[rawCode];
    if (!coupon) {
      showCouponFeedback(`Invalid promo code "${escapeHtml(rawCode)}". Try FIRSTWASH or WALLAH50.`, false);
      return;
    }

    const totals = computeCartTotals();
    if (totals.subtotal < (coupon.minOrder || 0)) {
      showCouponFeedback(`Order minimum of ₹${coupon.minOrder} required for code "${coupon.code}"`, false);
      return;
    }

    state.appliedCoupon = coupon;
    showCouponFeedback(`Success! ${coupon.desc} applied.`, true);
    showToast('Promo Code Applied', coupon.desc, 'success');
    renderCart();
  }

  function showCouponFeedback(msg, isSuccess) {
    if (!couponFeedback) return;
    couponFeedback.innerHTML = `
      <div class="alert ${isSuccess ? 'alert-success' : 'alert-danger'} py-2 px-3 small mt-2 mb-0 d-flex justify-content-between align-items-center">
        <span><i class="bi ${isSuccess ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'} me-1"></i> ${msg}</span>
        ${isSuccess ? '<button type="button" class="btn btn-sm btn-link text-danger p-0 text-decoration-none fw-bold" id="btn-remove-coupon">Remove</button>' : ''}
      </div>
    `;

    const removeBtn = document.getElementById('btn-remove-coupon');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        state.appliedCoupon = null;
        if (couponInput) couponInput.value = '';
        couponFeedback.innerHTML = '';
        showToast('Coupon Removed', 'Promo code was removed.', 'info');
        renderCart();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 9. Pincode Serviceability Check
  // --------------------------------------------------------------------------
  function handlePincodeCheck(e) {
    const val = e.target.value.trim();
    if (!pincodeStatus) return;

    if (val.length === 6 && /^[1-9][0-9]{5}$/.test(val)) {
      // Valid Indian 6-digit PIN
      pincodeInput.classList.remove('is-invalid');
      pincodeInput.classList.add('is-valid');
      pincodeStatus.innerHTML = `
        <span class="text-success small fw-semibold">
          <i class="bi bi-geo-alt-fill me-1"></i> Great news! Doorstep pickup is available in pincode ${escapeHtml(val)} within 45 mins.
        </span>
      `;
    } else if (val.length > 0) {
      pincodeInput.classList.remove('is-valid');
      pincodeInput.classList.add('is-invalid');
      pincodeStatus.innerHTML = `
        <span class="text-danger small">
          Please enter a valid 6-digit Indian Postal PIN Code.
        </span>
      `;
    } else {
      pincodeInput.classList.remove('is-valid', 'is-invalid');
      pincodeStatus.innerHTML = '';
    }
  }

  // --------------------------------------------------------------------------
  // 10. Comprehensive Form Validation (Event-Driven & Feedback)
  // --------------------------------------------------------------------------
  function setupFormValidation() {
    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const emailInput = document.getElementById('customer-email');
    const addressInput = document.getElementById('customer-address');

    // Validation definitions
    const validators = {
      name: (val) => /^[a-zA-Z\s]{3,50}$/.test(val.trim()),
      phone: (val) => /^[6-9]\d{9}$/.test(val.trim()),
      email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      address: (val) => val.trim().length >= 8,
      pincode: (val) => /^[1-9][0-9]{5}$/.test(val.trim()),
      date: (val) => Boolean(val),
      slot: () => Boolean(document.querySelector('input[name="pickupSlot"]:checked'))
    };

    function validateField(inputEl, isValid, errorMsg) {
      if (!inputEl) return;
      if (isValid) {
        inputEl.classList.remove('is-invalid');
        inputEl.classList.add('is-valid');
      } else {
        inputEl.classList.remove('is-valid');
        inputEl.classList.add('is-invalid');
        const feedback = inputEl.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback') && errorMsg) {
          feedback.textContent = errorMsg;
        }
      }
    }

    // Attach blur & input listeners for immediate responsive feedback
    if (nameInput) {
      nameInput.addEventListener('blur', () => {
        validateField(nameInput, validators.name(nameInput.value), 'Please enter your full name (at least 3 alphabetic letters).');
      });
      nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('is-invalid')) {
          validateField(nameInput, validators.name(nameInput.value));
        }
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('blur', () => {
        validateField(phoneInput, validators.phone(phoneInput.value), 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      });
      phoneInput.addEventListener('input', () => {
        if (phoneInput.classList.contains('is-invalid')) {
          validateField(phoneInput, validators.phone(phoneInput.value));
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        validateField(emailInput, validators.email(emailInput.value), 'Please enter a valid email address for invoice & tracking.');
      });
      emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('is-invalid')) {
          validateField(emailInput, validators.email(emailInput.value));
        }
      });
    }

    if (addressInput) {
      addressInput.addEventListener('blur', () => {
        validateField(addressInput, validators.address(addressInput.value), 'Provide complete address with house/flat, street & landmark (min 8 chars).');
      });
      addressInput.addEventListener('input', () => {
        if (addressInput.classList.contains('is-invalid')) {
          validateField(addressInput, validators.address(addressInput.value));
        }
      });
    }

    // Handle Form Submit Event
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check if cart has items
      const totals = computeCartTotals();
      if (totals.totalItems === 0) {
        showToast('Empty Laundry Bag', 'Please add garments or select a bulk wash before booking pickup.', 'warning');
        const servicesSection = document.getElementById('services');
        if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Validate all fields
      const isNameValid = validators.name(nameInput.value);
      const isPhoneValid = validators.phone(phoneInput.value);
      const isEmailValid = validators.email(emailInput.value);
      const isAddressValid = validators.address(addressInput.value);
      const isPincodeValid = validators.pincode(pincodeInput.value);
      const isDateValid = validators.date(dateInput.value);
      const isSlotValid = validators.slot();

      validateField(nameInput, isNameValid, 'Please enter your full name (at least 3 alphabetic letters).');
      validateField(phoneInput, isPhoneValid, 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      validateField(emailInput, isEmailValid, 'Please enter a valid email address.');
      validateField(addressInput, isAddressValid, 'Provide complete address with house/flat, street & landmark.');
      validateField(pincodeInput, isPincodeValid, 'Enter a valid 6-digit Postal PIN.');

      const slotFeedback = document.getElementById('slot-feedback');
      if (!isSlotValid && slotFeedback) {
        slotFeedback.classList.remove('d-none');
      } else if (slotFeedback) {
        slotFeedback.classList.add('d-none');
      }

      if (!isNameValid || !isPhoneValid || !isEmailValid || !isAddressValid || !isPincodeValid || !isDateValid || !isSlotValid) {
        showToast('Validation Error', 'Please correct the highlighted fields in the booking form.', 'danger');
        return;
      }

      // Generate Unique Order ID
      const newOrderId = `LW-${Math.floor(1000 + Math.random() * 9000)}`;
      const selectedSlot = document.querySelector('input[name="pickupSlot"]:checked')?.value || '10:00 AM - 12:00 PM';
      const instructions = document.getElementById('special-instructions')?.value.trim() || 'None';
      const paymentPref = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash / UPI on Delivery';

      // Assemble new order record
      const orderRecord = {
        orderId: newOrderId,
        customerName: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        address: `${addressInput.value.trim()}, PIN: ${pincodeInput.value.trim()}`,
        pickupDate: `${dateInput.value} (${selectedSlot})`,
        deliveryEstimate: state.deliverySpeed === 'express' ? 'Within 24 Hours' : 'Within 48-72 Hours',
        currentStage: 0, // Booked
        rider: 'Assigned on Pickup Morning',
        riderPhone: '+91 98765 43210 (Support)',
        totalAmount: totals.total,
        serviceSpeed: state.deliverySpeed === 'express' ? 'Express 24h' : 'Standard 48-72h',
        paymentMethod: paymentPref,
        specialNotes: instructions,
        items: Object.values(state.cart).map(i => ({ name: i.name, qty: i.qty, price: i.price }))
      };

      saveOrderToStorage(orderRecord);

      // Trigger Confirmation Modal & Reset Cart
      showOrderConfirmationModal(orderRecord, totals);

      // Reset cart and form
      state.cart = {};
      state.appliedCoupon = null;
      bookingForm.reset();
      setupDateConstraints();
      nameInput.classList.remove('is-valid');
      phoneInput.classList.remove('is-valid');
      emailInput.classList.remove('is-valid');
      addressInput.classList.remove('is-valid');
      pincodeInput.classList.remove('is-valid');
      if (pincodeStatus) pincodeStatus.innerHTML = '';
      if (couponFeedback) couponFeedback.innerHTML = '';

      renderCatalog();
      renderCart();
    });
  }

  // --------------------------------------------------------------------------
  // 11. Order Confirmation Modal Presentation
  // --------------------------------------------------------------------------
  function showOrderConfirmationModal(order, totals) {
    const modalEl = document.getElementById('orderConfirmationModal');
    if (!modalEl) return;

    document.getElementById('modal-order-id').textContent = order.orderId;
    document.getElementById('modal-customer-name').textContent = order.customerName;
    document.getElementById('modal-pickup-time').textContent = order.pickupDate;
    document.getElementById('modal-delivery-speed').textContent = order.serviceSpeed;
    document.getElementById('modal-pay-mode').textContent = order.paymentMethod;
    document.getElementById('modal-total-paid').textContent = `₹${totals.total}`;

    // Itemized table in modal
    const itemsTableBody = document.getElementById('modal-items-tbody');
    if (itemsTableBody) {
      itemsTableBody.innerHTML = order.items.map(item => `
        <tr>
          <td>${escapeHtml(item.name)}</td>
          <td class="text-center">${item.qty}</td>
          <td class="text-end font-monospace">₹${item.price * item.qty}</td>
        </tr>
      `).join('');
    }

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    // Link track button inside modal
    const btnModalTrack = document.getElementById('btn-modal-track-now');
    if (btnModalTrack) {
      btnModalTrack.onclick = () => {
        bsModal.hide();
        if (trackOrderIdInput) trackOrderIdInput.value = order.orderId;
        handleTrackOrder();
        const trackingSec = document.getElementById('tracking');
        if (trackingSec) trackingSec.scrollIntoView({ behavior: 'smooth' });
      };
    }
  }

  // --------------------------------------------------------------------------
  // 12. Live Order Tracking Simulator (Event-driven & DOM)
  // --------------------------------------------------------------------------
  function handleTrackOrder() {
    if (!trackOrderIdInput || !trackingResultContainer) return;
    const searchId = trackOrderIdInput.value.trim().toUpperCase();

    if (!searchId) {
      showToast('Enter Order ID', 'Please enter your order reference (e.g. LW-8921)', 'warning');
      return;
    }

    const order = state.orders[searchId];
    if (!order) {
      trackingResultContainer.innerHTML = `
        <div class="alert alert-warning rounded-3 border d-flex align-items-center gap-3 py-3">
          <i class="bi bi-question-circle display-6 text-warning"></i>
          <div>
            <h6 class="fw-bold mb-1">No order found with ID "${escapeHtml(searchId)}"</h6>
            <p class="mb-0 small text-muted">Please double check the ID. You can try our demo order <a href="javascript:void(0)" class="fw-bold sample-chip-btn" data-order-id="LW-8921">LW-8921</a>.</p>
          </div>
        </div>
      `;
      const innerChip = trackingResultContainer.querySelector('.sample-chip-btn');
      if (innerChip) {
        innerChip.addEventListener('click', () => {
          trackOrderIdInput.value = 'LW-8921';
          handleTrackOrder();
        });
      }
      return;
    }

    renderTrackingStatus(order);
  }

  function renderTrackingStatus(order) {
    const STAGES = [
      { id: 0, title: 'Order Confirmed', time: 'Doorstep pickup valet assigned', icon: 'bi-check2-circle' },
      { id: 1, title: 'Picked Up', time: 'Valet collected and safely tagged', icon: 'bi-bag-check' },
      { id: 2, title: 'In Washing & Care', time: 'Ozone sanitized & fabric specific wash', icon: 'bi-tsunami' },
      { id: 3, title: 'Steam Press & QC', time: 'Crease-free steam iron & quality audit', icon: 'bi-lightning' },
      { id: 4, title: 'Out for Delivery', time: 'Rider on the way to your door', icon: 'bi-truck' },
      { id: 5, title: 'Delivered Fresh', time: 'Delivered crisp & spotless', icon: 'bi-house-check' }
    ];

    const currentStageIndex = order.currentStage ?? 0;
    const isCompleted = currentStageIndex >= 5;

    trackingResultContainer.innerHTML = `
      <div class="tracking-status-card">
        <!-- Top Status Meta -->
        <div class="d-flex flex-wrap justify-content-between align-items-center pb-3 border-bottom mb-4 gap-3">
          <div>
            <span class="status-badge-live mb-2">
              <span class="pulse-dot"></span>
              ${isCompleted ? 'Delivered' : 'Live In-Progress'}
            </span>
            <h4 class="fw-bold mb-0">Order #${order.orderId}</h4>
            <small class="text-muted">Customer: <strong class="text-dark">${escapeHtml(order.customerName)}</strong> • Phone: ${order.phone}</small>
          </div>
          <div class="text-lg-end">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fs-6">
              Est. Delivery: ${order.deliveryEstimate}
            </span>
          </div>
        </div>

        <!-- Timeline Steps -->
        <div class="timeline-steps">
          ${STAGES.map(stage => {
            let statusClass = '';
            if (stage.id < currentStageIndex) statusClass = 'completed';
            else if (stage.id === currentStageIndex) statusClass = 'current';

            return `
              <div class="timeline-step ${statusClass}">
                <div class="step-bubble">
                  <i class="bi ${stage.icon}"></i>
                </div>
                <div>
                  <div class="step-label">${stage.title}</div>
                  <div class="step-time">${stage.time}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Rider & Garment Details Box -->
        <div class="row g-3 mt-4 pt-3 border-top">
          <div class="col-md-6">
            <div class="p-3 bg-white rounded-3 border h-100">
              <h6 class="fw-bold mb-2 text-dark"><i class="bi bi-person-badge text-primary me-2"></i>Valet / Rider Details</h6>
              <p class="mb-1 small"><strong>Agent:</strong> ${order.rider}</p>
              <p class="mb-1 small"><strong>Hotline:</strong> <a href="tel:${order.riderPhone}">${order.riderPhone}</a></p>
              <p class="mb-0 small text-muted">Masked & temperature checked daily.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 bg-white rounded-3 border h-100 d-flex flex-column justify-content-between">
              <div>
                <h6 class="fw-bold mb-2 text-dark"><i class="bi bi-receipt text-primary me-2"></i>Garment Breakdown</h6>
                <p class="mb-1 small text-muted">
                  ${order.items.map(i => `${escapeHtml(i.name)} (×${i.qty})`).join(', ')}
                </p>
              </div>
              <div class="mt-2 d-flex justify-content-between align-items-center">
                <span class="fw-bold text-dark">Total Bill: ₹${order.totalAmount}</span>
                <button class="btn btn-sm btn-outline-primary" id="btn-advance-simulation">
                  <i class="bi bi-fast-forward me-1"></i> Simulate Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Interactive button to simulate order moving forward in real-time
    const btnSimulate = document.getElementById('btn-advance-simulation');
    if (btnSimulate) {
      btnSimulate.addEventListener('click', () => {
        if (order.currentStage < 5) {
          order.currentStage += 1;
        } else {
          order.currentStage = 1;
        }
        saveOrderToStorage(order);
        renderTrackingStatus(order);
        showToast('Tracking Updated', `Order #${order.orderId} advanced to stage: ${STAGES[order.currentStage].title}`, 'info');
      });
    }
  }

  // --------------------------------------------------------------------------
  // 13. Toast Notification Helper
  // --------------------------------------------------------------------------
  function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-placement');
    if (!container) return;

    let icon = 'bi-info-circle-fill text-primary';
    if (type === 'success') icon = 'bi-check-circle-fill text-success';
    if (type === 'warning') icon = 'bi-exclamation-triangle-fill text-warning';
    if (type === 'danger') icon = 'bi-x-circle-fill text-danger';

    const toastId = 'toast_' + Math.random().toString(36).substring(2, 9);
    const toastHtml = `
      <div id="${toastId}" class="toast lw-toast align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-start gap-2">
            <i class="bi ${icon} fs-5 mt-1"></i>
            <div>
              <strong class="d-block text-dark">${escapeHtml(title)}</strong>
              <small class="text-muted">${escapeHtml(message)}</small>
            </div>
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', toastHtml);
    const el = document.getElementById(toastId);
    if (el) {
      const bsToast = new bootstrap.Toast(el, { delay: 3500 });
      bsToast.show();
      el.addEventListener('hidden.bs.toast', () => {
        el.remove();
      });
    }
  }

  // Utility to prevent XSS in dynamic rendering
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run initialization
  init();
});
