class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let len = 0;
        let i = 0;
        let j = 0;
        const map = new Map();
        
        while(i < s.length && j < s.length){
            let index = map.get(s[j]);
            if(index !== undefined && index >= i){
                i = index + 1;
                map.set(s[j], j);
            }
            else{
                map.set(s[j], j);
            }
             maxLen = Math.max(maxLen, j - i + 1);
            j++;
        }

        return maxLen;
    }
}

// "pwwkew"
// map -> p,0 - len = 1
// map -> p,0 w,1 - len = 2
// map -> p,0 w,2 - len = 1
// map -> p,0 w,2 k,3 - len = 2
// map -> p,0 w,2 k,3 e-4 - len = 3