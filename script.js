let totalPrice = 0;

function addToCart(item, price) {
  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = item + " - Ціна: ₴" + price;
  cartItems.appendChild(li);
  
  totalPrice += price;
  updateTotalPrice();
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = totalPrice + " грн";
}
