// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  //return `# ${data.title}

  return `# TITLE

  _This text is italicized_
  
    <div>test test line</div>

    **This is bold text**

  `;
}

module.exports = generateMarkdown;
