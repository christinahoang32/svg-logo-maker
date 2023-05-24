const Circle = require(Circle);
const Square = require(Square);
const Triangle = require(Triangle);

describe('Circle', () => {
    test('renders a circle SVG', () => {
      const Circle = new Circle();
      const svg = circle.render();
      // Write assertions to check if the rendered SVG is correct
      expect(svg).toContain('<circle');
      expect(svg).toContain('cx=150');
      expect(svg).toContain('cy=100');
      expect(svg).toContain('r=50');
    });
  });
  
  describe('Square', () => {
    test('renders a square SVG', () => {
      const Square = new Square();
      const svg = square.render();
      // Write assertions to check if the rendered SVG is correct
      expect(svg).toContain('<rect');
      expect(svg).toContain('width=150');
      expect(svg).toContain('height=150');
    });
  });
  
  describe('Triangle', () => {
    test('renders a triangle SVG', () => {
      const Triangle = new Triangle();
      const svg = triangle.render();
      // Write assertions to check if the rendered SVG is correct
      expect(svg).toContain('<polygon');
      expect(svg).toContain('points=150,20 275,180 25,180');
    });
  });