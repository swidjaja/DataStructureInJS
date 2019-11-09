const Graph = require('./graph-no-weight');
const Vertex = require('./lib/vertex');

const elema = new Vertex('a');
const elemb = new Vertex('b');
const elemc = new Vertex('c');
const elemd = new Vertex('d');

const callback = (vertex) => {
  console.log(`Vertex ${vertex.getValue()} has been visited!`);
};
const graph = new Graph(false, callback);
graph.addVertex(elema);
graph.addVertex(elemb);
graph.addVertex(elemc);
graph.addVertex(elemd);
graph.addEdge(elema, elemb);
graph.addEdge(elema, elemd);
graph.addEdge(elemb, elemc);
graph.addEdge(elemc, elemd);

graph.bfs(elema);

let hasPath = graph.search(elemd, elema);
console.log(`path from vertex ${elemd.getValue()} to vertex ${elema.getValue()}: ${hasPath}`);

hasPath = graph.search(elema, elema);
console.log(`path from vertex ${elema.getValue()} to vertex ${elema.getValue()}: ${hasPath}`);

hasPath = graph.search(elema, elemd);
console.log(`path from vertex ${elema.getValue()} to vertex ${elemd.getValue()}: ${hasPath}`);

hasPath = graph.search(elema, elemb);
console.log(`path from vertex ${elema.getValue()} to vertex ${elemb.getValue()}: ${hasPath}`);

hasPath = graph.search(elemb, elemc);
console.log(`path from vertex ${elemb.getValue()} to vertex ${elemc.getValue()}: ${hasPath}`);
