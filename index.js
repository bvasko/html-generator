const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./html-gen.js');

const questions = [
{
  type: 'input',
  message: 'Enter your name',
  name: 'name'
},
{
  type: 'input',
  message: 'Enter a short bio',
  name: 'bio'
},
{
  type: 'input',
  message: 'Enter your linkedin account name',
  name: 'linkedin'
},
{
  type: 'input',
  message: 'Enter your github user name',
  name: 'github'
},
{
  type: 'input',
  message: 'Enter your location',
  name: 'location'
}
];

inquirer
  .prompt(questions)
  .then((response) => {
    const r = generateHTML(response);
    fs.writeFile(`bio_${response.name}.html`, r, (err) => {
      //console.log(err);
    });
  });
