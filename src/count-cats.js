const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  if(arr.length === 0){
    return 0;
  }
  let count = 0;
  const cat = '^^';

  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr[i].length; y++){
      if(arr[i][y] === cat){
        count += 1;
      }
    }
  }

  return count;
}

module.exports = {
  countCats
};
