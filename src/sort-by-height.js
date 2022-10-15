const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let item, num = -1;

  for(let i = 0; i < arr.length; i ++) {
    for(let k = i; k < arr.length; k++) {
      if(arr[i] > arr[k] && arr[i] !== num && arr[k] !== num) {
        item = arr[i];
        arr[i] = arr[k];
        arr[k] = item;
      }
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};