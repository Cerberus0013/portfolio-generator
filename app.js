const inquirer = require("inquirer");

const promptProject = portfolioData => {
// if there no project array, create one
if(!portfolioData.projects){ 
portfolioData.projects =[]
 
}

inquirer.prompt().then (projectData => {
  portfolioData.projects.push(projectData);
  if(projectData.confirmAddProject){
    return promptProject(portfolioData);
  }else {
    return portfolioData;
  }
})
 
} 
  //if theres no 'projects array property create one
 

// const fs = require('fs')
// const generatePage = require('./src/page-template.js');
// ;

// const pageHTML = generatePage(name, github)

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log("Portfolio Complete! check out index.html to see the output!");
// })

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your Github Name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};
promptUser().then((answers) => console.log(answers))

const promptProject = () => {
console.log(`
  =======================
  Add a New Project
  ======================
`);
return inquirer.prompt([
  {
    type: "imput",
    name: "name",
    message: "What is the name of your project (Required)?",
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Please enter your Project's name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter your description");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you build this project with? (check all that apply)",
    choices: [
      "Javascript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "link",
    message: "Enter the Gihub link to you project (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("Please enter your Github Link");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "feature",
    message: "Would you like to feature this project?",
    default: false,
  },
  {
    type: "confirm",
    name: "confirmAddProject",
    message: "Would you like to enter another project?",
    default: false,
  },
]);

}

promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});