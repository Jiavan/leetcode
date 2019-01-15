/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var permute = function(arr) {
    var tmp;
    var res = [];

    if (arr.length === 1) {
        return arr;
    }

    for (var i = 0; i < arr.length; i++) {
        tmp = arr.concat();
        tmp.splice(i, 1);
        permute(tmp).forEach(item => res.push([arr[i]].concat(item)));
    }

    return res;
};

var getPermutation = function(n, k) {
    var arr = [];

    for (var i = 1; i <= n; i++) {
        arr[i] = i;
    }

    return permute(arr)[k - 1].join('');
};