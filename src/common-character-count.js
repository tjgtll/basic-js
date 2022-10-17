const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
	let result = 0;
	let array1 = s1.split('');
	let array2 = s2.split('');

	for(let i = 0; i <= array1.length; i++) {
		if(array2.indexOf(array1[i]) >= 0) {
			let step = array2.indexOf(array1[i]);
			result += 1;
			array2.splice(step, 1)
		}
		}

	return result;
}

module.exports = {
  getCommonCharacterCount
};
