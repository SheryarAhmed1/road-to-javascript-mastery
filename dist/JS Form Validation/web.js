//sidebar accordion
let menubtn = document.querySelector('#menuBtn');
let leftSidebar = document.querySelector('#leftSidebar');

function sidebar() {
    leftSidebar.classList.toggle('hidden');
}
menubtn.addEventListener('click', sidebar)

//cart logic
let cart = [];
let cartItems = document.querySelector('#cartItems');
let totalPrice = document.querySelector('#totalPrice');
let clearCart = document.querySelector('#clearCart');
let cartCount = document.querySelector('#cartCount');

//search button
let input = document.querySelector('input');

//filter buttons
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

//product Container div
let productContainer = document.querySelector('#productContainer');

//products details
const products = [
    { id: 1, name: "iPhone 15", category: "mobile", price: 250000 },
    { id: 2, name: "Samsung S24", category: "mobile", price: 220000 },
    { id: 3, name: "MacBook Air", category: "laptop", price: 300000 },
    { id: 4, name: "Dell XPS 13", category: "laptop", price: 180000 },
    { id: 5, name: "AirPods Pro", category: "accessories", price: 65000 },
    { id: 5, name: "Wreless Mouse", category: "accessories", price: 7000 },
    { id: 5, name: "Wireless Keyboard", category: "accessories", price: 12000 },
];
//showing all product cards using js
function productList(items) {
    if (items.length === 0) {
        productContainer.innerHTML = "<p class='text-gray-500 p-5'>No products found!</p>";
        return;
    }
    productContainer.innerHTML = '';
    items.map(function (list) {
        let productContainer = document.querySelector('#productContainer');
        let card1 = document.createElement('div');
        let mobileName = document.createElement('h2');
        let category = document.createElement('h3');
        let price = document.createElement('span');
        let addBtn = document.createElement('button');

        addBtn.innerText = "Add to Cart";
        productContainer.className = 'bg-gray-100 grid grid-cols-4 gap-4 px-6 pb-8';
        mobileName.className = 'text-lg font-bold text-gray-900';
        category.className = 'text-xs uppercase tracking-wider text-blue-600 font-semibold mt-1';
        price.className = 'block text-xl font-extrabold text-gray-800 mt-4';
        addBtn.className = "mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg transition cursor-pointer";

        addBtn.addEventListener('click', function () {
            cart.push(list);
            updateCart();
        });

        card1.className = 'p-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition';
        mobileName.innerText = list.name;
        category.innerText = list.category;
        price.innerText = list.price;

        card1.appendChild(mobileName);
        card1.appendChild(category);
        card1.appendChild(price);
        card1.appendChild(addBtn)
        productContainer.appendChild(card1);
    });
}
productList(products);

//live search
function search() {
    let searchedItems = products.filter(function (list) {
        let searchInp = input.value.toLocaleLowerCase();
        return list.name.toLocaleLowerCase().includes(searchInp)
    });
    productList(searchedItems);
};
input.addEventListener('input', search);


//list of all items
function all() {
    productList(products);
}
btn1.addEventListener('click', all)

//mobile category
function mobile() {
    let mobileItems = products.filter(function (list) {
        return list.category === 'mobile';
    })
    productList(mobileItems);
}
btn2.addEventListener('click', mobile);

//laptop category
function laptop() {
    let laptopItems = products.filter(function (list) {
        return list.category === 'laptop'
    });
    productList(laptopItems);
}
btn3.addEventListener('click', laptop);

//Accessories category
function accessories() {
    let accessoriesItems = products.filter(function (list) {
        return list.category === 'accessories';
    });
    productList(accessoriesItems);
}
btn4.addEventListener('click', accessories);


// Hero Banner Auto Slider
const heroImage = document.querySelector('#heroImage');
const bannerImages = [
    "../assets/declan-sun-5MpuAMdpkkE-unsplash.jpg",
    "../assets/declan-sun-OILpZDEVHGU-unsplash.jpg",
    "../assets/airpods.jpg",
];

let currentIndex = 0;
heroImage.src = bannerImages[currentIndex];

setInterval(function () {
    currentIndex++;
    if (currentIndex >= bannerImages.length) {
        currentIndex = 0;
    }
    heroImage.src = bannerImages[currentIndex];
}, 4000); // 4000ms = 4 second

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItems.textContent = 'Your cart is empty.'
        totalPrice.textContent = 'Rs: 0';
        cartCount.textContent = '0';
    } else {
        cartItems.className = 'space-y-3 text-sm';
        cart.forEach(function (item) {
            let row = document.createElement('div');
            let item1 = document.createElement('span');
            let item2 = document.createElement('span');
            item1.textContent = item.name;
            item2.textContent = 'Rs. ' + item.price

            row.className = 'flex justify-between items-center bg-gray-200 p-3 rounded-xl text-gray-800 ';
            item2.className = 'text-blue-600 font-bold';

            row.appendChild(item1);
            row.appendChild(item2);
            cartItems.appendChild(row);

            total = total + item.price;

        });
        totalPrice.textContent = 'Rs: ' + total;
        cartCount.textContent = cart.length;
    }
}
updateCart();

function clear() {
    cart = []
    updateCart();
}
clearCart.addEventListener('click', clear);