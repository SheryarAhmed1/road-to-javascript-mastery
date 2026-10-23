// 6. Print all object keys and values using for-in
let obj = {
    name: 'sheryar',
    age : 18,
    edu : 'DAE'
}
for (let key in obj){
    let output = obj[key];
    console.log(`${key}: ${output} `);
}
