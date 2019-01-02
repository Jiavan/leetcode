/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var res = '';
    var arr = [];
    var state = 0, n = 0, m = 0;

    if (s.length < numRows || numRows < 2) {
        return s;
    }

    for (var i = 0; i < numRows; i++) {
        arr.push([]);
    }

    for (var i = 0; i < s.length; i++) {
        if (state === 0) {
            arr[n++][m] = s.charAt(i);
            state = n === numRows - 1 ? 1 : state;
        } else if (state === 1) {
            arr[n--][m++] = s.charAt(i);
            state = n === 0 ? 0 : state;
        }
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== undefined) {
                res += arr[i][j];
            }
        }
    }

    return res;
};