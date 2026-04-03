class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let st = [];
        const ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a/b)
        }
        for(let token of tokens){
            if(ops[token]){
                let num2 = st[st.length - 1]; st.pop();
                let num1 = st[st.length - 1]; st.pop();
                let res = ops[token](num1, num2);
                st.push(res);
            }
            else{
                st.push(Number(token))
            }
        }
        return st[st.length-1];
    }
}
