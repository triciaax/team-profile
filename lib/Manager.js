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
        <div class="col">

        <ul class="list-group">
        <li class="list-group-item"><h2>${this.getName()}</h2></li>
        <li class="list-group-item">${this.getRole()}</li>
        <li class="list-group-item">${this.getId()}</li>
        <li class="list-group-item">${this.getEmail()}</li>
        <li class="list-group-item">${this.getOfficeNumber()}</li>
        </ul>

        </div>
        `
    }
}

module.exports = Manager;