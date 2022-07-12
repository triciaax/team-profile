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

const generateFullHtml = (employeeList) => {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
      </head>
  
  <body>
  <div class="p-3 mb-2 bg-info text-dark">
  <h1 class="display-1">Team Profile</h1>
  </div>
  <div class="container">
  <div class="row">
    ${generateInnerHtml(employeeList)}
  </div>

    </body>
</html>

    `
}

module.exports = { generateFullHtml }