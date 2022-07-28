// Using the Engineer constructor
const Engineer = require('../lib/Engineer');

// Checks the object properties
test("object", () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.Github).toEqual(expect.any(String));
});

// Checks the engineers github username from getGitHub()
test('github', () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Checks the engineers role from getRole()
test('role', () => {
  const engineer = new Engineer( 'Matt Gaither', 14, 'mattgaither1026@gmail.com', 'mattgaither');

  expect(engineer.getRole()).toEqual('Engineer');
});

module.exports = Engineer
