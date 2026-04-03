class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";

        const count = new Array(128).fill(0); // ASCII safe
        let needed = t.length;

        // build frequency
        for (let ch of t) {
            count[ch.charCodeAt(0)]++;
        }

        let i = 0;
        let j = 0;
        let minLen = Number.MAX_VALUE;
        let minString = "";

        while (j < s.length) {

            let rightChar = s[j].charCodeAt(0);

            // expand window
            if (count[rightChar] > 0) needed--;
            count[rightChar]--;

            // when valid → shrink
            while (needed === 0) {

                if (j - i + 1 < minLen) {
                    minLen = j - i + 1;
                    minString = s.slice(i, j + 1);
                }

                let leftChar = s[i].charCodeAt(0);
                count[leftChar]++;

                if (count[leftChar] > 0) needed++;

                i++;
            }

            j++;
        }

        return minString;
    }
}
