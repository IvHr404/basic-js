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
function repeater( str, options) {
  let addStr = '';
  str = `${str}`;

  let opt = {
    repTime : options.repeatTimes === undefined ? 1 : options.repeatTimes,
    separ : `${options.separator}` === '' ? '+' : `${options.separator}`,
    add : `${options.addition}` === '' ? '': `${options.addition}`,
    addRepTime : options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes,
    addSeparator : `${options.additionSeparator}` === '' ? '|' : `${options.additionSeparator}`,
  };

  addStr = addStr.concat(opt.add, opt.addSeparator);
  addStr = addStr.repeat(opt.addRepTime);
  addStr = addStr.slice(0, addStr.length - opt.addSeparator.length);
  str = str.concat(addStr, opt.separ);
  str = str.repeat(opt.repTime);
  str = str.slice(0, str.length - opt.separ.length);

  return str;
}

module.exports = {
  repeater
};
