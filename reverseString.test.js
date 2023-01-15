const reverseString = require('./reverseString');

test('reverse Hello', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
