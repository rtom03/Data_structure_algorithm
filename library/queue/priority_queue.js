class Node {
    constructor(values, priority) {
        this.values = values;
        this.priority = priority;
    }
}

class PRQUEUE {
    constructor() {
        this.val = [41, 39, 33, 18, 27, 12]
    }
    enqueue(values, priority) {
        let newNode = new Node(values, priority)
        this.val.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.val.length - 1
        const element = this.val[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.val[parentIdx]
            if (element.priority <= parent.priority) break;
            this.val[parentIdx] = element
            this.val[idx] = parent;
            idx = parentIdx;

        }
    }

}

let hp = new PRQUEUE()
hp.enqueue('cold', 3)
hp.enqueue('fever', 6)
hp.enqueue('headache', 7)
hp.enqueue('cancer', 10)

console.log(hp)