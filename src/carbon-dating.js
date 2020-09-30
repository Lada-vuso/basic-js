const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = +sampleActivity;
  if (typeof(sampleActivity) !== Number) {
    return false;
  } else {
    const reaction_rate = Math.LN2 / HALF_LIFE_PERIOD;
    const sample_age = Math.ceil(Math.log (MODERN_ACTIVITY / sampleActivity ) / reaction_rate);
    return sample_age;
  }
};
