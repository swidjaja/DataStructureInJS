function Stack() {
	this.data = [];
}

Stack.prototype = {

	push: function(o) {
		this.data.push(o);
	},
	
	pop: function() {
		return this.data.pop();
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
	
	top: function() {
		return this.data.length ? this.data[this.data.length - 1] : null;
	}
};