const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, school ) {
    // Super gets the attributes from the Employee constructor
    super( name, id, email );
    this.school = school;
  };

  getSchool() {
    return this.school;
  };

  getRole() {
    return "Intern";
  };
}

// Export the Intern class
module.exports = Intern;