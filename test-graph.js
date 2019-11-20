const Graph = require('./graph');
const Vertex = require('./lib/vertex');

const elema = new Vertex('a');
const elemb = new Vertex('b');
const elemc = new Vertex('c');
const elemd = new Vertex('d');
const eleme = new Vertex('e');
const elemf = new Vertex('f');

const callback = (vertex) => {
  console.log(`Vertex ${vertex.getValue()} has been visited!`);
};

const graph = new Graph(callback);
graph.addVertex(elema);
graph.addVertex(elemb);
graph.addVertex(elemc);
graph.addVertex(elemd);
graph.addVertex(eleme);
graph.addVertex(elemf);

graph.addEdge(elema, elemc);
graph.addEdge(elema, elemb);
graph.addEdge(elema, elemf);
graph.addEdge(elemb, elemc);
graph.addEdge(elemc, elemd);
graph.addEdge(elemc, eleme);
graph.addEdge(elemd, elemf);
graph.addEdge(elemd, eleme);

console.log("Breadth First Search");
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

console.log("Depth First Search");
graph.dfs(elema);
