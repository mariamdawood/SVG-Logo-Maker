const fs = require('fs'); // Importing file system to handle where the generated file should go
const inquirer = require('inquirer'); // Import inquirer library for prompts
const { Triangle, Square, Circle } = require("./lib/shapes"); // Importing shapes

// Function to prompt user for input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Text: Enter up to three characters:',
            validate: input => {
                if (input.trim() === '') {
                    return 'Please enter a value.';
                }
                return input.length <= 3 || 'Maximum length is 3 characters'
            }
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
            validate: input => input.trim() !== '' || 'Please enter a value.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
            validate: input => input.trim() !== '' || 'Please enter a value.'
        }
    ]);
}

// Function to return shapes based on shapes value found on shapes.js file
function createShape(shape) {
    switch (shape) {
        case 'Triangle':
            return new Triangle();
        case 'Square':
            return new Square();
        case 'Circle':
            return new Circle();
    }
}

// Function to generate SVG based on user input and save the file
function generateSVG(userInput) {
    try {
        // Create the selected shape
        const shape = createShape(userInput.shape);
        // Set text, shape color, and text color based on user input
        shape.setText(userInput.text)
        shape.setShapeColor(userInput.shapeColor);
        shape.setTextColor(userInput.textColor)

        // Render shape
        const svgContent = shape.render();

        // Generate logo.svg file based on user input in the file system
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg...');
        // Handle errors during the process
    } catch (error) {
        console.error('Error generating SVG:', error.message);
    }
}

// Run the entire application
function run() {
    // Prompt the user for input, then generate based on user input using generateSVG function 
    promptUser().then(userInput => {
        generateSVG(userInput);
    });
}

// Run the program when everything is done
run();