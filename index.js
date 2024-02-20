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
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'], // sample selection
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

            // Get an Image for the License 
            let licenseImage = getLicenseImage(answers)


            // Get link to GitHub profile



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


// Supporting Functions

// Get Licence Image 
function getLicenseImage(answers) {

    let result = ""

    // return an image for the selected license (note : this is a sample set of licenses and images)
    switch(answers.license) {

        case "Apache 2.0 License" :
            result = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break

        case "Boost Software License 1.0" :
            result = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            break

        case "BSD 3-Clause License" :
            result = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break
    }

    return result

}



