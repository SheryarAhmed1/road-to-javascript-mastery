/*
function outNumber (digit){
    for (let d = 0; d < digit.length; d++) {
        if (digit[d] % 2 === 0 ) {
            console.log(digit[d] + ' is even number' );
        }
        
    }
}
outNumber([1,2,3,4,5,6,7,]);


function divide (x,y) {
    return x/y;
}
let calculate = divide (45,5);
console.log( 'answer is: ', + calculate)

// Javascript array map() method
let numbers = [2,3,4,5,6];

let results = numbers.map(function(num){
    return num * 2;
});
console.log(results);

// Javascript arrays filter() method
let ages = [10,15,18,20,23,25,26,29];

let age = ages.filter(function(age){
    return age >= 18;
});
console.log(age);

// Javascript arrays find() method
let years = [12, 18, 25, 30];

let result = years.find(function(year) {
    return year >= 18;
});
console.log(result);

//sort function
let numbers = [10,50,30,60]
numbers.sort();
console.log(numbers);

//practice and logic building
let marks = [35, 80, 45, 90, 60, 25];

let num = marks.filter(function (num){
    return num >= 50;
});
//adding + 5 marks 
let bonus = num.map(function (bonus){
    return bonus + 5;
});

//total of all selected marks
let result = bonus.reduce(function(total,bonus){
    return total + bonus;
})
console.log (num)
console.log(bonus)
console.log(result)
console.log(marks)

let prices = [120, 450, 80, 700, 250, 50];
let filteredPrices = prices.filter (filter => {
    return filter >= 200;
})

console.log(filteredPrices)

let discountedPrice = filteredPrices.map(price => {
    let discount = (price * 10)/100
    return price - discount;
});
//sum of all discounted prices
let total = discountedPrice.reduce( function (total, price) {
    return total+ price;
},0);
console.log(discountedPrice);
console.log(total);
console.log( prices);

let students = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 42 },
    { name: "Sara", marks: 90 },
    { name: "Zain", marks: 55 },
    { name: "Ayesha", marks: 30 }
];

//old and long method
// let grade = students.filter(function(student){
//     return student.marks >= 50;
// });
// let studentsName = grade.map(function ( student ){
//     return student.name;
// });
// let totalMarks = 0;
// grade.forEach( function (student){
//     totalMarks += student.marks;
// });
// console.log(grade)
// console.log(studentsName)
// console.log(totalMarks)
// console.log(students)


//Modern Chaining M
// method
let studentsName = students
    .filter(student => student.marks >= 50)
    .map(student => student.name)
console.log(studentsName);

let totalMarks = students
    .filter(student => student.marks >= 50)
    .reduce((plus,student) => plus + student.marks, 0 );

    console.log(totalMarks);
console.log(students);


let grade = 'B';
switch (grade) {
    case 'A':
        console.log('You got Grade A');
        break;
    case 'B' :
        console.log('You got Grade B');
        break;
        case 'C':
        console.log('You got Grade C');
            
    default:
        break;
}

//ternary operator
// condition ? expression1 : expression2

let marks = 70;
let result = (marks >= 50) ? 'Pass' : 'Fail';
console.log(result)
console. log(rps("paper", "paper"));

// Rock-paper-scissors logic

function rps(user,computer){
    if ( user === computer) return 'Draw';
    
    if (user === 'rock' && computer === 'scissor' ) return 'user win';
    if (user === 'scissor' && computer === 'paper') return 'user win';
    if (user === 'paper' && computer === 'rock') return 'user win';
    
    return 'computer win';
};
console.log(rps('rock', 'scissor'));
*/

//Coin Toss (Spinn/Toss) Game
function coinToss(userChoice){
    let user = userChoice.toLowerCase();
    let computer = '';
    let randomNumber = Math.random();

    if (randomNumber <0.5) {
        computer = 'heads';        
    }else{
        computer = 'tails';
    }

    if(user === computer){
        return `Computer Chose : ${computer}. You Won ` 
    }else{
        return `Computer Chose : ${computer}. You Lost! ` 
    }

};
console.log(coinToss('heads'));
