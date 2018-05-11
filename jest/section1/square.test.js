const square = require('./square');

describe('toBeUndefined and toBeDefined', () => {
  it('should offer a shortcut for comparing to undefined', () => {
    const user = {
      name: 'Boris',
    };
    const { name, age } = user;
    expect(age).toBe(undefined);
    expect(age).toBeUndefined();

    // Not checking the exact value of name, only that it exists
    // The variable's value is proof the property exists on user object
    expect(name).toBeDefined();
    expect(age).not.toBeDefined();
  });
});