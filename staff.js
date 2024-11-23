let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
  { name: 'Lavazza Black Coffee', category: 'coffee', price: 15, image: 'lavazza_black_coffee.jpg', description: 'A strong and bold espresso base.', outOfStock: false },
    { name: 'Lavazza Milk Coffee', category: 'coffee', price: 18, image: 'lavazza_milk_coffee.jpg', description: 'Espresso with smooth and creamy milk.', outOfStock: false },
    { name: 'Nescafe Black Coffee', category: 'coffee', price: 5, image: 'nescafe_black_coffee.jpg', description: 'A classic coffee option.', outOfStock: false },
    { name: 'Nescafe Milk Coffee', category: 'coffee', price: 10, image: 'nescafe_milk_coffee.jpg', description: 'A creamy and comforting coffee drink.', outOfStock: false },
    { name: 'Nescafe Original', category: 'coffee', price: 15, image: 'nescafe_original.jpg', description: 'A classic instant coffee.', outOfStock: false },
    { name: 'Nescafe Mocha', category: 'coffee', price: 15, image: 'nescafe_mocha.jpg', description: 'A rich and chocolatey coffee drink.', outOfStock: false },
    { name: 'Nescafe Latte', category: 'coffee', price: 15, image: 'nescafe_latte.jpg', description: 'A creamy and milky coffee drink.', outOfStock: false },
    { name: 'Bombay Tea', category: 'tea', price: 10, image: 'bombay_tea.jpg', description: 'A classic Indian black tea.', outOfStock: false },
    { name: 'Cardamom Tea', category: 'tea', price: 10, image: 'cardamom_tea.jpg', description: 'A fragrant and spicy tea.', outOfStock: false },
    { name: 'Masala Tea', category: 'tea', price: 10, image: 'masala_tea.jpg', description: 'A flavorful and aromatic tea with spices.', outOfStock: false },
    { name: 'Black Tea', category: 'tea', price: 3, image: 'black_tea.jpg', description: 'A strong and bold black tea.', outOfStock: false },
    { name: 'Milk Tea', category: 'tea', price: 8, image: 'milk_tea.jpg', description: 'A creamy and comforting tea.', outOfStock: false },
    { name: 'Coca Cola', category: 'soft-drinks', price: 15, image: 'coca_cola.jpg', description: 'A classic carbonated beverage.', outOfStock: false },
    { name: 'Sprite', category: 'soft-drinks', price: 15, image: 'sprite.jpg', description: 'A refreshing lemon-lime soda.', outOfStock: false },
    { name: 'Fanta Orange', category: 'soft-drinks', price: 15, image: 'fanta_orange.jpg', description: 'A classic orange soda.', outOfStock: false },
    { name: 'Fanta Strawberry', category: 'soft-drinks', price: 15, image: 'fanta_strawberry.jpg', description: 'A classic strawberry soda.', outOfStock: false },
    { name: '500ml Water', category: 'water', price: 5, image: '500ml_water.jpg', description: '500ml bottled water.', outOfStock: false },
    { name: '1500ml Water', category: 'water', price: 10, image: '1500ml_water.jpg', description: '1.5L bottled water.', outOfStock: false },
    { name: 'Redbull', category: 'energy-drinks', price: 45, image: 'redbull.jpg', description: 'Redbull energy drink.', outOfStock: false },
    { name: 'XL Mini', category: 'energy-drinks', price: 20, image: 'xl_mini.jpg', description: 'XL Mini energy drink.', outOfStock: false },
    { name: 'XL 250ml', category: 'energy-drinks', price: 30, image: 'xl_250ml.jpg', description: 'XL 250ml energy drink.', outOfStock: false },
    { name: 'Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_chocolate.jpg', description: 'Rich and decadent chocolate ice cream.', outOfStock: false },
    { name: 'Strawberry Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_strawberry.jpg', description: 'Sweet and refreshing strawberry ice cream.', outOfStock: false },
    { name: 'Vanilla Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_vanilla.jpg', description: 'Classic and creamy vanilla ice cream.', outOfStock: false },
    { name: 'Pistachio Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_pistachio.jpg', description: 'A nutty and flavorful ice cream.', outOfStock: false },
    { name: 'Bavarian Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_bavarian_chocolate.jpg', description: 'A rich and decadent chocolate ice cream with a Bavarian twist.', outOfStock: false },
    { name: 'Three Cheers Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_three_cheers_chocolate.jpg', description: 'A triple chocolate indulgence.', outOfStock: false },
    { name: 'Cotton Candy Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_cotton_candy.jpg', description: 'A sweet and fluffy ice cream.', outOfStock: false },
    { name: 'Mango Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_mango.jpg', description: 'A refreshing and tropical ice cream.', outOfStock: false },
    { name: 'Fruit & Nuts Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_fruit_nuts.jpg', description: 'A delicious combination of fruits and nuts.', outOfStock: false },
    { name: 'Sugar Cone', category: 'cones', price: 5, image: 'sugar_cone.jpg', description: 'Sugar cone for ice cream.', outOfStock: false },
    { name: 'Normal Cone', category: 'cones', price: 0, image: 'normal_cone.jpg', description: 'Normal cone for ice cream.', outOfStock: false },
    { name: 'Kulhi Boakiba', category: 'short-eats', price: 5, image: 'kulhi_boakiba.jpg', description: 'A delicious Maldivian fish cake.', outOfStock: false },
    { name: 'Kavaabu', category: 'short-eats', price: 5, image: 'kavaabu.jpg', description: 'Deep-fried fritters made with fish and spices.', outOfStock: false },
    { name: 'Mas Roshi', category: 'short-eats', price: 8, image: 'mas_roshi.jpg', description: 'A traditional Maldivian fish flatbread.', outOfStock: false },
    { name: 'Bajiya', category: 'short-eats', price: 5, image: 'bajiya.jpg', description: 'A savory pastry filled with fish, coconut, and spices.', outOfStock: false },
    { name: 'Rolls', category: 'short-eats', price: 6, image: 'rolls.jpg', description: 'Fried rolls filled with vegetables or meat.', outOfStock: false },
    { name: 'Sausage', category: 'short-eats', price: 7, image: 'sausage.jpg', description: 'Grilled or fried sausages.', outOfStock: false },
    { name: 'Kanamadu Cafe', category: 'short-eats', price: 12, image: 'kanamadu_cafe.jpg', description: 'A delicious Maldivian dessert made with rice and banana.', outOfStock: false },
    { name: 'Butter Cake', category: 'short-eats', price: 10, image: 'butter_cake.jpg', description: 'A rich and moist butter cake.', outOfStock: false },
    { name: 'Muffin', category: 'short-eats', price: 10, image: 'muffin.jpg', description: 'A fluffy and sweet muffin.', outOfStock: false },
    { name: 'Pudding Caramel', category: 'short-eats', price: 12, image: 'pudding_caramel.jpg', description: 'A creamy caramel pudding.', outOfStock: false },
    { name: 'Boiled Egg', category: 'short-eats', price: 5, image: 'boiled_egg.jpg', description: 'A simple and nutritious boiled egg.', outOfStock: false },
{ name: 'Coke Float', category: 'soft-drinks', price: 25, image: 'coke_float.jpg', description: 'A refreshing combination of Coca-Cola and vanilla ice cream.', outOfStock: false }
]

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const staffDashboard = document.getElementById('staff-dashboard');

    const staffCredentials = {
        username: 'staff',
        password: 'password123'
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === staffCredentials.username && password === staffCredentials.password) {
            loginForm.style.display = 'none';
            staffDashboard.style.display = 'block';
            loadMenuItems();
            loadChangeLog();
        } else {
            alert('Invalid username or password');
        }
    });

    const addItemButton = document.getElementById('add-item-button');
    addItemButton.addEventListener('click', () => {
        const name = document.getElementById('item-name').value;
        const category = document.getElementById('item-category').value;
        const price = document.getElementById('item-price').value;
        const description = document.getElementById('item-description').value;
        const imageInput = document.getElementById('item-image');

        // Check if the item already exists
        const itemExists = menuItems.some(item => item.name.toLowerCase() === name.toLowerCase());

        if (itemExists) {
            alert('Item already exists in the menu.');
        } else if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = e.target.result;
                menuItems.push({ name, category, price, image, description, outOfStock: false });
                updateCustomerMenu();
                logChange(`Added item: ${name} (by ${staffCredentials.username})`);
                alert('Item added successfully!');
                loadMenuItems();
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            alert('Please upload an image for the item.');
        }
    });

    loadChangeLog();
});

