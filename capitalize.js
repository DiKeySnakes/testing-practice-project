const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

console.log(capitalize('congratulations'));

module.exports = capitalize;
