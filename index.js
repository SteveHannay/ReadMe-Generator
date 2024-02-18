const fs = require("fs")
const path = require('path')
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'list',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
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

            // Generate Markdown
            let markdown = generateMarkdown(answers)

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
