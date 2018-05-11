// The require function accepts a string as an argument
// The string should be the relative path to the file being imported
const square = require('./square');

// If the string does not have a relative path (./ or ../),
// JavaScript will assume the import is a Node module / package
// array-equal is a sample dependency in node_modules directory
const equals = require('array-equal');

describe('square function', () => {
  it('should return the square of its input', () => {
    expect(square(5)).toBe(25);
    expect(square(10)).toBe(100);
    expect(square(-2)).toBe(4);
  });
});