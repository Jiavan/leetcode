/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString().split('');

    return s === s.reverse();
};
