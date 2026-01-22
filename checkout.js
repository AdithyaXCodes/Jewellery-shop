function checkout() {
  // Get the cart data
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Create a new order
  const order = {
    id: "ORD" + Date.now(),
    date: new Date().toLocaleDateString(),
    status: "Order Placed",
    items: cart
  };

  // Get previous orders if any
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  // Save back to localStorage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear the cart
  localStorage.removeItem("cart");

  // Go to tracking page directly to verify
  window.location.href = "tracking.html";
}