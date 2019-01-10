/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var p = 1;

    nums.sort((a, b) => b - a);

    // for (var i = 1; i < nums.length; i++) {
    //     if (p === k) {
    //         break;
    //     }
    //     if (nums[i - 1] !== nums[i]) {
    //         p++;
    //     }
    // }

    return nums[k - 1];
};