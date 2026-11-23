class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee Name: ${this.name}, Base Salary: $${this.baseSalary}`;
    }
}

class Developer extends Employee {
    constructor(name, baseSalary, techStack) {
        super(name, baseSalary);
        this.techStack = techStack;
    }
    getDetails() {
        return `${super.getDetails()} , Tech Stack: ${this.techStack} `;
    }
}

class Intern extends Employee {
    constructor(name, durationMonths) {
        super(name, 15000);
        this.durationMonths = durationMonths;
    }
    getInternshipSummary() {
        return `${super.getDetails()}, Duration: ${this.durationMonths} months`;
    }
}

let dev = new Developer('Osman', 45000, ['JS', 'TS', 'React']);
console.log(dev.getDetails());

const intern = new Intern("Sara", 3);
console.log(intern.getInternshipSummary());