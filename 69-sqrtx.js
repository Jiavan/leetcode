/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var r = x;

    if (x <= 1) {
        return x;
    }

    while (r > x / r) {
        r = parseInt((r + x / r) / 2);
    }

    return parseInt(r);
};