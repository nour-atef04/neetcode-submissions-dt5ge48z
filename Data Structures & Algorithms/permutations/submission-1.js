class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let size = nums.length;
        function dfs(perm){
            if(perm.length === size){
                res.push([...perm]);
                return;
            }
            for(let i = 0; i<size; i++){
                if(!perm.includes(nums[i])){
                perm.push(nums[i]);
                dfs(perm);
                perm.pop();
                }
            }
        }
        dfs([]);
        return res;
    }
}
