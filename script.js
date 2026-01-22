function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category');
}

function displayProducts(category) {
  const homepage = document.getElementById('homepage');
  const homepageExtra = document.querySelector('.homepage-extra');
  const shopSection = document.getElementById('shop-section');
  const productContainer = document.getElementById('product-container');

  // Hide homepage sections
  homepage?.classList.add('hidden');
  homepageExtra?.classList.add('hidden');

  // Show shop
  shopSection.classList.remove('hidden');

  // Filter products
  const filteredProducts = products.filter(p => p.category === category);
  productContainer.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${product.image1}" class="main-img" alt="${product.name}">
        <img src="${product.image2}" class="hover-img" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    card.addEventListener('click', () => openModal(product));
    productContainer.appendChild(card);
  });
}

function openModal(product) {
  const modal = document.getElementById('product-modal');
  document.getElementById('modal-image').src = product.image1;
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-price').textContent = product.price;
  modal.classList.remove('hidden');
}

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('product-modal').classList.add('hidden');
});

// Auto-load category if in URL
const selectedCategory = getCategoryFromURL();
if (selectedCategory) {
  displayProducts(selectedCategory);
}





// Add to Cart Logic
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  const modal = document.getElementById('product-modal');
  const productName = document.getElementById('modal-name').textContent;
  const product = products.find(p => p.name === productName);

  addToCart(product);
  showToast(`${product.name} added to cart!`);
  modal.classList.add('hidden');
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem = {
      ...product,
      quantity: 1
    };
    cart.push(newItem);
    
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.opacity = 1;

  setTimeout(() => {
    toast.style.opacity = 0;
  }, 2000); // hides after 2 seconds
}