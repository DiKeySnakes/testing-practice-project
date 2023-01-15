const capitalize = require('./capitalize');

test('reverse Hello', () => {
  expect(capitalize('congratulations')).toBe('Congratulations');
});
