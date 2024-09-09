class PrQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        // if(!this.values)
        this.values.push({ val, priority })
        this.sort();
        return this;
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}



class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vx1, vx2, wght) {
        this.adjacencyList[vx1].push({ node: vx2, wght });
        this.adjacencyList[vx2].push({ node: vx1, wght });
        return this
    }
    dijkstra(start, finish) {
        const nodes = new PrQueue();
        const distant = {};
        const previous = {};
        let path = [];
        let smallest;

        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distant[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distant[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue();
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distant[smallest] !== Infinity) {

                for (let neigbhor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neigbhor]
                    let candidate = distant[smallest] + nextNode.wght;
                    let nextNeighbor = nextNode.nodes
                    if (candidate < distant[nextNode.node]) {
                        distant[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate)
                    }

                }
            }
        }
    }
}

let graph = new WeightedGraph()


graph.addVertex('Allisson')
graph.addVertex('Barry')
graph.addVertex('Carly')
graph.addVertex('Diane')
graph.addVertex('Ennerst')
graph.addVertex('Felix')


graph.addEdge('Allisson', 'Barry', 4)
graph.addEdge('Allisson', 'Carly', 2)
graph.addEdge('Barry', 'Ennerst', 3)
graph.addEdge('Carly', 'Diane', 2)
graph.addEdge('Carly', 'Felix', 4)
graph.addEdge('Diane', 'Ennerst', 3)
graph.addEdge('Diane', 'Felix', 1)
graph.addEdge('Ennerst', 'Felix', 1)

