function linkedList()
{
	this.header = { data: null, next: null };
	this.size = 0;
}

linkedList.prototype = 
{
	isEmpty: function()
	{
		return this.size === 0;
	},
	
	empitfy: function()
	{
		this.header.next = null;
		this.size = 0;
	},
	
	addFirst: function(o)
	{
		var position = this.header,
			currFirst = position.next;
		position.next = { data: o, next: currFirst };
		this.size++;
	},
	
	addLast: function(o)
	{
		var position = this.header;
		while (position.next !== null)
		{
			position = position.next;
		}
		position.next = { data: o, next: null };
		this.size++;
	},
	
	removeFirst: function()
	{
		if (this.isEmpty())
		{
			throw {
				name: 'LinkedListIsEmpty',
				message: 'Cannot remove from empty linked list'
			}
		}
		var position = this.header;
		position.next = position.next.next;
		this.size--;
	},
	
	removeLast: function()
	{
		if (this.isEmpty())
		{
			throw {
				name: 'LinkedListIsEmpty',
				message: 'Cannot remove from empty linked list'
			}
		}
		var position = this.header;
		while (position.next.next !== null)
		{
			position = position.next;
		}
		position.next = null;
		this.size--;
	},
	
	toArray: function()
	{
		var out = [];
		var position = this.header.next;
		while (position !== null)
		{
			out.push(position.data);
			position = position.next;
		}
		return out;
	}
}