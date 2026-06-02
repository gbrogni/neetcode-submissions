class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let mapS = new Map();
        let mapT = new Map();

        for (let i = 0; i < s.length; i++) {
            let value = s[i];
            if (mapS.has(value)) {
                mapS.set(value, mapS.get(value) + 1);
            } else {
                mapS.set(value, 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            let value = t[i];
            if (mapT.has(value)) {
                mapT.set(value, mapT.get(value) + 1)
            } else {
                mapT.set(value, 1);
            }
        }

        for (const [key, value] of mapS) {
            if (value !== mapT.get(key)) return false;
        }

        return true;
    }
}
