class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result = [];
        let map = new Map();
        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        }

        for (const [key, value] of map) {
            buckets[value].push(key);
        }

        for (let freq = buckets.length - 1; freq >= 0; freq--){
            for (const num of buckets[freq]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
