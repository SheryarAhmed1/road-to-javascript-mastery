
//Arrays problems level one (easy)
//1: Find Array Length:
let a = [1, 2, 3, 4, 5, 6];
console.log(a.length);

//2: Add Item to End: 
let b = [1, 2, 3, 4, 5];
b.push(6);
console.log(b);

//3: Remove First Item: 
let c = [1, 2, 3, 4, 5, 6];
c.shift();
console.log(c);

//4: Find Index: 
let frt = ['apple', 'banana', 'orange'];
console.log(frt.indexOf('orange'));

//5: Check Item Presence:
let array = [1, 2, 3, 4, 5, 6, 7, 5];
console.log(array.includes(5));

//6: Sum of Array Elements: 
let numbers = [10, 20, 30, 40, 50];
let total = 0;
numbers.forEach(function (num) {
    total += num;
});
console.log('sum of all array elements', total);

//7: Print Elements with Loop:
let data = ['ali, asif', 'baber'];
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

//8: Convert Array to String: 
let names = ['osman', 1, 2, true];
let str = names.join(', ');
console.log(str);

//9: Reverse an Array: 
let descending = [1, 2, 3, 4, 5];
descending.reverse();
console.log(descending);

//10: Square the Numbers:
let x = [2, 3, 4, 5];
let show = x.map(function (square) {
    return square * square;
});
console.log(show);


//Arrays problems level two (intermediate)
//1: Filter Even Numbers: 
let num = [1, 2, 4, 3, 5, 6, 7, 8];
let newNum = num.filter(function (even) {
    return even % 2 === 0;
});
console.log(newNum);

//2: Find Maximum Number:
let findMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let find = findMax.reduce(function (max, current) {
    return current > max ? current: max;
});
console.log(find);

//3: Remove Duplicates:
//old method
// let duplicate = [1, 2, 1, 3, 2, 4, 3, 2, 5, 4];
// let removeDuplicate = duplicate.filter(function (item, index) {
//     return duplicate.indexOf(item) === index;
// });
// console.log(removeDuplicate);

//modern method
let duplicate = [1, 2, 1, 3, 2, 4, 3, 2, 5, 4];
let removeDuplicate = [...new Set(duplicate)];
console.log(removeDuplicate);

//4: Flatten a 2D Array:
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray);

//5: Merge and Sort Arrays:
let array1 = [1, 3];
let array2 = [2, 4];

let mergeAndSort = [...array1, ...array2].sort((x, y) => x - y);
console.log(mergeAndSort);

//6: Find a Specific Object:
let students = [
    { id: 1, name: 'ali' }, 
    { id: 2, name: 'asim' },
    { id: 3, name: 'zafran' }
]
let school = students.find(function (student) {
    return student.id === 2;
});
console.log(school);


//7: Check All Elements Condition: 
let value = [1, 4, 8, 9, 12, , 13, 5];

let check = value.every(condition => condition > 10);
console.log(check);

//8: Chaining Map and Filter:
let digits = [1, 2, 3, 4, 5, 6, 7];

let filter = digits
    .filter(odd => odd % 2 === 1)
    .map(double => double * 2);
console.log(filter);

//9:Count Occurrences: 
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
let totalApples = fruits.filter(fruit => fruit === 'apple').length;
console.log(totalApples);

//10: Extract Property Values:
let amount = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 }
];

let finalOutput = amount.map(print => print.price);
console.log(finalOutput)