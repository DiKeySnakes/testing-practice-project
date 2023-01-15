const caesarCipher = require('./caesarCipher');

test('caesarCipher', () => {
  expect(caesarCipher('convention')).toBe('pbairagvba');
});
