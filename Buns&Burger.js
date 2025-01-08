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
        }
    ]
}`

const Burger = JSON.parse(jsonString);

function addtocart(burgerIndex) {
    const burger = Burger.Burgers[burgerIndex];
    if (burger) {
        cart.push({ name: burger.name, price: burger.price, ImgLink: burger.ImgLink });
    }
    else {
        console.error(`Burger ${burgerIndex} not found!`);
    }
    console.log(cart);
    updateCartDisplay();
}
function updateCartDisplay(){
    const custom_cart = document.getElementById('Custom_cart');
    if (!custom_cart) {
        console.error("Element with ID 'Custom_cart' not found");
        return;
    }
    const cartItem = document.createElement('img');
    cartItem.src = 'Zing Burger.jpg';
    custom_cart.appendChild(cartItem);
}




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