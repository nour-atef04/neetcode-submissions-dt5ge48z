class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let subset = [];
        function dfs(nums, i, subset, res){
            if(i >= nums.length){
                res.push(subset.slice());
                return;
            }

            // add nums[i]
            subset.push(nums[i]);
            dfs(nums, i+1, subset, res);

            // don't add nums[i]
            subset.pop();
            dfs(nums, i+1, subset, res);
        }
        dfs(nums, 0, subset, res);
        return res;
    }
}
