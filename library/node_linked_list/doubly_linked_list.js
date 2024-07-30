

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) return undefined;
        let oldeNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldeNode.next;
            oldeNode.prev = null;
            oldeNode.next = null;
        }
        this.length--;
        return oldeNode;
    }
    unshift(val) {
        let newNode = new Node(val)
        let holdNode = this.head;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            holdNode.prev = newNode;
            this.head.next = holdNode;
        }
        this.length++;
        return newNode;

    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current, counter
        if (index <= this.length / 2) {
            console.log("working from start")
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            console.log("working from end")
            counter = this.length - 1;
            let current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index, val) {
        if (!this.head) return null;
        let getIndex = this.get(index);
        if (getIndex !== null) {
            getIndex.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}

const nodeValue = new DoublyLinkedList()
nodeValue.push(10)
nodeValue.push(11)
nodeValue.push(12)
nodeValue.push(13)
nodeValue.remove(2)

console.log(nodeValue)