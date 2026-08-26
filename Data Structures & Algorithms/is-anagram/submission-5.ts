class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapS = new Map();
        const mapT = new Map();

        for (let i = 0; i < s.length; i++) {
            mapS.set(s[i], (mapS.get(s[i]) ?? 0) + 1);
            mapT.set(t[i], (mapT.get(t[i]) ?? 0) + 1);
        }

        for (const [key, value] of mapS) {
            if (mapT.get(key) !== value){
                return false;
            }
        }

        return true;
    }
}
