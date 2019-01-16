/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // over time
    // if (n === 1) {
    //     return 1;    
    // }
    
    // if (n === 2) {
    //     return 2;
    // }

    // return climbStairs(n - 1) + climbStairs(n - 2);

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    var p = 1, q = 2, x, i = 3;

    while (i <= n) {
        x = q + p;
        p = q;
        q = x;
        i++;
    }

    return x;
};