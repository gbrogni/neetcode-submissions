class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map();

        for (let str of strs) {
            let arr = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                let code = str[i].charCodeAt(0) - "a".charCodeAt(0);
                arr[code] += 1;
            }

            let joined = arr.join(",");
            if (map.has(joined)) {
                map.get(joined)!.push(str);
            } else {
                map.set(joined, [str]);
            }
        }

        return Array.from(map.values());
    }
}
