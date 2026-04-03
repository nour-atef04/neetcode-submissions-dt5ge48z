class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let max = -1;
        while(i < j){
            let w = j - i;
            let sum = w * Math.min(heights[i], heights[j]);
            if(sum > max) max = sum;
            if(heights[i] < heights[j]) i++;
            else if(heights[j] <= heights[i]) j--;
        }
        return max;
    }
}

// 1st -> 1*7 right -> 6*6 left -> 1*6

// [2,2,2]
// 1st -> 2*2 right -> 2*1 left -> 2*1

// [2,7,2,5,4,7,1,6] 2*7 vs 1*6

// 1st (2, 6) -> 2*7 = 14
// 2nd (7, 6) -> 6*6 = 36
// 3rd (7, 1) -> 1*5 = 5
// 4th (7, 7) -> 7*4 = 21
// 5th (2, 7) -> 2*3 = 6, (4, 7) -> 4*3 = 12

// [7, 8, 3, 8, 7] 7*4 -> 21, 8*3 -> 24
// [7, 2, 3, 2, 7] 7*4 -> 21, 2*3 -> 6
// [7, 8, 3, 2, 7] 7*4 -> 21, 8*3 -> 24
