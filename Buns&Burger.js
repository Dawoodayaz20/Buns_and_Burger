// Product Details:
// item = [
//     {
//         name: 'Zinger Burger',
//         price: 800,
//         image: 'Zing Burger.jpg'
//     },
//     {
//         name: 'Mega Zinger Burger',
//         price: 1000,
//         image: 'Mega Zing Burger.jpg' 
//     },
//     {
//         name: 'Smash Zinger Burger',
//         price: 1000,
//         image: 'Smash Zing Burger.webp'
//     },
//     {
//         name: 'Libertine Burger',
//         price: 1200,
//         image: 'Libertine Burger.jpg'
//     }
// ]



// slide show pictures function
let slideindex = 0 
showSlides()
function showSlides() {
    let i ;
    let slides = document.getElementsByClassName('slideshow_pics');
    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideindex++;
    if(slideindex > slides.length){
        slideindex = 1;
    }
    slides[slideindex - 1].style.display = 'block';
    setTimeout(showSlides, 3000) //This will call the function after every 3sec
}
    
// New code:
const cart = [];
const jsonString = `{
    "Burgers": [
        {
            "name": "Cheeseburger",
            "price": "$5.99",
            "ImgLink": "Zing Burger.jpg",
            "quant": 15
        },
        {
            "name": "Veggie Burger",
            "price": "$4.99",
            "ImgLink": "Smash Zing Burger.webp",
            "quant": 15
        },
        {
            "name": "Bacon Cheeseburger",
            "price": "$6.99",
            "ImgLink": "Zing Burger.jpg",
            "quant": 15
        },{
            "name": "Mega Zinger Cheeseburger",
            "price": "$7.99",
            "ImgLink": "Smash Zing Burger.webp",
            "quant": 15
        }
    ]
}`

const Burger = JSON.parse(jsonString);


// function updateCartDisplay(){
//     const custom_cart = document.getElementById('Custom_cart');
//     const cartItem = document.createElement('img');
//     cartItem.src = 'Zing Burger.jpg';
//     custom_cart.appendChild(cartItem);
// }
// updateCartDisplay();
// function updateCartDispl(){
//     const cartItemsList = document.getElementById('Custom_cart');
//     if (!cartItemsList) {
//         console.error('Cart items list not found!');
//         return;
//     }

//     cartItemsList.innerHTML = '';
    
//     cart.forEach((item) => {
//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.className = 'cart-item'

//         const cartItemimg = document.createElement('img');
//         const burger = Object.values(Burgers).find(b => b.name === item.name);
//         if (burger) {
//             cartItemimg.src = burger.ImgLink;
//             cartItem.className = 'cart-item-img';
//             cartItemDiv.appendChild(cartItemimg);
//         }
//         else {
//             console.error(`Burger ${item.name} not found!`);
//         }

//         const cartItemDet = document.createElement('div');
//         cartItemDet.className = 'cart-item-det';

//         const cartItemName = document.createElement('p');
//         cartItemName.innerHTML = item.name;

//         const cartItemPrice = document.createElement('p');
//         cartItemPrice.innerHTML = item.price;

//         cartItemDet.appendChild(cartItemName);
//         cartItemDet.appendChild(cartItemPrice);
        
//         cartItemDiv.appendChild(cartItemDet);
//         cartItemsList.appendChild(cartItemDiv);

//     });
// }

// addToCartButton.onclick = addtocart(`${burgerData.name}, ${burgerData.price}`);

function showBurgersinfo() {
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
        // addToCartButton.href = 'cart.html';
        

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
        console.log(burgerData);
    }
}
showBurgersinfo();
// console.log(Burger.Burgers[1].name);