const fs = require("fs")
const path = require('path')
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")



// array of questions for user to answer
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
    },
    {
        type: 'input',
        message: 'What are the Installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the Contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the Test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What License is required?',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'], // sample selection
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUserName',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'emailAddress',
    },

]


// function call to initialize program
init()


// function to initialize program
function init() {

    inquirer
        // Ask the user Questions
        .prompt(questions)

        // With the Answers
        .then((answers) => {

            // Get an Image for the License 
            let licenseImage = getLicenseImage(answers)

            // Get a link to the users GitHub profile home page
            let gitHubProfile = getGitHubProfile(answers)

            // Generate Markdown
            let markdown = generateMarkdown(answers, licenseImage, gitHubProfile)

            console.log("")
            console.log("MARKDOWN : ")
            console.log("----------------------------------------------------------------------------------")
            console.log(markdown)
            console.log("----------------------------------------------------------------------------------")

            // Write File
            const filename = `Output/README.md`  // README file will be created in the OUTPUT Folder
        
            fs.writeFile(filename, markdown, (err) =>
                err ? console.log(err) : console.log('README.md has been created in the Output folder')  //log error or success to console
            )

          })

}




// Supporting Functions
// --------------------


// Get Licence Image 
function getLicenseImage(answers) {

    // return an image for the selected license (note : this is a sample set of licenses and images)
    let result = ""
    
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


// Get GitHub Profile
function getGitHubProfile(answers) {

    // return a link to the users GitHub home page
    let result = ""

    if (answers.gitHubUserName !== "") {
        result = "[GitHub Home Page](https://github.com/" + answers.gitHubUserName + ")"
    }

    return result

}


