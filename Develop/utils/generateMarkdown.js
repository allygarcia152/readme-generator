// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contriubtion}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this project, you can explore my repository at [github.com/${data.username}](www.github.com/${data.username}), and for further question, you can contact me via email at ${data.email}.

  ## License

  `;
};

module.exports = generateMarkdown;
