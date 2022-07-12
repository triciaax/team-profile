const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calls the constructor of the parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // override the getRole method
    getRole() {
        return "Manager";
    }

    generateHtml() {
        return `
        <div>
            ${this.getName()}
        </div>
        <div>
            ${this.getId()}
        </div>
        <div>
            ${this.getEmail()}
        </div>
        <div>
            ${this.getRole()}
        </div>
        <div>
            ${this.getOfficeNumber()}
        </div>
        `
    }
}

module.exports = Manager;