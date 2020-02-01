const Queue = require('../queue/queue');
const Edge = require('./edge');
const PriorityQueue = require('../priority-queue');

function Graph(visitedCallback = null) {
  this.adjacencyList = new Map();
  this.visitedCallback = visitedCallback ||
    ((vertex) => console.log('Visiting vertex ', vertex.getValue()));
}

Graph.prototype.addVertex = function (vertex) {
  if (this.adjacencyList.get(vertex)) {
    throw new Error(`${vertex} is already added!`);
  }
  this.adjacencyList.set(vertex, []);
}

Graph.prototype.addEdge = function (vertex1, vertex2, distance = null) {
  const list = this.adjacencyList.get(vertex1);
  list.push(new Edge(vertex1, vertex2, distance));
}

Graph.prototype.getAdjacencyVertices = function (vertex) {
  return this.adjacencyList.get(vertex);
}

Graph.prototype.visit = function (vertex) {
  this.visitedCallback && this.visitedCallback.call(null, vertex);
}

Graph.prototype.search = function (vertex1, vertex2) {
  const visited = new Map();

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
    adjacentVertices.forEach((edge) => {
      const adjacentVertex = edge.getDest();
      if (!visited.get(adjacentVertex)) {
        // If adjacent vertex is not yet visited, push to queue
        queue.enqueue(adjacentVertex);
      }
    });
  }
  return false;
}

Graph.prototype.dfs = function (startingVertex) {
  const visited = new Map();

  const dfsHelper = (graph, startingVertex, visited) => {
    // Marked starting vertex as visited
    visited.set(startingVertex, true);
    graph.visit(startingVertex);

    const edges = graph.getAdjacencyVertices(startingVertex);
    let edge = edges.shift();

    while(edge) {
      // Recursively perform dfs on the adjacent vertices
      const vertex = edge.getDest();
      if (!visited.get(vertex)) {
        dfsHelper(graph, vertex, visited);
      }
      edge = edges.shift();
    }
  };

  // Visited.keys -> returns iterable object
  for (const key of visited.keys()) {
    // Mark all vertices as not visited
    visited.set(key, false);
  }

  dfsHelper(this, startingVertex, visited);
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
    adjacentVertices.forEach((edge) => {
      const adjacentVertex = edge.getDest();
      if (!visited.get(adjacentVertex)) {
        // If adjacent vertex is not yet visited, push to queue
        queue.enqueue(adjacentVertex);
      }
    });
  }
}

// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
Graph.prototype.dijkstra = function (vertexA, vertexB) {
  const dv = new Map();
  const pv = new Map();
  const visited = new Map();
  const pq = new PriorityQueue();

  for (const key of this.adjacencyList.keys()) {
    visited.set(key, false);
    dv.set(key, Infinity);
    pv.set(key, null);
    pq.insertWithPriority(dv.get(key), key);
  }

  visited.set(vertexA, true);
  dv.set(vertexA, 0);

  while(!pq.isEmpty()) {
    const comparable = pq.peekMin();
    const vertex = comparable.getValue();
    pq.removeMin();

    if (!visited.get(vertex)) {
      visited.set(vertex, true);
    }

    const adjacentVertices = this.getAdjacencyVertices(vertex);
    adjacentVertices.forEach((edge) => {
      const source = edge.getSource();
      const dest = edge.getDest();
      const distance = edge.getDistance();

      let alt = dv.get(source) === Infinity ? 0 : dv.get(source);
      let alt2 = dv.get(dest);

      alt += distance;

      if (alt < alt2) {
        dv.set(dest, alt);
        pv.set(dest, source);

        /**
         * We need to keep track of the index of each pq element
         * so that we can update the priority
         */
        const introspect = new Map();
        for (let idx = 0; idx < pq.queue.length; idx += 1) {
          const key = pq.queue[idx].getValue();
          const idxValue = idx;
          introspect.set(key, idxValue);
        }
        pq.decreasePriority(introspect.get(dest), alt);
      }
    });
  }

  const paths = [];
  let prev = pv.get(vertexB);

  paths.unshift(vertexB.getValue());
  while (prev) {
    paths.unshift(prev.getValue());
    prev = pv.get(prev);
  }

  return {
    paths,
    cost: dv.get(vertexB)
  }
};

module.exports = Graph;
