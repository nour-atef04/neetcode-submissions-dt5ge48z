class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        let res = [];

        function dfs(i, total, subset){
            if(total === target){
                res.push([...subset]);
                return;
            }
            if(i >= candidates.length || total > target){
                return;
            }

            subset.push(candidates[i]);
            dfs(i+1, total+candidates[i], subset);
            subset.pop();

            while(i+1 < candidates.length && candidates[i] === candidates[i+1]){
                i++;
            }
            dfs(i+1, total, subset);
        }
        dfs(0, 0, []);
        return res;
    }
}
