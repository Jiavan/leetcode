/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var j, k, sum, diff, diffAbs, res, closet = Infinity;

    nums.sort((a, b) => a - b);

    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            j = i + 1;
            k = nums.length - 1;

            while (j < k) {
                sum = nums[i] + nums[j] + nums[k];
                diff = sum - target;

                if (diff === 0) {
                    return sum;
                } else if (diff < 0) {
                    j++;
                } else {
                    k--;
                }

                diffAbs = Math.abs(diff);
                if (diffAbs < closet) {
                    closet = diffAbs;
                    res = sum;
                }
            }
        }
    }

    return res;
};