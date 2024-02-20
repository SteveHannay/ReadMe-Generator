// function to generate markdown for README
function generateMarkdown(data, licenseImage, gitHubProfile) {

  // console.log("licenseImage = " + licenseImage)  <-- uncomment to debug

  // build markdown
  return `# ${data.title}

${licenseImage}

## Description 
${data.description}

## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
This application requires the following license (if any) : ${data.license}

## Contributing 
${data.contributing}

## Tests 
${data.tests}

## Questions
If you have any questions please contact me. 
Email : ${data.emailAddress}  
GitHub : ${gitHubProfile}

` 

}


// export the generateMarkdown function for use by other modules
module.exports = generateMarkdown;
