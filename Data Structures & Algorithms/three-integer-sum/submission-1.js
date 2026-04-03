class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a-b);
        let results = [];
  
        for(let i = 0; i<nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let res = this.twoSum(-nums[i], nums.slice(i+1));
            if(res.length !== 0) results.push(...res);
        }

        return results;

    }

    twoSum(target, nums){
        let i = 0;
        let j = nums.length - 1;
        let results = [];
        while(i < j){
            let res = [];
            let sum = nums[i] + nums[j];
            if(sum > target) j--;
            else if(sum < target) i++;
            else{res.push([-target, nums[i], nums[j]]); results.push(res); i++; j--;};
            while (i < j && nums[i] === nums[i - 1]) i++;
while (i < j && nums[j] === nums[j + 1]) j--;

        }
        return results;
    }

}

// -6 -4 -2 -1 0 1 4 5 6 

// -4 -1 -1 0 1 2 

