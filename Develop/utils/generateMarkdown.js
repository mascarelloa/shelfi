// TODO: Created function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  else if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "GPLv2"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else {
    return " "
  }
}



// TODO: This is a Creatd function that will return the license 
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  } else {
    return "* [License](#license)"
  }
}

// TODO: Created function that returns the license section of README

function renderLicenseSection(license) {
  if (license !== "none") {
    return "# License"
  } else {
    return "";
  }
}

// TODO: Created function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## ${'Description \n' +data.description}
  ## Table of Contents \n
  * [Installation](#installation)
  * [usage](#usage)
  ${renderLicenseLink(data.license)}
  * [contributors](#contributors)
  * [Test](#test)
  * [Contact](#contact)
  # Installation
  To run the installation, use the following code:
  ${data.install}
  # usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  # Contributors
  ${data.contributors}
  # Test
  ${data.test}
  # Contact
  Moving forward, if you have questions or concerns feel free to contact me at the following given communcations: \n

  GitHub: \n
  ${data.username} \n
  Email \n
  ${data.email} \n

 
  

  
`;
}


module.exports = generateMarkdown;