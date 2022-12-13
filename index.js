// Import necessary packages/functions
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

/**
 * Asks question(s) based on what's question object/array of question objects is passed in
 * @param questions question object or array of question objects
 * @returns {Object} key/value pair data
 */
async function ask(questions) {
    return inquirer
       .prompt(questions)
        .then((data) => data);
}

/**
 * Writes generated markdown to output file
 * @param fileName the file that data will be written to
 * @param data the data necessary for generating markdown
 */
function writeToFile(fileName, data) {
    const output = generateMarkdown(data);

    fs.writeFile(fileName, output, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Prompts the user for information necessary for generating a README file, then generates README
 */
async function init() {
    // Ask the questions that require no followup first
    let answers = await ask(questions["BASIC"]);

    // Ask if there will be an installation process
    const installation_data = await ask(questions["INSTALLATION"]);

    // If there is an installation process, then
    if(installation_data.installation_bool) {
        // Prepare an array for installation steps
        let installation_steps = [];
        // Ask what the first step is
        let step_data = await ask(questions["STEP_FIRST"]);
        // Push step to data array
        installation_steps.push(step_data.step);

        // Enter loop
        while(true) {
            // Ask user if there is another step to add
            const step_new = await ask(questions["STEP_NEW"]);
            // If there is not another step, break out of loop
            if (!step_new.stop_bool) {
                break;
            }
            // Else ask what the next step in the process is
            step_data = await ask(questions["STEP_NEXT"]);
            // And push that data to our data array
            installation_steps.push(step_data.step);
        }

        // Then add our data array to our answers object under "installation"
        answers["installation"] = installation_steps;
    } else {
        // Else add 'No Installation Required' to our answers object, as an array (to maintain data consistency)
        answers["installation"] = ["No Installation Required."];
    }

    // Ask if there are multiple collaborators for this project
    const collaborators_data = await ask(questions["COLLABORATOR_MULTIPLE"]);

    // If there are multiple collaborators
    if(collaborators_data.collaborators_bool) {
        // Prepare an array to store collaborators
        let collaborators = [];

        while(true) {
            const collaborator = await ask(questions["COLLABORATOR"])

            if (collaborator.github_bool) {
                const github_data = await ask(questions["COLLABORATOR_GITHUB"])
                collaborators.push([collaborator.name, github_data.username]);
            } else {
                collaborators.push([collaborator.name, "GitHub currently unavailable."])
            }

            const collaborator_new_data = await ask(questions["COLLABORATOR_NEW"]);

            if (!collaborator_new_data.stop_bool) {
                break;
            }
        }

        answers["collaborators"] = collaborators;
    } else {
        let author_data = await ask(questions["AUTHOR"]);

        if (author_data.github_bool) {
            const github_data = await ask(questions["COLLABORATOR_GITHUB"])
            answers["collaborators"] = [[author_data.name, github_data.username]];
        } else {
            answers["collaborators"] = [[author_data.name, "GitHub currently unavailable."]];
        }
    }

    const feature_data = await ask(questions["FEATURE_FIRST_CONFIRM"]);

    if (feature_data.feature_bool) {
        let features = [];

        while (true) {
            const feature_data = await ask(questions["FEATURE"]);
            features.push(feature_data.feature);

            const another_feature_data = await ask(questions["FEATURE_NEW_CONFIRM"]);

            if (!another_feature_data.feature_bool) {
                break;
            }
        }

        answers["features"] = features;
    }

    console.log(answers);
    writeToFile(path.join(__dirname, "./render/README.md"), answers);
}

// Function call to initialize app
init();

