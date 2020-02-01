function DllNode(key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
}

DllNode.prototype.getData = function () {
  return this.val;
};

/**
 * Double linked list with tail
 * Insertion (front/end): O(1)
 * Delete (front/end): O(1)
 * Random access: O(1)
 * Space: O(n) for the hashmap to store references to the nodes
 */
function Dll() {
  this.head = null;
  this.tail = null;
}

Dll.prototype.insertNode = function (node) {
  if (this.head === null) {
    this.head = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
  }
  this.tail = node;

  return node;
};

Dll.prototype.deleteHeadNode = function() {
  return this.deleteNode(this.head);
};

Dll.prototype.deleteTailNode = function() {
  return this.deleteNode(this.tail);
}

Dll.prototype.deleteNode = function (node) {
  const next = node.next;
  const prev = node.prev;

  // One-only node
  if (node === this.head && node === this.tail) {
    this.head = null;
    this.tail = null;
  // Deletion of head node - need to update head pointer
  } else if (node === this.head) {
    this.head = next;
    next.prev = prev;
  // Deletion of tail node - need to update tail pointer
  } else if (node === this.tail) {
    this.tail = prev;
    prev.next = next;
  } else {
    prev.next = next;
    next.prev = prev;
  }

  return node;
};

module.exports = {
  DllNode,
  Dll
};