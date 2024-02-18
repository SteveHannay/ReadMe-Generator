// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  //return `# ${data.title}

  return `# TITLE

  _This text is italicized_

  **This is bold text**

  * Description 
  * Table of Contents 
  * Installation 
  * Usage 
  * License 
  * Contributing 
  * Tests 
  * Questions
  * 
  * 
 

    <div>test test line</div>

  `;
}

module.exports = generateMarkdown;
