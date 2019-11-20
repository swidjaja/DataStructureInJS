const PriorityQueue = require('./index');

const pq = new PriorityQueue();

for (let idx = 9; idx >= 0; idx -= 1) {
  pq.insertWithPriority(idx, idx);
}

// console.log(pq);

pq.removeMin();

console.log(pq);