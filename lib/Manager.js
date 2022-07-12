const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calls the constructor of the parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // override the getRole method
    getRole() {
        return "Manager";
    }
}