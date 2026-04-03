class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val)
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();

        // If popped value is current min, remove it from minStack as well
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
