const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (name, id, email, github) {
    // Super gets the attributes from the Employee constructor
    super( name, id, email );
    this.github = github;
   
  };

  getGithub() {
    return this.github;
  };

  getRole() {
    return "Engineer";
  };
};

//Export the Engineer class
module.exports = Engineer;