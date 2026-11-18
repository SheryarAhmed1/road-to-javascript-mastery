//Closures

//Task 1: Private Counter
function createCounter() {
    let count = 0;
    return function () {
        count++
        console.log(count);
    }
}

const counter1 = createCounter();
const counter2 = createCounter();
counter1();
counter1();
counter2();

//Task 2: Secret Password Checker
function secretBox(password) {
    return function (guess) {
        if (guess === password) {
            console.log('Access Granted');
        } else {
            console.log('Wrong Password');
        }
    }
}
const check = secretBox('admin123');
check('123');  //Wrong Password
check('admin123');  //Access Granted

//Task 3: Button Click Tracker (DOM + Closure — React Style)

let allButtons = document.querySelectorAll('#btn');
function createClickTracker(buttonName) {
    let count = 0;
    return function () {
        count++;
        console.log(buttonName + " clicked " + count + " times")
    }
}
allButtons.forEach(btn => {
    btn.addEventListener('click', createClickTracker(btn.textContent));
});