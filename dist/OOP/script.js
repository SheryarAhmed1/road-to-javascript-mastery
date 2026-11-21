//create a Constructor Function || best practice is also write first alphabit in captal
function CreateLaptop(model, price) {
    this.model = model;
    this.price = price;
    // this.company = company;
}
CreateLaptop.prototype.company = "Nvidia";
//we can use 'new' they create a blank object 
let laptopOne = new CreateLaptop('Thinkpad', 125000);
let laptopTwo = new CreateLaptop('XPS', 147000);