/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var res = 1;

    for (var i = n; i != 0; i = parseInt(i / 2)) {
        if (i % 2 !== 0) {
            res *= x;
        }
        x *= x;
    }

    return n < 0 ? (1 / res) : res;
};