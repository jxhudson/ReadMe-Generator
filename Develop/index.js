// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of Project?",
        name: 'Title'
    },
{
    type: "input",
    message: "Enter Project Description?",
    name: 'Description'
},
{
    type: "input",
    message: "Installation Instructions?",
    name: 'Installation'
},
{
    type: "input",
    message: "How is this Used?",
    name: 'Usage'
},
{
    type: "input",
    message: "What License was used for this project?",
    name: 'License'
},
{
    type: "input",
    message: "Did anyone else contribute to this project?",
    name: 'Contributing'
},
{
    type: "input",
    message: "How would you test this project?",
    name: 'Tests'
},
{
    type: "input",
    message: "Input your github name?",
    name: 'github'
},
{
    type: "input",
    message: "Enter in email?",
    name: 'email'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Congrats!' + fileName + 'generated!'));   
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile('README.md', generateMarkdown(data));
    }) 
}

// Function call to initialize app
init();
