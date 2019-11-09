const LinkedList = require('./linked-list-w-tail-pointer');

function HashTable(size) {
  this.size = size;
  this.buckets = [];
}

HashTable.prototype.add = function (key, value) {
  const location = this.hash(key);

  if (!this.buckets[location]) {
    this.buckets[location] = new LinkedList();
  }
  this.buckets[location].insert([key, value]);

  return location;
}

HashTable.prototype.hash = function (value) {
  let result = 0;
  for (let idx = 0; idx < value.length; idx += 1) {
    result += value.charCodeAt(idx);
  }

  return result % this.size;
}

HashTable.prototype.get = function (key) {
  const location = this.hash(key);
  const bucket = this.buckets[location];
  const hashItem = bucket.find(value);
  
  return hashItem.value;
};

module.exports = HashTable;
