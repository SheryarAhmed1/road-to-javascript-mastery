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

//Task 4: bind()
let user1 = {
    name: "Ahmed"
};

let user2 = {
    name: "Sara"
};

function welcome() {
    console.log(`Welcome ${this.name}`);
}

let welcomeAhmed = welcome.bind(user1);
let welcomeSara = welcome.bind(user2);

welcomeAhmed();
welcomeSara();

//Task 5 — Employee Management {
let employee1 = {
    name: "Ali",
    salary: 40000
};

let employee2 = {
    name: "Ahmed",
    salary: 60000
};

function calculateSalary(bonus, allowance) {
    console.log(`${this.name} has total salary of ${this.salary + bonus + allowance}`);
}

//using call
calculateSalary.call(employee1, 5000, 2000);

//using apply 
calculateSalary.apply(employee2, [10000, 5000]);

//using bind
let salary = calculateSalary.bind(employee1);
salary(5000, 5000)

//  }

// Task 6: Logic Building Challenge
let person1 = {
    name: "Ali"
};
let person2 = {
    name: "Ahmed"
};
function introduce() {
    console.log(this.name);
}

let newFunc = introduce.bind(person1);
newFunc.call(person2);//output : Ali

// Task 7 — Bank Account System
let bankAcount = {
    owner: "Osman",
    balance: 12500,
    withdraw: function (amount) {
        if (this.balance >= amount) {
            console.log(`${this.owner} remaining balance is ${ this.balance - amount} `);
        } else {
            console.log('Insufficient Balance')
        }
    }
}
let anotherAccount = {
    owner: 'Ali',
    balance: 30000,
}

bankAcount.withdraw.call(anotherAccount, 1000);