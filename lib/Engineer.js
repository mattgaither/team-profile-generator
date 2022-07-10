const Employee = require('./Employee')

class Engineer extends Employee {
  constructor (name, id, email, gitHub) {
    // Super gets the attributes from the Employee constructor
    super( name, id, email )
    this.gitHub = gitHub
  };

  getGitHub() {
    return `https://github.com/${this.gitHub}`;
  };

  getRole() {
    return "Engineer";
  };
};

module.exports = Engineer;