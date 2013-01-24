function Stack()
{
	this.data = [];
}

Stack.prototype =
{
	push: function(o)
	{
		this.data.push(o);
	},
	
	pop: function()
	{
		var temp;
		if (this.isEmpty())
		{
			throw {
				name: 'stackIsEmpty',
				message: 'Cannot do pop() on empty stack'
			}
		}
		temp = this.data[this.data.length - 1];
		this.data.length = this.data.length - 1;
		return temp;
	},
	
	size: function()
	{
		return this.data.length;
	},
	
	isEmpty: function()
	{
		return this.data.length === 0;
	},
	
	empitfy: function()
	{
		this.data.length = 0;
	},
	
	top: function()
	{
		if (this.isEmpty())
		{
			throw {
				name: 'stackIsEmpty',
				message: 'Cannot do top() on empty stack'
			}
		}
		return this.data[this.data.length - 1];
	}
};