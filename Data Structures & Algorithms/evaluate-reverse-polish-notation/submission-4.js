class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let st = [];
        for(let token of tokens){
            if(token !== '+' && token !== '-' && token !== '*' && token !== '/') st.push(Number(token));
            else{
                let num2 = st[st.length - 1]; st.pop();
                let num1 = st[st.length - 1]; st.pop();
                let res = 0;
                switch(token){
                    case '+': res = num1 + num2; break;
                    case '-': res = num1 - num2; break;
                    case '*': res = num1 * num2; break;
                    default: res = Math.trunc(num1 / num2);;
                }
                st.push(res);
            }
        }
        return st[st.length - 1];
    }
}
