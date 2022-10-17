const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArray = domains.map(item => {
  	return item.split('.').reverse();
  })

	newDomains = newArray.map(item => {
  if(item[2]) {
  return ([`.${item[0]}`, `.${item[0]}.${item[1]}`, `.${item[0]}.${item[1]}.${item[2]}`])
  } else {
  	return ([`.${item[0]}`, `.${item[0]}.${item[1]}`])
  }})
  let result = newDomains.reduce((elem1, elem2) => elem1.concat(elem2), []);
	return result.reduce(function(elem1, elem2) {
  elem1[elem2] = (elem1[elem2] || 0) + 1;
  return elem1;
}, {});
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
