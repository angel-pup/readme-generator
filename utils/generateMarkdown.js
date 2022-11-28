const { badges, links, sections } = require('./licenses/license');

function renderLicenseBadge(license) {
    if(license === "None") {
        return "";
    }

    license = license.toUpperCase();

    return badges[license];
}

function renderLicenseLink(license) {
    if(license === "None") {
        return "";
    }

    license = license.toLowerCase();

    return links[license];
}

function renderLicenseSection(license) {
    if(license === "None") {
        return "";
    }

    license = license.toUpperCase();

    return sections[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    `;
}

module.exports = generateMarkdown;