const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;
const Triangle = require('./shapes').Triangle;


// describe('Circle', () => {
//     test('renders a circle SVG', () => {
//       const circle = new Circle();
//       const svg = circle.render();
//       // Write assertions to check if the rendered SVG is correct
//       expect(svg).toContain('<circle');
//       expect(svg).toContain('cx=150');
//       expect(svg).toContain('cy=100');
//       expect(svg).toContain('r=50');
//     });
//   });

//   describe('Square', () => {
//     test('renders a square SVG', () => {
//       const square = new Square();
//       const svg = square.render();
//       // Write assertions to check if the rendered SVG is correct
//       expect(svg).toContain('<rect');
//       expect(svg).toContain('width=150');
//       expect(svg).toContain('height=150');
//     });
//   });

//   describe('Triangle', () => {
//     test('renders a triangle SVG', () => {
//       const triangle = new Triangle();
//       const svg = triangle.render();
//       // Write assertions to check if the rendered SVG is correct
//       expect(svg).toContain('<polygon');
//       expect(svg).toContain('points=150,20 275,180 25,180');
//     });
//   });

//   const Triangle = require('./lib/triangle');

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Circle", () => {
    test("should render svg for a green circle element", async() => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});



describe("Triangle", () => {
    test("should render svg for a green triangle element", async() => {
        const expectedSvg = '<polygon points="150,20 275,180 25,180" fill="green" />';
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg = '<polygon points="150,20 275,180 25,180" fill="blue" />';
        const triangle = new Triangle();
        triangle.setColor("blue");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    test("should render svg for a green square element", async() => {
        const expectedSvg = '<rect width="150" height="150" fill="green" />';
        const square = new Square();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg = '<rect width="150" height="150" fill="blue" />';
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

