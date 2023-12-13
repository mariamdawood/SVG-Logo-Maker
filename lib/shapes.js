// Set text, shape color, and text color their values
class TextandColor {
    // Initialize by setting them empty strings
    constructor(){
        this.textValue=''
        this.shapeColorValue=''
        this.textColorValue=''
    }

    // Set them to their values
    setText(text) {
        this.textValue = text;
    }

    setShapeColor(color) {
        this.shapeColorValue = color;
    }

    setTextColor(color) {
        this.textColorValue = color;
    }

}

// Set shapes to render their values using SVG and placing text, shape color, and text color to their values to allow the user to change them based on their input
class Triangle extends TextandColor {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="300" height="200">
            <polygon points="200,50 350,350 50,350" fill="${this.shapeColorValue}" />
            <text x="50%" y="60%" font-size="48" font-family="Georgia, serif" fill="${this.textColorValue}" text-anchor="middle"
                alignment-baseline="middle">${this.textValue}</text>
          </svg>`;
    }
}

class Square extends TextandColor {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="300" height="200">
        <rect x="10" y="10" width="130" height="130" fill="${this.shapeColorValue}" />
        <text x="50%" y="50%" font-size="32" font-family="Georgia, serif" fill="${this.textColorValue}" text-anchor="middle"
            alignment-baseline="middle">${this.textValue}</text>
      </svg>`;
    }
}

class Circle extends TextandColor {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="300" height="200">
        <circle cx="75" cy="75" r="75" fill="${this.shapeColorValue}" />
        <text x="50%" y="50%" font-size="32" font-family="Georgia, serif" fill="${this.textColorValue}" text-anchor="middle"
            alignment-baseline="middle">${this.textValue}</text>
      </svg>`;
    }
}

// Exporting shapes
module.exports = { Triangle, Square, Circle };
