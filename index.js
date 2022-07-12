const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee do you want to add?',
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "Employee"
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name",
            validate: (userNameInput) => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's id",
            validate: (userIdInput) => {
                if (userIdInput) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email",
            validate: (userEmailInput) => {
                if (userEmailInput) {
                    return true;
                } else {
                    console.log('please enter an email');
                    return false;
                }
            }
        }
    ])
}

const promptAdditional = (userData) => {
    if (userData.employeeType === 'Employee') {
        return userData;
    } else if (userData.employeeType === 'Manager') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter manager\'s office number',
                validate: (userOfficeInput) => {
                    if (userOfficeInput) {
                        return true;
                    } else {
                        console.log("please enter office number");
                        return false;
                    }
                }
            }
        ])
            .then(res => {
                // prompt object is separate from input object
                // set input object = prompt object
                userData.officeNumber = res.officeNumber
                return userData;
            })

            
    }
}

promptUser()
    // promptUser is a promise, so we need to chain .then to get the result
    .then(res => console.log(res));
