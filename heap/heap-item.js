function HeapItem(key, value) {
  this.key = key;
  this.value = value;
}

HeapItem.prototype.getKey = function () { return this.key };
HeapItem.prototype.setKey = function (key) {
  this.key = key;
}
HeapItem.prototype.getValue = function () { return this.value };

module.exports = HeapItem;
