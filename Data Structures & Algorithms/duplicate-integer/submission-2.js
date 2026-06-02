class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            if (set.has(value)) return true;
            set.add(value);
        }

        return false;
    }
}