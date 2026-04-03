class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1);
        for(let i = 1; i<nums.length; i++){
            res[i] *= res[i-1] * nums[i-1];
        }
        let prod = 1;
        for(let j = nums.length - 2; j >= 0; j--){
            prod *= nums[j+1];
            res[j] *= prod;
        }
        return res;
    }
}


// 48 = 2 x 4 x 6
// 24 = (1) x 4 x 6
// 12 = (1 x 2) x 6
// 8  = (1 x 2 x 4)

// [1 x 48, 1 x 24, 2 x 6, 8]