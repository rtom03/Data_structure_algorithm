class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BTS {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }

        }
    }
    find(val) {
        if (!this.root) return null
        let current = this.root
        let found = false
        while (current && !found) {
            if (current.val === val) return undefined;
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        return current
    }
    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.right)
            if (node.right) queue.push(node.left)
        }
        return data
    }
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    DFSPostOrder() {
        let data = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(this.root)
        return data
    }
    DFSInOrder() {
        let data = []
        function traverse(node) {
            (node.left) && traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}

let bst = new BTS()


bst.insert(9)
bst.insert(5)
bst.insert(12)
bst.insert(13)
bst.insert(11)
bst.insert(4)
bst.insert(6)

console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())