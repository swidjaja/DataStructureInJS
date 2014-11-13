define(function(require) {

    'use strict';
    
    var items = [];

    function Stack() {}

    Stack.prototype.size = function() {
        return items.length;
    };

    Stack.prototype.push = function(item) {
        items.push(item);
        return this;
    };

    Stack.prototype.pop = function() {
        if (!this.size()) {
            throw new Error('Stack is Empty!');
        }
        return items.pop();
    };

    Stack.prototype.peek = function() {
        if (!this.size()) {
            throw new Error('Stack is Empty!');
        }
        return items[0];
    };

    Stack.prototype.emptify = function() {
        items = [];
        return this;
    };

    Stack.prototype.isEmpty = function() {
        return items.length === 0;
    };

    Stack.prototype.toString = function() {
        return items.join(' ');
    };

    return Stack;
});