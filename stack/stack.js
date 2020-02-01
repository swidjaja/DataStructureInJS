function Stack() {
  this.entries = [];
}

Stack.prototype.push = function (value) {
  this.entries.push(value);
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Pop performed on empty stack');
  }
  return this.entries.pop();
};

Stack.prototype.peek = function () {
  return this.entries[this.entries.length - 1];
}

Stack.prototype.isEmpty = function () {
  return this.entries.length === 0;
};

Stack.prototype.size = function () {
  return this.entries.length;
};

module.exports = Stack;
