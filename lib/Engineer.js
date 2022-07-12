const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    generateHtml() {
        return `
        <div class="col">

        <ul class="list-group">
        <li class="list-group-item"><h2>${this.getName()}</h2></li>
        <li class="list-group-item">${this.getRole()}</li>
        <li class="list-group-item">${this.getId()}</li>
        <li class="list-group-item">${this.getEmail()}</li>
        <li class="list-group-item">${this.getGithub()}</li>
        </ul>

        </div>
        `
    }
}

module.exports = Engineer;