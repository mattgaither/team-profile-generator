// Node modules
const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');

// Team library
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link to page creation process
const generateHTML = require('./src/html-helper');

// This is the array the employees are pushed into
const teamArray = [];

// This creates a Manager from the prompts and then is pushed to the array
const managerAdd = async () => {
  const managerInput = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? ",
        validate: nameInput => {
          if (isNaN(nameInput)) {
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
          if (isNaN(idInput)) {
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
          if (validator.isEmail(emailInput)) {
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
    ]);
  const { name, id, email, officeNumber } = managerInput;
  const manager = new Manager(name, id, email, officeNumber);

  teamArray.push(manager);
  console.log("Team" , teamArray);
};

//This creates a employee that is either a engineer or a intern then is pushed to the array
const addEmpolyee = () => {
  console.log( "Adding empolyees to the team" );

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select the type of employee you would like to add. Note if you do not make a selectin',
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
      message: "Please enter the team member's email address?",
      validate: emailInput => {
        if (validator.isEmail(emailInput)) {
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
      when: (input) => input.role == 'Engineer',
      validate: roleInput => {
        if (roleInput) {
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
      when: (input) => input.role == 'Intern',
      validate: roleInput => {
        if (roleInput) {
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

    let { name, id, role, email, github, school, confirmEmployee } = employeeData;
    let employee;

    // This separates the answers to the prompts and sends them to the array
    if (role == "Engineer") {
      employee = new Engineer( name, id, email, github );

      teamArray.push(employee);
      console.log("Team", teamArray);

    } else if (role == "Intern") {
      employee = new Intern ( name, id, email, school );

      teamArray.push(employee);
      console.log("Team", teamArray);
    };

    if (confirmEmployee) { 
      return addEmpolyee();
    } else {
      return teamArray;
    };
  });
};

// function to generate HTML page file using file system 
const writeFile = () => {
  fs.writeFile('./src/index.html', generateHTML(teamArray), err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      // when the profile has been created 
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

// This is what happens when the user types in "node index.js"
managerAdd()
.then(addEmpolyee)
.then(generateHTML(teamArray))
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});