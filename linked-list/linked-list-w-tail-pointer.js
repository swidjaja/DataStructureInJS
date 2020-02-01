function Link(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.insert = function(value) {
  const link = new Link(value);
  // Using tail pointer allows for O(1) insertion
  if (!this.head) {
    this.head = link;
    this.tail = this.head;
  } else {
    this.tail.next = link;
    this.tail = this.tail.next;
  }
}

LinkedList.prototype.remove = function(value) {
  let removed = null;
  let current = this.head;
  if (!current) return null;

  // Removal of head
  if (current.value === value) {
    this.head = current.next;
    return current;
  }

  while (current.next !== null) {
    if (current.next.value === value) {
      removed = current.next;
      current.next = current.next.next;
      // Update tail pointer to point to previous link
      this.tail = current;
    } else {
      current = current.next;
    }
  }

  return removed;
}

LinkedList.prototype.clear = function () {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.traverse = function () {
  let current = this.head;
  const traversed = [];
  while (current !== null) {
    traversed.push(current.value);
    current = current.next;
  }
  console.log(traversed.join(' '));
}

LinkedList.prototype.find = function (value) {
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      return current;
    } 
    current = current.next;
  }

  return null;
}

module.exports = LinkedList;
