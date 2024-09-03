class MXBNH {
    constructor() {
        this.val = [41, 39, 33, 18, 27, 12]
    }
    insert(element) {
        this.val.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.val.length - 1
        const element = this.val[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.val[parentIdx]
            if (element <= parent) break;
            this.val[parentIdx] = element
            this.val[idx] = parent;
            idx = parentIdx;

        }
    }

}

let hp = new MXBNH()
hp.insert(55)
console.log(hp)