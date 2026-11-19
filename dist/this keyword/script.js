//this in object method
let obj = {
    name: 'Ali',
    sayhey: function () {
        console.log(this);
    }
}
obj.sayhey();  // {name : 'Ali', sayhey : f}
// console.log(obj.name) //Ali

//this in event handler
let h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    console.log(this)
});

//this keyword practice
let laptop1 = {
    brand: 'lenovo',
    model: 'thinkpad',
    price: 100,
    show: function () {
        return `${this.brand} is my Favoriate Laptop brand and its price is $${this.price}`;
    }
}

let laptop2 = {
    brand: 'Dell',
    model: 'XPS',
    price: 150,
    show: function () {
        return `${this.brand} is my Favoriate Laptop brand and its price is $${this.price}`;
    }
}
console.log(laptop1.show());
console.log(laptop2.show());

//Reusing Methods Across Multiple Objects
const cartItem1 = {
    name: "Wireless Mouse",
    price: 25,
    quantity: 2,
    getTotal() {
        return this.price * this.quantity; // 'this' refers to cartItem1
    }
};

const cartItem2 = {
    name: "Mechanical Keyboard",
    price: 80,
    quantity: 1,
    getTotal: cartItem1.getTotal // Reusing the exact same function
};

console.log(cartItem1.getTotal()); // 50
console.log(cartItem2.getTotal()); // 80


//this, bind(), call(), apply() Practice 

// Task 1: this
let users = {
    name: 'Ali',
    age: 21.,
    introduce: function () {
        console.log(`my name is ${this.name} and I am ${this.age} year old`);
    }
}
users.introduce();

// Task 2: call()
let person = {
    name: "Ali",
    greet: function (city, profession) {
        console.log(`My name is ${this.name}, I live in ${city} and I am a ${profession}`);
    }
};

let anotherPerson = {
    name: "osman"
};
// let a = person.greet;

person.greet.call(anotherPerson, 'Islamabad', 'Developer');

//Task 3: apply()
let employee = {
    name: "Ahmed",
    salary: 50000,
};

function calculateBonus(bonus, allowance) {
    console.log(`${this.name} total salary is ${this.salary + bonus + allowance}`);
}

calculateBonus.apply(employee, [5000, 3000]);