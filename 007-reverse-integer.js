/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var pre = x > 0 ? '+' : '-';

    x = Math.abs(x);
    x = Number(pre + x.toString().split('').reverse().join(''));

    return isSafe(x) ? x : 0;
};

function isSafe(x) {
    return x <= (2 ** 31 - 1) && x >= -(2 ** 31);
}