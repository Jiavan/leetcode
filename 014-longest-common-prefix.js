/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var reg;
    var res;

    if (!strs.length || !strs[0].length) {
        return '';
    }

    for (var i = 0; i < strs[0].length; i++) {
        res = strs[0].substr(0, i + 1);
        reg = new RegExp('^' + res);
        for (var j = 1; j < strs.length; j++) {
            if (!reg.test(strs[j])) {
                return res.slice(0, -1);
            }
        }
    }

    return strs[0];
};