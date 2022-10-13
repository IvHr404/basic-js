const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(dream) {
  nameDream = '';

  if(typeof dream !== 'object' || dream === undefined || dream === null || !Array.isArray(dream)){
    return false;
  }


  let arr = dream.filter((num) => {
    if(typeof num !== "number" 
    && typeof num !== "object" 
    && typeof num !== "boolean"){
      return num;
    }
  });

  arr = Array.from(arr, x => x.trim().toUpperCase());
  arr.sort();
  arr.forEach((el) => nameDream += el.toUpperCase().charAt(0));

  return nameDream.length === 0 ? false: nameDream;
}

module.exports = {
  createDreamTeam
};
