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
console.log(storeVal);

//first class functions in js 
function greet (){
    return 'my name is';
}

function userInfo ( callback, name){
    console.log( callback() + name);
}
userInfo(greet , ' Ali');

/*higher order function is a function that takes another function as an argument, returns a function, or both.*/
function gh(){
    console.log('i am simple function');//simple function
    return function () {
        console.log ('i am higher order function');
    }//higher order function
}
gh()();//first () is to run normal function and the second one () is to print higher order function


//pure and impure function
let number = 20;
function qw(){
    console.log('i am pure function');
}
qw();

function er (){
    number ++;
    console.log(number);
}
er();

//closures is concept where a function returns another function and the returned function uses parent functions value 
function closure(){
    let m = 130;
    return function(){
        console.log(m);
    }
}
closure()();

/*lexical scoping
means a function can access variables from where it was WRITTEN, not where it is called.

• Written Location = Scope fixed forever 🔒
• Child function ➔ can look UP at Parent's variables ⬆️
• Parent function ➔ cannot look DOWN at Child's variables ⬇️
*/
function parent(){
    let parentVal = 1;
    function child(){
        console.log(parentVal);
    }
    child();
}
parent();

//IIFE (Immediately invoked function expressions) is a function that runs immediately as soon as it is defined.
(function(){
    let a = 10;
    console.log(a);
})();

//hoisting differences between declaration and experessions
abc();


function abc(){
    console.log('hoisting work in function declaration');
}

//experssion
// host();


let host = function(){
    console.log('function experession');
}