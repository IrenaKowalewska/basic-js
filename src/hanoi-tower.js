const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSeconds = {};
    turnsSeconds.turns = Math.pow(2, disksNumber) - 1;
    turnsSeconds.seconds = Math.floor(turnsSeconds.turns / (turnsSpeed / 3600));
    return turnsSeconds;  
};
