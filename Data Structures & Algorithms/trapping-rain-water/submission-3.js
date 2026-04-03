class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0;
        let j = 1;
        let sum = 0;
        while(i < height.length-2){
            let minus = 0;
            let max = 0;
            let indexMax = 0;
            if(height[i] == 0){
                i++;
                j++;
                continue;
            }
            while(j < height.length){
                if((j < height.length)){
                    if(height[j] > max){
                        max = height[j];
                        indexMax = j;
                        if(max > height[i]) break;
                    }
                }
                j++;
            }
            j = i + 1;
            while(j < indexMax){
                minus += height[j];
                j++;
            }

            let diff = indexMax - i - 1;
            sum += (diff * Math.min(height[i], height[j])) - minus;
            i = j;
            j=i+1;
            
            
        }
        return sum;
    }
}
