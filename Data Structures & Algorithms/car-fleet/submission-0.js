class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        let cars = [];
        for(let i = 0; i<n; i++){
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);

        let fleet = 0;
        let lastTime = 0;

        for(let car of cars){
            let time = (target - car[0]) / car[1];
            if(time > lastTime){
                fleet++;
                lastTime = time;
            }
        }

        return fleet;
    }
}
