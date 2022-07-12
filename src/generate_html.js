const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

const generateInnerHtml = (employeeList) => {
    let htmlString = '';
    for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].employeeType === 'Engineer') {
            let eng = new Engineer (
                employeeList[i].name, 
                employeeList[i].id, 
                employeeList[i].email,
                employeeList[i].github
                )
            let engHtml = eng.generateHtml();
            htmlString += engHtml;
        } else if (employeeList[i].employeeType === 'Intern') {
            let eng = new Intern (
                employeeList[i].name, 
                employeeList[i].id, 
                employeeList[i].email,
                employeeList[i].school
                )
            let engHtml = eng.generateHtml();
            htmlString += engHtml;
        } else if (employeeList[i].employeeType === 'Manager') {
            let eng = new Manager (
                employeeList[i].name, 
                employeeList[i].id, 
                employeeList[i].email,
                employeeList[i].officeNumber
                )
            let engHtml = eng.generateHtml();
            htmlString += engHtml;
        } else if (employeeList[i].employeeType === 'Employee') {
            let eng = new Employee (
                employeeList[i].name, 
                employeeList[i].id, 
                employeeList[i].email
                )
            let engHtml = eng.generateHtml();
            htmlString += engHtml;
        }
    }
    return htmlString;
}

module.exports = { generateInnerHtml }