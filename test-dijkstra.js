const Graph = require('./graph');
const Vertex = require('./lib/vertex');

const v1 = new Vertex('v1');
const v2 = new Vertex('v2');
const v3 = new Vertex('v3');
const v4 = new Vertex('v4');
const v5 = new Vertex('v5');
const v6 = new Vertex('v6');
const v7 = new Vertex('v7');

const graph = new Graph();
graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);
graph.addVertex(v6);
graph.addVertex(v7);
graph.addEdge(v1, v2, 2);
graph.addEdge(v1, v4, 1);
graph.addEdge(v2, v4, 3);
graph.addEdge(v2, v5, 10);
graph.addEdge(v3, v1, 4);
graph.addEdge(v3, v6, 5);
graph.addEdge(v4, v5, 2);
graph.addEdge(v4, v3, 2);
graph.addEdge(v4, v6, 8);
graph.addEdge(v4, v7, 4);
graph.addEdge(v5, v7, 6);
graph.addEdge(v5, v7, 6);
graph.addEdge(v7, v6, 1);

const { paths, cost } =  graph.dijkstra(v1, v6);
console.log('PATHS : ', paths.join(' -> '));
console.log('COST = ', cost);
