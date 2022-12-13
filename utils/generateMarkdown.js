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

    return `${license} LINK: ${links[license]}`;
}

function renderLicenseSection(license) {
    license = license.toUpperCase();

    if(license === "NONE") {
        return "UNLICENSED \n";
    }

    return `LICENSE COURTESY OF  ${license}:\n ${sections[license]}`;
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
${data.usage}\n
## Features
${data.features}\n
## Installation
${data.installation}\n
## License
${renderLicenseBadge(data.license)}\n
${renderLicenseSection(data.license)}\n
${renderLicenseLink(data.license)}\n
## Contribution
${data.contribution_plan}\n
## Collaborators
${data.collaborators}\n`;
}

module.exports = generateMarkdown;