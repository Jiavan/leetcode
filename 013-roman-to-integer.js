/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var res = 0;
    var n;
    var m;

    for (var i = 0; i < s.length; i++) {
        n = map[s.charAt(i)];
        m = map[s.charAt(i + 1)];

        if (s.charAt(i) && s.charAt(i + 1) && (n < m)) {
            res += (m - n);
            i++;
        } else {
            res += map[s.charAt(i)];
        }
    }

    return res;
};