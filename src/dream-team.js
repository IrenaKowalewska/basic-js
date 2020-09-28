const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if(!Array.isArray(array)) return false;
  let nameTeam = [];
  for (let i = 0; i < array.length; i++){
    if(typeof array[i] === 'string'){
      nameTeam.push(array[i].trim().charAt(0).toUpperCase());
    }
  }
  return nameTeam.sort().join('');
};
