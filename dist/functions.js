//function statement
function xy(){
    console.log('this is function statement + hello');
}
xy();

//function expressions
let de = function(){
    console.log('this is function experssions');
}
de();
//fat arrow function
let cd = () =>{
    console.log('this is fat arrow function');
}
cd();

//function parameter and expressions

function divide (num1, num2){
    console.log(num1 / num2 + 'here num1 and num2 parameters and 10,3 are arguments');
}
divide(10,3)

//assign default parameters
function sum (v1 = 10, v2 = 20){//10 and 20 are default parameters
    console.log(v1 + v2);
}
sum(23,23);//if user give aruguments so they override default parameters

// rest operator [... and any paramerter]
function abc(...num){
   console.log(num);
}
abc(1,2,3,4,5,6,7,8,9,10,11,12);

//return in javascript
function xyz (){
    return 10;
}

let storeVal = xyz();
console.log(storeVal)