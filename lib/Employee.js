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
        <div class="col">

        <ul class="list-group">
        <li class="list-group-item"><h2>${this.getName()}</h2></li>
        <li class="list-group-item">${this.getRole()}</li>
        <li class="list-group-item">${this.getId()}</li>
        <li class="list-group-item">< a href="${this.getEmail()}">${this.getEmail()}</a></li>
        </ul>

        </div>
        `
    }
}

module.exports = Employee;