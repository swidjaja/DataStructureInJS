function BinaryNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

BinaryNode.prototype.getValue = function () {
  return this.value;
};

BinaryNode.prototype.getLeft = function () {
  return this.left;
};

BinaryNode.prototype.getRight = function () {
  return this.right;
};

BinaryNode.prototype.setValue = function (value) {
  this.value = value;
};

BinaryNode.prototype.setLeft = function (left) {
  this.left = left;
};

BinaryNode.prototype.setRight = function (right) {
  this.right = right;
};

module.exports = BinaryNode;
