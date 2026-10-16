// // Js Variables let,const and var

// //const
// const storeName = "Dev Store";
// console.log(storeName);
// // document.write(storeName);

// // let
// let price = 500;
// //update value
// price = 450;

// console.log(price);
// // document.write(price);

// //Data Types

// //Boolean
// //  let isDiscountAvailable = true;
// let age = 18;
// let isperson = age > 18;
// console.log(isperson)

// //Array
// const techGagates = ["Mouse", "keyboard", "Laptop Stand"];

// console.log(techGagates);

// //Object
// const productDetails = {
//     name: 'Laptop Stand',
//     price:" 1200",
//     inStock : true,
    
// }

// console.log(productDetails);

// //if/else
// let cartTotal = 900;
//  if(cartTotal >= 1000){
//     console.log('"Congratulations! You got free shipping');
//   } else{
//         console.log('Shipping charges apply: $100');
//     }
 
// //if/else if/else
// let orderAmount = 50;

// if(orderAmount >= 30){
//     console.log("20% disount");
// }else if(orderAmount >= 15){
//     console.log('10% discount');
// }else{
//     console.log('You are not eligible for any discount');
// }


// //Functions

// function greetUser (UserName){
//     if(UserName === 'Asim'){
//         console.log('Welcome to Dev Store', UserName);
//     }else{
//         console.log('Entry banned ')
//     }
// }

// greetUser('Asim');
// greetUser('zafar');

// const displayCount = document.getElementById('count');
// const plusBtn = document.getElementById('plusBtn');
// const minusBtn = document.getElementById('minusBtn');

// let currentValue = 0;

// plusBtn.addEventListener( 'click', function() { 
//     currentValue = currentValue + 1;

//     displayCount.innerText = currentValue;
// });

// minusBtn.addEventListener('click', function(){
//     currentValue = currentValue - 1;

//     displayCount.innerText = currentValue;
// } )

const displayCount = document.getElementById ('count');
const plusBtn = document.getElementById ('plusBtn');
const minusBtn = document.getElementById ('minusBtn');
let currentValue = 0;

plusBtn.addEventListener('click', function(){
    count.classList.add('bg-green-500', 'text-white');

    currentValue = currentValue + 1;
    displayCount.innerText = currentValue;
} );
minusBtn.addEventListener('click', function(){
    count.classList.add('bg-red-500', 'text-white');

    currentValue = currentValue -1;
    
    displayCount.innerText = currentValue;
} );

//Theme Toggler
const mainContainer = document.getElementById('mainContainer'); 
const firstText = document.getElementById('firstText');
const headingText = document.getElementById('headingText'); 
const toggleBtn = document.getElementById('toggleBtn'); 

toggleBtn.addEventListener('click', function(){
    if(mainContainer.classList.contains('bg-gray-900')){

        mainContainer.classList.remove('bg-gray-900');
        mainContainer.classList.add('bg-white', 'border-5', 'border-amber-500');

        firstText.classList.remove('text-green-500');
        firstText.classList.add('text-purple-500');

        headingText.innerText = 'Current Theme Light';

        headingText.classList.add ('text-gray-900');
        headingText.classList.remove('text-white')
    }else{
        mainContainer.classList.remove('bg-white', 'border-5', 'border-amber-500');
        mainContainer.classList.add('bg-gray-900');

        firstText.classList.remove('text-purple-500');
        firstText.classList.add('text-green-500');

        headingText.innerText = ' Current Theme Dark';

        headingText.classList.remove('text-gray-900');
        headingText.classList.add('text-white');

    }
});

const decreaseQty = document.getElementById('decreaseQty');
const qtyDisplay = document.getElementById('qtyDisplay');
const increaseQty = document.getElementById('increaseQty');
const cartBtn = document.getElementById('cartBtn');
const itemPrice = document.getElementById('itemPrice');
const totalPrice = document.getElementById('totalPrice');
const basePrice = 1500 ;


let quantity = 1;
let calculateTotal = basePrice; 

cartBtn.addEventListener('click', function(){
    cartBtn.classList.add('text-green-500', 'bg-green-500' );
    cartBtn.innerText ='Successfully Added to Cart';

} );

increaseQty.addEventListener('click', function(){
    quantity = quantity + 1;
    qtyDisplay.innerText = quantity;

    calculateTotal = quantity * basePrice ;
    totalPrice.innerText = calculateTotal;
});

decreaseQty.addEventListener('click', function(){
    quantity = quantity - 1;
    qtyDisplay.innerText = quantity;
    
    calculateTotal = quantity * basePrice ;
    totalPrice.innerText = calculateTotal;
});
