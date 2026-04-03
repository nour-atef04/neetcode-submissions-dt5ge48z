class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let stack = [];
        let mid = Math.floor(s.length / 2);

        // push first half
        for (let i = 0; i < mid; i++) {
            stack.push(s[i]);
        }

        // start index for second half
        let start = s.length % 2 === 0 ? mid : mid + 1;

        for (let i = start; i < s.length; i++) {
            if (stack.pop() !== s[i]) return false;
        }

        return true;

    }
}
