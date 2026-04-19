class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        function dfs(start, path){
            if(start === s.length){
                res.push([...path]);
                return;
            }
            for(let end = start + 1; end <= s.length; end++){
                let substr = s.slice(start, end);
                if(substr === substr.split("").reverse().join("")){
                    path.push(substr);
                    dfs(end, path);
                    path.pop();
                }
            }
        }
        dfs(0, []);
        return res;
    }
}
