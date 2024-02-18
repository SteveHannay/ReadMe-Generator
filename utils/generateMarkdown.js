// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  //return `# ${data.title}

  return `# TITLE

[Visit GitHub!](www.github.com)

_This text is italicized_ 
**This is bold text**

## Description 
## Table of Contents 
    * Installation 
    * Usage 
    * License 
    * Contributing 
    * Tests 
    * Questions
    * 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
   
   
## Installation 
## Usage 
## License 
## Contributing 
## Tests 
## Questions

  `;
}

module.exports = generateMarkdown;
