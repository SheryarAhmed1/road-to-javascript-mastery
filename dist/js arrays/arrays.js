//create, access and modify
let array = [1, 2, 3, 4, 5, 6];
array[2] = 4;
console.log(array);

//common array metthods
//push()
let a = [1, 2, 3, 4, 5, 6];
a.push(7);//add 7 in the end
console.log(a, 'push')

//pop()
let b = [1, 2, 3, 4, 5, 6];
b.pop()//remove from end
console.log(b, 'pop')

//shift()
let c = [1, 2, 3, 4, 5, 6];
c.shift()//remove one from start
console.log(c, 'shift')

//unshift()
let d = [1, 2, 3, 4, 5, 6];
d.unshift(0)
console.log(d, 'unshift')

//splice()
let e = [1, 2, 3, 4, 5, 6];
e.splice(2, 3); // Remove 2 items starting at index 1
console.log(e, 'splice');

//reverse()
let f = [1, 2, 3, 4, 5, 6];
f.reverse(); //print array in reverse order
console.log(f, 'reverse()');

//Extractors (don't modify original array)

//slice()
let g = [1, 2, 3, 4, 5, 6];
let newg = a.slice(0, 3);
console.log(newg, 'slice');

//sort
let h = [1, 4, 5, 7, 9, 6];
let i = h.sort(function (x, y) {
    return x - y;// and if y-x so they print array in descending order
});
console.log(i, 'sort');

//iteration methods

//foreach()
let j = [1, 2, 4, 6, 8];
j.forEach(function (value) {
    console.log(value + 5, ' foreach');
});//perform action for each element

//map()
let k = [8, 4, 3, 45, 67, 89, 6];
let newK = k.map(function (val) {
    if (val > 10) return val;
});//used to transform element in an array and also creates new array on the basis of the existing array 
console.log(newK, 'map method');

//filter
let l = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newVal = l.filter(function (val) {
    if (val > 5) return val;
})
console.log(newVal, ' filter method');

//reduce ()
let m = [1, 2, 3, 4, 5, 6, 7, 8];
let result = m.reduce(function (store, fetch) {
    return store + fetch;
}, 0);
console.log(result, ' reduce method');

//find()
let n = [1, 2, 3, 2, 4, 5];
let nResult = n.find(function (locate) {
    return locate === 2;
})
console.log(nResult);

//some()
let o = [10, 30, 33, 43, 56, 79, 92, 82];
let oResult = o.some(function (check) {
    return check >= 33;
});//output is : true 
console.log(oResult);

//every 
let p = [10, 30, 33, 43, 56, 79, 92, 82];
let pResult = p.every(function (check) {
    return check >= 33;
}); //output is : false 
console.log(pResult);

//Destructureing of Array
let q = [1, 2, 3, 4, 5];
let [x, y, , z] = q;
//output is : [1,2,4];  

//spread operator
let u = [1, 2, 3, 4, 5];
let r = [...u];
//output of r is : [1,2,3,4,5]
console.log(r);

// � Practice Zone
// 1. Create an array of student names and print each
let student = ['ali', 'osman', 'zeshan'];
student.forEach(function (name) {
    console.log(name);
})

// 2. Filter even numbers from an array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumber = number.filter(function (even) {
    return even % 2 === 0;
});
console.log(evenNumber);

// 3. Map prices to include GST (18%)
let price = [100, 200, 250, 300];

let includeGst = price.map(function (gst) {
    return gst * 1.18;
});

console.log(includeGst);