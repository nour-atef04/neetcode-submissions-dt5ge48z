class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let s of strs){
            
            encoded += s.length + "#" + s;

        }
        return encoded;
        
    } // 5#Hello5#World

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            }

            let num = Number(str.slice(i, j));

            let string = str.slice(j+1, j+num+1);

            decoded.push(string);

            i = j + num + 1;

        }
        return decoded;
    }
}
