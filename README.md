# ReadMe-Generator
Challenge 9 - ReadMe Generator (for es6-module)
 
Task - Create code for a "README File Generator" where the user can enter details about their Project into the Terminal in order to generate a README.md file in the Output folder. 

Developer - Steve Hannay

Completed - 20th Feb 2024


## Description

The aim of this project is to create a Terminal application for automatically creating README.md files for GitHub.

The user is presented with a series of Questions about the Project.

A README.md file is created in the Output folder and populated with the Answers which the user has given.


The following acceptance criteria was set for the project :

--------------------------------------------------------------------------------------------------------------------------

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README
  
--------------------------------------------------------------------------------------------------------------------------

During the process of working on this project I have learned more about the javascript coding, including the use of arrays of objects, writing files (fs), generating markdown text and retrieving user input via the terminal (inquirer). 

Furthermore, I have become a little more familiar with working with GitHub and ReadMe files.


## Installation

Download the files from GitHub repository https://github.com/SteveHannay/ReadMe-Generator.

Node.js and inquirer should be installed to run the application from the terminal.


## Usage

Open the terminal and navigate to the folder containing the index.js file.

To start the application type 'node index.js' into the terminal and press the Enter key.

A series of questions reganrding the application will appear in the terminal. Answer each question then press the Enter key


Here is a VIDEO of the ReadMe File Generator in use :

![Challenge 9 - Video of the ReadMe File Generator in use](/images/SteveHannay_ReadMeFileGenerator.webm)



## Credits

This is a single developer project, based upon what I have been taught by the Bootcamp team.

During the project I studied and used extracts of various code supplied by the Bootcamp when teaching the previous modules and I referenced various online resources including those listed below.

The following information was referenced while coding the project.

[NPM - Inquirer](https://www.npmjs.com/package/inquirer)

[lukasznojek - Generate Markdown Files](https://lukasznojek.com/blog/2020/03/generate-markdown-files/)

[github - Markdown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)




## License

No licence is currently associated with this project.


