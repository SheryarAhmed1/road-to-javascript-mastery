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