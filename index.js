const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./lib/shapes")


async function getUserInput() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => {
          return input.length > 0 && input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
      },
    ]);
  
    return userInput;
  }

  function saveSVGToFile(svg) {
    fs.writeFileSync('logo.svg', svg);
  }

  async function main() {
    const userInput = await getUserInput();
    const svg = generateSVG(userInput);
    saveSVGToFile(svg);
    console.log('Generated logo.svg');
  }
  
  main();