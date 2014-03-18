function Queue() {
	this.data = [];
}

Queue.prototype = {

	enqueue: function(o) {
		this.data.push(o);
	},
	
	dequeue: function() {
		return this.data.shift();
	},
	
	size: function() {
		return this.data.length;
	},
	
	isEmpty: function() {
		return !this.data.length;
	},
	
	emptify: function() {
		this.data.length = 0;
	},
	
	front: function() {
		return this.data.length ? this.data[0] : null;
	}
};