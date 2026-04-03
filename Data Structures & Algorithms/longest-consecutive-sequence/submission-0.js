class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let mySet = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(mySet.has(num-1)) continue;

            let current = num;
            let len = 1;

            while(mySet.has(current+1)){
                len++;
                current++;
            }

            longest = Math.max(len, longest);

        }

        return longest;

    }
}
