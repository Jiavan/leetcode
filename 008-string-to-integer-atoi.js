/**
 * @param {string} str
 * @return {number}
 */
var safeNum = function(x) {
    var max = 2 ** 31 - 1;
    var min = -(2 ** 31);

    if (x > max) {
        return max;
    } else if (x < min) {
        return min;
    } else {
        return x;
    }
};

var myAtoi = function(str) {
    var x = parseInt(str);

    return isNaN(x) ? 0 : safeNum(x);
};