// Using the Engineer constructor
const Engineer = require('../lib/Engineer');

// Checks the object properties
test("object", () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.gitHub).toEqual(expect.any(String));
});

// Checks the engineers github username from getGitHub()
test('gitHub', () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

// Checks the engineers role from getRole()
test('role', () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.getRole()).toEqual('Engineer');
});

module.exports = Engineer
