class Solution(object):
    # def twoSum(self, nums, target):
    #     for i in range(len(nums)):
    #         for j in range(i + 1, len(nums)):
    #             if (nums[i] + nums[j] == target):
    #                 return [i, j]

    def twoSum(self, nums, target):
        lookup = {}
        for i, num in enumerate(nums):
            if target - num in lookup:
                return [i, lookup[target - num]]
            else:
                lookup[num] = i
