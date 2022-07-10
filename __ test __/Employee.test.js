const Employee = require("../lib/Employee");

test('creates an employee object', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither1026@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('gets the employee name', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither1026@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('gets the employee id', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither@gamil.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets the employee email', () => {
  const employee = new Employee( 'Matt Gaither', 14, 'mattgaither@gamil.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
});