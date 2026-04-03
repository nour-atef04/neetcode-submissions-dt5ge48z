class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let st = [];
        let n =  temperatures.length; 
        let res = new Array(n).fill(0)

        for(let i = 0; i<n; i++){
            let temp = temperatures[i];
            if(st.length > 0 && temp > temperatures[st[st.length - 1]]){
                while(st.length > 0 && temperatures[st[st.length - 1]] < temp){
                    res[st[st.length - 1]] = i - st[st.length - 1];
                    st.pop();
                }
            }
            st.push(i);
        }

        return res;
    }
}
