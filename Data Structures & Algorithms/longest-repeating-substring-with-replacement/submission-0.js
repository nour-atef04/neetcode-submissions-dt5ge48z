class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let i = 0;
        let j = 0;
        let maxLen = 1;
        while(i < s.length && j < s.length){
            let len = j-i+1;
            let maxCount = 0;
            map.set(s[j], (map.get(s[j]) || 0) + 1);
            
            for (const value of map.values()) {
                maxCount = Math.max(maxCount, value);
            }

            if(len > maxCount + k){
                map.set(s[i], (map.get(s[i])) - 1);
                len--;
                i++;
            }

            if(len > maxLen) maxLen = len;
            j++;
        }
        return maxLen;
    }
}

// "XABB" k = 1 -> x,1 
// "ABABB" k = 2
