// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return [`[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]`]
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `${renderLicenseBadge(license)}(https://opensource.org/licenses/MIT)`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return (
      `## License <a name="license"></a>
    
This Project uses the ${license} license`
    )
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseLink(data.license)}

  ##Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation <a name="installation"></a>

  The following must be installed to run the application: ${data.install}

## Usage <a name="usage"></a>

​This application is used for ${data.use}

${renderLicenseSection(data.license)}

## Contributing <a name="contributing"></a>

​Contributors: ${data.contribute}

## Tests <a name="tests"></a>

  To run tests, run the command: ${data.test}
`;
}

module.exports = generateMarkdown;
