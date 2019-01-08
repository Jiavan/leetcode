/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];
    var tmp = [];

    if (nums.length === 1) {
        return [nums];
    }

    if (!nums.length) {
        return [];
    }

    for (var i = 0; i < nums.length; i++) {
        tmp = nums.concat();
        tmp.splice(i, 1);

        permute(tmp).forEach(item => res.push([nums[i]].concat(item)));
    }

    return res;
};