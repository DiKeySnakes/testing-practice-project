const calculator = require('./calculator');

test('add', () => {
  expect(calculator(3, '+', 2)).toBe(5);
});

test('subtract', () => {
  expect(calculator(9, '-', 7)).toBe(2);
});

test('multiply', () => {
  expect(calculator(3, 'x', 3)).toBe(9);
});

test('divide', () => {
  expect(calculator(25, '/', 5)).toBe(5);
});
