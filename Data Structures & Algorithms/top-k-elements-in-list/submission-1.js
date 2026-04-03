class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        const map = new Map();
        for(let n of nums){
            map.set(n, (map.get(n) || 0 ) + 1);
        }

        const arr = Array.from(map.entries());
        arr.sort((a, b) => b[1] - a[1]);

        return arr.slice(0, k).map(([a, b])=>a);

    }
}
