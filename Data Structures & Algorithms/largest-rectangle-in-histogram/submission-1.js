class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let st = []; // stores [height, index]
        let maxArea = 0;

        for(let i = 0; i < heights.length; i++){
            let index = i;
            while(st.length !== 0 && st[st.length - 1][0] > heights[i]){
                let top = st.pop();
                maxArea = Math.max(maxArea, top[0] * (i - top[1]));
                index = top[1];
            }
            st.push([heights[i], index]);
        }

        // Process remaining stack
        while(st.length !== 0){
            let top = st.pop();
            maxArea = Math.max(maxArea, top[0] * (heights.length - top[1]));
        }

        return maxArea;
    }
}
