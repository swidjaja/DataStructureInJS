const Queue = require('./queue');

function Graph(isDirected = true, visitedCallback = null) {
  this.adjacencyList = new Map();
  this.isDirected = isDirected;
  this.visitedCallback = visitedCallback ||
    ((vertex) => console.log('Visiting vertex ', vertex.getValue()));
}

Graph.prototype.addVertex = function (vertex) {
  if (this.adjacencyList.get(vertex)) {
    throw new Error(`${vertex} is already added!`);
  }
  this.adjacencyList.set(vertex, []);
}

Graph.prototype.addEdge = function (vertex1, vertex2) {
  const list1 = this.adjacencyList.get(vertex1);
  list1.push(vertex2);
  if (!this.isDirected) {
    const list2 = this.adjacencyList.get(vertex2);
    list2.push(vertex1);
  }
}

Graph.prototype.getAdjacencyVertices = function (vertex) {
  return this.adjacencyList.get(vertex);
}

Graph.prototype.visit = function (vertex) {
  this.visitedCallback && this.visitedCallback.call(null, vertex);
}

Graph.prototype.search = function (vertex1, vertex2) {
  const visited = new Map();

  // Visited.keys -> returns iterable object
  for (const key of visited.keys()) {
    // Mark all vertices as not visited
    visited.set(key, false);
  }
  const queue = new Queue();
  // Push starting vertex to queue
  visited.set(vertex1, true);
  queue.enqueue(vertex1);

  while(!queue.isEmpty()) {
    const vertex = queue.dequeue();

    if (!visited.get(vertex)) {
      if (vertex.getValue() === vertex2.getValue()) {
        return true;
      }
      // Mark this vertex as visited and run the visit callback
      visited.set(vertex, true);
    }
    const adjacentVertices = this.getAdjacencyVertices(vertex);
    adjacentVertices.forEach((adjacentVertex) => {
      if (!visited.get(adjacentVertex)) {
        // If adjacent vertex is not yet visited, push to queue
        queue.enqueue(adjacentVertex);
      }
    });
  }
  return false;
}

// O(E + V)
Graph.prototype.bfs = function (startingVertex) {
  const visited = new Map();

  // Visited.keys -> returns iterable object
  for (const key of visited.keys()) {
    // Mark all vertices as not visited
    visited.set(key, false);
  }
  const queue = new Queue();
  // Push starting vertex to queue
  visited.set(startingVertex, true);
  this.visit(startingVertex);
  queue.enqueue(startingVertex);

  while(!queue.isEmpty()) {
    const vertex = queue.dequeue();

    if (!visited.get(vertex)) {
      // Mark this vertex as visited and run the visit callback
      visited.set(vertex, true);
      this.visit(vertex);
    }
    const adjacentVertices = this.getAdjacencyVertices(vertex);
    adjacentVertices.forEach((adjacentVertex) => {
      if (!visited.get(adjacentVertex)) {
        // If adjacent vertex is not yet visited, push to queue
        queue.enqueue(adjacentVertex);
      }
    });
  }
}

module.exports = Graph;
