/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // var res = 0;

    // for (var i = 0; i < prices.length - 1; i++) {
    //     var max = 0;

    //     for (var j = i + 1; j < prices.length; j++) {
    //         if (prices[i] < prices[j]) {
    //             max = Math.max(max, prices[j] - prices[i]);
    //         }
    //     }

    //     res = Math.max(res, max);
    // }

    // return res;

    var res = 0,
        min = Infinity;

    prices.forEach(i => {
        if (i < min) {
            min = i;
        }

        res = Math.max(res, i - min);
    });

    return res;
};