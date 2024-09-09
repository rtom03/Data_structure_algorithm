class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vx) {
        while (this.adjacencyList[vx].length) {
            const adjacentVertex = this.adjacencyList[vx].pop
            this.removeEdge(vx, adjacentVertex)
        }
        delete this.adjacencyList[vx]
    }
    // DFS PSEUDOCODE RECURSIVE
    DFS(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            })
        })(start);
        return result;
    }

    DFSI(start) {
        let stack = [start];
        let result = [];
        let discovered = {};
        discovered[start] = true

        while (stack.length) {

            let poppedVertex = stack.pop()
            result.push(poppedVertex)

            this.adjacencyList[poppedVertex].forEach(neighbor => {
                if (!discovered[neighbor]) {
                    discovered[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result;
    }
    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        let poppedVertex;
        while (queue.length) {
            console.log(queue)
            poppedVertex = queue.shift();
            result.push(poppedVertex);
            this.adjacencyList[poppedVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    };

}

let graph = new Graph()

graph.addVertex('Allisson')
graph.addVertex('Barry')
graph.addVertex('Carly')
graph.addVertex('Diane')
graph.addVertex('Ennerst')
graph.addVertex('Felix')


graph.addEdge('Allisson', 'Barry')
graph.addEdge('Allisson', 'Carly')
graph.addEdge('Barry', 'Diane')
graph.addEdge('Carly', 'Ennerst')
graph.addEdge('Diane', 'Ennerst')
graph.addEdge('Diane', 'Felix')
graph.addEdge('Ennerst', 'Felix')

// graph.DFS("Arizona")
// graph.removeEdge('Detroit', 'Arizona')




// graph.removeEdge('Arizona', 'Michigan')
// console.log(graph.DFSI('Arizona'))
// console.log(graph.DFS('Arizona'))
console.log(graph.DFSI('Allisson'))
console.log(graph.BFS('Allisson'))

