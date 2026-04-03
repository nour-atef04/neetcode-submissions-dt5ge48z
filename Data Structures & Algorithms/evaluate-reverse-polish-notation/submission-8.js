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
        return tokens.reduce((stack, token) => {
            if(ops[token]){
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[token](a,b));
            } else {
                stack.push(Number(token));
            }
            return stack;
        } , [])[0];
    }
}
