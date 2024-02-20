// function to generate markdown for README
function generateMarkdown(data, licenseImage) {
  console.log("licenseImage = " + licenseImage)
  console.log(data)

  return `# ${data.title}

${licenseImage}

[Sample Link](www.github.com)

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
xx

` 

}

module.exports = generateMarkdown;
