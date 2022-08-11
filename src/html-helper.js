
generateHTML = (data) => {

  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
    
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }
  };

  const employeeCards = pageArray.join("")

  const generateTeam = generateTeamPage(employeeCards)
  return generateTeam
};


const generateManager = (manager) => {
  return `
    <div class="col-12 col-md-6 col-xl-3 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-header bg-secondary text-light">
            Name: ${manager.getName()}</br>
            <i class="fa-solid fa-user-tie"></i>&nbsp;&nbsp;&nbsp;&nbsp;${manager.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>        
          </ul>
        </div>
      </div>
    </div>    
  `;
}; 


const generateEngineer = (engineer) => {
  return `        
    <div class="col-12 col-md-6 col-xl-3 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-header bg-secondary text-light">
            Name: ${engineer.getName()} </br>
            <i class="fa-solid fa-laptop-code"></i>&nbsp;&nbsp;&nbsp;&nbsp;${engineer.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>        
            <li class="list-group-item">GitHub at: <a href="https://github.com/${engineer.getGithub()}" target = "_blank"> https://github.com/${engineer.getGithub()} </a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
};


const generateIntern = (intern) => {
  return `        
    <div class="col-12 col-md-6 col-xl-3 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-header bg-secondary text-light">
            Name: ${intern.getName()}</br>
            <i class="fa-solid fa-school"></i>&nbsp;&nbsp;&nbsp;&nbsp;${intern.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
};


const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/b80c33ecef.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" 
          crossorigin="anonymous">
        </link>
        <link rel="stylesheet" href="style.css"></link>
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <h1 class="w-100 bg-success p-3 text-center text-light display-4">My Team</h1>
        </header>
        <main>
          <div class="container">
            <div class="m-5 row justify-content-around" id="worker-container">
              ${employeeCards}
            </div>
          </div>
        </main>  
        <footer>
          <p class="bottom-0 start-50 text-center">Team Profile Generator by Matt Gaither</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous">
        </script>  
      </body>
    </html>
    `
};

module.exports = generateHTML;