function updateCustomerMenu() {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    localStorage.setItem('menuUpdateTimestamp', new Date().toISOString());
}

function logChange(message) {
    let changeLog = JSON.parse(localStorage.getItem('changeLog')) || [];
    changeLog.push({ timestamp: new Date().toISOString(), message });
    localStorage.setItem('changeLog', JSON.stringify(changeLog));
    displayChangeLog();
}

function loadChangeLog() {
    const changeLog = JSON.parse(localStorage.getItem('changeLog')) || [];
    changeLog.forEach(entry => {
        displayChange(entry);
    });
}

function displayChangeLog() {
    const changeLog = JSON.parse(localStorage.getItem('changeLog')) || [];
    const changeLogContainer = document.getElementById('change-log');
    changeLogContainer.innerHTML = '';
    changeLog.forEach(entry => {
        const logEntry = document.createElement('div');
        logEntry.textContent = `${entry.timestamp}: ${entry.message}`;
        changeLogContainer.appendChild(logEntry);
    });
}

function loadMenuItems() {
    const menuContainer = document.getElementById('staff-menu-items');
    menuContainer.innerHTML = '';
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="${item.name}">
                ${item.outOfStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: MVR ${item.price}</p>
                <button onclick="markOutOfStock(${index})">${item.outOfStock ? 'In Stock' : 'Out of Stock'}</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

function markOutOfStock(index) {
    menuItems[index].outOfStock = !menuItems[index].outOfStock;
    updateCustomerMenu();
    logChange(`Marked item "${menuItems[index].name}" as ${menuItems[index].outOfStock ? 'Out of Stock' : 'In Stock'} (by staff)`);
    loadMenuItems();
}

function deleteItem(index) {
    const itemName = menuItems[index].name;
    menuItems.splice(index, 1);
    updateCustomerMenu();
    logChange(`Deleted item: ${itemName} (by staff)`);
    loadMenuItems();
}
