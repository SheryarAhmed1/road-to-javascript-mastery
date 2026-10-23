// 4. Sum of all numbers in an array
let number = [ 2,3,4,6,8,7];
let sum = 0;
for(i = 0;  i < number.length; i++){
    console.log(`${sum} + ${number[i]} = ${sum + number[i]} ` )   
    sum += number [i];
}
console.log(`Sum of all Numbers: ${sum} ` )
