// script.js

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Product Data (inspired by images) ----------
  const products = [
    {
      title: 'Button-Front Denim Skirt',
      price: '$140.00',
      imgColor: '#8b9a8b',
      label: 'Denim'
    },
    {
      title: 'Kalas Henley Blouse',
      price: '$80.00',
      imgColor: '#d9c9b8',
      label: 'Blouse'
    },
    {
      title: 'Topeka Floral Blouse',
      price: '$110.00',
      imgColor: '#c7b7a2',
      label: 'Floral'
    },
    {
      title: 'Classy White T-Shirt',
      price: '$127.00',
      imgColor: '#e3dfd7',
      label: 'Essential'
    },
    {
      title: 'Black T-Shirt (Man)',
      price: '$34.00',
      imgColor: '#3e3e3e',
      label: 'Unisex',
      oldPrice: '$45.00'
    }
  ];

  const productGrid = document.getElementById('productGrid');
  if (productGrid) {
    productGrid.innerHTML = products.map(product => {
      const priceDisplay = product.oldPrice
        ? `<span style="text-decoration: line-through; color:#999; margin-right:6px;">${product.oldPrice}</span> ${product.price}`
        : product.price;

      return `
        <div class="product-card">
          <div class="product-img" style="background-color: ${product.imgColor}; background-image: linear-gradient(145deg, ${product.imgColor}dd, ${product.imgColor}88);">
            <span style="padding:8px; background:rgba(255,255,255,0.6); border-radius:12px; margin-bottom:8px;">${product.label}</span>
          </div>
          <div class="product-title">${product.title}</div>
          <div class="price">${priceDisplay}</div>
          <button class="small-btn">Buy now</button>
        </div>
      `;
    }).join('');
  }

  // ---------- Wardrobe / Inspiration cards ----------
  const wardrobeItems = [
    { name: "Elsie Hawkins", items: "653 items", followers: "987 followers", tag: "Freakishly Cool" },
    { name: "Daniel Bloke", items: "342 items", followers: "876 followers", tag: "Fresh Footwear" },
    { name: "Marc Nelson", items: "120 items", followers: "543 followers", tag: "Cute Party Clothes" }
  ];

  const wardrobeContainer = document.getElementById('wardrobeContainer');
  if (wardrobeContainer) {
    wardrobeContainer.innerHTML = wardrobeItems.map(w =>
      `<div class="wardrobe-card">
        <strong>${w.name}</strong>
        <small>${w.items} · ${w.followers}</small>
        <span style="font-size:0.8rem; color:#d46b4c;">${w.tag}</span>
        <button style="margin-top:8px; background:transparent; border:1px solid #ccc; border-radius:20px; padding:4px 12px; cursor:pointer;">FOLLOW</button>
      </div>`
    ).join('');
  }

  // ---------- Mobile menu toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // Optional: Add to cart / buy now interaction (simple alert)
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('small-btn')) {
      const productName = e.target.closest('.product-card')?.querySelector('.product-title')?.innerText || 'item';
      alert(`🛍️ "${productName}" added to your bag! (demo)`);
    }
  });
});
