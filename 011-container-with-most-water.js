/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var p = 0, q = height.length - 1, res = 0, area = 0;

    while (p < q) {
        if (height[p] < height[q]) {
            area = height[p] * (q - p);
            p++;
        } else {
            area = height[q] * (q - p);
            q--;
        }
        res = Math.max(res, area);
    }

    return res;
};