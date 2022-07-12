class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
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
        `
    }
}

module.exports = Employee;