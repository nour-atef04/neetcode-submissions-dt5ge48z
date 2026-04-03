class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Number.MAX_VALUE;
        let i = 0;
        let j = nums.length - 1;
        let size = j;

        while(i<=j){
            let midIndex = i + Math.floor((j - i)/2);
            let mid = nums[midIndex];
            
            if((mid <= nums[0] && mid <= nums[size]) || (mid >= nums[0] && mid <= nums[size])){
                min = mid;
                j = midIndex - 1;
            }

            else if(mid >= nums[0] && mid >= nums[size]){
                // min is on the right
                i = midIndex + 1;
            }
        }
        return min;
    }
}
