// Using the Employee constructor
const Employee = require("../lib/Employee");

// Checks the object properties
test('object', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither1026@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Checks the employees name from getName()
test('name', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither1026@gmail.com');

  expect(employee.getName()).toEqual(employee.name.toString());
});

// Checks the employees id from getID()
test('id', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither@gamil.com');

  expect(employee.getId()).toEqual(employee.id);
});

// Checks employees email from getEmail()
test('email', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither@gamil.com');

  expect(employee.getEmail()).toEqual(employee.email.toString());
});

test('role', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither@gamil.com');

  expect(employee.getRole()).toEqual('Employee');
});