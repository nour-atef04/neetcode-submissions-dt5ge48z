class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];
        
        for(let ch of s){
            let top = stack[stack.length - 1];
            if(ch === '(' || ch === '{' || ch === '[') stack.push(ch);
            else if((ch === ')' || ch === '}' || ch === ']') && stack.length === 0) return false;
            else if((ch === ')' && top !== '(') || (ch === '}' && top !== '{') || (ch === ']' && top !== '[')) return false;
            else stack.pop();
        }

        if(stack.length === 0) return true;
        else return false;
    }
}
