const BinaryNode = require('./binary-node');

function BST() {
  this.root = null;
}

BST.prototype.insert = function (elem) {
  const node = new BinaryNode(elem, null, null);

  if (this.root === null) {
    this.root = node;
  } else {
    let current = this.root;

    while (true) {
      if (current.getValue() > elem) {
        const left = current.getLeft();
        if (!left) {
          current.setLeft(node);
          break;
        } else {
          current = left;
        }
      } else {
        const right = current.getRight();
        if (!right) {
          current.setRight(node);
          break;
        } else {
          current = right;
        }
      }
    }
  }
};

// For unbalanced BST, worst case runtime will be O(n) when items are sorted in descending order
BST.prototype.findMin = function (subTree) {
  let current = subTree || this.root;
  let minNode;

  while (current) {
    minNode = current;
    current = current.getLeft();
  }

  return minNode;
};

// For unbalanced BST, worst case runtime will be O(n) when items are sorted in ascending order
BST.prototype.findMax = function (subTree) {
  let current = subTree || this.root;
  let maxNode;

  while (current) {
    maxNode = current.getValue();
    current = current.getRight();
  }

  return maxNode;
};

BST.prototype.find = function (elem) {
  let current = this.root;
  let foundElem = null;

  while (true) {
    if (!current) break;
    else if (current.getValue() === elem) {
      foundElem = current;
      break;
    } else if (current.getValue() > elem) {
      current = current.getLeft();
    } else {
      current = current.getRight();
    }
  }

  return foundElem;
}

BST.prototype.remove = function (elem) {
  const removeHelper = (tree, elem, node) => {
    if (!node) return node;
    if (node.getValue() > elem) {
      node.setLeft(removeHelper(tree, elem, node.getLeft()));
    } else if (node.getValue() < elem) {
      node.setRight(removeHelper(tree, elem, node.getRight()));
    } else if (node.getLeft() && node.getRight()) {
      const minNode = tree.findMin(node.getRight());
      const minNodeValue = minNode.getValue();
      node.setValue(minNodeValue);
      node.setRight(removeHelper(tree, minNodeValue, node.getRight()));
    } else {
      node = node.getLeft() || node.getRight();
    }
    return node;
  }

  removeHelper(this, elem, this.root);
}

module.exports = BST;
