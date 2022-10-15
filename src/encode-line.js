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
  let resultStr = '';
  let index;

  for(let i = 0; i < str.length; i++) {
    let count = 0;
    for(let k = i; k < str.length; k++) {
      if(str[i] === str[k]) {
        count++;
        index = k;
      }
      else {
        break;
      }
    }
    i = index;
    resultStr += `${count === 1 ? '': count}${str[i]}`;

  }

  return resultStr;
}

module.exports = {
  encodeLine
};