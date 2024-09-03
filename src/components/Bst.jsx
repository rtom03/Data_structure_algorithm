import React from 'react'
import { data } from '../../lib/utils'
import { BsTable } from 'react-icons/bs'

const Bst = () => {

    class Node {
        constructor(val) {
            this.val = val
            this.left = null
            this.right = null
        }
    }

    class BST {
        constructor() {
            this.root = null
        }
        insert(val) {
            let newNode = new Node(val)
            if (!this.root) {
                this.root = newNode
            } else {
                while (true) {
                    let current = this.root;
                    if (val < current.val) {
                        if (!current.left) {
                            current.left = newNode
                            return this
                        }
                        current = current.left
                    } else if (val > current.val) {
                        if (!current.right) {
                            current.right = newNode
                            return this
                        }
                        current = current.left
                    }
                }
            }
        }

    }

    const bst = new BST()
    bst.insert(data)
    console.log(bst)
    return (
        <div>

        </div>
    )
}

export default Bst
