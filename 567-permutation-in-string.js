/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var len = s1.length,
        map1 = {};

    s1.split('').forEach(i => { map1[i] = map1[i] ? ++map1[i] : 1; })

    function isSame(str) {
        var map2 = {};

        str.split('').forEach(i => { map2[i] = map2[i] ? ++map2[i] : 1; })

        for (var i = 0; i < str.length; i++) {
            if (map1[str[i]] !== map2[str[i]]) {
                return false;
            }
        }

        return true;
    }

    for (var i = 0; i <= s2.length - len; i++) {
        var str = s2.slice(i, i + len);

        if (isSame(str)) {
            return true;
        }
    }

    return false;
};