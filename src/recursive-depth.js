const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (!(Array.isArray(arr))) {
      return 0;
    }
    if (arr === []) {
      return 1
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const getNewDepth = this.calculateDepth(arr[i]) + 1;
            if (getNewDepth > depth) {
              depth = getNewDepth;
            }
        }
    }
    
    return depth;
  }
}