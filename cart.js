const jsonString = `{
    "Burgers": [
        {
            "id": 1,
            "name": "Cheeseburger",
            "price": "$5.99",
            "ImgLink": "Zing Burger.jpg",
            "quant": 15
        },
        {
            "id": 2,
            "name": "Veggie Burger",
            "price": "$4.99",
            "ImgLink": "Smash Zing Burger.webp",
            "quant": 15
        },
        {
            "id": 3,
            "name": "Bacon Cheeseburger",
            "price": "$6.99",
            "ImgLink": "Zing Burger.jpg",
            "quant": 15
        },{
            "id": 4,
            "name": "Mega Zinger Cheeseburger",
            "price": "$7.99",
            "ImgLink": "Smash Zing Burger.webp",
            "quant": 15
        }
    ]
}`

const Burger = JSON.parse(jsonString);

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

function saveCartToSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function addtocart(burgerIndex) {
    const burger = Burger.Burgers[burgerIndex];
    if (burger) {
        cart.push({ burgerid: burgerIndex, name: burger.name, price: burger.price, ImgLink: burger.ImgLink});
        saveCartToSessionStorage();
    }
    else {
        console.log(`Burger ${burgerIndex} not found!`);
    }
    console.log(cart);
    updateCartDisplay();
}

function updateCartDisplay(){
    const cartSect = document.getElementById('cart-sect');
    if (!cartSect) {
        console.log("Element with ID 'cartSect' not found");
        return;
    }
    cartSect.innerHTML = ''; // Clear previous content
    const heading = document.createElement('h1');
    heading.textContent = 'Your Cart';
    cartSect.appendChild(heading);
    cart.forEach(item => {
        const custom_cart = document.createElement('div');
        custom_cart.id = 'Custom_cart';

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartItemImg = document.createElement('img');
        cartItemImg.className = 'cart-item-img';
        cartItemImg.src = item.ImgLink;
        cartItem.appendChild(cartItemImg);

        const cartItemDet = document.createElement('div');
        
        cartItemDet.className = 'cart-item-details';
        const cartItemname = document.createElement('p');
        cartItemname.textContent = `Name: ${item.name}`;

        const cartItemPrice = document.createElement('p');
        cartItemPrice.textContent = `Price: ${item.price}`;

        const cartButtons = document.createElement('div');
        cartButtons.id = 'cart-buttons';

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Order Now';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Item';

        cartButtons.appendChild(buyButton);
        cartButtons.appendChild(removeButton);
        
        cartItemDet.appendChild(cartItemname);
        cartItemDet.appendChild(cartItemPrice);

        custom_cart.appendChild(cartItem);
        cartSect.appendChild(custom_cart);
        custom_cart.appendChild(cartItemDet);
        custom_cart.appendChild(cartButtons);
    })
}
window.onload = function () {
updateCartDisplay();
}