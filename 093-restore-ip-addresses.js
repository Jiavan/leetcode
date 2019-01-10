/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = [];
    var map = {};

    for (var i = 1; i <= 3 && i <= s.length; i++) {
        var n1 = s.slice(0, i);
        for (var j = i + 1; j <= i + 3 && j <= s.length; j++) {
            var n2 = s.slice(i, j);
            if (n2 === '') {
                break;
            }
            for (var k = j + 1; k <= j + 3 && k <= s.length; k++) {
                var n3 = s.slice(j, k);
                var n4 = s.slice(k);

                if (n3 === '' || s.slice(k) === '') {
                    break;
                }

                var arr = [n1, n2, n3, n4];
                var vaild = arr.every(item => item >= 0 && item <= 255 && String(+item).length === item.length);
                var ip = arr.join('.');

                if (!map[ip] && vaild) {
                    res.push(ip);
                    map[ip] = true;
                }
            }
        }
    }

    return res;
};