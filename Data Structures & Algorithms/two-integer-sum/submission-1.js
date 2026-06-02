class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            let needed = target - value;
            if (map.has(needed)) {
                return [i, map.get(needed)];
            }
            map.set(value, i);
        }

        return [];
    }
}
