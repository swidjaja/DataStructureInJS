function Comparable(priority, value) {
  this.priority = priority;
  this.value = value;
}

Comparable.prototype.getPriority = function () { return this.priority };
Comparable.prototype.setPriority = function (priority) {
  this.priority = priority;
}
Comparable.prototype.getValue = function () { return this.value };

module.exports = Comparable;
