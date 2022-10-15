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

  addStr = addStr.concat(options.addition, options.additionSeparator);
  addStr = addStr.repeat(options.additionRepeatTimes);
  addStr = addStr.slice(0, addStr.length - options.additionSeparator.length);
  str = str.concat(addStr, options.separator);
  str = str.repeat(options.repeatTimes);
  str = str.slice(0, str.length - options.separator.length);

  return str;
}

module.exports = {
  repeater
};