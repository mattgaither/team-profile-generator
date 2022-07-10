// Node modules
const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intren');
const { off } = require('process');

const teamArray = [];


const managerAdd = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: name => {
        if (name.length > 0) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        };
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's ID number?",
      validate: idInput => {
        if (isNaN(idInput.value)) {
          console.log("Please enter a valid ID number!");
          return false;
        } else {
          return true;
        };
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address?",
      validate: emailInput => {
        if (validator.isEmail(managerEmailInput)) {
          return true;
        } else { 
          console.log("Please enter a valid email address!");
          return false;
        };
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the team manager's office number?",
      validate: officeNumberInput => {
        if (officeNumberInput > 0) {
          return true;
        } else {
          console.log("Please enter a valid office number!");
          return false;
        };
      },
    },
  ])
  .then((managerInput) => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  });
};

const addEmpolyee = () => {
  console.log( "Adding empolyees to the team" );

  return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'Add empolyees or done',
      message: 'Select the type of employee you would like to add.',
      choices: [ 'Intern', 'Engineer' ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the employee.',
      validate: nameInput => {
        if (nameInput.length > 0) {
          return true;
        } else {
          console.log ("Please enter a valid employee name!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID.",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Please enter the employee's ID");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address?",
      validate: emailInput => {
        if (validator.isEmail(managerEmailInput)) {
          return true;
        } else { 
          console.log("Please enter a valid email address!");
          return false;
        };
      },
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the empolyees's github username.",
      when: (input) => input.role === 'Engineer',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a valid github username!");
          return false;
        };
      },
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the Interns school name.",
      when: (input) => input.role === 'Inturn',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter a school name!");
          return false;
        };
      },
    },
    {
      type: 'confirm',
      name: 'confirmEmployee',
      message: "Would you like to add more team members?",
      default: false,
    },

  ])
  .then(employeeData => {

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer ( name, id, email, github );
      
      console.log(employee);
    } else if (role === " Intern") {
      employee = new Intern ( name, id, email, school );

      console.log(employee); 
    };

    teamArray.push(employee);

    if (confirmAddEmployee) { 
      return addEmpolyee(teamArray);
    } else {
      return teamArray;
    };
  });
};
