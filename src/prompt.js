const inquirer = require('inquirer');

const promptUser = (employeeList) => {
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
    .then(promptAdditional)
    .then((res) => employeeList.push(res))
    .then(addAnother)
    .then((res) => {
        if (res) {
            return promptUser(employeeList)
        } else {
            return employeeList
        }
    })
}

const promptAdditional = (userData) => {
    if (userData.employeeType === 'Employee') {
        return userData;
    } else if (userData.employeeType === 'Manager') {
        return inquirer.prompt([
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
        });        
    } else if (userData.employeeType === 'Engineer') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter engineer\'s github',
                validate: (userGithubInput) => {
                    if (userGithubInput) {
                        return true;
                    } else {
                        console.log("please enter github address");
                        return false;
                    }
                }
            }
        ])
        .then(res => {
            // prompt object is separate from input object
            // set input object = prompt object
            userData.github = res.github
            return userData;
        });        
    } else if (userData.employeeType === 'Intern') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Enter intern\'s school',
                validate: (userSchoolInput) => {
                    if (userSchoolInput) {
                        return true;
                    } else {
                        console.log("please enter school");
                        return false;
                    }
                }
            }
        ])
        .then((res) => {
            // prompt object is separate from input object
            // set input object = prompt object
            userData.school = res.school
            return userData;
            });        
    }

}

const addAnother = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: 'addAnother',
            message: 'Would you like to add another employee?',
            validate: (confirm) => {
                if (confirm) {
                    return true;
                } else {
                    console.log("please enter a valid response!");
                    return false;
                }
            }
        }
    ])
    .then((res) => {
        if (res.addAnother) {
            return true;
        } else {
            return false;
        }
    })
}

module.exports = { promptUser }