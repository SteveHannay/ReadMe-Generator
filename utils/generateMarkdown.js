// function to generate markdown for README
function generateMarkdown(data, licenseImage) {
  console.log("licenseImage = " + licenseImage)
  console.log(data)

  return `# ${data.title}

[Sample Link](www.github.com)


_This text is italicized_ 
**This is bold text**

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
## Usage 
## License 
${licenseImage}


## Contributing 
## Tests 
## Questions

  ` + 
   `TEST 2
  

  `  

}

module.exports = generateMarkdown;
