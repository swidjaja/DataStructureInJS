function Edge(source, dest, distance = null) {
  this.source = source;
  this.dest = dest;
  this.distance = distance;
}

Edge.prototype.getSource = function () {
   return this.source;
};

Edge.prototype.getDest = function () {
  return this.dest;
};

Edge.prototype.getDistance = function () {
  return this.distance;
};

module.exports = Edge;
