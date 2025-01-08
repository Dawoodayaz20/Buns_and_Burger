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
console.log(Burger.Burgers[1].name);

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
updateCartDisplay();