// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  switch (license) {
    case "MIT":
      section = "This project is licensed under the MIT license.";
      break;
    case "Apache":
      section = "This project is licensed under the Apache license.";
      break;
    case "GPL":
      section = "This project is licensed under the GPL license.";
      break;
    case "BSD":
      section = "This project is licensed under the BSD license.";
      break;
    default:
      section = "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

export default generateMarkdown;
