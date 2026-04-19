class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let map = new Map();
        map.set(2, ["a", "b", "c"]);
        map.set(3, ["d", "e", "f"]);
        map.set(4, ["g", "h", "i"]);
        map.set(5, ["j", "k", "l"]);
        map.set(6, ["m", "n", "o"]);
        map.set(7, ["p", "q", "r", "s"]);
        map.set(8, ["t", "u", "v"]);
        map.set(9, ["w", "x", "y", "z"]);

        let res = [];
        if(digits.length === 0) return [];

        function dfs(i, path){
            if(i === digits.length){
                res.push(path);
                return;
            }

            let digit = digits[i];
            let letters = map.get(Number(digit));

            for(let letter of letters){
                path+=letter;
                dfs(i+1, path);
                path = path.slice(0, -1);
            }

        }
        dfs(0, "");
        return res;

    }
}

// loop over digits
// loop over array of digit ex -> d, e, f
// either take a letter and go to next digit, or not take the letter and go to next letter