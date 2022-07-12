const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
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
            ${this.getSchool()}
        </div>
        `
    }
}

module.exports = Intern;