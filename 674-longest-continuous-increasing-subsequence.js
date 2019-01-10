/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // var res = 1;

    // if (nums.length === 0) {
    //     return 0;
    // }

    // for (var i = 0; i < nums.length; i++) {
    //     var len = 1;

    //     if (nums[i + 1] > nums[i]) {
    //         for (var j = i + 1; j < nums.length; j++) {
    //             if (nums[j] > nums[j - 1]) {
    //                 len++;
    //             } else {
    //                 break;
    //             }
    //         }
    //         res = Math.max(len, res);
    //     }
    // }

    // return res;

    var max = 0;
    var last = -Infinity;
    var current = [];
    
    for (var num of nums) {
        if (num > last) {
            current.push(num);
            last = num;
        } else {
            if (current.length > max) {
                max = current.length;
            }
            current = [num];
            last = num;
        }
    }

    return Math.max(current.length, max);
};