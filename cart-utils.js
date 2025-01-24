let cart = getCart();
export const Burger = JSON.parse(`{
    "Burgers": [
        {
            "name": "Zinger Cheeseburger",
            "price": "$5.99",
            "ImgLink": "Zing Burger.jpg",
            "quant": 15
        },
        {
            "name": "Mega Zinger Burger",
            "price": "$4.99",
            "ImgLink": "Mega Zing Burger.jpg",
            "quant": 15
        },
        {
            "name": "Bacon Zinger Burger",
            "price": "$6.99",
            "ImgLink": "Smash Zing Burger.webp",
            "quant": 15
        },{
            "name": "Libertine Burger",
            "price": "$7.99",
            "ImgLink": "Libertine Burger.jpg",
            "quant": 15
        },{
            "name": "3 Zingers Deal",
            "price": "$19.99",
            "ImgLink": "3Zingerdeal.jpg",
            "quant": 15
        },{
            "name": "4 Zingers Deal",
            "price": "$24.99",
            "ImgLink": "4ZingersDeal.jpg",
            "quant": 15
        }
    ]
}`);


export function getCart() {
    return JSON.parse(sessionStorage.getItem('cart')) || [];
}

export function saveCart(cart) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

export function saveCartToSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

export function addtocart(burgerIndex) {
    const burger = Burger.Burgers[burgerIndex];
    if (burger) {
        cart.push({ name: burger.name, price: burger.price, ImgLink: burger.ImgLink});
        saveCartToSessionStorage();
    }
    else {
        console.log(`Burger ${burgerIndex} not found!`);
    }
    console.log(cart);
}

export function removeItemFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCartToSessionStorage();
    }
}

export function BuyNow(index) {
    if (index >= 0){
        alert(`Your ${cart[index].name} Order has been placed!`);
    }
    else{
        console.log('Item not found!');
    }
}

export function updateCartDisplay(){
    const cartSect = document.getElementById('cart-sect');
    if (!cartSect) {
        console.log("Element with ID 'cartSect' not found");
        return;
    }
    cartSect.innerHTML = ''; // Clear previous content
    const heading = document.createElement('h1');
    heading.textContent = 'Your Cart:';
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

        const quantButton = document.createElement('p');
        quantButton.className = 'quant-button';
        quantButton.textContent = 'Quantity: ';
        
        const quantInput = document.createElement('input');
        quantInput.type = 'number'; // Set the type attribute
        quantInput.id = 'quantity1'; // Set the id attribute
        quantInput.name = 'quantity'; // Set the name attribute
        quantInput.min = '1'; // Set the minimum value
        quantInput.max = '10'; // Set the maximum value
        quantInput.value = '0'; // Set the default value

        quantButton.appendChild(quantInput);

        cartButtons.appendChild(buyButton);
        cartButtons.appendChild(removeButton);
        
        cartItemDet.appendChild(cartItemname);
        cartItemDet.appendChild(cartItemPrice);
        cartItemDet.appendChild(quantButton);

        custom_cart.appendChild(cartItem);
        cartSect.appendChild(custom_cart);
        custom_cart.appendChild(cartItemDet);
        custom_cart.appendChild(cartButtons);

        removeButton.addEventListener('click', function() {
            removeItemFromCart(cart.indexOf(item));
            updateCartDisplay();
        });
        buyButton.addEventListener('click', function() {
            BuyNow(cart.indexOf(item));
        });
    })
}

export function showBurgersinfo() {
    const container = document.getElementById('menu');
    if (!container) return; // Assuming there's a container with this ID
    
    container.innerHTML = ''; // Clear previous content

    for (const burgerIndex in Burger.Burgers) 
    {
        const burgerData = Burger.Burgers[burgerIndex];

        const burgerCard = document.createElement('div');
        burgerCard.className = 'item';

        const burgerImage = document.createElement('img');
        burgerImage.src = burgerData.ImgLink;
        burgerImage.className = 'item-image';

        const burgerDet = document.createElement('div'); 
        burgerDet.className = 'item-details';
        const burgerTitle = document.createElement('h2');
        burgerTitle.className = 'item-title';
        burgerTitle.textContent = burgerData.name;

        const burgerPrice = document.createElement('h2');
        burgerPrice.className = 'item-price';
        burgerPrice.textContent = `Price: ${burgerData.price}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'item-button';
        addToCartButton.textContent = 'Add to Cart';
        

        const buyButton = document.createElement('button');
        buyButton.className = 'item-button';
        buyButton.textContent = 'Buy Now';

        burgerCard.appendChild(burgerImage);

        burgerDet.appendChild(burgerTitle);
        burgerDet.appendChild(burgerPrice);
        burgerDet.appendChild(addToCartButton);
        burgerDet.appendChild(buyButton);

        burgerCard.appendChild(burgerDet);
        container.appendChild(burgerCard);

        addToCartButton.addEventListener('click', function() {
            addtocart(burgerIndex) // Pass the burgerKey (Burger1, Burger2, etc.)
        });
        // console.log(burgerData);
    }
}