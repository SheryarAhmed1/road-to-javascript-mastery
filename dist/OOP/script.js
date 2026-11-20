//create a Constructor Function || best practice is also write first alphabit in captal
function CreateLaptop(model, price, company) {
    this.model = model;
    this.price = price;
    this.company = company;
}
//we can use 'new' they create a blank object 
let laptopOne = new CreateLaptop('Thinkpad', 125000 , 'Lenovo');
let laptopTwo = new CreateLaptop('XPS', 147000 , 'Dell');