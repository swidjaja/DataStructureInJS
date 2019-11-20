const MinHeap = require('./min-heap');

const minHeap = new MinHeap();

for (let idx = 0; idx < 10; idx += 1) {
  minHeap.insert(idx);
}