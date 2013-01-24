function Queue()
{
	this.data = [];
}

Queue.prototype =
{
	enqueue: function(o)
	{
		this.data.push(o);
	},
	
	dequeue: function()
	{
		var temp;
		if (this.isEmpty())
		{
			throw {
				name: 'QueueIsEmpty',
				message: 'Cannot dequeue empty queue'
			}
		}
		return this.data.shift();
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
	
	front: function()
	{
		if (this.isEmpty())
		{
			throw {
				name: 'stackIsEmpty',
				message: 'Cannot do front() on empty queue'
			}
		}
		return this.data[0];
	}
};