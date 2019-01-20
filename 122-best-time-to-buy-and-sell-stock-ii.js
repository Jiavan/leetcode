/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0;

    for (var i = 1; i < prices.length; i++) {
        var x = prices[i] - prices[i - 1];
        if (x > 0) {
            res += x;
        }
    }

    return res;
};