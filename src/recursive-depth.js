const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    let counter = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        counter +=  this.calculateDepth(item);
        // this.calculateDepth(item);
      }
    }
    
    return counter;
  }
};

