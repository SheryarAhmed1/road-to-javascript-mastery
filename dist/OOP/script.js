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


// JavaScript OOP — Real-World Practice Tasks
// 🟢 Task 1 — Employee Management System

class Employee {
  // Constructor to initialize employee properties
  constructor(name, designation, salary, department) {
    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.department = department;
  }

  // Method to display complete employee details
  showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Designation: ${this.designation}`);
    console.log(`Department: ${this.department}`);
    console.log(`Monthly Salary: ${this.salary}`);
    console.log("---------------------------");
  }

  // Method to increase the salary by a given amount
  increaseSalary(amount) {
    this.salary += amount;
    console.log(`${this.name}'s salary increased by ${amount}. New Salary: ${this.salary}`);
  }

  // Method to update the employee's designation
  changeDesignation(newDesignation) {
    this.designation = newDesignation;
    console.log(`${this.name}'s designation updated to: ${this.designation}`);
  }

  // Method to calculate and return the 12-month annual salary
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

// --- Test Data ---
const emp1 = new Employee("Ali", "Web Developer", 60000, "IT");
const emp2 = new Employee("Ahmed", "Designer", 45000, "Creative");

// Testing methods on emp1
emp1.showDetails();
emp1.increaseSalary(10000);
emp1.changeDesignation("Senior Web Developer");
console.log(`${emp1.name}'s Annual Salary: ${emp1.calculateAnnualSalary()}`);

console.log("\n");

// Testing methods on emp2
emp2.showDetails();
console.log(`${emp2.name}'s Annual Salary: ${emp2.calculateAnnualSalary()}`);
