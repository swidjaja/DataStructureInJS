function MaxHeap() {
  this.heap = [];
}

MaxHeap.prototype.clear = function () {
  this.heap = [];
}

MaxHeap.prototype.getParentsIndex = function (idx) {
  return Math.floor((idx - 1) / 2);
}

// Worst case running time is O(log n) since we 
// will need to traverse either left or right side to 
// ensure the heap property remains correct
MaxHeap.prototype.insert = function (value) {
  this.heap.push(value);

  if (this.heap.length > 1) {
    let currentIdx = this.heap.length - 1;
    let parentIdx = this.getParentsIndex(currentIdx);

    while(true) {
      if (!this.heap[parentIdx]) break;
      if (this.heap[parentIdx] < this.heap[currentIdx]) {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[parentIdx];
        this.heap[parentIdx] = temp;
      }
      currentIdx = parentIdx;
      parentIdx = this.getParentsIndex(currentIdx);
    }
  }
}

MaxHeap.prototype.peekMax = function () {
  return this.heap[0];
}

// Worst case running time is O(log n) since we 
// will need to traverse either left or right side to 
// update the root element
MaxHeap.prototype.removeMax = function () {
  const helper = (heap, idx) => {
    let currentIdx = idx;
    let leftIdx = 2 * currentIdx + 1;
    let rightIdx = 2 * currentIdx + 2;

    if (!heap[leftIdx] && !heap[rightIdx]) {
      heap.splice(currentIdx, 1)
    } else {
      if (!heap[rightIdx] || heap[leftIdx] > heap[rightIdx]) {
        heap[currentIdx] = heap[leftIdx];
        helper(heap, leftIdx);
      } else {
        heap[currentIdx] = heap[rightIdx];
        helper(heap, rightIdx);
      }
    }
  }

  helper(this.heap, 0);
}

module.exports = MaxHeap;
