# 🧺 Laundry Wallah™ — Upgraded Production Web Application

> **Upgraded & Modernized Edition** inspired by [AryanAnand-25raj/Laundry_wallah-upgrade](https://github.com/AryanAnand-25raj/Laundry_wallah-upgrade).  
> Rebuilt with a human-crafted, commercial-grade UI/UX design system, Bootstrap 5.3 responsive foundation, and deep JavaScript event-driven interactivity, real-time computations, strict form validations, and live order tracking.

---

## 🌟 What's New & Upgraded

The original repository was incomplete (with files truncated mid-line at `index.html` line 75, `script.js` line 29, and `style.css` line 95). This upgraded edition completely transforms the project into a **production-ready, high-converting commercial garment care web application**:

1. **Crafted Commercial UI/UX (Zero "Generic AI" Look)**:
   - **Bespoke Palette**: Deep Slate Navy (`#0F172A`), Crisp Royal Sapphire (`#1D4ED8`), Sky Fresh Blue (`#0284C7`), and Emerald Eco-Green (`#059669`).
   - **Clean Typography**: Scaled with Google Fonts (`Plus Jakarta Sans`), tabular numerals for monetary clarity, and clear visual hierarchy.
   - **Micro-Interactions**: Ambient glassmorphism badges, animated cart counters, active category filters, and smooth transition states.

2. **Event-Driven JavaScript Programming**:
   - **Dynamic Service Rate Card**: Interactive garment catalog supporting real-time text search and category filtering across 6 service domains (Wash & Fold, Wash & Steam Press, Premium Dry Clean, Steam Press Only, Bedding & Linen, Shoe & Leather Spa).
   - **Quantity Controls & Steppers**: Smooth `[ - / + ]` state transitions that dynamically update cart counts and line totals.
   - **Offcanvas Bag Drawer**: Slide-out cart drawer with live items table, removal triggers, and checkout redirects.

3. **Live Computation Engines**:
   - **Bulk Laundry Weight Estimator**: Interactive weight range slider (3 kg to 25 kg) with live garment count estimation and per-kg pricing calculations.
   - **Cart & Invoice Calculator**: Computes items subtotal, delivery fee tiers (Free over ₹299 vs standard ₹49 vs express ₹99), care add-ons (fragrance booster, anti-bacterial sanitizer), and 5% GST tax breakdown.
   - **Promo Code Engine**: Supports and validates promo codes like `FIRSTWASH` (20% off) and `WALLAH50` (₹50 off on orders ₹300+).

4. **Robust Client-Side Form Validation**:
   - **Full Name**: Strict alphabetic validation (min 3 characters).
   - **Mobile Phone**: 10-digit Indian phone format validation (`^[6-9]\d{9}$`).
   - **Email**: Standard RFC-compliant email validation for invoice dispatch.
   - **Postal PIN Code**: 6-digit Indian PIN check (`^[1-9][0-9]{5}$`) with live doorstep serviceability confirmation.
   - **Pickup Date & Slot**: Enforces future/today date constraints (blocks past dates) and requires slot selection.
   - **Real-time feedback**: Dynamic Bootstrap `is-valid` and `is-invalid` classes with descriptive feedback.

5. **Live Order Tracking Simulator**:
   - Track active orders using Order IDs (e.g. `LW-8921`, `LW-1045` or newly booked orders).
   - Milestone progress tracking across 6 realistic stages (Order Confirmed → Picked Up → Washing & Care → Steam Press & QC → Out for Delivery → Delivered).
   - Interactive **"Simulate Next Step"** button to demonstrate live milestone progression.

6. **Order Confirmation & Modal Invoicing**:
   - Generates unique Order IDs (`LW-XXXX`), saves order history into `localStorage`, and displays an itemized modal with printable receipt support (`window.print()`).

---

## 📁 Project Structure

```
laundry-wallah/
├── index.html           # Semantic HTML5 web application structure
├── style.css            # Custom CSS design system & micro-interactions
├── script.js            # Modular event-driven JS, validation & computation
├── laundry-image.jpg    # High-resolution hero showcase photograph
├── assets/
│   ├── hero-banner.jpg  # Studio hero banner photograph
│   └── process-care.jpg # Garment care & steam press process photography
└── README.md            # Documentation & usage guide
```

---

## 🚀 How to Run Locally

You can run this project locally without any dependencies or build steps:

### Option 1: Direct File Opening
Double click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Python / Node / Live Server)
Using PowerShell / Command Prompt inside the `laundry-wallah` folder:

```bash
# Using Python
python -m http.server 8000

# Or using npx serve
npx serve .
```

Then visit [http://localhost:8000](http://localhost:8000).

---

## 💡 Promo Codes for Testing
- `FIRSTWASH` — 20% discount (up to ₹150) on all orders.
- `WALLAH50` — Flat ₹50 discount on orders ₹300 and above.
- `EXPRESS99` — Free Express 24h delivery upgrade on orders ₹500 and above.

## 📦 Demo Tracking IDs
- `LW-8921` — Dry cleaning & steam press order currently in washing & care.
- `LW-1045` — Bulk 8kg wash & fold order out for delivery.
