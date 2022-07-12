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

        <div class="col">

        <ul class="list-group">
        <li class="list-group-item"><h2>${this.getName()}</h2></li>
        <li class="list-group-item">${this.getRole()}</li>
        <li class="list-group-item">${this.getId()}</li>
        <li class="list-group-item"><a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="list-group-item">${this.getSchool()}</li>
        </ul>

        </div>
        `
    }
}

module.exports = Intern;