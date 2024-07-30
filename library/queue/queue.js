let queue = [];

queue.unshift('First Queue')
queue.unshift('Second Queue')
queue.unshift('Third Queue')

console.log(queue)


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode

        }
        this.size++;
        return this;
    }
    dequeue() {
        if (this.size === 0) return null;
        let removedNode = this.first;
        this.first = this.removedNode.next
        removedNode = null
        return removedNode

    }

}


const value = new Queue()
value.enqueue(10)
value.enqueue(11)
value.enqueue(12)
value.enqueue()


console.log(value)