// 3. Reverse a string using loop
let val = prompt('enter any string');
let storeVal = '';
for(let i = val.length -1; i >= 0; i--){
    storeVal += val[i];
}
console.log(storeVal);
