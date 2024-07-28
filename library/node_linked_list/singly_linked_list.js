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
            current++;

        }
        // console.log(current)
        return current;
    }

}

const value = new SinglyLinkedList()
value.push(10)
value.push(11)
value.get(1)








console.log(value)