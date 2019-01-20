/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // var map = {};
    // var res = new Set();
    // var target;
    // var rest;

    // nums.sort();
    // nums.forEach((item, index) => map[item] = index);

    // for (var i = 0; i < nums.length; i++) {
    //     target = -nums[i];

    //     for (var j = i + 1; j < nums.length; j++) {
    //         rest = target - nums[j];
    //         if (map[rest] !== undefined && map[rest] > j) {
    //             res.add([nums[i], nums[j], rest].join(','));
    //         }
    //     }
    // }

    // return [...res].map((item) => item.split(',').map(item => +item));

    if (nums.length < 3) {
        return [];
    }

    var res = [],
        i = 0,
        target,
        sum,
        j,
        k;

    nums.sort((a, b) => a - b);

    for (; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            target = -nums[i];
            j = i + 1;
            k = nums.length - 1;

            while (j < k) {
                sum = nums[j] + nums[k];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;

                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }

                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                } else if (sum > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }

    return res;
};