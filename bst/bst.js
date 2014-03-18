// Generic node
var Node = Class.extend({

	init: function(options) {
		this.left = (options.left) ? options.left : null;
		this.data = options.data;
		this.right = (options.right) ? options.right : null;
	},
	
	setData: function(data) {
		this.data = data;
	},
	
	setLeft: function(node) {
		this.left = node;
	},
	
	setRight: function(node) {
		this.right = node;
	},
	
	compareTo: function(that) {}
});

// Integer node
var IntNode = Node.extend({

	init: function(data) {
		this._super({left: null, data: data, right: null});
	},

	compareTo: function(that) {
		return this.data - that.data;
	}
});

// Binary Search Tree
var BST = Class.extend({

	init: function(options) {
		this.root = null;
	},
	
	// Recurse left, data, recurse right
	inorderTraverse: function() {
		return this._inorderTraverse(this.root, []);
	},
	
	_inorderTraverse: function(node, storage) {
		if (node) {
			this._inorderTraverse(node.left, storage);
			storage.push(node.data);
			this._inorderTraverse(node.right, storage);
		}
		return storage;
	},
	
	// data, Recurse left, Recurse right
	preorderTraverse: function() {
		return this._preorderTraverse(this.root, []);
	},
	
	_preorderTraverse: function(node, storage) {
		if (node) {
			storage.push(node.data);
			this._preorderTraverse(node.left, storage);
			this._preorderTraverse(node.right, storage);
		}
		return storage;
	},
	
	// Recurse left, Recurse right, data
	postorderTraverse: function() {
		return this._postorderTraverse(this.root, []);
	},
	
	_postorderTraverse: function(node, storage) {
		if (node) {
			this._postorderTraverse(node.left, storage);
			this._postorderTraverse(node.right, storage);
			storage.push(node.data);
		}
		return storage;
	},
	
	findMax: function() {
		var tRoot = this.root, parent = null;
		while (tRoot !== null) {
			parent = tRoot;
			tRoot = tRoot.right;
		}
		return parent;
	},
	
	findMin: function() {
		var tRoot = this.root, parent = null;
		while (tRoot !== null) {
			parent = tRoot;
			tRoot = tRoot.left;
		}
		return parent;
	},
	
	insert: function(newNode) {
		var tRoot, parent;
		if (this.root === null) {
			this.root = newNode;
		} else {
			tRoot = this.root;
			setRight = true;
			
			while (tRoot !== null) {
				parent = tRoot;
				if (tRoot.compareTo(newNode) < 0) {
					tRoot = tRoot.right;
					setRight = true;
				} else {
					tRoot = tRoot.left;
					setRight = false;
				}
			}
			if (setRight) {
				parent.setRight(newNode);
			} else {
				parent.setLeft(newNode);
			}
		}
	},
	
	clear: function() {
		this.root = null;
	},
	
	// Traverse at each depth
	breathFirstTraverse: function() {
		return this._breathFirstTraverse(this.root, [], 0);
	},
	
	_breathFirstTraverse: function(node, storage, depth) {
		if (node) {
			if (!storage[depth]) {
				storage[depth] = [];
			}
			storage[depth].push(node.data);
			this._breathFirstTraverse(node.left, storage, depth + 1);
			this._breathFirstTraverse(node.right, storage, depth + 1);
		}
		return storage;
	}
});