/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) {
        return 0;
    }
    
    if (N === 1) {
        return 1;
    }

    var x, p = 0, q = 1, i = 2;

    while (i <= N) {
        x = q + p;
        p = q;
        q = x;
        i++;
    }

    return x;
};