function Queue() {
  this.entries = [];
}

Queue.prototype.enqueue = function (value) {
  this.entries.push(value);
};

Queue.prototype.dequeue = function () {
  return this.entries.shift();
};

Queue.prototype.isEmpty = function () {
  return this.entries.length === 0;
};

Queue.prototype.size = function () {
  return this.entries.length;
};

module.exports = Queue;
