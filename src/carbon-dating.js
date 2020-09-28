const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  const k =  0.693 / HALF_LIFE_PERIOD;
  let activityToNam = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(activityToNam) || activityToNam <= 0 || activityToNam> 15) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / activityToNam) / k);
};


