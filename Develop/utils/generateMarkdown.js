// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'GNU GPLv3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'The Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    return ''
  };
};

// Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'MIT') {
    return '[https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)';
  } else if (license === 'Apache 2.0') {
    return '[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/'
  } else if (license === 'BSD 3-Clause') {
    return '[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'GNU GPLv3'){
    return '[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'ISC'){
    return '[https://choosealicense.com/licenses/isc](https://choosealicense.com/licenses/isc)'
  } else if (license === 'The Unlicense'){
    return '[https://choosealicense.com/licenses/unlicense/](https://choosealicense.com/licenses/unlicense/)'
  } else {
    return ''
  }
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;

  } else if (license === 'Apache 2.0') {
    return `This project is licensed under the Apache 2.0 license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;

  } else if (license === 'BSD 3-Clause') {
    return `This project is licensed under the BSD 3-Clause license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;

  } else if (license === 'GNU GPLv3'){
    return `This project is licensed under the GNU GPLv3 license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;
  
  } else if (license === 'ISC'){
    return `This project is licensed under the ISC license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;

  } else if (license === 'The Unlicense'){
    return `This project is licensed under the The Unlicense license. To abtain a copy of the license, visit: ${renderLicenseLink(license)}`;

  } else {
    return ''
  }
};

// Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
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
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this project, you can explore my repository at [github.com/${data.username}](www.github.com/${data.username}), and for further question, you can contact me via email at ${data.email}.

  ## License
  ${renderLicenseSection(data.license)}
  `;
};

module.exports = generateMarkdown;
