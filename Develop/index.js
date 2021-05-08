const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: 'input',
      message: 'What is the name of your current project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give your project a short detailed description.',
      name: 'description',
      
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: data => {
            if(data !== ""){
                return true
            } 
            return "Please enter a valid user name."
        }
          
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: data => {
            if(data.match(/\S+@\S+\.\S+/)) {
                return true
            }
            return "Please enter a valid email address."
        }
      },
      {
        type: 'input',
        message: 'Please list any key installment inputs.',
        name: 'install',
        
      },
      {
        type: 'input',
        message: 'Enter any usage information needed by the user for github, VsCode etc.',
        name: 'usage',
        
      },
    
      {
        type: 'list',
        message: 'What license should your project have?',
        choices: ['MIT', 'Apache', 'GPLv3', 'NONE'],
        name: 'license',
    },

    {
        type: 'input',
        message: 'List any contributers for the user to the current repo ?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What command should be ran to run tests?',
        name: 'test',
      },
  

  ];
 // The function to create and write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success")); 
}

// The function to help initialize the application
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        let answers = markdown(data);
        console.log("This is the template" + answers);
        writeToFile("README.md", answers)
    })
}

// the Function to call and initialize the application
init();