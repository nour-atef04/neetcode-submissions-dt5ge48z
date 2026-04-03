class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);
        let rate;
        for(rate = 1; rate<=max; rate++){
            let hours = 0;
            for(let pile of piles){
                hours += Math.ceil(pile / rate);
            }
            if(hours <= h){
                break;
            }
        }
        return rate;
    }
}
