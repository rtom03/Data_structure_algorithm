// pice of data - val 
// refrerence to next node - next 


class Node {
    constructor(val) {
        this.val = val
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;

    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return current;
    }
    unshift(val) {
        let newNode = new Node(val)
        let oldNode = this.head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.head = newNode
            this.head.next = oldNode
            this.tail = this.head.next;
        }
        this.length++;
        return newNode
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        console.log(current)
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.push(index)
            return true
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
    remove(index) {
        if (index < 0) return false;
        if (index === this.length - 1) return this.pop(index)
        if (index === 0) return this.shift(index)
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = temp.next;
        this.length--;
        return true;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
}
const value = new SinglyLinkedList()
value.push(10)
value.push(11)
value.push(12)
value.push(14)

value.reverse()
value.print()









console.log(value)