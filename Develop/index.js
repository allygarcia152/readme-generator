//Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a step-by-step descriptions of of how to install your project. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter your installation instructions.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter your usage instructions.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide a description of what kinds of contributions you are seeking and your guidelines. (Required)',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide instructions on how to run all tests on your project. (Required)',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please enter your test instructions.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'Provide your GitHub username. (Required)',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide your email address. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address.');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for this project. (Required)',
      choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'GNU GPLv3', 'ISC', 'WTFPL'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please enter your email address.');
          return false;
        }
      }
    },
  ])
};

//Create a function to write README file
const writeToFile = fileContent => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      //if there is an error reject the pormise and send the error to the promises .catch() method
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

//Create a function to initialize app
const init = () => {
  questions()
  .then(readmeData => {
    return generateMarkdown(readmeData);
  })
  .then(pageREADME => {
    return writeToFile(pageREADME);
  })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  // })
  .catch(err => {
    console.log(err);
  });
}

// Function call to initialize app
init();


