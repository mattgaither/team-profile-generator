// Using the Intern constructor
const Intern = require('../lib/Intren');

// Checks the object properties
test('object', () => {
  const intern = new Intern( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'MSU');

  expect(intern.school).toEqual(expect.any(String));
});

// Checks to see if there is school from getSchool()
test('gets the school from getSchool()', () => {
  const intern = new Intern( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'MSU');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Checks to see if there is role from getRole()
test('gets the role from getRole()', () => {
  const intern = new Intern( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'MSU'); 

  expect(intern.getRole()).toEqual('Intern')
});