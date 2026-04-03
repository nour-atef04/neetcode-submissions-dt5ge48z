class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let i = 0;
        const map = new Map();

        while(i < s.length){
            map.set(s[i], (map.get(s[i]) || 0 ) + 1);
            map.set(t[i], (map.get(t[i]) || 0 ) - 1);
            i++;
        }

        for(let v of map.values()){
            if(v !== 0) return false;
        }
        return true;
    }
}
