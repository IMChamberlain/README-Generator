// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features does your project have?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing to your project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If users have questions, what is a good email to reach you at?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Successfully wrote to ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Features](#features)
6. [Contributing](#contributing)
7. [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License(s)
${answers.license}

## Features
${answers.features}

## Contributing
${answers.contributing}

## Questions
If you have any questions, you can reach out to me at ${answers.questions}.
`;

            writeToFile('README.md', readmeContent);
        })
        .catch((err) => {
            console.error('Error initializing app:', err);
        });
}

// Function call to initialize app
init();
