class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        if (s1.length > s2.length) return false;

        const count = new Array(26).fill(0);

        for(let ch of s1){
            count[ch.charCodeAt(0) - 97]++;
        }

        let i = 0;
        let j = 0;

        while(i < s2.length && j < s2.length){
            count[s2[j].charCodeAt(0) - 97]--;

            if(j - i + 1 > s1.length){
               
                count[s2[i].charCodeAt(0) - 97]++;
                 i++;
            }

            if(count.every(val => val === 0)) return true;
            j++;
        }
        return false;

    }
}