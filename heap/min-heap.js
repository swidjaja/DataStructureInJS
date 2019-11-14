function MinHeap() {
  this.heap = [];
}

MinHeap.prototype.clear = function () {
  this.heap = [];
}

MinHeap.prototype.getParentsIndex = function (idx) {
  return Math.floor((idx - 1) / 2);
}

MinHeap.prototype.insert = function (value) {
  this.heap.push(value);

  if (this.heap.length > 1) {
    let currentIdx = this.heap.length - 1;
    let parentIdx = this.getParentsIndex(currentIdx);

    while(true) {
      if (!this.heap[parentIdx]) break;
      if (this.heap[parentIdx] > this.heap[currentIdx]) {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[parentIdx];
        this.heap[parentIdx] = temp;
      }
      currentIdx = parentIdx;
      parentIdx = this.getParentsIndex(currentIdx);
    }
  }
}

MinHeap.prototype.peekMin = function () {
  return this.heap[0];
}

MinHeap.prototype.removeMin = function () {
  const helper = (heap, idx) => {
    let currentIdx = idx;
    let leftIdx = 2 * currentIdx + 1;
    let rightIdx = 2 * currentIdx + 2;

    if (!heap[leftIdx] && !heap[rightIdx]) {
      heap.splice(currentIdx, 1);
    } else {
      if (heap[leftIdx] > heap[rightIdx]) {
        heap[currentIdx] = heap[rightIdx];
        helper(heap, rightIdx);
      } else {
        heap[currentIdx] = heap[leftIdx];
        helper(heap, leftIdx);
      }
    }
  }

  helper(this.heap, 0);
}

module.exports = MinHeap;
