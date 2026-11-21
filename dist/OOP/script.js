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



class BankAccount {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount!");
            return;
        }

        this.#balance += amount;
        console.log(`${amount} deposited successfully.`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid amount!");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient balance!");
            return;
        }

        this.#balance -= amount;
        console.log(`${amount} withdrawn successfully.`);
    }

    getBalance() {
        return this.#balance;
    }

    showDetails() {
        console.log(`Account Owner: ${this.owner}`);
        console.log(`Current Balance: ${this.#balance}`);
    }
}

// Creating objects
const account1 = new BankAccount("Ali", 5000);
const account2 = new BankAccount("Ahmed", 10000);

// Using methods
account1.deposit(2000);
account1.withdraw(1500);
account1.showDetails();

console.log("Ali's balance:", account1.getBalance());

account2.withdraw(12000);
account2.deposit(3000);
account2.showDetails();