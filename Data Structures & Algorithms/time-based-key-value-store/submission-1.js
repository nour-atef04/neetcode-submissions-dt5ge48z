class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
        this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        let res = "";
        let mapResults = this.keyStore.get(key); // [[happy, 1], [sad, 3]]
        let i = 0;
        let j = mapResults.length - 1;
        while(i <= j){
            let mid = i + Math.floor((j-i)/2);
            let mapTime = mapResults[mid][1];
            let mapEmotion = mapResults[mid][0];
            if(mapTime === timestamp) return mapEmotion;
            else if(mapTime < timestamp){
                res = mapEmotion;
                i = mid + 1;
            }
            else{
                j = mid - 1;
            }
        }
        return res;
    }
}
