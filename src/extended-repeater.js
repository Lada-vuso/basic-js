const CustomError = require("../extensions/custom-error");


module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // if (str === null) {
  //   str = "null";
  // }
  str = String(str);
  
  let strAdd = "";
  let strNew = "";

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 0;
    strAdd = "";
  }

  if (options.addition === undefined) {
    options.addition = "";
  }
  
  options.addition = String(options.addition);
  
  if (!options.separator) {
    options.separator = `+`;
  }

  if (!options.additionSeparator) {
    options.additionSeparator = `|`;
  }
 
  if (options.additionRepeatTimes > 0) {
    for (let j = 1; j < options.additionRepeatTimes; j++) {
      strAdd += options.addition + options.additionSeparator;
      console.log('[strAdd]', strAdd);
    }
    strAdd += options.addition;
  } else {
    strAdd = options.addition;
  }

  if (options.repeatTimes > 1) {
    for (let i = 1; i < options.repeatTimes; i++) {
      strNew += str + strAdd + options.separator;
    }
    strNew = strNew + str + strAdd;
  } else {
    strNew = str + strAdd;
  }
  return strNew;
};
  