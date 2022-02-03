// TODO: Include packages needed for this application
const inquirer = require("./inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./util/generatorMarkdown');
const { fstat } = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {

    type: "input",
    message: "Please enter the title of the project.",
    name: "Title"

},

{
    type: "input",
    message: "Give a detailed description of what your project is about.",
    name: "Description"
},
{
    type: "input",
    message: "Please enter your GitHub username",
    name: "Username"
},

{
    type: "input",
    message: "Please enter your email address",
    name: "Email"
},
{
    type:"input",
    nessage:"What does the user need to install?",
    name:"Installation"
},
{
    type:"input",
    message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name:"stepstoinstall"
},
{
    type: "input",
    message:"Provide instructions and examples for use.",
    name:"usage"
},
{ 
    type: "list",
    message: "What liscence does your project use?",
    choices: ['none', 'inquirer']

},

])
.then((answer) => {
    console.log();



});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions, answers)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
