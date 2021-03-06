const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let time = new Date(date.getTime());
  let month = time.getMonth();

  if (month == 2 || month == 3 || month == 4) {
    return 'spring';
  } else if (month == 5 || month == 6 || month == 7) {
    return 'summer';
  } else if (month == 8 || month == 9 || month == 10) {
    return 'autumn';
  } else if (month == 11 || month == 0 || month == 1) {
    return 'winter';
  } 
};
