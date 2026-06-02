class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numbers = new Set();
        for (const item of nums) {
            if (numbers.has(item)) return true
            numbers.add(item);
        }
        return false
    }
}
