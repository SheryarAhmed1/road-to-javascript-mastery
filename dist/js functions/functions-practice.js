//1: convert following into arrow function

/*function greetUsers(welcomeMessage, usersList) {
    let results = usersList.map(function(user) {
        return welcomeMessage + ", " + user + "!";
    });
    return results;
}

const names = ["Ali", "Asad", "Sara"];
console.log(greetUsers("Welcome", names)); 
// Expected Output: ["Welcome, Ali!", "Welcome, Asad!", "Welcome, Sara!"]
*/

//solution
let greetUsers = (welcomeMessage, usersList) =>
    usersList.map(user => `${welcomeMessage}, ${user} `);

const names = ["Ali", "Asad", "Sara"];
console.log(greetUsers("Welcome", names));
// Expected Output: ["Welcome, Ali!", "Welcome, Asad!", "Welcome, Sara!"]

//2: Use rest parameter to accept any number of scores and return the total.

function myScore(...scores) {
    let total = 0;
    scores.forEach(function (value) {
        total = total + value
    });
    return total;
}
console.log(myScore(10, 20, 40, 50));


//3: fix the function with early return
function checkAge(age) {
    if (age < 18) return 'too young';
    return 'allowed';
}
console.log(checkAge(20));

//4: Pass a function into another function and execute it inside.
function abc(value) {
    value();
}
abc(() => {
    console.log('code is working');
});

//5: what is higher outer function
function xyz(ab) {
    ab();
}//or
xyz(() => {
    console.log('HOF');
})

//6: what is closure ? when it is created?
function close() {
    let value = 1;
    return function () {
        console.log(value);
    }
}
close()();

//6.1 closure practice 
function trackSteps() {
    let totalSteps = 0;
    return function (stepAdded) {
        totalSteps += stepAdded;
        return totalSteps;
    }
}
const addSteps = trackSteps();

console.log(addSteps(6));
console.log(addSteps(13));

//6.2 closure practice 
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    }
}
const double = createMultiplier(2);

console.log(double(5));
console.log(double(10));

//6.3 closure practice 
function createLimitCounter(limit) {
    let count = 0;
    return function () {
        if (count < limit) {
            count++
            return count;
        } else {
            return 'limit reached';
        }
    }
}
const counter = createLimitCounter(2);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//6.4 closure practice 
function createGreeting() {
    let isFisrtTime = true;
    return function (name) {
        if (isFisrtTime === true) {
            isFisrtTime = false;
            return 'Welcome for the first time, ' + name;
        }
        else {
            return 'welcome back, ' + name;
        }
    }
}
const greeter = createGreeting();

console.log(greeter('Ali'));
console.log(greeter('Asad'));
console.log(greeter('Sara'));

//6.5 closure practice 
function createTollPlaza() {
    let carCount = 0;
    let totalMoney = 0;
    return function (tax) {
        carCount++;
        totalMoney = totalMoney + tax;
        return `Cars: ${carCount}, Money: ${totalMoney}`;
    }
}
const toll = createTollPlaza();

console.log(toll(50));
console.log(toll(100));
console.log(toll(50));

//6.6 closure practice 
function createPriceTracker() {
    let lastPrice = null;
    return function (newPrice) {
        let message = '';
        if (lastPrice === null) {
            message = `First price set to ${newPrice}!`;
        }
        else if (newPrice > lastPrice) {
            message = `Price Increased!`;
        }
        else if (newPrice < lastPrice) {
            message = `Pice decreased!`;
        }
        else if (lastPrice = newPrice) {
            message = `Price is same.`;
        }
        lastPrice = newPrice;
        return message;
    }
}
const tracker = createPriceTracker();
console.log(tracker(100));
console.log(tracker(120));
console.log(tracker(90));
console.log(tracker(90));

// � Practice Zone
// 1. Write a BMI calculator function
function bmi(weight, height) {
    return weight / (height * height)
}
console.log(bmi(82, 1.82).toFixed(2));

// 2. Write a function that returns another function
function newFunction() {
    return function () {
        console.log('another function us created practice[5]');
    }
}
newFunction()();
// 3. Use a function to log even numbers in array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function print() {
    let evenNum = numbers.filter(function (evenNum) {
        return evenNum % 2 === 0;
    });
}


// 4. Use IIFE to show welcome message
(function welcome() {
    console.log('Welcome');
})();

// 5. Write a discount calculator (HOF style)
function discountCalculator(discount) {
    return function (price) {
        let finalPrice = price - price * (discount / 100);
        return finalPrice;
    }
}
let ten = discountCalculator(10);
let tewenty = discountCalculator(20);

console.log(ten(1500));
console.log(tewenty(1500));
