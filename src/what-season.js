const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date){
  if (!date) {
    console.log('[egc]');
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== "[object Date]" || 
      isNaN(date)) 
      throw new Error('Something went wrong'); 

  let d = new Date(date);
  let n = d.getMonth()+1;
  
  if (n >= 3 && n < 6) {
    return "spring";
  } else if (n >= 6 && n < 9) {
    return "summer";
  } else if (n >= 9 && n < 12) {
    return "fall";
  } else {
    return "winter";
  } 
};