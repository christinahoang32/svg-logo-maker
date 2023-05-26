// shapes
// Base class for shapes
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render(){
        return `<polygon points="150,20 275,180 25,180" fill="${this.color}" />`;
    }
  }

  class Square extends Shape {
    render(){
        return `<rect width="150" height="150" fill="${this.color}" />`;
    }
  }


function generateSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
    let shapeElement;
  
    switch (shape) {
      case 'circle':
        shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="150,20 275,180 25,180" fill="${shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect width="150" height="150" fill="${shapeColor}" />`;
        break;
      default:
        throw new Error('Invalid shape selected.');
    }
  
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
      </svg>
    `;
  
    return svg;
  }



module.exports =  {Circle, Triangle, Square, generateSVG};
// module.exports= generateSVG;
