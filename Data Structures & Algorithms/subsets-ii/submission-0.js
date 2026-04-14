class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums.sort((a, b) => a-b);
        function dfs(i, subset){

            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i+1, subset);
            subset.pop();

            while(i+1 < nums.length && nums[i] === nums[i+1]){
                i++;
            }
            dfs(i+1, subset);

        }
        dfs(0, []);
        return res;
    }
}

// 1 1 1 2
