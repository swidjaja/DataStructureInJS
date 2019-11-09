function Link(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

// Worst case O(n) if it is not first insertion
LinkedList.prototype.insert = function(link) {
  if (!this.head) {
    this.head = link;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = link;
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
      return removed;
    } else {
      current = current.next;
    }
  }

  return removed;
}

LinkedList.prototype.traverse = function () {
  let current = this.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

module.exports = LinkedList;
