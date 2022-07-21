// Using the Manager constructor
const Manager = require('../lib/Manager');

// Checks the object properties
test('object', () => {
  const manager = new Manager( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 40 );

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Checks to see if there is a officeNumber from getOfficeNumber()
test('gets the managers officeNumber', () => {
  const manager = new Manager( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 40 );

  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

// Checks to see if there is role from getRole()
test('gets the role of the manager', () => {
  const manager = new Manager( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 40 );

  expect(manager.getRole()).toEqual('Manager');
});