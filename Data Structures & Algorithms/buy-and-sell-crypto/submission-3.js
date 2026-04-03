class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let i = 0;
        let j = 1;

        while(i < prices.length && j < prices.length){
            let profit = prices[j] - prices[i];
            if(profit > maxProfit){
                maxProfit = profit;
            }
            else if(prices[j] < prices[i]){
                i = j;
            }
            j++;
        }

        return maxProfit;
    }
}

// [7,1,5,3,6,4]
