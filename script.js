let cart = [];

function addToCart(productName) {
    const quantity = prompt("Combien d'articles voulez-vous?", "1");
    if (quantity > 0) {
        cart.push({ name: productName, quantity: quantity });
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name}: ${item.quantity}</li>`;
    });
}

function checkout() {
    const message = encodeURIComponent("Bonjour! Je souhaite commander les articles suivants: \n" + cart.map(item => `${item.name}: ${item.quantity}`).join('\n'));
    window.open(`https://wa.me/+2250595762779?text=${message}`, '_blank');
}
