// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  //return `# ${data.title}

  return `# ${data.title}

[Sample Link](www.github.com)


_This text is italicized_ 
**This is bold text**

## Description 

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
## Contributing 
## Tests 
## Questions

  `;
}

module.exports = generateMarkdown;
