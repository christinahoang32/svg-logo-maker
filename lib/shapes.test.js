const Triangle = require('./lib/shapes.test.js');

test('Triangle render() method returns expected SVG string with given shape color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  expect(shape.render()).toEqual(expectedSVG);
});