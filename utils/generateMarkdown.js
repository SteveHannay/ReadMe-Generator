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
xx

## Usage 
xx

## License 
This application requires the following license (if any) : ${data.license}

## Contributing 
xx

## Tests 
xx

## Questions
If you have any questions please contact 
Email : ${data.emailAddress}     
GitHub : ${gitHubProfile}

` 

}


// export the generateMarkdown function for use by other modules
module.exports = generateMarkdown;
