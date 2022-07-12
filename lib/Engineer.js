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
            ${this.getGithub()}
        </div>
        `
    }
}

module.exports = Engineer;