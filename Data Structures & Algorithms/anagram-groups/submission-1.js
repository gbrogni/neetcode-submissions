class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let list = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                list[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = list.join(',');
            if (map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str]);
            }
        }

        return [...map.values()];
    }
}