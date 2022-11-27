const inquirer = require('inquirer');
const fs = require('fs');
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = {
    "NEW_STEP": {
        type: "list",
        name: "continue_loop",
        message: "Add an installation step?",
        choices: ["Yes", "No"]
    },
    "STEP": {

    },
    "BASIC": [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project: "
        },
        {
            type: "input",
            name: "usage",
            message: "What would you say is the purpose of your project?"
        },
        {
            type: "list",
            name: "installation_bool",
            message: "Would you like to add an installation process?",
            choices: ["Yes", "No"]
        }
    ]
}

async function ask(questions) {
    return inquirer
       .prompt(questions)
        .then((data) => {
            return data;
        });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const output = generateMarkdown(data);

    fs.writeFile(fileName, output, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await ask(questions["BASIC"]);
    let installation_steps = [];

    if(answers.installation_bool === "Yes") {
        while(true) {
            installation_steps.push(await ask(questions["STEP"]));

            const new_step = await ask(questions["NEW_STEP"]);

            if (new_step.continue_loop === "No") {
                break;
            }
        }
    }

    answers["installation"] = installation_steps;

    console.log(answers);
}

// Function call to initialize app
init();

