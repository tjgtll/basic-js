const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  return str.replace(/([a-z])\1*/g, (value) => {
    if(value.length > 1) {
      return (value.length + value[0]);
    } else {
      return value[0];
    }
  })
}

module.exports = {
  encodeLine
};
