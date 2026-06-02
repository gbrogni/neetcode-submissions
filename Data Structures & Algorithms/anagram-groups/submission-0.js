class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = new Map();

        for (let str of strs) {
            let list = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                let value = str[i];
                list[value.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            if (result.has(list.join(','))) {
                result.get(list.join(',')).push(str)
            } else {
                let values = [str]
                result.set(list.join(','), values);
            }
        }

        return [...result.values()];
    }
}
