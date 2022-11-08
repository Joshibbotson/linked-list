class LinkedList {
    constructor() {
        this.console = () => {
            console.log()
        }
    }
}

class Node {
    constructor() {
        this.value = null
        this.nextNode = null
        this.setValue = (value, node) => {
            this.value = value
            this.nextNode = node
        }
    }
}

const n1 = new Node()
const n2 = new Node()
const n3 = new Node()

n1.setValue(100, n2)
n2.setValue(200, n3)
n3.setValue(300, null)

console.log(n1)
