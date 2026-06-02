class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let index = 0; index < nums.length; index++) {
            const value = nums[index];
            const result = target - value;
            if (map.has(result)) {
                return [map.get(result), index];
            } else {
                map.set(value, index);
            }
        }
        return [];
    }
}