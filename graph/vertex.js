function Vertex(value) {
  this.value = value;
}

Vertex.prototype.getValue = function () {
  return this.value;
}

module.exports = Vertex;
