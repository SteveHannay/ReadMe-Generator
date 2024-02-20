const fs = require("fs")
const path = require('path')
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// const imgApache2_0License = ""
// const imgApache2_0License = ""
// const imgApache2_0License = ""

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is your Title of your project?',
    },
    {
        type: 'input',
        message: 'What is the Project Description?',
        name: 'description',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'list',
        message: 'What License is required?',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'],
    },

]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer
        // Ask the user Questions
        .prompt(questions)

        // With the Answers
        .then((answers) => {

            // Get Licence Image
            let licenseImage = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

            // Generate Markdown
            let markdown = generateMarkdown(answers, licenseImage)

            console.log(markdown)

            // Write File
            //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
            const filename = `Output/README.md`
        
            //fs.writeFile(filename, JSON.stringify(markdown, null, '\t'), (err) =>
            fs.writeFile(filename, markdown, (err) =>
                //log error or success to console
                err ? console.log(err) : console.log('Success!')
            )
          })


}

// function call to initialize program
init()
