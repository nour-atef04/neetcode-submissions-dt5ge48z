class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);
        let i = 1;
        let j = max;
        let prev = j;

        while(i <= j){
            let mid = Math.floor((i + j) / 2);
            let hours = 0;
            piles.forEach(pile => hours += Math.ceil(pile/mid));
            if(hours > h){
                i = mid + 1;
            }
            else if(hours <= h){
                j = mid - 1;
                prev = mid;
            }
        }
        return prev;
    }
}
