const { badges, links, sections } = require('./licenses/license');

function renderLicenseBadge(license) {
    license = license.toUpperCase();

    if(license === "NONE") {
        return "";
    }

    return badges[license];
}

function renderLicenseLink(license) {
    license = license.toUpperCase();

    if(license === "NONE") {
        return "";
    }

    return `${license} License Link: ${links[license]}`;
}

function renderLicenseSection(license) {
    license = license.toUpperCase();

    if(license === "NONE") {
        return "UNLICENSED \n";
    }

    return `LICENSE COURTESY OF  ${license}:\n ${sections[license]}`;
}

function renderInstallation(steps) {
    if(steps.length < 2) {
        return `#### ${steps}`;
    }
    let render = "";

    for(let i = 0; i < steps.length; i++) {
        render += `#### Step ${i+1}: ${steps[i]}\n`;
    }

    return render;
}

function renderFeatures(features) {
    if(!features) {
        return "No features listed at this time.";
    }

    let render = "";

    for(let i = 0; i < features.length; i++) {
        render += `#### - ${features[i]}\n`;
    }

    return render;
}

function renderCollaborators(peeps) {
    console.log(peeps);
    if(peeps.length < 2) {
        return `#### Author: ${peeps[0][0]}\n##### GitHub: ${peeps[0][1]}\n`;
    }

    let render = `#### Project brought to you by the following collaborators:\n`;

    for(let i = 0; i < peeps.length; i++) {
        render += `#### Name: ${peeps[i][0]}\n##### GitHub: ${peeps[i][1]}\n\n`;
    }

    return render;
}

function generateMarkdown(data) {
    return `# ${data.title}\n
### ${data.description}\n
## Table of Contents
- [Usage](#usage)
- [Features](#features)
- [Installation](#installation)
- [License](#license)
- [How to Contribute](#contribution)
- [Collaborators](#collaborators)

## Usage
#### ${data.usage}\n
## Features
${renderFeatures(data.features)}\n
## Installation
${renderInstallation(data.installation)}\n
## License
${renderLicenseBadge(data.license)}\n
#### ${renderLicenseSection(data.license)}\n
#### ${renderLicenseLink(data.license)}\n
## Contribution
#### ${data.contribution_plan}\n
## Collaborators
${renderCollaborators(data.collaborators)}\n`;
}

module.exports = generateMarkdown;