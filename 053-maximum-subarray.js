/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0],
        sum = 0;

    // for (var i = 1; i < nums.length; i++) {
    //     if (sum < 0) {
    //         sum = 0;
    //     }

    //     sum += nums[i];
    //     res = Math.max(sum, res);
    // }

    // return res;

    for (var i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
};