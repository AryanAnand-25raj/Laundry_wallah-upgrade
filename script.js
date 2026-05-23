let cart = {};

function toggleService(btn, name, price) {
    if (cart[name]) {
        delete cart[name];
        btn.textContent = 'Add Item ⊕';
        btn.className = 'btn-add';
    } else {
        cart[name] = price;
        btn.textContent = 'Remove Item ⊖';
        btn.className = 'btn-remove';
    }
    renderCart();
}

function renderCart() {
    const tbody = document.getElementById('cart-body');
    const keys = Object.keys(cart);
    if (keys.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="cart-empty">No items added yet</td></tr>';
        document.getElementById('total').textContent = '₹0.00';
        return;
    }
    let total = 0;
    tbody.innerHTML = keys.map((name, i) => {
        total += cart[name];
        return `<tr><td>${i+1}</td><td>${name}</td><td>₹${cart[name]}.00</td></tr>`;  // ✅ backticks
    }).join('');
    document.getElementById('total').textContent = `₹${total}.00`;  // ✅ backticks
}

function bookNow() {
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !email || !phone) {
        alert('Please fill in all fields before booking.');
        return;
    }
    if (Object.keys(cart).length === 0) {
        alert('Please add at least one service to your cart.');
        return;
    }
    document.getElementById('success-msg').style.display = 'block';
}