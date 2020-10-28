const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof data === undefined) {
    return 'Unable to determine the time of year!';
  }
  // } else if (typeof data !== )
  let d = new Date(date);
  let n = d.getMonth();
  // console.log(n);
  if (n >= 3 && n < 6) {
    return "spring";
  } else if (n >= 6 && n < 9) {
    return "summer";
  } else if (n >= 9 && n < 12) {
    return "fall";
  } else return "winter";
 
};
