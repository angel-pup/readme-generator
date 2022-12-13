const questions = {
    "FEATURE_FIRST_CONFIRM": {
        type: "confirm",
        name: "feature_bool",
        message: "Would you like to add a known feature?",
        default: false
    },
    "FEATURE_NEW_CONFIRM": {
        type: "confirm",
        name: "feature_bool",
        message: "Would you like to add another known feature?",
        default: false
    },
    "FEATURE": {
        type: "input",
        name: "feature",
        message: "What feature do you want to add?"
    },
    "INSTALLATION": {
        type: "confirm",
        name: "installation_bool",
        message: "Is an installation process necessary for this project?",
        default: false
    },
    "STEP_NEW": {
        type: "confirm",
        name: "stop_bool",
        message: "Add an installation step?",
        default: false
    },
    "STEP_FIRST": {
        type: "input",
        name: "step",
        message: "What's the first step?"
    },
    "STEP_NEXT": {
        type: "input",
        name: "step",
        message: "What's the next step?"
    },
    "AUTHOR": [
        {
            type: "input",
            name: "name",
            message: "Please provide author's name: "
        },
        {
            type: "confirm",
            name: "github_bool",
            message: "Do they have a GitHub?",
            default: false
        }
    ],
    "COLLABORATOR_MULTIPLE": {
        type: "confirm",
        name: "collaborators_bool",
        message: "Are there multiple collaborators for this project?",
        default: false
    },
    "COLLABORATOR_NEW": {
        type: "confirm",
        name: "stop_bool",
        message: "Add another collaborator?",
        default: false
    },
    "COLLABORATOR": [
        {
            type: "input",
            name: "name",
            message: "Please give the name of a Collaborator: "
        },
        {
            type: "confirm",
            name: "github_bool",
            message: "Do they have a GitHub?",
            default: false
        }
    ],
    "COLLABORATOR_GITHUB": {
        type: "input",
        name: "username",
        message: "What's their GitHub username?"
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
            message: "Please provide a description for your project: ",
            default: "TBD..."
        },
        {
            type: "input",
            name: "usage",
            message: "What would you say is the purpose of your project?",
            default: "TBD..."
        },
        {
            type: "list",
            name: "license",
            message: "What license would you like to add?",
            choices: ["None", "MIT", "APACHE", "BOOST", "CC0", "IBM", "ISC", "ZLIB"],
            default: "None"
        },
        {
            type: "input",
            name: "contribution_plan",
            message: "How can others contribute to this project?",
            default: "No contribution plans at this time."
        }
    ]
}

module.exports = questions;