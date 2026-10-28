//1. Print 1 to 10 using for
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Print even numbers between 1 to 20
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even number `);
    }
}
// 3. Reverse a string using loop
let val = 'enter any string';
let storeVal = '';
for (let i = val.length - 1; i >= 0; i--) {
    storeVal += val[i];
}
console.log(storeVal);

// 4. Sum of all numbers in an array
let number = [2, 3, 4, 6, 8, 7];
let sum = 0;
for (i = 0; i < number.length; i++) {
    console.log(`${sum} + ${number[i]} = ${sum + number[i]} `)
    sum += number[i];
}
console.log(`Sum of all Numbers: ${sum} `)

// 5. Print all characters of a name using for-of
// let id =prompt('enter string');
let id = 'javascript';
for (const character of id) {
    console.log(character);
}
console.log(`${id} has ${id.length} Characters `)

// 6. Print all object keys and values using for-in
let obj = {
    name: 'sheryar',
    age: 18,
    edu: 'DAE'
}
for (let key in obj) {
    let output = obj[key];
    console.log(`${key}: ${output} `);
}

// 7. Use continue to skip a specific number
for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// 8. Guess number game – use while to ask until correct
// let secretNum = 8;
// let userInput = Number('Guess Number');

// while (userInput !==secretNum) {
//     userInput = Number('Guess Number');
//     console.log('Congratulation You Guess correct Number');
// }
// 9. Pattern: Print triangle using *
for (let i = 1; i <= 5; i++) {
    let rowContent = "";

    for (let j = 1; j <= i; j++) {
        rowContent += "*";
    }
    console.log(rowContent);
}
// 10. Sum of even numbers in an array using forEach
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSum = 0;
numbers.forEach(num => {
    if (num % 2 === 0) {
        evenSum += num;
    }
});
console.log(`the sum of all even numbers is: ${evenSum}`);

let view = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        view++;
        console.log(i);
    }
    if (view === 5) break;
}

// 11: Find the Largest Number in an Array 
let num = [12, 45, 7, 89, 23, 56];
let largest = number[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}
console.log(`The largest number is: ${largest}`); 