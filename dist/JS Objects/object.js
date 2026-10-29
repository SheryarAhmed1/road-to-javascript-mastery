let car = {
    name: 'Toyota',
    model: 'Corolla',
    year: 2023,
    isElectrice: false,
}
car.model = 'Yaris';
car.country = 'Pakistan';
car.year = 2024;
// . Dot Notation Method
console.log(car.model);
console.log(car)

//Bracket Notation []
console.log(car['year'])


//Build-in Array Methods
let user = { id: 101, name: "Ali", role: "Admin" };

//object.keys();
console.log(Object.keys(user));

//object.values();
console.log(Object.values(user));

//object.entries(); // combine keys and value and create a pair of 2D array [[]]
console.log(Object.entries(user));


//Nesting and Deep Access
let collage = {
    name: 'CTTI',
    address: {
        sector: "i/11",
        department: {
            name: 'ICT',
            class: {
                className: 'Third Year',
                student: 'Mohsin',
            }
        }
    }
}
console.log(collage.address.department.class.className);

//object Destructuring 

let { className, student } = collage.address.department.class;
//creates a new variables like that (className,student)
console.log(className, student);

//Loops in object : for-in
let bag = {
    name : 'School Bag',
    color : 'Black',
    pirce : 3000,
}

for (let i in bag){
    console.log(i  , bag[i])
}