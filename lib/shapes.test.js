const { Triangle, Square, Circle } = require("./shapes");

const input = {
    text: "inputText",
    shapeColor: "inputShapeColor",
    textColor: "inputTextColor",
};

// Test for Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setText(input.text)
        shape.setShapeColor(input.shapeColor);
        shape.setTextColor(input.textColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="300" height="200">
            <polygon points="200,50 350,350 50,350" fill="${input.shapeColor}" />
            <text x="50%" y="60%" font-size="48" font-family="Georgia, serif" fill="${input.textColor}" text-anchor="middle"
                alignment-baseline="middle">${input.text}</text>
          </svg>`);
    });
});

// Test for Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        shape.setText(input.text)
        shape.setShapeColor(input.shapeColor);
        shape.setTextColor(input.textColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="300" height="200">
        <rect x="10" y="10" width="130" height="130" fill="${input.shapeColor}" />
        <text x="50%" y="50%" font-size="32" font-family="Georgia, serif" fill="${input.textColor}" text-anchor="middle"
            alignment-baseline="middle">${input.text}</text>
      </svg>`);
    });
});

// Test for Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        shape.setText(input.text)
        shape.setShapeColor(input.shapeColor);
        shape.setTextColor(input.textColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="300" height="200">
        <circle cx="75" cy="75" r="75" fill="${input.shapeColor}" />
        <text x="50%" y="50%" font-size="32" font-family="Georgia, serif" fill="${input.textColor}" text-anchor="middle"
            alignment-baseline="middle">${input.text}</text>
      </svg>`);
    });
});

