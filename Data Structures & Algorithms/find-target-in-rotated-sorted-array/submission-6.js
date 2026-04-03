class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1;
        let res = -1;
        while(i <= j){
            let mid = i + Math.floor((j - i)/2);
            if(nums[mid] === target){
                res = mid;
                break;
            }
            if(nums[i] === target){
                res = i;
                break;
            }
            if(nums[j] === target){
                res = j;
                break;
            }
            else if(target < nums[i] && target < nums[j]){
                if(target < nums[mid] && (nums[mid] > nums[i] && nums[mid] > nums[j])) i = mid + 1;
                else if(target > nums[mid] && (nums[mid] > nums[i] && nums[mid] > nums[j])) j = mid - 1;
                else if(target < nums[mid] && (nums[mid] < nums[i] && nums[mid] < nums[j])) j = mid - 1;
                else i = mid + 1;
            }
            else if(target > nums[i] && target > nums[j]){
                if(target < nums[mid]) j = mid - 1;
                else i = mid + 1;
            }
            else{
                if(target < nums[mid]) j = mid - 1;
                else i = mid + 1;
            }
        }
        return res;
    }
}

// 0 1 2 3 4 5  t = 4

// 4 5 0 1 2 3   t = 0
// 3 4 5 6 1 2   t = 5
