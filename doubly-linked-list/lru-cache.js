const {
  Dll,
  DllNode
} = require('./doubly-linked-list');

function LRUCache(capacity) {
  this.capacity = capacity;
  this.maps = {};
  this.cache = new Dll();
}

LRUCache.prototype.put = function (key, data) {
  if (this.maps[key]) {
    this.cache.deleteNode(this.maps[key]);
    delete this.maps[key];
  }
  const node = new DllNode(key, data, null, null);
  if (Object.keys(this.maps).length < this.capacity) {
    this.maps[key] = node;
    this.cache.insertNode(node);
  } else {
    const deletedNode = this.cache.deleteHeadNode();
    delete this.maps[deletedNode.key];
    this.maps[key] = node;
    this.cache.insertNode(node);
  }
};

LRUCache.prototype.get = function (key) {
  const node = this.maps[key];
  if (!node) return null;
  const data = node.val;
  this.cache.deleteNode(node);
  return this.cache.insertNode(new DllNode(key, data, null, null));
};

module.exports = LRUCache;
