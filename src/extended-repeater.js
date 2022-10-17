const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = '';
  let times = options.repeatTimes ? options.repeatTimes : 1;
  let addTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  for (let i = 0; i < times; i++) {
    result += str;
    if (options.addition + '' !== 'undefined') {
      for (let j = 0; j < addTimes; j++) {
        result += options.addition + '';
        if (j + 1 < addTimes) {
          result += options.additionSeparator ? options.additionSeparator : '|';
        }
      }
    }
    if (i + 1 < times) {
      result += options.separator ? options.separator : '+';
    }
  }
  return result;
}

module.exports = {
  repeater
};
