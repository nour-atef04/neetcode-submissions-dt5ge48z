class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let subset = "";

        function dfs(open, close){
            if(subset.length === 2*n){
                res.push(subset);
                return;
            }
            if(open < n){
                subset += "(";
                dfs(open+1 , close);
                subset = subset.slice(0, -1);
            }
            if(close < open){
                subset += ")";
                dfs(open , close+1);
                subset = subset.slice(0, -1);
            }
        }
        dfs(0, 0);
        return res;

    }
}
