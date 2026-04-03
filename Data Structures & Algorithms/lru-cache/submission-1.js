class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node){
        let prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;

        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.map.get(key);
        if(node){
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        else return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let newNode = new Node(key, value);
        if(this.map.get(key)){
            let addr = this.map.get(key);
            addr.val = value;
            this.remove(addr);
            this.insert(addr);
        }
        else{
            this.map.set(key, newNode);
            this.insert(newNode);

            if(this.map.size > this.capacity){
                let lru = this.head.next;
                this.map.delete(lru.key);
                this.remove(lru);
            }
        }
    }
}

// map: key -> address of pointer
// each time we put -> increment currLen