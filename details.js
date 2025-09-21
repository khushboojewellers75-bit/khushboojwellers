import { getAllProducts } from "./product.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = getAllProducts().find(p => p.id === productId);

if (product) {
  // Build carousel
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = `
    <div class="slides">
      ${product.images.map(img => `<div class="slide"><img src="${img}" alt="${product.name}"></div>`).join("")}
    </div>
    <button id="prev" class="carousel-btn">❮</button>
    <button id="next" class="carousel-btn">❯</button>
  `;

  let current = 0;
  const slides = document.querySelectorAll(".slide");
  slides[current].classList.add("active");

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  document.getElementById("next").onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  document.getElementById("prev").onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  // Product details
  document.getElementById("details").innerHTML = `
    <h2>${product.name}</h2>
    <p class="description">${product.description}</p>
    <p class="price">${product.weight}</p>
  `;
} else {
  document.getElementById("details").innerHTML = `
    <h2>Product not found</h2>
    <p>The requested product could not be found.</p>
  `;
}