// let stack = [];
// stack.push('google')
// stack.push('amazon')
// stack.push('ebay')
// console.log(stack)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.first) return null;
        let removedNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
            removedNode = null;
        }
        this.size--;
        return removedNode;
    }
}

const result = new Stack();
result.push(10)
result.push(11)
result.push(12)
result.pop()

console.log(result)