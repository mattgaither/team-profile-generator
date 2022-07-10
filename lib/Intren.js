const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, gitHub, school ) {
    // Super gets the attributes from the Employee constructor
    super( name, id, email );
    this.gitHub = gitHub;
    this.school = school;
  };

  getGitHub() {
    return `https://github.com/${this.gitHub}`;
  };

  gitRole() {
    return "Intern";
  };

  getSchool() {
    return this.school;
  };
}

module.exports = Intern;