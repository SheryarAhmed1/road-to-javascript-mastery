let mobile = { brand: "Samsung", model: "S24", price: 120000 };

console.log(Object.keys(mobile))
console.log(Object.values(mobile))

// 🧪 Practice Zone
// 1. Create an object for a book (title, author, price)
let book = {
    title: 'Sheryians Codding School',
    author: 'Harsh Vandana Sharma',
    price: '5,000 INR',
}
console.log(book);

// 2. Access properties using both dot and bracket
let developer = {
    name: 'Usman',
    age: 20,
    company: 'Google',
}
//.Dot Notation
console.log(developer.company);
//Bracket Notation
console.log(developer['company']);


// 3. Write a nested object (user with address and location)
let user = {
    name: 'osman',
    address: {
        country: 'Pakistan',
        location: {
            city: 'islamabad',
        }
    }
}
console.log(user.address.location.city);


// 4. Destructure name and age from a student object
let student = {
    studentName: 'ali',
    age: 24,
}
let { studentName, age } = student;
console.log(studentName, age);


// 5. Loop through keys and values of an object
let country = {
    countryName: 'Pakistan',
    capital: 'Islamabad',
    location: 'South East Asia',
    population: '250M'
}
for (let i in country) {
    console.log(i, country[i]);
}


// 6. Convert object to array using Object.entries()
let obj = {
    name: 'ali',
    age: 50,
}
console.log(Object.entries(obj));


// 7. Copy an object using spread operator
let a = {
    laptop: 'Lenovo',
    model: 'Thinkpad',
}
let b = { ...a }
console.log(b);


// 8. Create a deep copy of an object with nested structure
let kid = {
    name: 'orhan',
    age: 10,
    school: {
        Schoolname: 'IBM',
        class: 3,
    }
}
let kidData = structuredClone(kid);//recommended method
// let kidData = JSON.parse(JSON.stringify(kid))
console.log(kidData)


// 9. Use optional chaining to safely access deep values
let dummyData = {
    name: 'Huzaifa',
    age: 20,
    address: {
        country: 'pakistan',
        location: {
            city: 'islamabad',
        }
    }
}
console.log(dummyData?.address?.location?.city);


// 10. Use a variable as a key using computed properties
let job = 'Position';
let person = {
    name: 'Mohsin',
    age: 19,
    [job]: 'Network Administrator',
}
console.log(person);


// 11. Use  Object entries() to print all key-value pairs as:
//title: JavaScript
//duration: 4 weeks
const course = {
    title: "JavaScript",
    duration: "4 weeks",
}
Object.entries(course).forEach(function (value) {
    console.log(value[0] + ":" + value[1]);
});