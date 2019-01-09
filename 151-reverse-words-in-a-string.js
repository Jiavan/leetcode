/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var res = [];
    var word = '';

    str = str.trim();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) !== ' ') {
            word += str.charAt(i);
            if (i === str.length - 1) {
                res.push(word);
            }
        } else if (word) {
            res.push(word);
            word = '';
        }
    }

    res = res.reverse();

    return res.join(' ');
};