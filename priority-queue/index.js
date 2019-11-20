const Comparable = require('./comparable');

function PriorityQueue() {
  this.queue = [];
}

PriorityQueue.prototype.clear = function () {
  this.queue = [];
}

PriorityQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
}

PriorityQueue.prototype.getParentsIndex = function (idx) {
  return Math.floor((idx - 1) / 2);
}

PriorityQueue.prototype.insertWithPriority = function (priority, value) {
  const comparable = new Comparable(priority, value);
  this.queue.push(comparable);

  if (this.queue.length > 1) {
    let currentIdx = this.queue.length - 1;
    let parentIdx = this.getParentsIndex(currentIdx);

    while(this.queue[parentIdx]) {
      if ((this.queue[parentIdx]).getPriority() > (this.queue[currentIdx]).getPriority()) {
        const temp = this.queue[currentIdx];
        this.queue[currentIdx] = this.queue[parentIdx];
        this.queue[parentIdx] = temp;
      }
      currentIdx = parentIdx;
      parentIdx = this.getParentsIndex(currentIdx);
    }
  }
}

PriorityQueue.prototype.decreasePriority = function (currentIdx, priority) {
  const comparable = this.queue[currentIdx];
  comparable.setPriority(priority);

  let parentIdx = this.getParentsIndex(currentIdx);

  while(this.queue[parentIdx]) {
    if ((this.queue[parentIdx]).getPriority() > (this.queue[currentIdx]).getPriority()) {
      const temp = this.queue[currentIdx];
      this.queue[currentIdx] = this.queue[parentIdx];
      this.queue[parentIdx] = temp;
    }
    currentIdx = parentIdx;
    parentIdx = this.getParentsIndex(currentIdx);
  }
}

PriorityQueue.prototype.peekMin = function () {
  return this.queue[0];
}

PriorityQueue.prototype.removeMin = function () {
  const helper = (queue, idx) => {
    let currentIdx = idx;
    let leftIdx = 2 * currentIdx + 1;
    let rightIdx = 2 * currentIdx + 2;

    if (queue[leftIdx] && queue[rightIdx]) {
      const leftChildPriority = (queue[leftIdx]).getPriority();
      const rightChildPriority = (queue[rightIdx]).getPriority();

      if (leftChildPriority > rightChildPriority) {
        queue[currentIdx] = queue[rightIdx];
        helper(queue, rightIdx);
      } else {
        queue[currentIdx] = queue[leftIdx];
        helper(queue, leftIdx);
      }
    } else if (!queue[leftIdx] && !queue[rightIdx]) {
      queue.splice(currentIdx, 1);
    } else if (!queue[rightIdx]) {
      queue[currentIdx] = queue[leftIdx];
      helper(queue, leftIdx);
    } else {
      queue[currentIdx] = queue[rightIdx];
      helper(queue, rightIdx);
    }
  }

  helper(this.queue, 0);
}

module.exports = PriorityQueue;
