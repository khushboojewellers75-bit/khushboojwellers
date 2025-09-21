import { bangleData } from './product.js';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Active link logic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to the clicked link
            link.classList.add('active');
            
            // Close mobile menu after clicking a link
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
        });
    });

    // Set initial active link based on current page URL
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.nav-menu a[href="index.html"]').classList.add('active');
    } else {
        const currentLink = document.querySelector(`.nav-menu a[href="${currentPath}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});

function getAllBangles() {
  return Object.values(bangleData).flat();
}

function createProductCard(product) {
  return `
    <div class="product-card" data-category="${getCategoryFromId(product.id)}">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <div class="product-overlay">
          <a href="details.html?id=${product.id}" class="btn-primary">View Details</a>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">${product.weight}</div>
      </div>
    </div>
  `;
}

function getCategoryFromId(id) {
  if (id.startsWith('gold')) return 'gold';
  if (id.startsWith('dia')) return 'diamond';
  if (id.startsWith('bridal')) return 'bridal';
  return 'all';
}

function displayBangles(category = 'all') {
  const grid = document.getElementById('banglesGrid');
  let items = category === 'all' ? getAllBangles() : bangleData[category] || [];
  grid.innerHTML = items.map(item => createProductCard(item)).join('');
}

function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.getAttribute('data-category');
      displayBangles(category);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayBangles();
  initializeFilters();
});